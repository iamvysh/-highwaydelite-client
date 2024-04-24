import  { useEffect, useState } from "react";
import "../styles/signin.css";
import Image from "../assets/signIn.png";
import eyeClosed from "../assets/eye-close-svgrepo-com.svg";
import eyeOpen from "../assets/browse-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState<Boolean>(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to handle user login
  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");

      // Sending login credentials to the server for authentication
      const response: any = await axios.post(
        "https://highwaydelite-server.onrender.com/api/login",
        { email, password }
      );

      if (response && response.status === 200) {
        // If login is successful, display success message, save token in local storage, and navigate to home page
        toast.success("Login Successfull");
        localStorage.setItem("userToken", response.data.data);
        navigate("/");
      }
    } catch (error: any) {
      // Handling different error cases
      if (error.response.status === 401) {
        toast.warn("Invalid password");
      }
      if (error.response.status === 404) {
        toast.error("User Not Found");
      }
      if (error.response.status === 500) {
        toast.warn("Internal server error");
      }
    }
  };

  // Effect to check if user is already authenticated and redirect to home page
  useEffect(() => {
    const isAuth = () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        navigate("/");
      } else return;
    };
    isAuth();
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <div className="signin-container">
        <div className="signin-left-section">
          <img src={Image} alt="image" height="100%" width="100%" />
        </div>
        <div className="signin-right-section">
          <div className="wrapper">
            <div className="wrapper-head">
              <h1 style={{ color: "#3A244A", fontWeight: "900" }}>
                Fill what we know <span style={{ color: "#D72638" }}>!</span>
              </h1>
            </div>
            <div className="wrapper-bottom">
              <form action="" onSubmit={handleLogin}>
                {/* Input field for email */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                {/* Input field for password with toggle visibility */}
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Set Password"
                    required
                  />
                  {/* Toggle button to show/hide password */}
                  <img
                    src={passwordVisible ? eyeOpen : eyeClosed}
                    onClick={togglePasswordVisibility}
                    height={20}
                    width={20}
                    alt=""
                  />
                </div>
                {/* Button to submit login form */}
                <button className="signIn_button">Sign In</button>
                {/* Button to navigate to sign up page */}
                <button
                  className="signUp_button"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
