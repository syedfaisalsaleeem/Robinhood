import React from "react";

import { Grid } from "@material-ui/core";

import classes from "./slide.module.css";

const Slide = ({ slideNum }) => {
  let slideContent = { img: "", title: "", text: "" };
  switch (slideNum) {
    case 1:
      slideContent = {
        img: "/img/screen-1.png",
        title: "Learn As You Grow",
        text:
          "Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).",
      };
      break;
    case 2:
      slideContent = {
        img: "/img/screen-2.png",
        title: "Manage Your Portfolio",
        text:
          "Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app.",
      };
      break;
    case 3:
      slideContent = {
        img: "/img/screen-3.png",
        title: "Keep Tabs on Your Money",
        text:
          "Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.",
      };
      break;
    default:
      slideContent = {};
      break;
  }
  return (
    <>
      <Grid container item xs={9}>
        <Grid item xs={5}>
          <div className={classes.slide__img}>
            <img src={slideContent.img} />
          </div>
        </Grid>
        <Grid item xs={7} style={{ margin: "auto" }}>
          <div className={classes.slide__title}>
            <h1>{slideContent.title}</h1>
          </div>
          <div className={classes.slide__text}>
            <p>{slideContent.text}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Slide;
