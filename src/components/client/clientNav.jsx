import React from "react";

import {
  FaBalanceScale,
  FaCog,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  FaBookOpen,
  FaClipboardList,
  FaEnvelope,
  FaPowerOff,
} from "react-icons/fa6";

import "./../../style/client.scss";

import logo from "./../../assets/logo-light.png";

function clientNav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="vrow">
          <div className="header">
            <div className="brand">
              <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="user">
              <h6>client names</h6>
              <p>client</p>
            </div>
          </div>
          <div className="navlink">
            <ul>
              <li>
                <a href="/client">
                  <FaHome /> <span>overview</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaBalanceScale /> <span>case</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaEnvelope /> <span>message</span>
                </a>
              </li>
              <li>
                <a href="/client/subscription">
                  <FaClipboardList /> <span>subscription</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaBookOpen /> <span>legal resources</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaQuestionCircle /> <span>FAQ & Terms</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaCog /> <span>settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="log">
            <ul>
              <li>
                <a href="">
                  <FaPowerOff /> <span>logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default clientNav;
