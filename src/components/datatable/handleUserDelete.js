import axios from "axios";
import Notiflix from "notiflix";

export const handleUserDelete = async (id) => {
  try {
    Notiflix.Confirm.show(
      "DELETE USER",
      "Do you really want to delete this user?",
      "YES",
      "NO",
      async () => {
        const Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };

        const response = await axios.delete(
          `https://legal-tech-api.onrender.com/api/v1/user/delete/${id}`,
          { headers }
        );
        if (response.status === 200) {
          window.location.reload();
        } else {
          throw new Error(
            `Server responded with status code: ${response.status}`
          );
        }
      },
      () => {
        Notiflix.Notify.info("You've canceled delete operation.");
      },
      {}
    );
  } catch (error) {
    console.error("Error deleting case:", error.message);
    Notiflix.Notify.failure(`Error deleting case: ${error.message}`);
  }
};
