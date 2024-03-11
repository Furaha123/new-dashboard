import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/logo-light.png";
import User from "/user.png";
import Edit from "/profile.png";
import Logout from "/logout.png";
import Case from "/setting.png";
import { IoIosChatboxes } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

import "../style/Header.scss";
import Casestatus from "./Casestatus";

const header = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const token = user?.access_token;
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLoggedIn");
    window.location.assign("/");
  };

  // console.log("hello",user);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="brand">
            <a href="/">
              <img src={Logo} alt="Legal Tech" />
            </a>
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <a href="/#home">home</a>
              </li>
              <li>
                <a href="/#about">about</a>
              </li>
              <li>
                <a href="/#service">service</a>
              </li>

              <li>
                <a href="/#testimonial">testimonial</a>
              </li>

              <li>
                <a href="/#team">team</a>
              </li>
              <li>
                <a href="/#contact">contact</a>
              </li>
            </ul>
            {/* {token ?
              (<div className="sub-menuu">
                <img
                  src={User}
                  alt=""
                  className="user-pic"
                  onClick={toggleSubMenu}
                />
                <p>James GASAGA</p>
              </div>):
              ("")
            } */}
            {isSubMenuVisible && (
              <div className="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="uer-info">
                    {/* <img src={User} alt="" /> */}
                    <h5>
                      {user && user.USER && user.USER.name
                        ? user.USER.name
                        : "Client"}
                    </h5>
                  </div>
                  <hr></hr>
                  {/* <a href="#" className="sub-menu-link">
                    <img src={Edit} alt="" />
                    <p>
                      <a href="/profile">Edit Profile</a>
                    </p>
                    <span> </span>
                  </a> */}
                  <a href="#" className="sub-menu-link">
                    <img src={Case} alt="" />
                    <p>
                      <a href="/Casestatus">Case Status</a>
                    </p>
                    <span> </span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <FaWhatsapp className="menuIcon" />
                    <p>
                      <a href="https://wa.me/250787239952">Click to chat</a>
                    </p>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <MdSubscriptions className="menuIcon" />
                    <p>
                      <a href="/Payment">Subscription</a>
                    </p>
                    <span> </span>
                  </a>
                  <Link className="sub-menu-link">
                    <img src={Logout} alt="" />
                    <button onClick={logout}>Log out</button>
                    <span> </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {token ? (
            <div className="sub-menuu">
              <FaUserAlt className="dropDownMenu" onClick={toggleSubMenu} />
              <p>
                {user && user.USER && user.USER.name
                  ? user.USER.name
                  : "Client"}
              </p>
            </div>
          ) : (
            <div className="nav-btn">
              <Link to="/landing" className="btn">
                LOGIN
              </Link>
            </div>
          )}
          {/* <LoginStatus/> */}
        </div>
      </div>
    </header>
  );
};

export default header;
