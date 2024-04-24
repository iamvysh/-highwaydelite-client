import { useState } from "react";
import "../styles/otp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Otp = () => {
  const navigate = useNavigate();

  // State variables to store each digit of the OTP
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null); // Corrected typo in variable name

  // Function to handle form submission
  const handleSubmit = async (event:any) => {
    try {
      event.preventDefault();
      const otpCode = `${first}${second}${third}${fourth}`;
      const email = localStorage.getItem("userEmail");
      console.log(email);
      // Sending OTP code and email to the server for verification
      const response = await axios.post(
        "https://highwaydelite-server.onrender.com/api/verify",
        { otpCode, email }
      );

      if (response && response.status === 200) {
        // If OTP verification is successful, display success message and navigate to signin page
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/signin"); // navigation after a delay
        }, 3000)
        
        
      }
    } catch (error:any) {
      console.log(error);
      // Handling incorrect OTP error
      if (error.response.status === 403) {
        toast.warn("Incorrect OTP");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="otp-container">
        <div className="otp-wrapper">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.2rem",
              fontWeight: "normal",
              marginTop: ".5rem",
            }}
          >
            Email Verification
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#9CA3C1",
              marginTop: ".5rem",
            }}
          >
            We have sent a code to your registered email
          </p>
          <div className="input-group">
            {/* Input fields for each digit of the OTP */}
            <input
              type="text"
              name="first"
              maxLength={1}
              onChange={(e:any) => setFirst(e.target.value)}
            />
            <input
              type="text"
              name="second"
              maxLength={1}
              onChange={(e:any) => setSecond(e.target.value)}
            />
            <input
              type="text"
              name="third"
              maxLength={1}
              onChange={(e:any) => setThird(e.target.value)}
            />
            <input
              type="text"
              name="fourth"
              maxLength={1}
              onChange={(e:any) => setFourth(e.target.value)}
            />
          </div>
          {/* Button to verify the OTP */}
          <button className="verify_button" onClick={handleSubmit}>
            Verify Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;
