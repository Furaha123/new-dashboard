import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import "./datatable.scss";
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
const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 140,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 110,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
    valueFormatter: (params) => formatDate(params.value),
  },
  {
    field: "userType",
    headerName: "User Type",
    width: 130,
  },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) => {
      const { id } = params;
      return (
        <div className="cellAction">
          <div className="deleteButton" onClick={() => handleUserDelete(id)}>
            Delete
          </div>
        </div>
      );
    },
  },
];

function CustomPagination({ count, page, onChange }) {
  return (
    <Pagination
      count={count}
      page={page + 1}
      onChange={(_, newPage) => onChange(newPage)}
    />
  );
}

function DataTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(7);

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
              page,
              pageSize,
            },
          }
        );
        setRows(response.data.clients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="datatable">
      <h5 className="title-user">All Users</h5>
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
        components={{
          Toolbar: GridToolbar,
        }}
        onPageChange={(params) => handlePageChange(params.page)}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default DataTable;
