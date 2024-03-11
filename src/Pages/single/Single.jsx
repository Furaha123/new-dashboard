import React, { useEffect, useState } from "react";
import "./single.scss";
import { MdDownload } from "react-icons/md";
import { useParams } from "react-router";
import axios from "axios";
import CaseSigning from "../../components/CaseSigning";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import { PDFViewer } from "react-view-pdf";

function Single(id) {
  const { _id } = useParams();
  const [singleCase, setSingleCase] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    axios
      .get(`https://legal-tech-api.onrender.com/api/v1/case/getCaseById/${_id}`)
      .then(({ data }) => {
        console.log(data.caseTitle);
        setSingleCase(data);
      })
      .catch((error) => alert(error));
  }, []);

  const {
    caseTitle,
    typeOfCase,
    progress,
    dateOfIncident,
    documents,
    location,
    photo,
    description,
  } = singleCase;

  console.log(documents);
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="right-case">
            <div className="case-details">
              <div className="sign-case">
                <CaseSigning />
              </div>
              <p className="case-titl">Case Description</p>

              <p className="case-title">{caseTitle}</p>
              <p className="desc-1">{description}</p>

              <div className="desc-bottom">
                Category:{typeOfCase}
                <br />
                Date: {dateOfIncident}
                <br />
                Progress: {progress}
                <br />
                Location: {location}
              </div>
            </div>
          </div>
          <div className="bottoms">
            <h2 className="title">Additional documents</h2>
            <div className="doc-contaier">
              <button
                className="button-bottom"
                onClick={() => setFullscreen(true)}
              >
                View Doc
                <MdDownload />
              </button>
            </div>

            {fullscreen && (
              <div className="modal-overlays">
                <div className="modals">
                  <span
                    className="close-x"
                    onClick={() => setFullscreen(false)}
                  >
                    X
                  </span>
                  <div>
                    <a
                      href={documents}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PDFViewer url={documents} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="doc-contaier">
              <button className="button-bottom" onClick={() => setImage(true)}>
                View Image
                <MdDownload />
              </button>
            </div>
            {image && (
              <div className="modal-overlays">
                <div className="modals">
                  <span className="close-x" onClick={() => setImage(false)}>
                    X
                  </span>
                  <div className="image-view-container">
                    <img src={photo} className="image-view" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
