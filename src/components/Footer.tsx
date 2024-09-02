import React from "react";
import { Container, Typography, IconButton, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang/index-lang";

type Props = {
  isDarkMode: boolean;
};

export const Footer = ({ isDarkMode }: Props) => {
  const backgroundColor = isDarkMode ? "#212121" : "#cbcbcb";
  return (
    <footer
      style={{
        paddingTop: "40px",
        backgroundColor: backgroundColor,
      }}
    >
      <Container maxWidth="md" style={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          PyChamps f
        </Typography>
        <Typography
          variant="body1"
          style={{ margin: "auto", maxWidth: "500px", lineHeight: "28px" }}
        >
          {lang.FOOTER_TAG_LINE}
        </Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <IconButton
            component={"a"}
            href="tel:+918618341082"
            color="inherit"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </IconButton>
          <IconButton
            component={"a"}
            href="https://wa.me/8618341082"
            color="inherit"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </IconButton>
          <IconButton
            component={"a"}
            href="https://www.linkedin.com/in/upendr-joshi-14842a190/"
            color="inherit"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </IconButton>
        </Box>
      </Container>
      <Box
        style={{
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">copyright &copy;2024 | PyChamps</Typography>
      </Box>
    </footer>
  );
};
