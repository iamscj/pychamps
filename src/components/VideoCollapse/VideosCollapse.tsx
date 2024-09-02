import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { EmbedVideo } from "./EmbedVideo";

const VIDEO_URLS = [
  "https://www.youtube.com/embed/-Cw7jhJHXrQ?autoplay=0&mute=1",
  "https://www.youtube.com/embed/_Rhoa_sfWg8?autoplay=0&mute=1",
  "https://www.youtube.com/embed/RtWdQTi6h3Q?autoplay=0&mute=1",
  "https://www.youtube.com/embed/wgesMXwsLdo?autoplay=0&mute=1",
];

export const VideosCollapse = () => {
  return (
    <div style={{ width: "85%", margin: "auto", marginTop: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Sample Edited Videos</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: "16px",
            overflowY: "auto",
            maxHeight: "100%",
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
            {VIDEO_URLS.map((videoUrl, index) => (
              <EmbedVideo key={index} videoUrl={videoUrl} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
