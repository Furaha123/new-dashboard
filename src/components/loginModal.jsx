import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/sign.scss";
import axios from "axios";
import Notiflix from "notiflix";

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleLogin = async () => {
    try {
      //check empty fields
      if (!formData.email || !formData.password) {
        setFormErrors({
          email: formData.email ? "" : "Email is required",
          password: formData.password ? "" : "Password is required",
        });
        Notiflix.Notify.failure("Please fill in all required fields.");

        return;
      }

      const response = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/user/login",
        formData
      );

      const { message, access_token, USER } = response.data;

      // Create an object to store the response data
      const responseData = {
        message,
        access_token,
        USER,
      };

      // Convert the object to a JSON string and store it in local storage
      localStorage.setItem("IsLoggedIn", JSON.stringify(responseData));

      onClose();

      const { role, isVerified } = USER;

      switch (role) {
        case "organization":
          navigate("/");
          break;
        case "individual":
          navigate("/client");
          break;
        case "lawyer":
          if (!isVerified) {
            navigate("/");
          }
          navigate("/lawyer");
          break;
        case "admin":
          navigate("/dashboard");
          break;
        default:
          navigate("/");
          break;
      }

      window.location.reload();
    } catch (error) {
      // console.error("Login Error:", error.message);
      Notiflix.Notify.failure("Invalid Login Creditentials");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Login To Your Account</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <button type="button" onClick={onClose}>
              close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
