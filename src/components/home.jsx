import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import {
  FaPeopleGroup,
  FaFingerprint,
  Fa42Group,
  FaPeopleRobbery,
  FaPeoplePulling,
  FaGun,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaWhatsapp,
  FaPhoneFlip,
} from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/home.scss";

import heroSlide1 from "../assets/bg-slider1.jpg";
import heroSlide2 from "../assets/bg-slider1-layer3.jpg";
import heroSlide3 from "../assets/bg-slider1-layer2.jpg";
import aboutImg from "../assets/about-us.png";
import signature from "../assets/signature.png";
import serviceBg from "../assets/bg-parallax1-1.jpg";
import member1 from "../assets/team1.jpg";
import member2 from "../assets/team2.jpg";
import member3 from "../assets/team3.jpg";
import member4 from "../assets/team4.jpg";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
function Home() {
  // image background styling
  const heroSlide1Style = {
    backgroundImage: `linear-gradient(to right, rgb(206, 164, 105) -70%, rgb(0,0,0, .1) 70%, rgb(170, 126, 79) 150%), url(${heroSlide1})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  //service section background image style
  const serviceBgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(11, 5, 5, .95), rgba(25, 21, 20, .85), rgba(11, 5, 5, .95)), url(${serviceBg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  //team members
  const member1Style = {
    backgroundImage: `linear-gradient(to top, rgba(11, 5, 5, .3), rgba(11, 5, 5, .1)), url(${member1})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const member2Style = {
    backgroundImage: `linear-gradient(to top, rgba(11, 5, 5, .3), rgba(11, 5, 5, .1)), url(${member2})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const member3Style = {
    backgroundImage: `linear-gradient(to top, rgba(11, 5, 5, .3), rgba(11, 5, 5, .1)), url(${member3})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const member4Style = {
    backgroundImage: `linear-gradient(to top, rgba(11, 5, 5, .3), rgba(11, 5, 5, .1)), url(${member4})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  // posting contact
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const contact = async (data) => {
    console.log(data);
    const { email, fullNames, subject, message } = data;

    try {
      let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));
      const formData = new FormData();
      formData.append("email", email);
      formData.append("fullNames", fullNames);
      formData.append("subject", subject);
      formData.append("message", message);
      const res = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/cont/contact",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth?.access_token}`,
          },
        }
      );
      Notify.success("your contact submitted successfuly");
      if (res.data) {
        console.log("contact submitted", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="home">
      {/* homepage hero */}

      <section className="hero" style={heroSlide1Style} id="home">
        <div className="container">
          <div className="hero-slide">
            <div className="hero-content">
              <p>Introduce with Legal Tech</p>
              <h1>We are here to protect any kind of Violence</h1>
              <a href="/#contact" className="cta-button btn">
                contact us now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="our-value">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="vrow">
                <div className="col-2">
                  <span className="icon">
                    <FaPeopleGroup />
                  </span>
                </div>
                <div className="col-12">
                  <h4>99% winning guarantee</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur doloribus tempore saepe placeat? Fuga,
                    reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="vrow">
                <div className="col-2">
                  <span className="icon">
                    <FaFingerprint />
                  </span>
                </div>
                <div className="col-12">
                  <h4>Secure management</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur doloribus tempore saepe placeat? Fuga,
                    reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="vrow">
                <div className="col-2">
                  <span className="icon">
                    <MdWifiCalling3 />
                  </span>
                </div>
                <div className="col-12">
                  <h4>Full time support</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur doloribus tempore saepe placeat? Fuga,
                    reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section  */}
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-7 about-content">
              <div className="sec-title-wp">
                <span className="sec-subtitle">about us</span>
                <h1 className="sec-title">
                  we are here to fight against any Violence with{" "}
                  <span>experience</span>
                </h1>
                <hr className="sec-line" />
              </div>
              <div className="sec-content">
                <p>
                  At Legal Tech, our commitment is resolute: we stand as a
                  shield against every form of violence. Through pioneering
                  technological solutions and unwavering dedication, we champion
                  the protection of individuals and communities alike
                </p>
                <p>
                  Empowered by innovation, we strive to create safer
                  environments, advocate for justice, and extend comprehensive
                  support networks. Our mission is to harness technology in the
                  fight against violence, fostering a world where safety and
                  security are universal rights, empowering every individual to
                  live free from fear and harm.
                </p>
                <div className="item-list row">
                  <div className="col-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </div>
                </div>
                <div className="about-cta">
                  Call to ask <a href="#">any question</a>{" "}
                  <a href="callto:100" className="phone">
                    123-4567-890
                  </a>{" "}
                  or{" "}
                  <a href="callto:114" className="phone">
                    (123)4567890
                  </a>
                </div>
                <hr />
                <div className="signature row">
                  <img src={signature} alt="Founder's Signature" />
                  <div className="vrow">
                    <h4>Nathanael Ake</h4>
                    <p>(Chairman and Founder)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img src={aboutImg} alt="About us Image" />
            </div>
          </div>
        </div>
      </section>

      {/* services section  */}
      <section className="service" style={serviceBgStyle} id="service">
        <div className="container">
          <div className="sec-title-wp">
            <span className="sec-subtitle">services</span>
            <h1 className="sec-title">
              we are here to fight against any Violence with{" "}
              <span>experience</span>
            </h1>
            <hr className="sec-line" />
          </div>
          <div className="service-content">
            <div className="row">
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaPeoplePulling />
                  </span>
                  <h3>family law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaPeopleGroup />
                  </span>
                  <h3>civil law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaGun />
                  </span>
                  <h3>criminal law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaPeoplePulling />
                  </span>
                  <h3>family law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaPeopleGroup />
                  </span>
                  <h3>civil law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="service-box">
                  <span className="icon">
                    <FaGun />
                  </span>
                  <h3>criminal law</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium doloribus adipisci placeat labore, facilis.
                  </p>
                  <a href="/consult" className="btn">
                    consult now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="testimonial" id="testimonial">
        <div className="container">
          <div className="sec-title-wp">
            <span className="sec-subtitle">fun fact</span>
            <h1 className="sec-title">
              we feel very proud for our great <span>achievement</span>
            </h1>
            <hr className="sec-line" />
          </div>
          <div className="testimony row">
            <div className="col-3">
              <div className="testimony-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod tristique justo, nec dictum tellus tempus id.
                </p>
                <h4>john doe</h4>
                <span className="position"> CEO - ABC Corporation</span>
              </div>
            </div>
            <div className="col-3">
              <div className="testimony-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod tristique justo, nec dictum tellus tempus id.
                </p>
                <h4>john doe</h4>
                <span className="position"> CEO - ABC Corporation</span>
              </div>
            </div>
            <div className="col-3">
              <div className="testimony-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod tristique justo, nec dictum tellus tempus id.
                </p>
                <h4>john doe</h4>
                <span className="position"> CEO - ABC Corporation</span>
              </div>
            </div>
            <div className="col-3">
              <div className="testimony-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod tristique justo, nec dictum tellus tempus id.
                </p>
                <h4>john doe</h4>
                <span className="position"> CEO - ABC Corporation</span>
              </div>
            </div>
          </div>

          {/* portfolio content  */}
          <div className="portfolio row">
            <div className="col-3">
              <div className="yellow">
                <h2>53+</h2>
                <span>completed works</span>
              </div>
            </div>
            <div className="col-3">
              <div className="black">
                <h2>64+</h2>
                <span>satisfied clients</span>
              </div>
            </div>
            <div className="col-3">
              <div className="yellow">
                <h2>23+</h2>
                <span>winning awards</span>
              </div>
            </div>
            <div className="col-3">
              <div className="black">
                <h2>32+</h2>
                <span>team members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team members section  */}
      <section className="team" id="team">
        <div className="container">
          <div className="row sec-titles">
            <div className="sec-title-wp col-6">
              <span className="sec-subtitle">team member</span>
              <h2 className="sec-title">
                you will Introduce with our expert team <span>member</span>
              </h2>
              <hr className="sec-line" />
            </div>
            <div className="col-6">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur quae ex molestiae vel veritatis? Culpa, neque nobis
                  quia consequuntur quo nam dolore officia, explicabo ipsa
                  blanditiis qui illo aspernatur quae.
                </p>
              </div>
            </div>
          </div>
          <div className="row col-12">
            <div className="col-3 member-box" style={member1Style}>
              <div className="member-id">
                <h5>Johnson Kabera</h5>
                <p>civil lawyer</p>
                <div className="social">
                  <span className="icon">
                    <FaFacebook />
                  </span>
                  <span className="icon">
                    <FaTwitter />
                  </span>
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  <span className="icon">
                    <FaGooglePlusG />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3 member-box" style={member2Style}>
              <div className="member-id">
                <h5>Johnson Kabera</h5>
                <p>civil lawyer</p>
                <div className="social">
                  <span className="icon">
                    <FaFacebook />
                  </span>
                  <span className="icon">
                    <FaTwitter />
                  </span>
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  <span className="icon">
                    <FaGooglePlusG />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3 member-box" style={member3Style}>
              <div className="member-id">
                <h5>Johnson Kabera</h5>
                <p>civil lawyer</p>
                <div className="social">
                  <span className="icon">
                    <FaFacebook />
                  </span>
                  <span className="icon">
                    <FaTwitter />
                  </span>
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  <span className="icon">
                    <FaGooglePlusG />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3 member-box" style={member4Style}>
              <div className="member-id">
                <h5>Johnson Kabera</h5>
                <p>civil lawyer</p>
                <div className="social">
                  <span className="icon">
                    <FaFacebook />
                  </span>
                  <span className="icon">
                    <FaTwitter />
                  </span>
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  <span className="icon">
                    <FaGooglePlusG />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section */}
      <section className="contact" id="contact">
        <div className="contact_holder">
          <div className="tex2">
            <h1>Contact our support guys or make appointment</h1>
          </div>
          <div className="text1">
            <div>
              <h1>with </h1>
            </div>
            <div className="tex1">
              <h1>consultan</h1>
            </div>
          </div>
          <div className="text2">
            <p>Please contact us using the information below. For additional</p>
            <p>
              information on our management consulting services, please visit
              the
            </p>
            appropriate page on our site.
          </div>
          <div className="bgcont">
            <div className="cont1">
              <div>
                <RiContactsBookLine className="icon" />
              </div>
              <div>131 Dartmouth Street Boston, Massachusetts 012</div>
            </div>
            <div className="cont2">
              <div>
                <FaPhoneFlip className="icon1" />
              </div>
              <div>+250788239952</div>
            </div>
            <div className="cont3">
              <div>
                <MdOutlineEmail className="icon1" />
              </div>
              <div>legaltech@gmail.com</div>
            </div>
            <div className="cont4">
              <div>
                <SlLocationPin className="icon1" />
              </div>
              <div>View on map</div>
            </div>
          </div>
          <div className="contact_form">
            <form action="/submit-form" onSubmit={handleSubmit(contact)}>
              <div>
                <input
                  type="text"
                  id="fullNames"
                  name="fullNames"
                  className="inpt"
                  placeholder="Full Name"
                  {...register("fullNames", { required: true })}
                />
                {errors.fullNames?.type === "required" && (
                  <p role="alert" className="v">
                    Please fullNames is required !
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="inpt"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="v">
                    Please email is required !
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="inpt"
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject?.type === "required" && (
                  <p role="alert" className="v">
                    Please subject is required !
                  </p>
                )}
              </div>
              <div>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="6"
                  className="inptx"
                  placeholder="Message"
                  {...register("message", { required: true })}
                />
                {errors.message?.type === "required" && (
                  <p role="alert" className="v">
                    Please message is required !
                  </p>
                )}
              </div>

              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
