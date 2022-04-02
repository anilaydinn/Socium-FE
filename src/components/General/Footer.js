import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          position: "relative",
          bottom: "0px",
          width: "100%",
        }}
      >
        © 2022 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://github.com/anilaydinn"
          target="_blank"
        >
          Anıl Aydın
        </a>
      </div>
    </footer>
  );
};

export default Footer;
