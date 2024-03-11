import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

function Report() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const currentYear = new Date().getFullYear();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("topic", topic);
      formData.append("message", message);
      formData.append("file", file);

      const response = await fetch(
        "https://legal-tech-api.onrender.com/api/v1/testimony/create",
        {
          method: "POST",
          body: formData,
        }
      );
      window.location.reload();
      if (response.ok) {
        console.log("Testimonial submitted successfully");
      } else {
        console.error("Error submitting testimonial:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <div className="lawyer">
      <div className="report-container">
        <div className="row">
          <div className="col-8 testimony">
            <div className="form">
              <h3>Send a testimonial</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="input">
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input">
                      <select
                        required
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      >
                        <option disabled>Topic</option>
                        <option>Testimonial</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="input">
                      <textarea
                        placeholder="Message*"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="input">
                      <input
                        type="file"
                        required
                        accept=".mp3, .mp4, .avi, .jpg, .png"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input">
                      <button type="submit">Send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4 boxes">
            <div className="vrow">
              <div className="row">
                <div className="box">
                  <h1>32</h1>
                  <p>cases assigned</p>
                </div>
                <div className="box box2">
                  <h1>23</h1>
                  <p>cases accepted</p>
                </div>
              </div>
              <div className="row">
                <div className="box box3">
                  <h1>9</h1>
                  <p>cases rejected</p>
                </div>
                <div className="box box4">
                  <h1>12</h1>
                  <p>cases completed</p>
                </div>
              </div>
              <div className="contacts">
                <div className="social">
                  <h4>Our socials</h4>
                  <a title="Instagram" href="">
                    <FaInstagram />
                  </a>
                  <a title="Twitter" href="">
                    <FaTwitter />
                  </a>
                  <a title="LinkedIn" href="">
                    <FaLinkedin />
                  </a>
                  <a title="Youtube" href="">
                    <FaYoutube />
                  </a>
                </div>
                <div className="copy">
                  <p>&copy; LegalTech {currentYear}. Allright Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
