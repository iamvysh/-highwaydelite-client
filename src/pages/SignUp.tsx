import React, { useState } from "react";
import "../styles/signup.css";
import Image from "../assets/signUp.png";
import eyesOpen from "../assets/browse-svgrepo-com.svg";
import eyesClosed from "../assets/eye-close-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState<Boolean>(false);
  const [Retypepassword, setRetypepassword] = useState<Boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRetypepassword = () => {
    setRetypepassword(!Retypepassword);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form data
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const password = formData.get("password");
    const retypePassword = formData.get("retypePassword");
    const contactMode: string = "email";
    const email = formData.get("email");
    console.log(firstName, email);

    // Perform form validation
    const errors = [];
    if (!firstName) {
      errors.push("First Name is required");
    }
    if (!lastName) {
      errors.push("Last Name is required");
    }
    if (!password) {
      errors.push("Password is required");
    }
    if (!retypePassword) {
      errors.push("Retype Password is required");
    } else if (password !== retypePassword) {
      errors.push("Passwords do not match");
    }
    if (!email) {
      errors.push("Email is required");
    }

    if (errors.length > 0) {
      // If there are errors, display them using Toastify
      errors.forEach((error: any) => {
        toast.error(error);
      });
      return;
    }

    // Send form data to the backend server using Axios
    try {
      const response = await axios.post(
        "https://highwaydelite-server.onrender.com/api/register",
        {
          firstName,
          lastName,
          password,
          contactMode,
          email,
        }
      );

      console.log(response, "response");

      if (response && response.status === 201) {
        // If the registration is successful, display success toast and redirect  to otp verification page
        toast.success(response.data.message);
        await localStorage.setItem("userEmail", response.data.data);
        navigate("/verify"); //  navigation
      } else {
        // Handle errors if registration fails
        toast.error("Registration failed");
      }
    } catch (error: any) {
      // Handle errors if request fails
      toast.error("Error occurred");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
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
                // target="_blank"
                onClick={() => navigate("/signin")}
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  id=""
                  placeholder="Last Name"
                  required
                />

                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id=""
                    placeholder="Set Password"
                    required
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
                    name="retypePassword"
                    id=""
                    placeholder="Retype password"
                    required
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
                  </select>
                </div>

                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email"
                  required
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
