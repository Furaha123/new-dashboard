import React, { useEffect, useState } from "react";
import "./widget.scss";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { BsFillAwardFill } from "react-icons/bs";
import { GiClawHammer } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";

function Widget({ type, amount, diff }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <CgProfile
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0,  0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "booking":
      data = {
        title: "Success Cases",
        isMoney: false,
        link: "See all sucess cases",
        icon: (
          <GiClawHammer
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba( 218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tour":
      data = {
        title: "LAWYERS",
        isMoney: false,
        link: "See all lawyers available",
        icon: (
          <BsFillAwardFill
            className="icon"
            style={{
              color: "#C29D59",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "pending":
      data = {
        title: "Submitted Cases",
        isMoney: false,
        link: "See all submitted cases",
        icon: (
          <FaBriefcase
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba( 128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <BiSolidUpArrowAlt className="" />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
