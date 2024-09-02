import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./about.css";
import lang from "../lang/index-lang";

type Props = {
  isDarkmode: boolean;
};

export const ReachOut = ({ isDarkmode }: Props) => {
  const reachOutButtonBackgroundColor = isDarkmode ? "white" : "black";
  const reachOutButtonColor = isDarkmode ? "black" : "white";
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        marginTop={"20px"}
        className="baskervville-sc-regular"
      >
        Reach Out to US
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        align="center"
        width={"85%"}
        margin={"auto"}
        marginTop={"20px"}
      >
        {lang.REACT_OUT_DESCRIPTION}
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <Button
          component={"a"}
          href="tel:+918618341082"
          target="_blank"
          sx={{
            backgroundColor: reachOutButtonBackgroundColor,
            color: reachOutButtonColor,
            marginRight: 2,
          }}
        >
          Call Us
        </Button>
        <Button
          component={"a"}
          href="https://wa.me/8618341082"
          target="_blank"
          sx={{
            backgroundColor: reachOutButtonBackgroundColor,
            color: reachOutButtonColor,
            marginRight: 2,
          }}
        >
          WhatsApp
        </Button>
      </Box>
    </>
  );
};
