import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentCenter: {
    height: "calc(100vh - 144px)",
  },
  bannerText: {
    color: "#17a2b8",
  },
});

const HomeBanner = () => {
  const classes = useStyles();

  return (
    <div className="container-fluid">
      <div
        className={`d-flex align-items-center justify-content-center ${classes.contentCenter}`}
      >
        <div className={`h1 ${classes.bannerText}`}>Socium</div>
      </div>
    </div>
  );
};

export default HomeBanner;
