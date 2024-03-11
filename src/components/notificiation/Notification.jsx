import React, { useState } from "react";
import { BsFillLightningFill } from "react-icons/bs";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import "./notification.scss";

const Notification = ({ closeNotification }) => {
  const [notifications, setNotifications] = useState([
    "New case  from John",
    "Jane new the case",
    "New logged in",
    "Lawyer Frank Left",
    "Submit your report",
  ]);

  return (
    <div className="notification-container">
      <div className="notification">
        <div className="notification-list">
          <div className="notification-head">
            <h2>Notifications</h2>
            <p>View All</p>
          </div>
          <ul className="ul-notification">
            {notifications.map((notification, index) => (
              <li key={index}>
                <div className="notification-content">
                  <BsFillLightningFill className="icon" />
                  {notification}
                </div>
                <div className="notification-details">
                  <span className="mark-as-read">Mark as Read</span>
                  <span className="time">2m</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cancel-btn" onClick={closeNotification}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
