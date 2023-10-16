import React from "react";
import Header from "./Header";
import classes from "./Mediaads.module.css";
import classs from "./Createads.module.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { CheckBox } from "@mui/icons-material";
import HouseIcon from "@mui/icons-material/House";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import classess from "./Mediaads.module.css";
function Createads() {
  const navigate = useNavigate();
  const prevButtonHandler = () => {
    navigate("/");
  };

  const nexButtonHandler = () => {
    navigate("/mediaads");
  };
  return (
    <div>
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
                Create Ads
              </div>
              <div style={{ display: "flex" }}>
                <div className={classs.mobile1}>
                  <input
                    type="checkbox"
                    id="checkbox"
                    style={{ fontSize: "30px" }}
                  />
                  <div className={classs.mobile2}>
                    <PanoramaFishEyeIcon
                      style={{
                        fontSize: "14px",
                        color: "grey",
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "50%",
                        marginTop: "10px",
                      }}
                    />
                    <div className={classs.mobile3}>
                      <div className={classs.mobile31}>
                        <DehazeIcon
                          style={{ fontSize: "12px", marginLeft: "5px" }}
                        />
                        <input></input>
                        <SearchIcon
                          style={{ fontSize: "12px", marginRight: "5px" }}
                        />
                      </div>

                      <div className={classs.mobile32}>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                      </div>

                      <div className={classs.mobile33}>
                        <p className={classs.mobile331}>
                          100-B1D8ND2 | In Stock and Ready to Ship | Great
                          Member Rewards program cosmostyle in
                        </p>
                        <hr></hr>
                        <p className={classs.mobile332}>
                          The Most Trusted Name in Cosmetics Fast. Free Shipping
                          on a Huge Selection. Use Promo Code FirstFree to save
                          20% at checkout Join our Family of Satisfied Customers
                        </p>
                      </div>
                      <div className={classs.mobile34}>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classs.mobile1}>
                  <input
                    type="checkbox"
                    id="checkbox"
                    style={{ fontSize: "30px" }}
                  />
                  <div className={classs.mobile2}>
                    <PanoramaFishEyeIcon
                      style={{
                        fontSize: "14px",
                        color: "grey",
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "50%",
                        marginTop: "10px",
                      }}
                    />
                    <div className={classs.mobile3}>
                      <div className={classs.mobile31}>
                        <DehazeIcon
                          style={{ fontSize: "12px", marginLeft: "5px" }}
                        />
                        <input></input>
                        <SearchIcon
                          style={{ fontSize: "12px", marginRight: "5px" }}
                        />
                      </div>

                      <div className={classs.mobile32}>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button type="submit" onClick={nexButtonHandler}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className={classess.house} style={{ marginTop: "20px" }}>
        <HouseIcon style={{ color: "grey", marginRight: "1rem" }} />
        <ArrowBackIosNewIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={prevButtonHandler}
        />{" "}
        2 of 5
        <ArrowForwardIosIcon
          style={{ fontSize: "1.2rem", color: "grey" }}
          onClick={nexButtonHandler}
        />
      </div>
    </div>
  );
}

export default Createads;
