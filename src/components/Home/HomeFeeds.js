import React from "react";
import { makeStyles } from "@mui/styles";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";

const useStyles = makeStyles({});

const HomeFeeds = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-center mt-3">
      <CreateFeed />
      <Feed />
    </div>
  );
};

export default HomeFeeds;
