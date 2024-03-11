import React, { useEffect, useState } from "react";
import "../style/update.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";

function Updatecase({ handleform, item }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...item,
    },
  });

  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);

    const { caseTitle, typeOfCase, dateOfIncident, photo, documents } = data;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const formData = new FormData();
      formData.append("caseTitle", caseTitle);
      formData.append("typeOfCase", typeOfCase);
      formData.append("dateOfIncident", dateOfIncident);
      formData.append("photo", photo[0]);
      formData.append("documents", documents[0]);

      const res = await axios.put(
        `https://legal-tech-api.onrender.com/api/v1/Case/userUpdateCase/${data._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      Notify.success("your case status update successfuly");
      if (res.data) {
        // console.log("case submitted", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reset({
      ...item,
    });
  }, [item, reset]);
  return (
    <div className="modal-overlayy">
      <form className="moTable" onSubmit={handleSubmit(onsubmit)}>
        <label for="caseTitle">Case Title:</label>
        <input type="text" name="caseTitle" {...register("caseTitle")} />

        <label for="typeOfCase">Type of Case:</label>
        <input
          type="text"
          id="typeOfCase"
          name="typeOfCase"
          {...register("typeOfCase")}
        />

        <label for="dateOfIncident">Date of Incident:</label>
        <input
          type="date"
          id="dateOfIncident"
          name="dateOfIncident"
          {...register("dateOfIncident")}
        />

        <label for="photo">Photo:</label>
        <input type="file" id="photo" name="photo" {...register("photo")} />

        <label for="document">Document:</label>
        <input
          type="file"
          id="document"
          name="document"
          {...register("documents")}
        />

        <button type="buttton">UPDATE</button>
        <button type="button" onClick={handleform}>
          CANCEL
        </button>
      </form>
    </div>
  );
}

export default Updatecase;
