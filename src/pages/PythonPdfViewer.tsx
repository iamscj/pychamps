import React from "react";

const PythonPdfViewer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        margin: "auto",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src={`/python-course.pdf`}
        title="Python Course PDF"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          minWidth: "300px",
          minHeight: "300px",
        }}
      />
    </div>
  );
};

export default PythonPdfViewer;
