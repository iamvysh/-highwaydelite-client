import React, { useEffect, useState } from 'react'
import "../styles/signin.css"
import Image from "../assets/signIn.png"
import eyeClosed from "../assets/eye-close-svgrepo-com.svg"
import eyeOpen from "../assets/browse-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate=useNavigate()
  const [passwordVisible, setPasswordVisible] = useState<Boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleLogin =async(event:any)=>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const firstName = formData.get("email");
    const password = formData.get("password");


    // console.log(password,firstName);
    

  }



  useEffect(() => {
    const isAuth = () => {
      const token = localStorage.getItem('token')
      if (token) {
        navigate('/')
      }
      else return
    }
    isAuth()
  }, [navigate])


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
            <form action="" onSubmit={handleLogin}>


              <input type="email" name="email" id="email"  placeholder='Email' required/>
              {/* <input type="password" name="" id="" placeholder='Password' /> */}
                
              <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Set Password"
                    required
                  />
                  <img
                    src={passwordVisible ? eyeOpen : eyeClosed}
                    onClick={togglePasswordVisibility}
                    height={20}
                    width={20}
                    alt=""
                  />
                </div>
              <button className="signIn_button" >Sign In</button>
              <button className="signUp_button" onClick={()=>navigate("/signup")}>Sign Up</button>
            </form>

          </div>
        </div>

       </div>
    </div>
    
    </>
  )
}

export default SignIn