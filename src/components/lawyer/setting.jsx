// Setting.jsx
import React, { useState } from "react";
import coverImg from "./../../assets/blog8-600x398.jpg";
import profileImg from "./../../assets/testimonial3.jpg";

function Setting() {
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [otpSent, setOTPSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSendOTP = () => {
    // Implement logic to send OTP to the provided email
    // Set otpSent to true when OTP is successfully sent
    setOTPSent(true);
  };

  const handleChangePassword = () => {
    // Implement logic to change the password using the provided OTP and new password
    // Reset the form and set otpSent to false after the password is changed
    setOTPSent(false);
    setEmail("");
    setOTP("");
    setNewPassword("");
  };

  return (
    <div className="lawyer">
      <div className="setting-container">
        <div className="vrow">
          <div className="profile col-12 vrow">
            <div className="cover-img col-12">
              <img src={coverImg} alt="Cover Image" />
            </div>
            <div className="profile-img">
              <img src={profileImg} alt="Profile Picture" />
              <div className="file upload">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
            <div className="row col-12">
              <div className="user-detail col-8">
                <h4>
                  User Name <span>lawyer</span>
                </h4>
                <p className="bio">
                  User Description, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Asperiores dolorem odio nobis molestiae
                  exercitationem soluta non? Consequuntur culpa exercitationem
                  necessitatibus iste laudantium officiis sint, harum eum omnis
                  iure ullam dolore.
                </p>
                <div className="row user-contact">
                  <span className="id">
                    National Id: <i>1234567890234567</i>
                  </span>
                  <span>
                    Email Address: <i>johndoe@gmail.com</i>
                  </span>
                </div>
                <p className="user-contact row location">
                  <span className="id">
                    Phone Number: <i>0987656543</i>
                  </span>
                  <span>
                    Category: <i>Family Lawyer</i>
                  </span>
                </p>
              </div>
              <div className="col4 user-doc vrow">
                <h5>My documents</h5>
                <div className="doc">
                  <img src={profileImg}></img>profile picture
                </div>
                <div className="doc">
                  <img src={profileImg}></img>profile picture
                </div>
              </div>
            </div>
            <div className="profile-action row">
              <button
                className="btn btn-primary"
                onClick={() => setEditProfile(true)}
              >
                Edit Profile
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setChangePassword(true)}
              >
                change password
              </button>
              <button className="btn btn-tertiary">about me</button>
            </div>
          </div>
          <div className="user-data col-12"></div>
        </div>
      </div>

      {/* edit profile modal */}
      {editProfile && (
        <div className="edit-profile-overlay">
          <div className="modal">
            <div className="edit-profile">
            <span className="close" onClick={() => setEditProfile(false)}>
              X
            </span>
              <h4>edit your profile</h4>
              <form>
                <div className="row">
                  <div className="input">
                    <label>Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="input">
                    <label>Email</label>
                    <input type="email" name="email" />
                  </div>
                </div>
                <div className="row">
                  <div className="input">
                    <label>Phone</label>
                    <input type="tel" name="phone" />
                  </div>
                  <div className="input">
                    <label>National ID</label>
                    <input type="text" name="nationalID" />
                  </div>
                </div>
                <div className="row">
                  <div className="input">
                    <label>Documents</label>
                    <input type="file" name="documents" multiple />
                  </div>
                  <div className="input">
                    <label>Photo</label>
                    <input type="file" name="photo" />
                  </div>
                </div>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* change password */}
      {changePassword && (
        <div className="edit-profile-overlay">
          <div className="modal">
            <span className="close" onClick={() => setChangePassword(false)}>
              X
            </span>
            <div className="change-password">
              {!otpSent && (
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleSendOTP}>Send OTP</button>
                </div>
              )}

              {otpSent && (
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>OTP</label>
                  <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                  />

                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <button onClick={handleChangePassword}>
                    Change Password
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
