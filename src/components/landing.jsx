import React, { useState } from "react";
import "../style/sign.scss";
import LoginModal from "./loginModal.jsx";
import SignupModal from "./signupModal.jsx";
import Lawyers from "./Lawyers1.jsx";
import Lawyers1 from "./Lawyers1.jsx";

const LandingPage = () => {
  const [loginModal, setLoginModal] = useState(false);
  // const [showLoginLawyerModal, setShowLoginLawyerModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  // const [showSignupLawyerModal, setShowSignupLawyerModal] = useState(false);
 const [law,setLaw]=useState(false)
 const handleLawyers =()=>
 {
  setLaw(!law)
 }
 
  return (
    <div className="landing-page">
      <div className="container">
        <h1>Welcome to Legal Tech</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          explicabo, asperiores qui corporis, itaque nesciunt voluptas voluptate
        </p>
        <div className="buttons-container">
          <div className="login col-6">
            <a onClick={() => setLoginModal(true)} className="btn">
              Login
            </a>
          </div>
          <div className="signup col-6">
            <a onClick={() => setSignupModal(true)} className="button">
              Signup
            </a>
          </div>
        </div>
        <div>
        <button
        onClick={handleLawyers}
        >sign up as lawyer</button>
      </div>
      </div>
      

      {/* Modals */}
      {loginModal && (
        <LoginModal userType="Client" onClose={() => setLoginModal(false)} />
      )}
      {signupModal && (
        <SignupModal userType="Client" onClose={() => setSignupModal(false)} />
      )}
      {law && <Lawyers1 handleLawyers={handleLawyers}/>}
    </div>
  );
};

export default LandingPage;
