import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import "../style/casesigning.scss";
import { useParams } from "react-router-dom";
import { Notify } from "notiflix";

const CaseSigning = ({ onClose, onSelectLawyer, selectedCaseId }) => {
  const [open, openModal] = useState(false);
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const { _id } = useParams();

  console.log(selectedLawyer);

  useEffect(() => {
    const fetchLawyers = async () => {
      let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
      try {
        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/user/all",
          {
            params: {
              userType: "lawyer",
            },
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${Authorization?.access_token}`,
            },
          }
        );

        setLawyers(response.data.clients);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    if (open) {
      fetchLawyers();
    }
  }, [open]);

  const handleSignClick = () => {
    openModal(true);
  };

  const handleModalClose = () => {
    openModal(false);
  };

  const handleDropdownChange = (event) => {
    const selectedLawyerId = event.target.value;
    setSelectedLawyer(selectedLawyerId);

    const currentCaseId = selectedCaseId;
  };

  const handleAssign = async () => {
    if (!selectedLawyer) {
      alert("Please select a lawyer");
      return;
    }

    let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
    try {
      const response = await axios.put(
        `https://legal-tech-api.onrender.com/api/v1/Case/adminUpdateCase/${_id}`,
        {
          lawyerId: selectedLawyer,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Authorization?.access_token}`,
          },
        }
      );

      console.log(
        `Case  assigned to lawyer with id  ${selectedLawyer} successfully.`,
        response.data
      );
      Notify.success("Case assigned successfully");
      if (res.data) {
        res.data._lawyerId = selectedLawyer;
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Assigning case failed:", error.message);
    }
  };

  useEffect(() => {
    console.log("changed");
  }, [selectedLawyer]);
  return (
    <>
      <button className="sign-case" onClick={handleSignClick}>
        <p className="sign-text">Sign case to a lawyer</p>
        <FaLongArrowAltRight color="#000" />
      </button>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="choose">Choose a Lawyer</h2>
            <select onChange={handleDropdownChange} value={selectedLawyer}>
              <option value="" disabled>
                Select a Lawyer
              </option>
              {lawyers?.map((lawyer) => (
                <option key={lawyer._id} value={lawyer._id}>
                  {lawyer.name}
                </option>
              ))}
            </select>
            <button onClick={handleAssign}>Assign Case</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseSigning;
