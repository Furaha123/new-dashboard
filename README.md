# Legal Tech Platform

## Overview

Welcome to the Legal Tech Platform, a revolutionary solution in the legal services landscape. This platform transforms the way legal services are delivered by providing a seamless and innovative digital experience for users seeking legal assistance.

## Features

### Introduction

At Legal Tech, we have revolutionized the legal services landscape by creating a platform that goes beyond conventional legal solutions. Our commitment is to redefine the interaction between individuals seeking legal assistance and our platform administrators, ensuring a personalized and accountable approach to every case.

### Enhanced Interaction Process

#### Engagement with Admin

Users seeking legal guidance interact with our knowledgeable and empathetic platform administrators, serving as the first point of contact. These professionals delve into the specifics of each case, providing initial insights and understanding the unique nuances.

#### Strategic Case Assignment

Our administrators employ a strategic approach to assess the complexity and requirements of each case. The assignment process ensures pairing individuals with lawyers possessing the specific expertise needed for their situation.

#### Capacity and Expertise Matching

We prioritize both the capacity and expertise of our lawyers. Cases are assigned based not only on specialization but also on the current workload of the lawyers, ensuring effective time and attention to address each case.

#### Continuous Admin Follow-Up

Post-assignment, administrators remain actively involved, following up on the progress of each case. This involvement ensures accountability and a seamless and timely legal process.

#### Transfer Power for Optimal Service

Administrators have the authority to transfer a case to another lawyer if the initially assigned attorney fails to respond promptly or deliver a satisfactory outcome. This ensures clients receive optimal service without unnecessary delays.

#### Transparent Communication Channels

We maintain transparent communication channels between the individual, the administrator, and the assigned lawyer, fostering a collaborative and supportive environment.

#### Quality Assurance

Our commitment to quality assurance extends beyond initial case assignment. Administrators continuously monitor lawyer performance, intervening when necessary to guarantee the highest standard of legal representation.

### Personalized Care and Accountability

Legal Tech Platform simplifies the legal landscape while adding a layer of personalized care and accountability. We believe in making justice accessible to every individual and ensuring they receive the legal assistance they deserve.

### Flexibility and Accessibility in Legal Services

#### Flexible Case Assignment

For cases not requiring senior-level expertise, administrators can assign them to our pool of highly capable junior lawyers, mentored by experienced professionals to deliver effective solutions.

#### Cost-Effective Solutions

Utilizing junior lawyers for suitable cases allows us to offer cost-effective solutions without compromising service quality, optimizing resource allocation.

#### Convenient Online Payments

Our platform simplifies the financial aspect of legal services by offering secure online payment options, providing a hassle-free experience and eliminating the need for traditional payment methods.

#### Transparent Billing

We prioritize transparency in billing, providing detailed invoices through our online payment system for a clear understanding of the services clients are paying for.

### Subscription Services for Companies

#### Tailored Subscription Plans

Recognizing the unique legal needs of businesses, Legal Tech Platform offers customizable subscription plans for corporate clients. This ensures companies have access to legal support aligned seamlessly with their operations.

#### Agreed Upon Terms

Subscription services are crafted through mutual agreements, fostering long-term partnerships based on trust and reliability.

By incorporating flexibility, convenience, and tailored services, Legal Tech Platform is committed to making legal solutions accessible and adaptable to the diverse needs of our users. Join us in reshaping the legal landscape, where efficiency, affordability, and innovation converge to empower individuals and businesses alike.

## Design Guidelines

### Color Palette

```css
:root {
  --primary-color: rgb(206, 164, 105);
  --bg-color: linear-gradient(135deg, rgb(206, 164, 105) 0%, rgb(170, 126, 79) 100%);
  --black-color: rgb(11, 5, 5);
  --dark-color: rgb(25, 21, 20);
  --white-color: #fff;
  --gray-color: #999;
  --box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  --transition: 0.8s cubic-bezier(0.22, 0.78, 0.45, 1.02);

  --font-size-base: 16px;

  --font-size-h1: calc(var(--font-size-base) * 2.5);
  --font-size-h2: calc(var(--font-size-base) * 2);
  --font-size-h3: calc(var(--font-size-base) * 1.75);
  --font-size-h4: calc(var(--font-size-base) * 1.5);
  --font-size-h5: calc(var(--font-size-base) * 1.25);
  --font-size-h6: calc(var(--font-size-base) * 1.125);

  --font-size-p: var(--font-size-base);
  --font-size-a: var(--font-size-base);
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: var(--gray-color);
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary-color);
}

::-webkit-scrollbar-track {
  background-color: var(--black-color);
}

::-webkit-scrollbar-track:hover {
  background-color: var(--dark-color);
}
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
font-family: "Roboto Condensed", sans-serif;



import React, { useState } from 'react';
import User from 'path-to-your-user-image';
import Edit from 'path-to-your-edit-image';

const YourComponent = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <>
      <img
        src={User}
        alt=""
        className="user-pic"
        onClick={toggleSubMenu}
        style={{ cursor: 'pointer' }}
      />
      {isSubMenuVisible && (
        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img src={User} alt="" />
              <h5>James Aldrino</h5>
            </div>
            <hr />
            <a href="#" className="sub-menu-link">
              <img src={Edit} alt="" />
              <p>Edit Profile</p>
              <span> > </span>
            </a>
            <a href="#" className="sub-menu-link">
              <img src={Edit} alt="" />
              <p>Case Status</p>
              <span> > </span>
            </a>
            <a href="#" className="sub-menu-link">
              <img src={Edit} alt="" />
              <p>Log out</p>
              <span> > </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default YourComponent;

====================================
import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../style/Chat.scss";
import lawyerImage from "/user.png";
import userImage from "/bg2.jpg";

const Chat = () => {
  const [lawyers] = useState([
    {
      id: 1,
      name: "Lawyer One",
    },
    {
      id: 2,
      name: "Lawyer Two",
    },
  ]);

  const [selectedLawyer, setSelectedLawyer] = useState(null);

  // ... other state and functions

  const handleSelectLawyer = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  return (
    <Router>
      <div className="chat-container">
        <div className="left-section">
          <h2>Available Lawyers</h2>
          <ul>
            {lawyers.map((lawyer) => (
              <li key={lawyer.id}>
                <Link
                  to={`/chats/${lawyer.id}`}
                  onClick={() => handleSelectLawyer(lawyer)}
                >
                  {lawyer.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-section">
          <Switch>
            <Route path="/chats/:lawyerId">
              {/* Chat component for selected lawyer */}
              {/* You can use selectedLawyer.id to fetch relevant chat data */}
              <h2>
                Chat with {selectedLawyer ? selectedLawyer.name : "Lawyer"}
              </h2>
              {/* Add your chat components here */}
            </Route>
            <Route path="/chats">
              {/* Static chat or default chat page */}
              <h2>Static Chat Page</h2>
              {/* Add your static chat components here */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Chat;

.casestatus-container {
  margin: 20px;
  padding: 20px; /* Adjust padding as needed */
}

.tablee {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.tablee th, .tablee td {
  border: 1px solid #ddd;
  padding: 12px; /* Increase padding for better spacing */
  text-align: center; /* Center text within cells */
}

.tablee th {
  background-color: #f2f2f2;
}

.tablee tr:hover {
  background-color: #f5f5f5; /* Highlight the row on hover */
}

.button-container {
  text-align: center; /* Center the buttons in their container */
}

button {
  padding: 8px 12px; /* Adjust padding for better button size */
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 5px; /* Add some space between buttons */
}

button:hover {
  background-color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Style for images in the table */
.tablee img {
  max-width: 100px; /* Set a maximum width for the images */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Eliminate extra space beneath images */
  margin: 0 auto; /* Center images within cells */
  border-radius: 5px; /* Add rounded corners */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
}



.moTable {
  background: white;
  border: 1px solid #ccc;
  z-index: 1001; /* Set a higher z-index for the modal */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 30rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}



import React, { useState } from 'react';
import "../style/Payment.scss";
import { FaArrowsToDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import PaymentFill from './PaymentFill'; // Import the PaymentFill component

function Payment() {
  const [showModal, setShowModal] = useState(false);

  const handleViewPricing = () => {
    setShowModal(true);
  };

  return (
    <div>
      {/* Existing code... */}

      {/* Use the showModal state to conditionally render the modal */}
      {showModal && <PaymentFill onClose={() => setShowModal(false)} />}

      {/* Update the button onClick event */}
      <button className="sbtn" id="one" onClick={handleViewPricing}>
        View Pricing <FaLongArrowAltRight className="arrow" />
      </button>
    </div>
  );
}

export default Payment;



import React from "react";
import "../style/PaymentFill.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";

function PaymentFill({ onClose }) {
  // Existing code...

  return (
    <div className="PaymentOne">
      <div className="containers">
        {/* Existing code... */}

        {/* Add a close button or any other way to close the modal */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PaymentFill;

=============================

// PaymentFill.jsx

import React from "react";
import "../style/PaymentFill.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";

function PaymentFill({ onClose }) {
  // Existing code...

  return (
    <div className="PaymentFillModal" onClick={onClose}>
      <div className="PaymentFillModalContent" onClick={(e) => e.stopPropagation()}>
        {/* Existing code... */}

        {/* Add a close button or any other way to close the modal */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PaymentFill;

