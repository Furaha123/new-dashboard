import React from "react";
import "./../../style/lawyer.scss";

import { BiSolidDashboard, BiLogInCircle } from "react-icons/bi";
import { IoDocumentSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GoLaw } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa6";

import logo from "./../../assets/logo-light.png";
import user1 from "./../../assets/testimonial3.jpg";
import { Link } from "react-router-dom";

function sidenav() {
  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const token = user?.access_token;
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLoggedIn");
    window.location.href = "/";
  };

  const handleUserClick = (e) => {
    e.preventDefault();
    window.location.href = "/lawyer/setting";
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="vrow">
          <div className="top1">
            {" "}
            <span className="logo" style={{ textDecoration: "none" }}>
              {user.USER.name ? user.USER.name : "Admin"}
              <p style={{ color: "#999" }}>Lawyer</p>
            </span>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <li>
                <BiSolidDashboard className="icon" />
                <Link to="/lawyer" className="tour-link">
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <MdEmail className="icon" />
                <Link to="/lawyer/chat" className="tour-link">
                  <span>Mail Box</span>
                </Link>
              </li>
              <p className="title">List</p>
              <li>
                <GoLaw className="icon" />
                <Link to="/lawyer/cases" className="tour-link">
                  <span>Cases</span>
                </Link>
              </li>

              <li>
                <IoDocumentSharp className="icon" />
                <Link to="/lawyer/report" className="tour-link">
                  <span>Report</span>
                </Link>
              </li>

              <p className="title">services</p>

              {/* <li>
                <Link to="/lawyer/settings">
                  <FiSettings className="icon" />
                  <span> System Settings</span>
                </Link>
              </li> */}
              <li>
                <BiLogInCircle className="icon" />
                <a onClick={logout}>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="bottom">
            <div className="colorOption" onClick={() => {}}></div>
            <div className="colorOption" onClick={() => {}}></div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default sidenav;
