import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import classes from "./Mediaads.module.css";
import HouseIcon from "@mui/icons-material/House";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function TextMedia() {
  const navigate = useNavigate();
  const prevButtonHandler = () => {
    navigate("/media");
  };

  const nexButtonHandler = () => {
    navigate("/media");
  };
  return (
    <>
      <Header />
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.subcontainer}>
            <div className={classes.super}>
              <div
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "18px",
                  marginTop: "0.5rem",
                }}
              >
                Create Text & Media
              </div>

              <div className={classes.first}>
                <div className={classes.first1}>
                  <label>Heading 01</label>
                  <input
                    type="text"
                    placeholder="Add a heading that would make users interested"
                  ></input>
                  <label style={{ marginTop: "0.5rem" }}>Heading 02</label>
                  <input
                    type="text"
                    placeholder="Add a heading that would make users interested"
                  ></input>
                </div>
                <div className={classes.first2}>
                  <label>Description 01</label>
                  <input
                    type="text"
                    placeholder="Add primary text to help users understand more about your products, services or offers "
                  ></input>
                </div>
              </div>

              <div className={classes.fourth}>
                <div className={classes.fourth1}>
                  <label>Business Name</label>
                  <input
                    type="text"
                    placeholder="Add your business name"
                  ></input>
                </div>
                <div className={classes.fourth2}>
                  <label>Button Label</label>
                  <input
                    type="text"
                    placeholder="Select a label that that best suits your ad"
                  ></input>
                </div>
              </div>
              <div className={classes.fifth}>
                <label style={{ marginTop: "0.5rem" }}>Website URL</label>
                <input
                  type="text"
                  placeholder="Add the URL of the landing page you want to use for the ad"
                ></input>
              </div>
            </div>
            <div className={classes.sub}>
              <button
                type="submit"
                className={classes.sub1}
                onClick={prevButtonHandler}
              >
                Back
              </button>
              <button
                type="submit"
                className={classes.sub2}
                onClick={nexButtonHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className={classes.house}>
          <HouseIcon style={{ color: "grey", marginRight: "1rem" }} />
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.2rem", color: "grey" }}
            onClick={prevButtonHandler}
          />{" "}
          5 of 5
          <ArrowForwardIosIcon
            style={{ fontSize: "1.2rem", color: "grey" }}
            onClick={nexButtonHandler}
          />
        </div>
      </div>
    </>
  );
}

export default TextMedia;
