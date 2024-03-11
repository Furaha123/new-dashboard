import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./subs.scss";
import "./reply.scss";
import "./handleReply";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import { handleDeleteContact } from "./handleDeleteContact";

import { Button } from "@mui/material";
import { handleReply } from "./handleReply";

const columns = [
  {
    field: "fullNames",
    headerName: "Names",
    width: 170,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "subject",
    headerName: "Subject",
    width: 160,
  },
  {
    field: "message",
    headerName: "Message",
    width: 340,
  },
];
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const { id } = params;
      const [adminResponse, setAdminResponse] = useState();
      console.log(params);
      const handleSubmit = async (event) => {
        let Authorization = event.preventDefault();
        try {
          let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
          const headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Authorization?.access_token}`,
          };
          const response = await axios.put(
            `https://legal-tech-api.onrender.com/api/v1/cont/contact/adminResponse/${id}`,
            { adminResponse },
            {
              headers,
            }
          );

          if (response.status === 200) {
            console.log("Reply successful:", response.data);
             window.location.reload();
          } else {
            throw new Error(
              `Failed to submit reply. Status: ${response.status}`
            );
          }
        } catch (error) {
          console.error(
            "Error replying:",
            error.response?.data || error.message
          );
        }
      };
      return (
        <div className="cellAction">
          <Button
            className="deleteButton"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </Button>
          <Button
            className="reply-btn2"
            onClick={() => {
              setOpen(!open);
              handleReply(id);
            }}
            style={{
              color: "green",
              padding: "2px 5px",
              border: "1px solid rgba(0, 128, 0, 0.345)",
            }}
          >
            Reply
          </Button>
          {open && (
            <div className="overlays">
              <div className="modal">
                <form onSubmit={handleSubmit}>
                  <div className="modal-contents">
                    <h5 className="title-reply">Reply message</h5>
                    <textarea
                      placeholder="Type your reply"
                      name="adminResponse"
                      value={adminResponse}
                      onChange={(e) => setAdminResponse(e.target.value)}
                    />
                    <div className="btns-reply">
                      <Button
                        className="reply-btn"
                        type="submit"
                        style={{ color: "white" }}
                      >
                        Reply
                      </Button>
                      <Button
                        className="reply-btn"
                        onClick={() => setOpen(!open)}
                        style={{ color: "white" }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    },
  },
];

function Contacts() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState();
  const [replyText, setReplyText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [id, setId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };

        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/cont/contact/all",
          {
            headers,
          }
        );
        setRows(response.data.contacts);
        setId(response.data._id);
        console.log("personal id", id);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("pageSize", pageSize);
  }, [pageSize]);
  const handlePageChange = (params) => {
    setPage(params.page);
  };

  return (
    <div className="datatable">
      <h5 className="title-user">All Contacts</h5>
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Contacts;
