import React from "react";
import classes from "./Media.module.css";
import classs from "./Mediaads.module.css";
import HouseIcon from "@mui/icons-material/House";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
function Media() {
  const navigate = useNavigate();
  const prevButtonHandler = () => {
    navigate("/mediaads");
  };

  const nexButtonHandler = () => {
    navigate("/textmedia");
  };
  return (
    <div className={classes.overlay}>
      <div className={classes.media}>
        <input type="checkbox" checked id="checkbox" />
        <h4>Submitted</h4>
      </div>

      <div className={classs.house} style={{ marginTop: "650px" }}>
        <HouseIcon style={{ color: "grey", marginRight: "1rem" }} />
        <ArrowBackIosNewIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={prevButtonHandler}
        />{" "}
        4 of 5
        <ArrowForwardIosIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={nexButtonHandler}
        />
      </div>
    </div>
  );
}

export default Media;
