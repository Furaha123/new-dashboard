import React, { useState } from "react";

import {
  FaBell,
  FaUser,
  FaPlus,
  FaTrash,
  FaEdit,
  FaFile,
} from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";

import user1 from "./../../assets/testimonial3.jpg";
import { MdKeyboardVoice } from "react-icons/md";

function Chat() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const phoneNumber = "+250787239952";
    const { name, email, reason, message } = formData;

    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "*Name :* " +
      name +
      "%0a" +
      "*Email :* " +
      email +
      "%0a" +
      "*Re:* " +
      reason +
      "%0a" +
      "*Message :* " +
      message +
      "%0a%0a";

    window.open(url, "_blank").focus();
    window.location.reload();
  };

  return (
    <div className="lawyer">
      <div className="chat-container">
        <div className="col-12">
          <form>
            <h3>message our admin</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="reason">Reason/Title</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <br />
            <button type="button" onClick={sendWhatsApp}>
              Send Via WhatsApp <IoCreate />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
