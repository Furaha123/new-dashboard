import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CaseDetails from "./CaseDetails";
import { Notify } from "notiflix";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Create a new component for displaying images in a modal
const ImageViewer = ({ images, onClose }) => (
  <div className="modal-view-overlay">
    <div className="image-viewer">
      <span className="close" onClick={onClose}>
        <FaTimes />
      </span>
      {Array.isArray(images) ? (
        images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))
      ) : (
        <p>No images available.</p>
      )}
    </div>
  </div>
);

// Create a new component for displaying documents in a modal
const DocumentViewer = ({ documents, onClose }) => (
  <div className="modal-view-overlay">
    <div className="document-viewer">
      <span className="close" onClick={onClose}>
        <FaTimes />
      </span>
      {Array.isArray(documents) ? (
        <ul>
          {documents.map((document, index) => (
            <li key={index}>
              <a href={document} target="_blank" rel="noopener noreferrer">
                {document}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No documents available.</p>
      )}
    </div>
  </div>
);

function Case() {
  const [isCaseDetailModal, setIsCaseDetailModal] = useState(false);
  const [cases, setCases] = useState([]);
  const [filterCases, setFilterCases] = useState([]);
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [caseDetails, setCaseDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [viewerContent, setViewerContent] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [1, 5, 10];
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const totalPages = Math.ceil(filterCases.length / rowsPerPage);
  //calculate index for 1st and last case
  const indexOfLastCase = currentPage * rowsPerPage;
  const indexOfFirstCase = indexOfLastCase - rowsPerPage;
  const currentCases = filterCases.slice(indexOfFirstCase, indexOfLastCase);

  const user = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const lawyername = user.USER.name;

  const fetchCaseDetails = async (caseId) => {
    try {
      const response = await fetch(
        `https://legal-tech-api.onrender.com/api/v1/Case/getCaseById/${caseId}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      const data = await response.json();
      setCaseDetails(data);
      setIsCaseDetailModal(true);
    } catch (error) {
      console.error("Error fetching case details:", error);
      setError("An error occurred while fetching case details.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://legal-tech-api.onrender.com/api/v1/Case/getAllCases",
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );
        const data = await response.json();

        const fetchedCases = data.cases || [];

        const userCases = fetchedCases.filter((singleCase) => {
          return singleCase.assignedTo === lawyername;
        });

        setCases(fetchedCases);
        setFilterCases(userCases);
      } catch (error) {
        console.error("Error fetching cases:", error);
        setError("An error occurred while fetching cases.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lawyername]);

  async function handleAccept(id) {
    const apiUrl = `https://legal-tech-api.onrender.com/api/v1/Case/lawyerAcceptReject/${id}`;
    let Auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Auth.access_token}`,
        },
        body: JSON.stringify({
          isAccepted: true,
        }),
      });

      console.log("Case accepted successfully:", response);

      setFilterCases((prevCases) =>
        prevCases.map((singleCase) =>
          singleCase._id === id
            ? { ...singleCase, isAccepted: true }
            : singleCase
        )
      );

      Notify.success("Case accepted successfully!");
    } catch (error) {
      console.error("Error accepting case:", error);

      Notify.success("Case accepted successfully!");
    }
  }

  async function handleReject(id) {
    const apiUrl = `https://legal-tech-api.onrender.com/api/v1/Case/lawyerAcceptReject/${id}`;
    let Auth = JSON.parse(localStorage.getItem("IsLoggedIn"));

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Auth.access_token}`,
        },
        body: JSON.stringify({
          isAccepted: false,
        }),
      });

      console.log("Case rejected successfully:", response);
      setFilterCases((prevCases) =>
        prevCases.filter((singleCase) => singleCase._id !== id)
      );

      Notify.success("Case rejected successfully");
    } catch (error) {
      console.error("Error rejecting case:", error);
    }
  }

  const handleViewMore = (caseId) => {
    setSelectedCaseId(caseId);
    fetchCaseDetails(caseId);
  };

  const handleViewPhotos = (photos) => {
    setViewerContent(photos);
    setIsImageViewerOpen(true);
  };

  const handleViewDocuments = (documents) => {
    setViewerContent(documents);
    setIsDocumentViewerOpen(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="lawyer">
        {loading && <p>Loading cases...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className="case-container row">
            <div className="col-8 vrow">
              <div className="my-cases">
                <div className="table">
                  <h6>Active cases</h6>
                  <div className="row theader col-12">
                    <span className="cell col-3">Title</span>
                    <span className="cell col-5">Description</span>
                    <span className="cell col-2">category</span>
                    <span className="cell col-2">action</span>
                  </div>
                  {currentCases
                    .filter((singleCase) => singleCase.isAccepted)
                    .map((acceptedCase, index) => (
                      <div className="row tbody col-12" key={index}>
                        <span className="cell col-3">
                          {acceptedCase.caseTitle
                            ? acceptedCase.caseTitle
                            : "Family Case"}
                        </span>
                        <span className="cell truncate-text col-5">
                          {acceptedCase.description
                            ? acceptedCase.description
                            : "Yesterday, i was moving on street and "}
                        </span>
                        <span className="cell col-2">
                          {acceptedCase.typeOfCase
                            ? acceptedCase.typeOfCase
                            : "[Undefined]"}
                        </span>
                        <span className="cell col-2 view">
                          <a onClick={() => handleViewMore(acceptedCase._id)}>
                            view more
                          </a>
                        </span>
                      </div>
                    ))}
                  <div className="pagination">
                    <div className="rowsPerPage">
                      Rows per page:
                      <select
                        onChange={handleRowsPerPageChange}
                        value={rowsPerPage}
                      >
                        {rowsPerPageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      {indexOfFirstCase + 1}–{indexOfLastCase} of{" "}
                      {filterCases.length}
                    </div>
                    <div className="pagination-buttons">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <FaChevronLeft />
                      </button>
                      {/* {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          className={currentPage === index + 1 ? "active" : ""}
                        >
                          {index + 1}
                        </button>
                      ))} */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="new-case">
                <div className="cards">
                  <h6>case requests</h6>
                  {filterCases
                    .filter((singleCase) => !singleCase.isAccepted)
                    .map((newCase, index) => (
                      <div className="card" key={index}>
                        <h2>{newCase.caseTitle}</h2>
                        <span>{newCase.typeOfCase}</span>
                        <p>{newCase.description}</p>
                        <div className="action">
                          <a
                            className="btn"
                            onClick={() => handleAccept(newCase._id)}
                          >
                            accept
                          </a>
                          <a
                            className="button"
                            onClick={() => handleReject(newCase._id)}
                          >
                            reject
                          </a>
                        </div>
                      </div> || "No pending case available"
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isCaseDetailModal && (
          <div className="case-modal-overlay">
            <div className="modal">
              <span
                className="close"
                onClick={() => setIsCaseDetailModal(false)}
              >
                <FaTimes />
              </span>
              <div className="case-detail">
                <div className="row">
                  <div className="col-5">
                    <h2>{caseDetails?.caseTitle}</h2>
                    <span className="title">{caseDetails?.typeOfCase}</span>
                    <hr />
                    <p>{caseDetails?.description}</p>
                  </div>
                  <div className="col-7">
                    <label>date</label>
                    <span>{caseDetails?.dateOfIncident}</span>
                    <label>documents</label>

                    {caseDetails?.photo.map((photo, index) => (
                      <li key={index} onClick={() => handleViewPhotos([photo])}>
                        {photo}
                      </li>
                    ))}
                    {caseDetails?.documents.map((doc, index) => (
                      <li
                        key={index}
                        onClick={() => handleViewDocuments([doc])}
                      >
                        {doc}
                      </li>
                    ))}

                    {/* <ul className="photo">
                            {caseDetails?.photo.map((photo, index) => (
                              <li
                                key={index}
                                onClick={() => handleViewPhotos([photo])}
                              >
                                {photo}
                              </li>
                            ))}
                          </ul>
                          <ul className="doc">
                            {caseDetails?.documents.map((doc, index) => (
                              <li
                                key={index}
                                onClick={() => handleViewDocuments([doc])}
                              >
                                {doc}
                              </li>
                            ))}
                          </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isImageViewerOpen && (
          <ImageViewer
            images={viewerContent}
            onClose={() => setIsImageViewerOpen(false)}
          />
        )}
        {isDocumentViewerOpen && (
          <DocumentViewer
            documents={viewerContent}
            onClose={() => setIsDocumentViewerOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default Case;
