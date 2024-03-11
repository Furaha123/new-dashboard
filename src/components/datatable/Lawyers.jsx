import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./tour.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { LiaSearchSolid } from "react-icons/lia";
import { handleUserDelete } from "./handleUserDelete";
function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return date.toLocaleString("en-US", options);
}
const actionColumn = [
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => {
      const { id } = params;
      return (
        <div className="cellAction">
          <Link to={`/dashboard/singlelawyer/${params.row._id}`}>
            <div className="viewButton1">View</div>
          </Link>
          <div className="deleteButton1" onClick={() => handleUserDelete(id)}>
            Delete
          </div>
        </div>
      );
    },
  },
];

const columns = [
  {
    field: "name",
    headerName: "Lawyers",
    width: 180,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  },

  {
    field: "isLawyer",
    headerName: "Status",
    width: 140,
  },
  {
    field: "lawyerType",
    headerName: "Category",
    width: 150,
  },
  {
    field: "lastLogin",
    headerName: "Join Date",
    width: 100,
    valueFormatter: (params) => formatDate(params.value),
  },
];

function Lawyers() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };

        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/user/all",
          {
            headers,
            params: {
              role: "lawyer",
            },
          }
        );

        const lawyerRows = response.data.clients.filter(
          (user) => user.role === "lawyer"
        );

        setRows(lawyerRows);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    if (open) {
      fetchLawyers();
    }
  }, [open]);

  return (
    <>
      <div className="tourtable">
        <div className="tourtableContainer">
          <div className="datatable">
            <h5 className="title-user">All Lawyers</h5>
            <DataGrid
              rows={rows}
              columns={columns.concat(actionColumn)}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              checkboxSelection
              getRowId={(row) => row._id}
              style={{ maxWidth: "100%" }}
              page={5}
              components={{
                Toolbar: GridToolbar,
              }}
              pageSizeOptions={[5, 10, 25]}
              disableRowSelectionOnClick
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lawyers;
