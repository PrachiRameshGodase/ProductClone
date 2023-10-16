import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import DatasetIcon from "@mui/icons-material/Dataset";
import ReactApexChart from "react-apexcharts";
import Header from "./Header";
import classes from "./Mediaads.module.css";
import HouseIcon from "@mui/icons-material/House";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Content() {
  const navigate = useNavigate();
  const prevButtonHandler = () => {
    navigate("/");
  };

  const nexButtonHandler = () => {
    navigate("/Createads");
  };
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [chartData, setChartData] = useState([]);
  const chartOptions = {
    labels: ["Male", "Female", "UnKnown"],
    chart: {
      type: "donut",
    },
  };

  const prepareChartData = () => {
    const labels = ["Male", "Female", "Unknown"];
    const costs = [12528, 24912, 3943];
    setChartData(costs);
    chartOptions.labels = labels;
    setShowChart(true);
    setShowTable(false);
  };

  const showTableData = () => {
    setShowChart(false);
    setShowTable(true);
  };
  return (
    <div>
      <Header></Header>
      <div className="main_content">
        <div className="left_side">
          <table className="customers">
            <thead>
              <tr>
                <th>Campaigns</th>
                <th>Click</th>
                <th>Cost</th>
                <th>Conversations</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cosmetics</td>
                <td>712</td>
                <td>USD 4722</td>
                <td>8</td>
                <td>USD 16,568</td>
              </tr>
              <tr>
                <td>Serums</td>
                <td>3961</td>
                <td>USD 27331</td>
                <td>115</td>
                <td>USD 362526</td>
              </tr>
              <tr>
                <td>FaceWash</td>
                <td>9462</td>
                <td>USD 76831</td>
                <td>123</td>
                <td>USD 266,800</td>
              </tr>
              <tr>
                <td>Shampoes</td>
                <td>439</td>
                <td>USD 2151</td>
                <td>5</td>
                <td>USD 11029</td>
              </tr>
              <tr>
                <td>Condtions</td>
                <td>1680</td>
                <td>USD 3864</td>
                <td>49</td>
                <td>USD 175245</td>
              </tr>
              <tr>
                <td>Facewash2</td>
                <td>4978</td>
                <td>USD 29370</td>
                <td>189</td>
                <td>USD 623106</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>26510</td>
                <td>USD 143879</td>
                <td>489</td>
                <td>USD 15,73,563</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right_side">
          {showChart && (
            <div className="chart-container">
              <ReactApexChart
                options={chartOptions}
                series={chartData}
                type="donut"
                width="350"
              />
            </div>
          )}

          {showTable && (
            <table className="customers">
              <thead>
                <tr>
                  <th>Groups</th>
                  <th>Click</th>
                  <th>Cost</th>
                  <th>Conversations</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Male</td>
                  <td>348</td>
                  <td>USD 12,528</td>
                  <td>42</td>
                  <td>USD 62,118</td>
                </tr>
                <tr>
                  <td>Female</td>
                  <td>692</td>
                  <td>USD 24,912</td>
                  <td>35</td>
                  <td>USD 5,175</td>
                </tr>
                <tr>
                  <td>Unknown</td>
                  <td>105</td>
                  <td>USD 3,943</td>
                  <td>3</td>
                  <td>USD 4,489</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>1,145</td>
                  <td>USD 41,383</td>
                  <td>80</td>
                  <td>USD 71,782</td>
                </tr>
              </tbody>
            </table>
          )}
          <section className="icons">
            <div className="icons_right">
              <DonutLargeIcon onClick={prepareChartData} />
              <DatasetIcon onClick={showTableData} />
            </div>
          </section>
        </div>
      </div>
      <div className={classes.house} style={{ marginTop: "250px" }}>
        <HouseIcon style={{ color: "grey", marginRight: "1rem" }} />
        <ArrowBackIosNewIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={prevButtonHandler}
        />{" "}
        1 of 5
        <ArrowForwardIosIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={nexButtonHandler}
        />
      </div>
    </div>
  );
}

export default Content;
