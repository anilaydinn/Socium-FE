import React from "react";
import ContactBox from "../components/Contact/ContactBox";
import Header from "../components/General/Header";
import { connect } from "react-redux";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";

const Contact = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {!searchedUsers && <ContactBox />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
