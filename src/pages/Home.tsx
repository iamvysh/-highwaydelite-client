import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/signin");
  };

  useEffect(() => {
    const isAuth = () => {
      const token = localStorage.getItem("userToken");
      if (!token || undefined) {
        navigate("/signin");
      } else return;
    };
    isAuth();
  }, [navigate]);
  return (
    <>
      <div
        className="home-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      >
        <h1>Nice to Meet You Brother</h1>

        <button
          onClick={handleLogout}
          style={{
            height: "1.5rem",
            width: "5rem",
            textAlign: "center",
            color: "white",
            backgroundColor: "#3A244A",
            borderRadius: "10px",
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Home;
