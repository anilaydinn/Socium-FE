import React from "react";
import Header from "../components/General/Header";
import ProfileEditBox from "../components/ProfileEdit/ProfileEditBox";
import { connect } from "react-redux";
import SearchedUsers from "../components/SearchedUsers/SearchedUsers";

const ProfileEdit = (props) => {
  const { searchedUsers } = props;

  return (
    <div>
      <Header />

      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {(searchedUsers == [] ||
        searchedUsers == undefined ||
        searchedUsers.length == 0) && <ProfileEditBox />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
