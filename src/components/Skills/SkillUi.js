import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularDiv, CorcularIcon } from "../style";

export const SkillUi = ({ value, img, size }) => {
  return (
    <CircularDiv>
      <CorcularIcon>{img}</CorcularIcon>
      <CircularProgressbar
        value={value}
        strokeWidth={8}
        styles={{
          path: {
            // Path color
            stroke: "#d96c6c",
          },
        }}
      />
    </CircularDiv>
  );
};
