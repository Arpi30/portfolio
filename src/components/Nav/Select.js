import React from "react";
import { Selectnav } from "../style";

export const Select = ({ onSelectHandler }) => {
  const selectHandler = (value) => {
    onSelectHandler(value);
  };
  return (
    <Selectnav onChange={selectHandler} aria-label="Default select example">
      <option value="hu">HU</option>
      <option value="eng">EN</option>
      <option value="de">DE</option>
    </Selectnav>
  );
};
