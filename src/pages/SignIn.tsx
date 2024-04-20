import React, { useState } from 'react'
import "../styles/signin.css"
import Image from "../assets/signIn.png"
import eyeClosed from "../assets/eye-close-svgrepo-com.svg"
import eyeOpen from "../assets/browse-svgrepo-com.svg"

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div className="signin-container">
      <div className="signin-left-section">
      <img src={Image} alt="image" height="100%" width="100%" />

      </div>
       <div className="signin-right-section">
        <div className="wrapper">
          <div className="wrapper-head">
            <h1 style={{ color: "#3A244A", fontWeight: "900" }}>Fill what we know <span style={{color:"#D72638"}}>!</span></h1>

          </div>
          <div className="wrapper-bottom">
            <form action="">


              <input type="email" name="" id=""  placeholder='Email'/>
              {/* <input type="password" name="" id="" placeholder='Password' /> */}
                
              <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="name"
                    id=""
                    placeholder="Set Password"
                  />
                  <img
                    src={passwordVisible ? eyeOpen : eyeClosed}
                    onClick={togglePasswordVisibility}
                    height={20}
                    width={20}
                    alt=""
                  />
                </div>
              <button className="signIn_button">Sign In</button>
              <button className="signUp_button">Sign Up</button>
            </form>

          </div>
        </div>

       </div>
    </div>
    
    </>
  )
}

export default SignIn