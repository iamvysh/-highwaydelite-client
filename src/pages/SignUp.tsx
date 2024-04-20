import React, { useState } from "react";
import "../styles/signup.css";
import Image from "../assets/signUp.png";
import eyesOpen from "../assets/browse-svgrepo-com.svg";
import eyesClosed from "../assets/eye-close-svgrepo-com.svg";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [Retypepassword,setRetypepassword]=useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRetypepassword=()=>{
    setRetypepassword(!Retypepassword)
  }

  return (
    <>
      <div className="signup-container">
        <div className="left-section">
          <img src={Image} alt="image" height="100%" width="100%" />
        </div>
        <div className="right-scection">
          <div className="form-wrapper">
            <div className="form-wrapper-head">
              <h1 style={{ color: "#3A244A", fontWeight: "900" }}>
                Let us know <span style={{ color: "#D72638" }}>!</span>
              </h1>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#3A244A",
                  fontWeight: "600",
                  fontSize: "1.3rem",
                }}
              >
                Sign <span style={{ color: "#D72638" }}>in</span>
              </a>
            </div>
            <div className="form-wrapper-bottom">
              <form action="">
                <input type="text" name="name" id="" placeholder="First Name" />
                <input type="text" name="name" id="" placeholder="Last Name" />

                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="name"
                    id=""
                    placeholder="Set Password"
                  />
                  <img
                    src={passwordVisible ? eyesOpen : eyesClosed}
                    onClick={togglePasswordVisibility}
                    height={20}
                    width={20}
                    alt=""
                  />
                </div>

                <div className="password-container">
                  <input
                    type={Retypepassword ? "text" : "password"}
                    name="name"
                    id=""
                    placeholder="Retype password"
                  />
                  <img
                    src={Retypepassword ? eyesOpen : eyesClosed}
                    onClick={toggleRetypepassword}
                    height={20}
                    width={20}
                    alt=""
                  />
                </div>
                <div className="contact-mode-container">
                  <select name="contactMode">
                    <option value="">Contact Mode</option>
                    <option value="">email</option>
                    <option value="">phone</option>
                  </select>
                </div>

                <input
                  type="email"
                  name="name"
                  id=""
                  placeholder="Enter Email"
                />

                <button className="signup_button">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
