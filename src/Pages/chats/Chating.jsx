import React from "react";
import { IoMdMenu } from "react-icons/io";
import "./chat.scss";
const Chating = () => {
  return (
    <main>
      <div className="header-chat">
        <div className="titileChat">
          <h1>Joshua Chat</h1>
          <button type="button">
            <IoMdMenu size={20} />
          </button>
        </div>
      </div>
      <div className="container-chat">
        <div className="user-window">
          <div className="user-header">
            <h3>Active</h3>
            <h4>3</h4>
          </div>
          <div className="user-list">
            <p>Jarvis</p>
            <p>David</p>
            <p>Moses</p>
          </div>
        </div>
        <div className="chat-window">
          <div className="chats">
            <div className="user-join">
              <p>
                {" "}
                <b>Jarvis</b> joined the chat
              </p>
            </div>
            <div className="message ">
              <h5>Jarvis</h5>
              <p>Hello Joshoua</p>
            </div>
            <div className="message outgoing">
              <h5>Jorshua</h5>
              <p>Welcome Jarvis . How are you?</p>
            </div>
            <div className="message ">
              <h5>Jarvis</h5>
              <p>Am doing great thanks. How far with my case ? An updates?</p>
            </div>
            <div className="message outgoing">
              <h5>Jorshua</h5>
              <p>I will contact lawyer and get to you asap</p>
            </div>
          </div>
          <div className="user-input">
            <input
              type="text"
              placeholder="Type your message ..."
              className="text-input"
            />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chating;
