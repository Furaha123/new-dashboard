import React from "react";
import "./adminprofile.scss";
import Profile from "../../components/navbar/images/profile.jpg";
const AdminProfile = () => {
  return (
    <>
      <div className="top">
        <div className="left">
          <div className="title">Information</div>
          <div className="item">
            <img src={Profile} alt="profile" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Furaha Moses</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">furahamoses41@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Role:</span>
                <span className="itemValue">Admin</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 232 434 23</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">KIGALI-RWANDA</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">RWANDA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="form-group ">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Country:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Address:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <button type="submit" className="edit-btn">
              Edit
            </button>
          </form>
        </div>
      </div>
      <div className="bottom1">
        <div className="bottom-title">
          <div className="password-change">
            <h5>Password</h5>
            <div className="change">change</div>
          </div>
          <p className="bottom-description">
            You can read or change your <br /> password by cliking here
          </p>
        </div>
        <div className="bottom-title">
          <div className="password-change">
            <h5>Remove Acount</h5>
            <div className="deactivate">Deactive</div>
          </div>
          <p className="bottom-description">
            Once you delete your account there <br /> is no goining back. Please
            be uncertain
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
