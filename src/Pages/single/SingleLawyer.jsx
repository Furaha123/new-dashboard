import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./singlelawyer.scss";
import Notiflix from "notiflix";
import axios from "axios";
import { PDFViewer } from "react-view-pdf";
const SingleLawyer = () => {
  const location = useLocation();

  const [lawyerData, setLawyerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };
        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/user/all",
          { headers },
          {
            params: {
              role: "lawyer",
            },
          }
        );

        console.log("data in single lawyer page: ", response.data);

        const filteredLawyerRows = response.data.clients.filter(
          (user) => user.role === "lawyer"
        );
        console.log("single data", filteredLawyerRows);
        setLawyerData(filteredLawyerRows);
      } catch (error) {
        console.error("Error fetching lawyer data:", error);
      }
    };

    fetchData();
  }, []);

  const _id = useParams();
  const userId = _id._id;
  const selectedLawyer = lawyerData?.find((item) => item._id === _id._id);

  console.log(selectedLawyer, lawyerData, _id);

  const { name, documents, photo, nationalID, isLawyer } = lawyerData;
  async function handleApprove(selectedLawyer) {
    const apiUrl = `https://legal-tech-api.onrender.com/api/v1/user/updateLawyerFields/${selectedLawyer}`;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));
    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.access_token}`,
        },
        body: JSON.stringify({
          isLawyer: true,
        }),
      });

      console.log("Lawyer approved:", response);
    } catch (error) {
      console.error(
        "Error approving lawyer:",
        error.response?.data || error.message
      );
    }
  }

  async function handleApprove(selectedLawyer) {
    const apiUrl = `https://legal-tech-api.onrender.com/api/v1/user/updateLawyerFields/${selectedLawyer}`;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.access_token}`,
        },
        body: JSON.stringify({
          isLawyer: true,
        }),
      });

      if (response.ok) {
        Notiflix.Notify.success("Lawyer approved successfully");
        console.log("Lawyer approved", response);
      } else {
        Notiflix.Notify.failure("Failed to approve lawyer");
        console.error(
          "Error approving lawyer:",
          error.response?.data || error.message
        );
      }
    } catch (error) {
      // Display error notification if an exception occurs
      Notiflix.Notify.failure("Failed to approve lawyer");
      console.error(
        "Error approving lawyer:",
        error.response?.data || error.message
      );
    }
  }

  async function handleReject(selectedLawyer) {
    const apiUrl = `https://legal-tech-api.onrender.com/api/v1/user/updateLawyerFields/${selectedLawyer}`;
    let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.access_token}`,
        },
        body: JSON.stringify({
          isLawyer: false,
        }),
      });

      if (response.ok) {
        // Display success notification if request succeeds
        Notiflix.Notify.success("Lawyer rejected successfully");
        console.log("Lawyer rejected", response);
      } else {
        // Display error notification if request fails
        Notiflix.Notify.failure("Failed to reject lawyer");
        console.error(
          "Error rejecting lawyer:",
          error.response?.data || error.message
        );
      }
    } catch (error) {
      // Display error notification if an exception occurs
      Notiflix.Notify.failure("Failed to reject lawyer");
      console.error(
        "Error rejecting lawyer:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div className="singleLawyers">
      <div className="singleContainers">
        <div className="toped">
          <div className="righted">
            <div className="case-details">
              <h2 className="case-title">Lawyer Details</h2>

              <div className="desc-1">Name: {selectedLawyer?.name}</div>
              <div className="desc-1">Email: {selectedLawyer?.email}</div>
              <div className="desc-1">
                Status: {selectedLawyer?.isLawyer ? "Approved" : "Rejected"}
              </div>
              <div className="desc-1">Country: {selectedLawyer?.country}</div>
              <div className="desc-1">City: {selectedLawyer?.city}</div>
              <div className="desc-1">Districk: {selectedLawyer?.district}</div>
              <div className="desc-1">Sector: {selectedLawyer?.sector}</div>
              <div className="desc-1">Cell: {selectedLawyer?.cell}</div>
              <div className="desc-1">
                Category: {selectedLawyer?.lawyerType}
              </div>

              <div className="desc-1">
                National ID: {selectedLawyer?.nationalID}
              </div>
              <div className="approve-btns">
                <div>
                  <button>
                    <a href={selectedLawyer?.photo}>Photo</a>
                  </button>
                  <button>
                    <a
                      href={selectedLawyer?.documents}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CV
                    </a>
                  </button>
                </div>
                <div className="reject-btns">
                  <button
                    onClick={() => handleApprove()}
                    className="approve-btn"
                  >
                    Approve
                  </button>
                  <button className="reject-btn" onClick={() => handleReject()}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLawyer;
