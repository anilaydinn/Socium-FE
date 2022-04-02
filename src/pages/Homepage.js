import React from "react";
import Header from "../components/General/Header";
import Footer from "../components/General/Footer";
import HomeBanner from "../components/Home/HomeBanner";
import HomeFeeds from "../components/Home/HomeFeeds";

const Homepage = () => {
  return (
    <div>
      <Header />
      {true ? <HomeFeeds /> : <HomeBanner />}
    </div>
  );
};

export default Homepage;
