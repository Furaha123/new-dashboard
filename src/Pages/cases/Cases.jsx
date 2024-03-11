import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { Pagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./cases.scss";
import { handleDelete } from "./handleDelete";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "caseTitle",
    headerName: "Title",
    width: 140,
  },
  {
    field: "description",
    headerName: "Description",
    width: 180,
  },
  {
    field: "typeOfCase",
    headerName: "Type Case",
    width: 150,
  },
  {
    field: "dateOfIncident",
    headerName: "Date",
    width: 100,
  },
  {
    field: "documents",
    headerName: "Documents",
    width: 280,
  },
  // {
  //   field: "photo",
  //   headerName: "Photos",
  //   width: 280,
  //   // renderCell: (params) => <img src={params.value} />,
  // },
];
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div className="tableCell">
            <Link to={`/dashboard/single/${params.row._id}`}>
              <IconButton onClick={() => handleView(params.row._id)}>
                <VisibilityIcon className="view-icon" />
              </IconButton>
            </Link>
            <IconButton onClick={() => handleDelete(params.row._id)}>
              <DeleteIcon className="delete-icon" />
            </IconButton>
          </div>
        </div>
      );
    },
  },
];

const Cases = () => {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openCaseSigningModal, setOpenCaseSigningModal] = useState(false);

  const [selectedCaseId, setSelectedCaseId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Authorization?.access_token}`,
        };

        const response = await axios.get(
          "https://legal-tech-api.onrender.com/api/v1/case/getAllCases",
          { headers }
        );

        console.log("Response from API:", response.data.cases);
        setRows(response.data.cases);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = apiData.slice(startIndex, endIndex);

  const handleView = async (id) => {
    let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Authorization?.access_token}`,
      };

      const response = await axios.get(
        "https://legal-tech-api.onrender.com/api/v1/Case/getCaseById/{id}",
        { headers }
      );

      setAdditionalDetails(response.data.docs);
      setSelectedCaseId(id);
      setOpenCaseSigningModal(true);
    } catch (error) {
      console.error("Error fetching additional details:", error.message);
    }
  };

  return (
    <>
      <div className="datatable">
        <Box sx={{ width: "83%" }}>
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
            pageSizeOptions={[5, 10, 25, 100]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default Cases;
