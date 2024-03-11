import React, { useEffect, useState } from "react";
import "../home/DashboardHome.scss";

import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import Chart from "../../components/chart/Chart";

function Dashboard() {
  const [clients, setUsers] = useState();
  const [cases, setCases] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
      try {
        const response = await fetch(
          "https://legal-tech-api.onrender.com/api/v1/user/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Authorization?.access_token}`,
            },
          }
        );

        const data = await response.json();
        const clients = data.clients || [];

        setUsers(clients.length);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let Authorization = JSON.parse(localStorage.getItem("IsLoggedIn"));
      try {
        const response = await fetch(
          "https://legal-tech-api.onrender.com/api/v1/case/getAllCases",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Authorization?.access_token}`,
            },
          }
        );

        const data = await response.json();
        const cases = data.cases || [];

        setCases(cases.length);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="widgets">
        <Widget type="user" amount={clients} diff={20} />
        <Widget type="booking" amount={10} diff={30} />
        <Widget type="tour" amount={10} diff={15} />
        <Widget type="pending" amount={cases} diff={25} />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Case History " aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle"></div>
      </div>
    </>
  );
}

export default Dashboard;
