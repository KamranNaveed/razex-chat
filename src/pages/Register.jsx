import '../style.scss'
import Add from '../img/addAvatar.png'


const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Razex Chat</span>
        <span className='title'>Register</span>
        <form action="submit">
            <input type="text" placeholder='Your Display Name'/>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Your Password'/>
            <input style={{display: 'none'}} type="file" id='file'/>
            <label htmlFor="file">
              <img src={Add} alt="Avatar" />
              <span>Add an Avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>Already have an account? Log In</p>
      </div>
    </div>
  )
}

export default Register
