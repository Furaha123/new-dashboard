import React, { useEffect, useState } from "react";

const ViewCaseDetails = ({ handleOpenModaal, selectedCase }) => {
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      if (selectedCase) {
        try {
          const response = await fetch(
            `https://legal-tech-api.onrender.com/api/v1/Case/getCaseById/${selectedCase._id}`
          );
          const data = await response.json();
          setCaseDetails(data);
        } catch (error) {
          console.error("Error fetching case details:", error);
        }
      }
    };

    fetchCaseDetails();
  }, [selectedCase]);

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    zIndex: "1000",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: 340,
  };
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "999",
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Case Details</h2>
        {caseDetails && (
          <>
            <p>
              Case Title: <span>{caseDetails.caseTitle}</span>
            </p>
            <p>
              Type of Case: <span>{caseDetails.typeOfCase}</span>
            </p>
            <p>
              Date of Incident: <span>{caseDetails.dateOfIncident}</span>
            </p>
            {/* Displaying Images with Link */}
            <p>
              Photo:{" "}
              {caseDetails.photo ? (
                <a
                  href={caseDetails.photo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Photo
                </a>
              ) : (
                <span>No photo available</span>
              )}
            </p>
            {/* Handling Documents with Link */}
            <p>
              Documents:
              {caseDetails.documents && caseDetails.documents.length > 0 ? (
                <ul>
                  {caseDetails.documents.map((document, index) => (
                    <li key={index}>
                      <a
                        href={document}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Document {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>No documents available</span>
              )}
            </p>
          </>
        )}
        <button onClick={() => handleOpenModaal(null)}>Close</button>
      </div>
    </div>
  );
};

export default ViewCaseDetails;
