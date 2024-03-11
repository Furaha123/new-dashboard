import React from "react";

import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FaBell, FaFlag } from "react-icons/fa6";

import user1 from "./../../assets/testimonial1.jpg";

function dashboard() {
  return (
    <div className="client-home">
      <div className="header col-12">
        <div className="col-8">
          <span className="form-input">
            <span className="icon">
              <FaSearch />
            </span>
            <input
              type="search"
              placeholder="search here .."
              className="input"
            />
          </span>
        </div>

        <div className="side-header col-3">
          <span className="country">
            <FaFlag />
          </span>
          <span className="notify">
            <FaBell /> <span className="count">3</span>
          </span>
          <span className="user">
            <FaUserAlt />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="main col-12">
          <div className="row col-12">
            <div className="col-5 user-info">
              <div className="container">
                <h4>
                  Welcome, <span className="username">Iwm</span>
                </h4>
                <div className="row">
                  <div>
                    <img src={user1} alt="" />
                  </div>
                  <div>
                    <p>
                      Email: <span className="user-email">ishim@him.com</span>
                    </p>
                    <p>
                      Phone: <span className="user-phone">+250979779889</span>
                    </p>
                    <p>
                      <a href="/">view all</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 recent-activity">
              <div className="container">
                <h4>Recent activities</h4>
                <ul className="list">
                  <li>
                    <span className="time">Dec 02 / 07h20</span> -{" "}
                    <span className="activity">submit new message</span>
                  </li>
                  <li>
                    <span className="time">Dec 02 / 07h20</span> -{" "}
                    <span className="activity">submit new message</span>
                  </li>
                  <li>
                    <span className="time">Dec 02 / 07h20</span> -{" "}
                    <span className="activity">submit new message</span>
                  </li>
                </ul>
                <p>
                  <a href="/">view all</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="case-status col-9">
                <div className="container">
                  <h4>case status summary</h4>
                  <div className="case-list">
                    <div className="row col-12 list-header">
                      <span className="count col-1">#</span>
                      <span className="date col-2">Date</span>
                      <span className="title col-3">title</span>
                      <span className="content col-6">description</span>
                    </div>
                    <div className="row col-12 list-item">
                      <span className="count col-1">1</span>
                      <span className="date col-2">Date</span>
                      <span className="title col-3">title</span>
                      <span className="content col-6">description</span>
                    </div>
                    <div className="row col-12 list-item">
                      <span className="count col-1">2</span>
                      <span className="date col-2">Date</span>
                      <span className="title col-3">title</span>
                      <span className="content col-6">description</span>
                    </div>
                    <div className="row col-12 list-item">
                      <span className="count col-1">3</span>
                      <span className="date col-2">Date</span>
                      <span className="title col-3">title</span>
                      <span className="content col-6">description</span>
                    </div>
                    <div className="row col-12 list-item">
                      <span className="count col-1">4</span>
                      <span className="date col-2">Date</span>
                      <span className="title col-3">title</span>
                      <span className="content col-6">description</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 quick-link">
                <div className="container">
                  <h4>quick actions:</h4>
                  <ul className="list">
                    <li><a href="">submit a new case</a></li>
                    <li><a href="">check messages</a></li>
                    <li><a href="">track case status</a></li>
                    <li><a href="">talk to admin</a></li>
                    <li><a href="">talk to lawyer</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
