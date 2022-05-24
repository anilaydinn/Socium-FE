import React from "react";
import Header from "../components/General/Header";
import HomeBanner from "../components/Home/HomeBanner";
import HomeFeeds from "../components/Home/HomeFeeds";
import { isLogin } from "../helpers/helpers";

const Homepage = () => {
  return (
    <div>
      <Header />
      {isLogin() ? <HomeFeeds /> : <HomeBanner />}
    </div>
  );
};

export default Homepage;
