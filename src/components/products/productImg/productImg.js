import React from "react";

const ProductImg = ({ type, wooble }) => {
  let src = null;
  switch (type) {
    case "cash":
      src = "/img/screen-1.png";
      break;
    case "stocks":
      src = "/img/screen-2.png";
      break;
    case "options":
      src = "/img/screen-3.png";
      break;
    case "gold":
      src = "/img/screen-4.png";
      break;
    case "crypto":
      src = "/img/screen-5.png";
      break;
    default:
      src = null;
      break;
  }
  return (
    <div className="text" wobble={wooble}>
      <img
        src={src}
        style={{
          width: "200px",
          display: "block",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default ProductImg;
