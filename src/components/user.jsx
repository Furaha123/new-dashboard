import React, { useState, useEffect } from "react";
import "../style/user.scss";
import heroSlide2 from "../assets/bg-slider1-layer3.jpg";
import axios from "axios"; 
import Notiflix from "notiflix";
function User() {
  const heroBg = {
    backgroundImage: `linear-gradient(to right, rgb(206, 164, 105) -70%, rgb(0,0,0, .1) 70%, rgb(170, 126, 79) 150%), url(${heroSlide2})`,
    height: "30vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    uploads: [{ docName: "", uploadField: "" }],
  });
 useEffect(() => {
   const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
   if (user && user.USER) {
     setFormData({
       fullName: user.USER.name || "",
       email: user.USER.email || "",
       phone: user.USER.phone || "",
       currentPassword: "",
       newPassword: "",
     });
   }
 }, []);
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    
    try {
      let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));
      await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/user/changePassword",
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json", // Use 'application/json' for JSON data
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/user/verifyProfile",
        {
          fullName: formData.fullName,
          phone: formData.phone,
        },
        {
          headers: {
            "Content-Type": "application/json", // Use 'application/json' for JSON data
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
     
      console.log("User edited successfull");
      setIsEditing(false);
      Notiflix.Notify.success("Profile Updated Successfully");
    } catch (error) {
      console.error("requests failed", error);
            Notiflix.Notify.failure("Failed to Update Profile");

    }
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));

  return (
    <>
      <main className="user">
        <div className="hero" style={heroBg}>
          <div className="container">
            <div className="content">
              <h1>
                Hello{" "}
                <span>
                  {user && user.USER && user.USER.name
                    ? user.USER.name
                    : "Client"}
                </span>
                , Edit your profile here
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="profile">
            <div className="row">
              <div className="col-4">
                <div className="img">
                  <img src={heroSlide2} alt="profile pic" />
                </div>
              </div>
              <div className="user-detail ">
                <h2>
                  {user && user.USER && user.USER.name
                    ? user.USER.name
                    : "Client"}
                </h2>
                <p>
                  <span>email: </span>
                  {user && user.USER && user.USER.email
                    ? user.USER.email
                    : "Cliennt"}
                </p>
                <p>
                  <span>role: </span>
                  {user && user.USER && user.USER.role
                    ? user.USER.role
                    : "Cliennt"}
                </p>
              </div>
            </div>
            {isEditing ? (
              <div
                className="modal-overlay"
                onClick={() => setIsEditing(false)}
              >
                <form className="update-form">
                  <h2>Update Your Profile</h2>
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    onClick={stopPropagation}
                  />

                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    onClick={stopPropagation}
                  />
                  <label htmlFor="currentPassword">currentPassword:</label>
                  <input
                    type="currentPassword"
                    id="currentPassword"
                    value={formData.currentPassword}
                    onChange={(e) =>
                      handleInputChange("currentPassword", e.target.value)
                    }
                    onClick={stopPropagation}
                  />
                  <label htmlFor="newPassword">newPassword:</label>
                  <input
                    type="newPassword"
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={(e) =>
                      handleInputChange("newPassword", e.target.value)
                    }
                    onClick={stopPropagation}
                  />
                  <div className="profile-btn row">
                    <button className="btn" onClick={handleSubmit}>
                      Update
                    </button>
                    <button className="btn" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="profile-btn row">
                <button
                  className="btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  ); 
}

export default User;
