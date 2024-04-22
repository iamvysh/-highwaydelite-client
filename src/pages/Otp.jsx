import React, { useState } from "react";
import "../styles/otp.css";

const Otp = () => {
     const [first,setFirst]=useState(null)
     const [second,setSecond]=useState(null)
     const [third,setThird]=useState(null)
     const [fourth,setaFourth]=useState(null)


    const handleSubmit=async(event)=>{

       event.preventDefault()
        const otp=`${first}${second}${third}${fourth}`
    }

  return (
    <>
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
            Email Verifiaction
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#9CA3C1",
              marginTop: ".5rem",
            }}
          >
            We have sent a code to your  registered email 
          </p>
          <div className="input-group">
            <input type="text" name="first" id=""  maxLength={1} onChange={(e)=>setFirst(e.target.value)}/>
            <input type="text" name="second" id=""  maxLength={1} onChange={(e)=>setSecond(e.target.value)} />
            <input type="text" name="third" id=""  maxLength={1} onChange={(e)=>setThird(e.target.value)}/>
            <input type="text" name="fourth" id="" maxLength={1} onChange={(e)=>setaFourth(e.target.value)}/>
          </div>
          <button className="verify_button" onClick={handleSubmit}>Verify Account</button>
        </div>
      </div>
    </>
  );
};

export default Otp;
