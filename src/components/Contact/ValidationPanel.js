import React from "react";

export const ValidationPanel = (props) => {
  return (
    <p
      style={{
        fontSize: "10px",
        margin: "0",
        color: props.reg === "true" ? "#7fff7f" : "#ff7f7f",
      }}>
      {props.children}
    </p>
  );
};
