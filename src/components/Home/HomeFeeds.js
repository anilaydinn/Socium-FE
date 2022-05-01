import React from "react";
import { makeStyles } from "@mui/styles";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";
import { isLogin } from "../../helpers/helpers";

const useStyles = makeStyles({});

const HomeFeeds = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-center mt-3">
      {isLogin() && <CreateFeed col="6" />}
      <Feed col="6" />
    </div>
  );
};

export default HomeFeeds;
