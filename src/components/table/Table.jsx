import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Table1() {
  const rows = [
    {
      id: 2357741,
      country: "Italy",
      // Image: Tour1,
      customer: "Jane smith",
      date: "1 March",
      amount: "920",
      method: "cash on delivery",
      status: "Booked",
    },

    {
      id: 2235235,
      country: "Germany",
      // Image: Tour2,
      customer: "Jane smith",
      date: "3 March",
      amount: "3400",
      method: "cash on payment",
      status: "Pending",
    },

    {
      id: 2357741,
      country: "Israel",
      // Image: Tour3,
      customer: "moses",
      date: "1 April",
      amount: "920",
      method: "Online",
      status: "Booked",
    },

    {
      id: 2357741,
      country: "Israel",
      // Image: Tour4,
      customer: "Furaha",
      date: "1 April",
      amount: "920",
      method: "cash on delivery",
      status: "Pending",
    },

    {
      id: 2357741,
      country: "Israel",
      // Image: Tour5,
      customer: "Furaha",
      date: "1 April",
      amount: "920",
      method: "Online",
      status: "Booked",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Country</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell"> {row.country}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table1;
