import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <a href="/">APP LOGO</a>
        </div>
        <div className={classes.navbar}>
          <ul>
            <li>
              <a href="/">DASHBOARD</a>
            </li>
            <li>
              <a href="/Createads">CREATE ADS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
