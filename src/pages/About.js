import React from "react";
import AboutBox from "../components/About/AboutBox";
import Footer from "../components/General/Footer";
import Header from "../components/General/Header";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";
import { connect } from "react-redux";

const About = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {(!searchedUsers || searchedUsers.length == 0) && <AboutBox />}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
