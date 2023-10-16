import React from "react";
import Header from "./Header";
import classes from "./Mediaads.module.css";
import { useNavigate } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Mediaads() {
  const navigate = useNavigate();
  const prevButtonHandler = () => {
    navigate("/Createads");
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

              <div className={classes.second}>
                <div className={classes.second1}>
                  <label>Landscape Marketing Image (1.9:1)</label>
                  <input
                    type="text"
                    placeholder="Add the URL of the image you want to use for the ad"
                  ></input>
                </div>
                <div className={classes.second2}>
                  <label>Portrait Marketing Image(4:5)</label>
                  <input
                    type="text"
                    placeholder="Add the URL of the image you want to use for the ad"
                  ></input>
                </div>
                <div className={classes.second3}>
                  <label>Square Marketing Image(1:1)</label>
                  <input
                    type="text"
                    placeholder="Add the URL of the image you want to use for the ad"
                  ></input>
                </div>
              </div>

              <div className={classes.third}>
                <label>Video URL</label>
                <input
                  type="text"
                  placeholder="Add the URL of the video you want to use for the ad"
                ></input>
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
            <div className={classes.button}>
              <button
                type="submit"
                className={classes.button1}
                onClick={prevButtonHandler}
              >
                Back
              </button>
              <button
                type="submit"
                className={classes.button2}
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
            style={{ fontSize: "1.2rem" }}
            onClick={prevButtonHandler}
          />{" "}
          3 of 5
          <ArrowForwardIosIcon
            style={{ fontSize: "1.2rem" }}
            onClick={nexButtonHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Mediaads;
