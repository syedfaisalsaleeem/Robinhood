import React, { useEffect } from "react";

import { Grid } from "@material-ui/core";

import classes from "./productText.module.css";

const ProductText = ({ itemType, wooble }) => {
  let text = null;
  switch (itemType) {
    case "cash":
      text =
        "Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.";
      break;
    case "stocks":
      text =
        "Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).";
      break;
    case "options":
      text =
        "Be bullish on stocks you believe in and bearish on the ones you don’t. It’s your call.";
      break;
    case "gold":
      text =
        "Access research reports, trade on margin, and make bigger deposits with quicker access to funds—all starting at $5 per month.";
      break;
    case "crypto":
      text =
        "Tap into the cryptocurrency market to buy, HODL, and sell Bitcoin, Ethereum, Dogecoin, and more, 24/7 with Robinhood Crypto.";
      break;
    default:
      text = "null";
      break;
  }

  return (
    <>
      <Grid item xs={12} className={classes.text}>
        <div className={classes.para}>
          <p>{text}</p>
        </div>
      </Grid>

      <Grid item className={classes.btn}>
        <button>Learn More</button>
      </Grid>
    </>
  );
};

export default ProductText;
