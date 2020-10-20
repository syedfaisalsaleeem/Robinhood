import React from "react";

import { Button, Container } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import classes from "./commission.module.css";

const Commission = () => {
  return (
    <div className={classes.commission}>
      <div className="mainWarper">
        <Container>
          <div className={classes.warper}>
            <div className={classes.heading}>
              <h1>Break Free from Commission Fees</h1>
            </div>
            <div className={classes.para}>
              <p>
                Make unlimited commission-free trades in stocks, ETFs, and
                options with Robinhood Financial, as well as buy and sell
                cryptocurrencies with Robinhood Crypto. See our fee schedule to
                learn more about cost.
              </p>
            </div>
            <div className={classes.btn}>
              <Button startIcon={<InfoOutlinedIcon />}>
                Commissions Disclosure
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Commission;
