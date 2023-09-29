import React from "react";

import { Link } from "react-router-dom";

export default function NewsBox({ title, imgSrc, linkTo }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(50, 50, 50, 0.05)",
        width: "95%",
        height: "150px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        borderRadius: "2px",
      }}
    >
      <Link
        to={linkTo}
        style={{ textDecoration: "none", color: "black", maxWidth: "70%" }}
      >
        <h1 style={{ fontSize: "20px" }}>{title}</h1>
      </Link>

      <img width="40%" src={imgSrc} />
    </div>
  );
}