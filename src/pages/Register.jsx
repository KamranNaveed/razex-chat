import '../style.scss'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage} from '../firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc , setDoc} from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef)
          .then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              })
              //Create user on firestore database
              await setDoc(doc(db,"users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              })

              await setDoc(doc(db, "userChats", res.user.uid), {})
              setLoading(false)

              navigate('/')
              

            } catch (error) {
              console.log(error)
            }
          });
      })
    } catch (err) {
      setError(error)
    }
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Razex Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Display Name'/>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Your Password'/>
            <input style={{display: 'none'}} type="file" id='file'/>
            <label htmlFor="file">
              <img src={Add} alt="Avatar" />
              <span>Add an Avatar</span>
            </label>
            <button type='submit'>Sign Up</button>
            {error && <span>Something went wrong</span>}
            {loading && <span style={{textAlign: "center"}}>Creating account...</span>}
        </form>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
      </div>
    </div>
  )
}

export default Register
