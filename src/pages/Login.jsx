import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase'
import '../style.scss'

import '../style.scss'


const Login = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Razex Chat</span>
        <span className='title'>Login</span>
        <form action="submit" onSubmit={handleSubmit}>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Your Password'/>
            <button type='submit'>Log in</button>
            {error && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
