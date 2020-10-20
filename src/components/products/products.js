import React, { useState } from "react";

import ProductText from "./productText/productText";
import ProductImg from "./productImg/productImg";

import { Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import classes from "./products.module.css";

const data = [
  { title: "Cash Management", type: "cash" },
  { title: "Stocks & Fund", type: "stocks" },
  { title: "Options", type: "options" },
  { title: "Gold", type: "gold" },
  { title: "Crypto", type: "crypto" },
];

const Products = () => {
  const [item, setItem] = useState("cash");
  const [wobble, setWobble] = useState(0);

  return (
    <div className={classes.products}>
      <div className="mainWarper">
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.heading}>
              <h2>Our Products</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item xs={12} lg={7}>
            <Grid item xs={12}>
              <AppBar
                variant="outlined"
                position="static"
                className={classes.appbar}
              >
                <Toolbar className={classes.toolbar}>
                  {data.map((dt) => (
                    <button
                      className={classes.btn}
                      key={dt.type}
                      onAnimationEnd={() => {
                        setTimeout(() => {
                          setWobble(0);
                        }, 1000);
                      }}
                      onClick={() => {
                        setItem(dt.type);
                        setWobble(1);
                      }}
                    >
                      {dt.title}
                    </button>
                  ))}
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <ProductText itemType={item} wooble={wobble} />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <ProductImg type={item} wooble={wobble} />
          </Grid>
        </Grid>
        <Grid container justify="space-between" style={{ marginTop: "2rem" }}>
          <Grid item>
            <Button
              startIcon={<InfoOutlinedIcon />}
              style={{ textTransform: "capitalize" }}
            >
              Varaible APY and Debit Card Disclosures
            </Button>
          </Grid>
          <Grid item>Cash Management altered through Robinhood Financial</Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Products;
