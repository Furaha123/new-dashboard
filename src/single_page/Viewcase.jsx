import React from "react";
import "./Viewcase.scss";
import { mycontext } from "../components/context/Contextprovider";

import { IoClose } from "react-icons/io5";
function Viewcase({ selectedCase, handlecase }) {
  const { cases } = mycontext();
  return (
    <div className="case-overlay">
      <div className="m1">
        {selectedCase && (
          <div className="case-details">
            <div className="padd">
              <div className="texto">
                <b>Case descrption</b>
              </div>
              <IoClose onClick={handlecase} className="buttonn">
                Close
              </IoClose>
            </div>
            <div className="adata">
              <div>
                <b>Case title:</b>
                {selectedCase.caseTitle}
              </div>
              <div>
                <b>Type of Case:</b> {selectedCase.typeOfCase}
              </div>
              <div>
                <b>Date of Incident:</b> {selectedCase.dateOfIncident}
              </div>
              <div>
                <b>Description:</b> {selectedCase.description}
              </div>
              <div className="doc1">
                <div>
                  <button className="but1">
                    <a href={selectedCase.documents} target="_blank">
                      View document
                    </a>
                  </button>
                </div>
                <div>
                  <button className="but1">
                    <a href={selectedCase.photo} target="_blank">
                      View Photo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Viewcase;
