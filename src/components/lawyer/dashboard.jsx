import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import { BiSolidMessageAltDetail } from "react-icons/bi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function dashboard({ aspect }) {
  const datas = [
    { name: "Janaury", Cases: 400, Completed: 240, UnComplete: 160 },
    { name: "Febuary", Cases: 300, Completed: 140, UnComplete: 160 },
    { name: "March", Cases: 200, Completed: 340, UnComplete: 60 },
    { name: "April", Cases: 278, Completed: 120, UnComplete: 158 },
    { name: "May", Cases: 189, Completed: 239, UnComplete: 50 },
  ];
  const data = [
    { label: "Done", value: 400, color: "#82ca9d" },
    { label: "Ongoing", value: 200, color: "#ffc658" },
    // Add more chart data if needed
  ];
  const [totalCases, setTotalCases] = useState(6);

  const user = JSON.parse(localStorage.getItem("isLoggedIn"));
  const token = user?.access_token;
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLoggedIn");
    window.location.assign("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await fetch(
            "https://legal-tech-api.onrender.com/api/v1/Case/getCaseById/%7Bid%7D",
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
              },
            }
          );
  
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
  
          const data = await response.json();
          // Process the data as needed
        }
      } catch (error) {
        console.error("Error fetching case by ID:", error);
      }
    };
  
    fetchData();
  }, [user]);
  

  return (
    <div className="lawyer">
      <div className="container">
        <div className="row col-12">
          <div className="col-9 vrow">
            <div className="row">
              <div className="col-4">
                <div className="info-box">
                  <div className="bx-content">
                    <span>Total Cases</span>
                    <h3>{totalCases}</h3>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="info-box">
                  <div className="bx-content">
                    <span>Success Cases</span>
                    <h3>13</h3>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="info-box">
                  <div className="bx-content">
                    <span>Submitted</span>
                    <h3>10</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart">
              <div className="title">Case History</div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                  width={720}
                  height={350}
                  data={datas}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="uncompleted"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="gray" />
                  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Cases"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#total)"
                    name="Cases"
                  />
                  <Area
                    type="monotone"
                    dataKey="Completed"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#completed)"
                    name="Completed"
                  />
                  <Area
                    type="monotone"
                    dataKey="UnComplete"
                    stroke="#ffc658"
                    fillOpacity={1}
                    fill="url(#uncompleted)"
                    name="Uncompleted"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-3 vrow">
            <div className="col-12 notifications">
              <h5>Recent notifications</h5>
              <span className="notification">You have new cases available</span>
              <span className="notification">One message from admin</span>
              <span className="notification">New Updated from the user </span>
            </div>
            <div className="col-12 circular-progress">
              <h4>Case Progress</h4>
              <div className="pie-chart-container">
                <PieChart
                  series={[
                    {
                      startAngle: -90,
                      endAngle: 90,
                      data,
                    },
                  ]}
                  height={380}
                  width={300}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
