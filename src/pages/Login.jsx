import '../style.scss'

import '../style.scss'


const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Razex Chat</span>
        <span className='title'>Login</span>
        <form action="submit">
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Your Password'/>
            <button>Log in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
