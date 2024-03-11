import React, { useState, useEffect } from "react";
import axios from "axios";
import "./subs.scss";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import SubscriptionModal from "./SubscriptionModal";

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
    field: "duration",
    headerName: "Duration",
    width: 140,
  },
  {
    field: "price",
    headerName: "Price",
    width: 140,
  },
  {
    field: "userNumber",
    headerName: "Number",
    width: 160,
  },

  {
    field: "subscriptionStatus",
    headerName: "Status",
    width: 140,
  },
  {
    field: "subscriptionType",
    headerName: "Subcription",
    width: 160,
  },

  {
    field: "subscriptionDate",
    headerName: "Date",
    width: 100,
    valueFormatter: (params) => formatDate(params.value),
  },
];
const actionColumn = [];

function Subscriptions() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Authorization?.access_token}`,
      };
      try {
        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/sub/all",
          {
            headers,
          }
        );
        setRows(response.data.sub);
      } catch (error) {
        console.error("Error fetching subscription data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="datatable">
      <h5 className="title-user">All Subcriptions</h5>
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
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Subscriptions;
