import React, { useState } from "react";
import Notiflix from "notiflix";
import "../style/sign.scss";
import axios from "axios";

const SignupModal = ({ onClose }) => {
  const userTypes = ["individual", "organization", "lawyer"];
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    nationalID: "",
    documents: "",
    photo: "",
    lawyerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "photo" || name === "documents") {
      setFormData({ ...formData, [name]: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const renderLawyerFields = () => {
    if (formData.userType === "lawyer") {
      return (
        <>
          <div className="col-23">
            <div className="form-group col-6 col-24">
              <label htmlFor="nationalID">National ID:</label>
              <input
                type="text"
                id="nationalID"
                name="nationalID"
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="documents">Documents:</label>
              <input
                type="file"
                id="documents"
                name="documents"
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="photo">Photo:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                // onChange={handleChange}
                required
              />
            </div>
            <select
              id="lawyerType"
              name="lawyerType"
              // onChange={handleChange}
              required
              className="form-controls"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="Criminal Lawyer">Criminal Lawyer</option>
              <option value="Civil Rights Lawyer">Civil Rights Lawyer</option>
              <option value="Family Lawyer">Family Lawyer</option>
              <option value="Taxation Lawyer">Taxation Lawyer</option>
            </select>
          </div>
        </>
      );
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/user/signup",
        form
      );

      Notiflix.Notify.success("Your account has been created successfully");

      onClose();
    } catch (error) {
      Notiflix.Notify.failure("Account creation failure");
      if (error.response) {
        console.error("Signup Error - Server Response:", error.response.data);
      } else if (error.request) {
        console.error("Signup Error - No Response Received:", error.request);
      } else {
        // alert("Signup Error - Request Setup: ", error.message);
        console.error("Signup Error - Request Setup: ", error.message);
      }
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Signup</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            debitis, amet aliquam iure excepturi doloremque ad est impedit
            laborum
          </p>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="userType">User Type:</label>
                <select
                  id="userType"
                  name="userType"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select User Type
                  </option>
                  {userTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {renderLawyerFields()}
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  onChange={handleChange}
                  name="phone"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="signup-btn">
              <a href="/client">
                <button type="submit" className="btn">
                  Signup
                </button>
              </a>
              <button onClick={onClose} className="button">
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
