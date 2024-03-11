import axios from "axios";
import Notiflix from "notiflix";

export const handleDeleteContact = async (id) => {
  try {
    Notiflix.Confirm.show(
      "Confirm delete contact",
      "Do you want to delete contact?",
      "Yes",
      "No",
      async () => {
        const Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };
        const res = await axios.delete(
          `https://legal-tech-api.onrender.com/api/v1/cont/contact/${id}`,
          { headers }
        );

        if (res.status === 200) {
          window.location.reload();
        } else {
          throw new Error(`Failed to delete contact. Status: ${res.status}`);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
