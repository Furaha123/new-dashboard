import { MdOutlineNotificationsActive } from "react-icons/md";
import { mycontext } from "./context/Contextprovider";
import Updatecase from "../single_page/Updatecase";
import { useState } from "react";
import "../style/Casestatus.scss";
import "../style/Chat.scss";
import ReactPaginate from "react-paginate";
import Viewcase from "../single_page/Viewcase";

function Casestatus() {
  const [form, setForm] = useState(false);
  const handleform = () => {
    setForm(!form);
  };

  const { cases } = mycontext();
  const [UpdateItem, setItem] = useState(null);

  // Pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCases = cases.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const [modal, setModal] = useState(false);

  const [selectedCase, setSelectedCase] = useState(null);

  const handlecase = (item) => {
    setSelectedCase(item);
    setModal(!modal);
  };

  return (
    <>
      <div className="userstatus">
        {form && <Updatecase item={UpdateItem} handleform={handleform} />}
        <div className="casestatus-container">
          <div className="casepad">
            <h3>Submitted cases</h3>
          </div>
          <div className="cases-wrapper">
            {currentCases.map((item, index) => (
              <div className="case-card" key={index}>
                <span className="textfonti">{item.caseTitle}</span>
                <p>Type of Case: {item.typeOfCase}</p>
                <p>Date of Incident: {item.dateOfIncident}</p>
                <div>
                  <button onClick={() => handlecase(item)}
                  className="view1"
                  >VIEW</button>

                  <button
                    onClick={() => {
                      setItem(item);
                      handleform();
                    }}
                    className="view1"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* React Paginate */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={Math.ceil(cases.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
        <div className="subst"></div>
      </div>
      {modal && (
        <Viewcase selectedCase={selectedCase} handlecase={handlecase} />
      )}
    </>
  );
}

export default Casestatus;
