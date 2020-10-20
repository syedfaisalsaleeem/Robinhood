import React from "react";

import { Grid } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import classes from "./supportBox.module.css";

const SupportBox = ({ title, t1, t2, t3, view }) => {
  return (
    <Grid item xs={12} md={6} lg={4} className={classes.supportBox}>
      <div>
        <AccountCircleOutlinedIcon
          style={{ fontSize: "2rem", marginBottom: "-0.5rem" }}
        />
      </div>
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <div>{t1}</div>
        </li>
        <li>
          <div>{t2}</div>
        </li>
        <li>
          <div>{t3}</div>
        </li>
        <li>
          <div className={classes.view}>
            <a>View All</a>
            <i className="fas fa-arrow-right"></i>
          </div>
        </li>
      </ul>
    </Grid>
  );
};

export default SupportBox;
