import React, { useState } from "react";
import "./NavBar.scss";
import { BsSearch, BsFullscreenExit } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { FaDownload } from "react-icons/fa";
import ProfileAvatar from "./images/profile.jpg";
import Notification from "../notificiation/Notification";
function NavBar() {
  const { dispatch } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false);
  const openNotification = () => {
    setOpen((prevopen) => !prevopen);
  };
  const closeNotification = () => {
    setOpen(false);
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="">
          
        </div>
        <div className="items">
          <div className="item">
            {open && <Notification closeNotification={closeNotification} />}
            <IoMdNotificationsOutline
              className="icon"
              onClick={openNotification}
            />
            <div className="counter">4</div>
          </div>

          <div className="item">
            <BiMessage className="icon" />
            <div className="counter">3</div>
          </div>

          <div className="item">
            <AiOutlineUnorderedList className="icon" />
          </div>
          <div className="item">
            <img src={ProfileAvatar} className="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
