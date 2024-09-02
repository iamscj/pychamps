import React from "react";
import { Typography } from "@mui/material";
import "./about.css";
import lang from "../lang/index-lang";

export const About = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        marginTop={"20px"}
        className="baskervville-sc-regular"
      >
        {lang.ABOUT_US}
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        align="center"
        width={"85%"}
        margin={"auto"}
        marginTop={"20px"}
      >
        PyChamps is powered by experts in video editing, thumbnail and poster
        design, web development, and Python training, delivering top-notch
        services to meet your digital needs.
      </Typography>
    </>
  );
};
