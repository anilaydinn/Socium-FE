import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    marginTop: "auto",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
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
