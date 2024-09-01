import React from "react";

type Props = {
  videoUrl: string;
};

export const EmbedVideo = ({ videoUrl }: Props) => {
  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <iframe
        src={videoUrl}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
