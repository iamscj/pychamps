import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { EmbedImage } from "./EmbedImage";

const VIDEO_URLS = [
  "/photoCollapse/image1.jpg",
  "/photoCollapse/image2.jpg",
  "/photoCollapse/image3.png",
  "/photoCollapse/image4.png",
  "/photoCollapse/image5.png",
  "/photoCollapse/image6.png",
  "/photoCollapse/image7.jpg",
];

export const PhotosCollapse = () => {
  return (
    <div style={{ width: "85%", margin: "auto", marginTop: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Sample Posters, Thumbnails, and Logos</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: "16px",
            overflowY: "auto",
            maxHeight: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {VIDEO_URLS.map((imageUrl, index) => (
              <EmbedImage key={index} imageUrl={imageUrl} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
