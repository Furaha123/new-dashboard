import React from "react";
import "./SideBar.scss";
import { BiSolidDashboard, BiLogInCircle } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GoLaw } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { SiDwavesystems } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const { dispatch } = useContext(DarkModeContext);

  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const token = user?.access_token;

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <div className="top1">
        {" "}
        <span className="logo" style={{ textDecoration: "none" }}>
          {user.USER.name ? user.USER.name : "Admin"}
          <p style={{ color: "#999" }}>Admin</p>
        </span>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <BiSolidDashboard className="icon" />
            <Link to="dashboard" className="tour-link">
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <SlCalender className="icon" />
            <Link to="calender" className="tour-link">
              <span>Calender</span>
            </Link>
          </li>
          <p className="title">List</p>
          <li>
            <GoLaw className="icon" />
            <Link to="lawyers" className="tour-link">
              <span>Lawyers</span>
            </Link>
          </li>

          <li>
            <FaUsers className="icon" />
            <Link to="users" className="tour-link">
              <span>Users</span>
            </Link>
          </li>
          <li>
            <IoMdContacts className="icon" />
            <Link to="contacts" className="tour-link">
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <MdOutlineSubscriptions className="icon" />
            <Link to="subs" className="tour-link">
              <span>Subscriptions</span>
            </Link>
          </li>

          <p className="title">services</p>
          <li>
            <BsFillCalendar2HeartFill className="icon" />
            <Link to="cases" className="tour-link">
              <span>Cases</span>
            </Link>
          </li>
          <p className="title">AUTHENTICATION</p>

          <li>
            <BiLogInCircle className="icon" />
            <a onClick={logout}>
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
