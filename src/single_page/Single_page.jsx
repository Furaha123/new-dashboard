import React, { useState } from "react";
import "./Single_page.scss";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";

function Single_page() {
  // const [auth, setAuth] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);

    const {
      caseTitle,
      typeOfCase,
      dateOfIncident,
      photo,
      documents,
      description,
    } = data;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));
    // console.log("=============================================", auth);
    try {
      const formData = new FormData();
      formData.append("caseTitle", caseTitle);
      formData.append("typeOfCase", typeOfCase);
      formData.append("dateOfIncident", dateOfIncident);
      formData.append("photo", photo[0]);
      formData.append("documents", documents[0]);
      formData.append("description", description);

      const res = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/case/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      Notify.success("case submitted successfuly");
      if (res.data) {
        console.log("case submitted", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      //  console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container-s">
      <div className="cons-a">
        <h1 className="cons-b">Get Consult For Your Case Now</h1>
      </div>
      <div className="holder">
        <div className="serv_container">
          <div className="data">Family law</div>
          <div className="data">Civil Lam</div>
          <div className="data">Criminal Law</div>
          <div className="data">Business Law</div>
          <div className="data">Education Law</div>
          <div className="data">Real Estate Law</div>
        </div>
        <div className="textf">
          Get Consult Now To Proffessional <span className="tex">Lawyers</span>
        </div>
        <div className="case-submition">
          <form className="form" onSubmit={handleSubmit(onsubmit)}>
            <div className="repuired1">
              <div>
                <label for="case-title">Title Of The Case:</label>
                <input
                  type="text"
                  id="caseTitle"
                  name="caseTitle"
                  className="caseinput"
                  placeholder="Title of the case"
                  {...register("caseTitle", { required: true })}
                />

                {errors.caseTitle?.type === "required" && (
                  <p role="alert" className="v">
                    Please case title is required !
                  </p>
                )}
              </div>
              <div>
                <label for="case-title">Type Of The Case:</label>
                <input
                  type="text"
                  id="typeOfCase"
                  name="typeOfCase"
                  className="caseinput"
                  placeholder="Type of the case"
                  {...register("typeOfCase", { required: true })}
                />

                {errors.typeOfCase?.type === "required" && (
                  <p role="alert" className="v">
                    Please type of case is required !
                  </p>
                )}
              </div>
            </div>
            <div className="repuired2">
              <div>
                <label for="date-of-incident">Date Of The Incident:</label>
                <input
                  type="date"
                  id="dateOfIncident"
                  name="dateOfIncident"
                  className="caseinput"
                  placeholder="Date of the incident"
                  {...register("dateOfIncident", { required: true })}
                />
                {errors.dateOfIncident?.type === "required" && (
                  <p role="alert" className="v">
                    {" "}
                    Please date of incident is required !
                  </p>
                )}
              </div>
              <div>
                <label for="photo">Images For Showing Evidences:</label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  multiple
                  accept="image/*"
                  className="caseinput"
                  placeholder="Images for showing evidences"
                  {...register("photo", { required: true })}
                />
                {errors.photo?.type === "required" && (
                  <p role="alert" className="v">
                    Please photo for evidences is required !
                  </p>
                )}
              </div>
            </div>

            <div className="repuired3">
              <div>
                <label for="photo" className="v">
                  Documents:
                </label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  multiple
                  accept=".pdf,.doc,.docx"
                  placeholder="Documents"
                  className="caseinput"
                  {...register("documents", { required: true })}
                />
                {errors.documents?.type === "required" && (
                  <p role="alert" className="v">
                    {" "}
                    Please ducument is required !
                  </p>
                )}
              </div>

              <div>
                <label for="date-of-incident">Case Descrption:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="caseinput"
                  placeholder="case description"
                  {...register("description", { required: true })}
                />
                {errors.description?.type === "required" && (
                  <p role="alert" className="v">
                    {" "}
                    Please case description is required !
                  </p>
                )}
              </div>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Single_page;
