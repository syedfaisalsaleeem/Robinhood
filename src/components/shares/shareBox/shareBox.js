import React from "react";

import { Grid } from "@material-ui/core";

import classes from "./shareBox.module.css";

const shareBox = () => {
  return (
    <Grid item sm={12} md={3}>
      <div>
        <div>
          <div className={classes.title}>
            <p>Invest Any Amount</p>
          </div>
        </div>
        <div>
          <div className={classes.text}>
            <p>
              Choose how much you want to invest, and we’ll convert from dollars
              to parts of a whole share.
            </p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default shareBox;
