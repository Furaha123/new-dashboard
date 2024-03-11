import axios from "axios";
import Notiflix from "notiflix";

export const handleReply = async (id, adminResponse, closeModal) => {
  try {
    async () => {
      const response = await axios.put(
        `https://legal-tech-api.onrender.com/api/v1/cont/contact/adminResponse/${id}`,
        { adminResponse }
      );

      if (response.status === 200) {
        console.log("Reply successful:", response.data);
      } else {
        throw new Error(`Failed to submit reply. Status: ${response.status}`);
      }
    };
  } catch (error) {
    console.error("Error replying:", error.response?.data || error.message);
  }
};
