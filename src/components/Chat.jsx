// // Chat.js

// import React, { useState } from "react";
// import { AiOutlineUpload } from "react-icons/ai";
// import "../style/Chat.scss";
// import lawyerImage from "/user.png";
// import userImage from "/bg2.jpg";
// // import User from "./user";

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: "Hello, how can I help you?",
//       sender: "lawyer",
//       timestamp: new Date(),
//       user: {
//         name: "Lawyer Name",
//         category: "Individual",
//         description: "Lawyer description here",
//       },
//     },
//     {
//       text: "I have a legal question.",
//       sender: "customer",
//       timestamp: new Date(),
//       user: {
//         name: "User Name",
//         category: "Company",
//         description: "User description here",
//       },
//     },
//     {
//       text: "Sure, go ahead and ask.",
//       sender: "lawyer",
//       timestamp: new Date(),
//       user: {
//         name: "Lawyer Name",
//         category: "Individual",
//         description: "Lawyer description here",
//       },
//     },
//   ]);

//   const [newMessage, setNewMessage] = useState("");
//   const [editMode, setEditMode] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "") {
//       if (editMode !== null) {
//         // Editing existing message
//         const updatedMessages = [...messages];
//         updatedMessages[editMode].text = newMessage;
//         updatedMessages[editMode].timestamp = new Date();
//         setMessages(updatedMessages);
//         setEditMode(null);
//       } else {
//         // Sending new message
//         setMessages([
//           ...messages,
//           { text: newMessage, sender: "customer", timestamp: new Date() },
//         ]);
//       }
//       setNewMessage("");
//     }
//   };

//   const handleEditMessage = (index) => {
//     setNewMessage(messages[index].text);
//     setEditMode(index);
//   };

//   const handleDeleteMessage = (index) => {
//     const updatedMessages = [...messages];
//     updatedMessages.splice(index, 1);
//     setMessages(updatedMessages);
//     setEditMode(null);
//   };

//   const handleSendDocument = (file) => {
//     // Handle document upload logic here
//     // For now, let's just add a placeholder message.
//     setMessages([
//       ...messages,
//       {
//         text: `User has sent a document: ${file.name}`,
//         sender: "customer",
//         timestamp: new Date(),
//         isDocument: true,
//       },
//     ]);
//   };

//   const formatTimestamp = (timestamp) => {
//     const options = { hour: "numeric", minute: "numeric" };
//     return new Intl.DateTimeFormat("en-US", options).format(timestamp);
//   };

//   const openUserDetails = (user) => {
//     setSelectedUser(user);
//   };

//   const openDocumentDetails = (document) => {
//     setSelectedDocument(document);
//   };

//   const closeModal = () => {
//     setSelectedUser(null);
//     setSelectedDocument(null);
//   };

//   return (
//     <>
//       <div className="containerAboveImage">
//         <div className="contentAboveImage">
//           <h1>
//             Hello Delphine INGABIRE
//             {/* <span>
//               {user && user.USER && user.USER.name ? user.USER.name : "Client"}
//             </span> */}
//             ,you can chat with your lawyer here
//           </h1>
//         </div>
//       </div>
//       <div className="chat-container" style={{ width: "600px" }}>
//         <div className="chat-messages">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender}`}>
//               <img
//                 src={msg.sender === "lawyer" ? lawyerImage : userImage}
//                 alt={msg.sender}
//                 className="avatar"
//                 onClick={() => openUserDetails(msg.user)}
//               />
//               <div className="message-content">
//                 <div className="message-text">{msg.text}</div>
//                 {msg.isDocument && (
//                   <div
//                     className="document-indicator"
//                     onClick={() => openDocumentDetails(msg)}
//                   >
//                     Document 📄
//                   </div>
//                 )}
//                 <div className="message-timestamp">
//                   {formatTimestamp(msg.timestamp)}
//                 </div>
//                 {msg.sender === "customer" && (
//                   <>
//                     <span
//                       className="edit"
//                       onClick={() => handleEditMessage(index)}
//                     >
//                       Edit
//                     </span>
//                     <span
//                       className="delete"
//                       onClick={() => handleDeleteMessage(index)}
//                     >
//                       Delete
//                     </span>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="chat-input">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <button onClick={handleSendMessage} className="editButton">
//             {editMode !== null ? "Edit" : "Send"}
//           </button>
//           <label htmlFor="file-upload" className="upload-button">
//             <AiOutlineUpload />
//           </label>
//           <input
//             id="file-upload"
//             type="file"
//             onChange={(e) => handleSendDocument(e.target.files[0])}
//           />
//         </div>

//         {selectedUser && (
//           <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal">
//               <h2>User Details</h2>
//               <p>Name: {selectedUser.name}</p>
//               <p>Category: {selectedUser.category}</p>
//               <p>Description: {selectedUser.description}</p>
//               <button onClick={closeModal}>Close</button>
//             </div>
//           </div>
//         )}

//         {selectedDocument && (
//           <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal">
//               <h2>Document Details</h2>
//               <p>Document: {selectedDocument.text}</p>
//               <button onClick={closeModal}>Close</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Chat;
import React from "react";
import { IoMdMenu } from "react-icons/io";
import "../style/Chat.scss";

import { useForm } from "react-hook-form";
import axios from "axios";
const Chating = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);
    const { message } = data;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const formData = new FormData();
      formData.append("message", message);
      const res = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/chat/chatting",
        formData,
        
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit(onsubmit)}>
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
                name="message"
                id="message"
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <p role="alert" className="v">
                  Please message is required !
                </p>
              )}
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Chating;
