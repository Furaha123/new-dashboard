import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CaseDetails = () => {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(
         `https://legal-tech-api.onrender.com/api/v1/case/getCaseById/${caseId}`
        );


        setCaseData(response.data);
      } catch (error) {
        console.error("Error fetching case details:", error);
      }
    };


    fetchData();
  }, [caseId]);

  return (
    <div className="lawyer">
      <div className="casedetail-container">
        {caseData ? (
          <>
            <div className="nav-header">
              <span className="row">
                <span className="navigate">
                  <a href="/lawyer">home</a>
                </span>


                <span className="navigate">
                  <a href="/lawyer/cases">cases</a>
                </span>

                
                <span className="navigate">
                  <a href="/lawyer/cases">cases</a>
                </span>

                <span className="navigate">
                  <a href="/lawyer/cases/:caseId">{caseData.caseTitle}</a>
                </span>
              </span>
            </div>

            <div className="detail-data">
              <h2>
                title: <span>{caseData.caseTitle}</span>
              </h2>
              <p>
                Type of Case: <span> {caseData.typeOfCase}</span>
              </p>
              <p>
                Date of Incident: <span>{caseData.dateOfIncident}</span>
              </p>
              <p>
                Progress: <span>{caseData.progress}</span>
              </p>
              <p>
                Assigned To: <span>{caseData.assignedTo}</span>
              </p>

           
              <div className="photos">
                <h3>Photos:</h3>
                {caseData.photo.map((photo, index) => (
                  <img key={index} src={photo} alt={`photo ${index + 1}`} />
                ))}
              </div>

              {/* Displaying documents */}
              <div className="documents">
                <h3>Documents:</h3>
                {caseData.documents.map((document, index) => (
                  <p key={index}>{document}</p>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div class="loader-container">

            <div class="loader"></div>

            <div class="loader">
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CaseDetails;