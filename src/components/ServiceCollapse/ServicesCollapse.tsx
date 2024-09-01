import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

export const SERVICES = [
  { name: "Professional Video Editing" },
  { name: "Custom Thumbnail Creation" },
  { name: "Creative Poster Design" },
  {
    name: "Comprehensive Python Training Courses",
    details: "Details",
    path: "/python-course",
  },
  { name: "Web Application Development" },
  { name: "Spring Boot Project Implementation" },
  { name: "Logo Design" },
];

export const ServicesCollapse = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div style={{ width: "85%", margin: "auto", marginTop: "30px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What We Offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              {SERVICES.map((service, index) => (
                <li key={index}>
                  {service.name}
                  {service.details && service.path && (
                    <>
                      {" "}
                      <span
                        onClick={() => handleServiceClick(service.path)}
                        style={{
                          color: "#6565ff",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        {service.details}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
