import axios from "axios";
import Notiflix from "notiflix";

export const handleDelete = async (id) => {
  try {
    Notiflix.Confirm.show(
      "DELETE CASE",
      "Do you really want to delete this case?",
      "YES",
      "NO",
      async () => {
        const Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };

        const response = await axios.delete(
          `https://legal-tech-api.onrender.com/api/v1/Case/deleteCase/${id}`,
          { headers }
        );

        if (response.status === 200) {
          console.log(`Case with ID ${id} deleted successfully.`);
          console.log("Deleted Case Details:", response.data.deletedCase);

          window.location.reload();
        } else {
          console.error(
            "Failed to delete case. Unexpected response:",
            response
          );
          throw new Error(
            `Failed to delete case with ID ${id}. Unexpected response status: ${response.status}`
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
