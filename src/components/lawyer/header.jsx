import React, { useEffect, useState } from "react";

import { MdMessage } from "react-icons/md";
import { BsSearch, BsFullscreenExit } from "react-icons/bs";
import { FaBell, FaUser } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";

import user1 from "./../../assets/testimonial3.jpg";

function header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    //update current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    //cleanup interval when component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const token = user?.access_token;
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLoggedIn");
    window.location.href("/");
  };

  const handleUserClick = (e) => {
    e.preventDefault();
    window.location.href = "/lawyer/setting";
  };

  const handleMessageClick = (e) => {
    e.preventDefault();
    window.location.href = "/lawyer/chat";
  };

  return (
    <div className="lawyer-header">
      <div className="container">
        <div className="row">
          
          <div className="right row">
            <div className="icon message" onClick={handleMessageClick}>
              <i>
                <MdMessage />
              </i>
            </div>
            
            <div className="user" onClick={handleUserClick}>
              <div className="row">
                <span className="img">
                  <img src={user1} alt="" />
                </span>
                <span className="name">
                  <h5>{user.USER.name ? user.USER.name : "Lawyer XXX"}</h5>
                  <p>{user.USER.role ? user.USER.role : "Lawyer"} | </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
