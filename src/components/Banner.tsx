import React from "react";

const IMAGE_URL = "/banner.jpg";

export const Banner = () => {
  return (
    <img
      src={IMAGE_URL}
      alt="BannerImage"
      style={{
        width: "100%",
        maxHeight: "300px",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
};
