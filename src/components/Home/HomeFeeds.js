import { Button } from "react-bootstrap";
import React from "react";
import { makeStyles } from "@mui/styles";
import CreateFeed from "./CreateFeed";

const useStyles = makeStyles({});

const HomeFeeds = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-center mt-3">
      <CreateFeed />
    </div>
  );
};

export default HomeFeeds;
