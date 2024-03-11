import React, { useState } from "react";
import "../style/Payment.scss";
import { FaArrowsToDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import PaymentFill from "./PaymentFill.jsx";
import Premium from "./Premium.jsx";
import Gold from "./Gold.jsx";
import Diamond from "./Diamond.jsx";
import { Modal } from "@mui/material";
function Payment() {
const [showModal, setShowModal] = useState(false);
const [showModal1, setShowModal1] = useState(false);
const [showModal2, setShowModal2] = useState(false);
const [showModal3, setShowModal3] = useState(false);

  const handleViewPricing = () => {
    setShowModal(!showModal);
  };
  const handlePremium = () => {
    setShowModal1(!showModal1);
  };
  const handleGold = () => {
    setShowModal2(!showModal2);
  };
  const handleDiamond = () => {
    setShowModal3(!showModal3);
  };
  return (
    <div>
      <div className="pay">
        <div className="payment">
          <h5>CURRENT PLAN</h5>
          <h1>Choose Plan Tailored To Your Needs</h1>
          <p>Ready To Get Started?</p>
        </div>
        <div className="payCard">
          <div className="payCardone">
            <div className="payHeader">
              <h5>Basic</h5>
              <p>
                <b>100RWF</b>
              </p>
            </div>
            <div className="padDetails">
              <h5>
                <i>You Will Have Access To:</i>
              </h5>
              <ol>
                <li>
                  <FaArrowsToDot className="dot" /> Legal Consultation
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Document Drafting and Review
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Form Preparation
                </li>
              </ol>
            </div>
            {showModal && <PaymentFill handleViewPricing={handleViewPricing} />}

            <button className="sbtn" id="one" onClick={handleViewPricing}>
              View Pricing <FaLongArrowAltRight className="arrow" />
            </button>
          </div>
          <div className="payCardone">
            <div className="payHeader">
              <h5>Premium</h5>
              <p>
                <b>100RWF</b>
              </p>
            </div>
            <div className="padDetails">
              <h5>
                <i>You Will Have Access To:</i>
              </h5>{" "}
              <ol>
                <li>
                  <FaArrowsToDot className="dot" />
                  Legal Consultation
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Document Drafting and Review
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Form Preparation
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Notary Services
                </li>
              </ol>
            </div>
            {showModal1 && (
              <Premium
                // onClose={() => setShowModal1(false)}
                handlePremium={handlePremium}
              />
            )}

            <button className="sbtn" id="two" onClick={handlePremium}>
              View Pricing <FaLongArrowAltRight className="arrow" />
            </button>
          </div>
          <div className="payCardone">
            <div className="payHeader">
              <h5>Gold</h5>
              <p>
                <b>1,000RWF</b>
              </p>
            </div>
            <div className="padDetails">
              <h5>
                <i>You Will Have Access To:</i>
              </h5>
              <ol>
                <li>
                  <FaArrowsToDot className="dot" />
                  Legal Consultation
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Document Drafting and Review
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Form Preparation
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Notary Services
                </li>
                <li>
                  <FaArrowsToDot className="dot" />
                  Legal Research
                </li>
              </ol>
            </div>
            {showModal2 && <Gold handleGold={handleGold} />}

            <button className="sbtn" id="three" onClick={handleGold}>
              View Pricing <FaLongArrowAltRight className="arrow" />
            </button>
          </div>
          <div className="payCardone">
            <div className="payHeader">
              <h5>Diamond</h5>
              <p>
                <b>1000RWF</b>
              </p>
            </div>
            <div className="padDetails">
              <h5>
                <i>You Will Have Access To:</i>
              </h5>
              <ol>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Legal Consultation
                </li>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Document Drafting and Review
                </li>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Form Preparation
                </li>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Notary Services
                </li>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Legal Research
                </li>
                <li>
                  {" "}
                  <FaArrowsToDot className="dot" />
                  Small Claims Assistance
                </li>
              </ol>
            </div>
            {showModal3 && <Diamond handleDiamond={handleDiamond} />}

            <button className="sbtn" onClick={handleDiamond}>
              View Pricing <FaLongArrowAltRight className="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;