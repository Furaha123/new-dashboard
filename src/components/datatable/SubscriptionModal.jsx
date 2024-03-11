import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, TextField, Button } from "@mui/material";
import "./subcriptionModal.scss";
import axios from "axios";
import { Notify } from "notiflix";

const SubscriptionModal = ({ open, onClose, selectedSubscription }) => {
  const [updatedSubscription, setUpdatedSubscription] = useState({
    name: selectedSubscription.name,
    description: selectedSubscription.description,
    price: selectedSubscription.price,
    duration: selectedSubscription.duration,
    userNumber: selectedSubscription.userNumber,
    subscriptionStatus: selectedSubscription.subscriptionStatus,
    subscriptionDate: selectedSubscription.subscriptionDate,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={onClose} className="modalContainer">
      <Box
        sx={{ width: 400, bgcolor: "background.paper", p: 7 }}
        className="modalContent"
      >
        <h5 className="modalTitle ">Update Subscription</h5>
        <TextField
          label="Name"
          name="name"
          value={updatedSubscription.name}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={updatedSubscription.description}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Price"
          name="price"
          value={updatedSubscription.price}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Duration"
          name="duration"
          value={updatedSubscription.duration}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Number"
          name="userNumber"
          value={updatedSubscription.userNumber}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Status"
          name="subscriptionStatus"
          value={updatedSubscription.subscriptionStatus}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <TextField
          label="Date"
          name="subscriptionDate"
          value={updatedSubscription.subscriptionDate}
          onChange={handleInputChange}
          fullWidth
          style={{
            marginBottom: 10,
          }}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#c29d59", color: "#ffffff" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default SubscriptionModal;
