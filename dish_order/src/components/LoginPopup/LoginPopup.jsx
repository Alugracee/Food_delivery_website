import React, {useState} from 'react'
import "./LoginPopup.css"

const LoginPopup = ({setShowLogin}) => {
    const [ currentState, setCurrentState]  = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-title">
                <h2>{currentState}</h2>
                <img src="https://i.pinimg.com/736x/84/3e/f1/843ef16b0de46c12ddd043cdb5566fb6.jpg" onClick={()=> setShowLogin(false)} alt="" />
            </div>

            <div className="login-popup-inputs">
                {currentState=== 'Login'?<></>:<input type="text " placeholder='Your Name...' required/>}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Emter your password' required /> 
            </div>
            <button>{currentState === "Sign Up"? "Create Account": "Login"}</button>

             {/* Condition for Login in */}
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required />
                <p>By continuing, I agree with the terms of use and privacy policy</p>
           </div>

            {currentState === 'Login'
                ?<p>Please create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Sign Up</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>
            }
        </form>

        {/* Next  */}
        
    </div>
  )
}

export default LoginPopup
