import React from "react";

type Props = {
  imageUrl: string;
};

export const EmbedImage = ({ imageUrl }: Props) => {
  return (
    <div
      style={{
        width: "400px",
        height: "auto",
        maxHeight: "400px",
        marginLeft: "5px",
        marginRight: "5px",
        overflow: "hidden",
        marginTop: "10px",
      }}
    >
      <img
        src={imageUrl}
        alt="OurWorkImages"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
};
