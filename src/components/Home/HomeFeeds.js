import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";
import { getUserId, isLogin } from "../../helpers/helpers";
import { fetchUser } from "../../redux/actions/userActions";
import { fetchPosts } from "../../redux/actions/postActions";
import SearchedUsers from "../SearchedUsers/SearchedUsers";
import { useMediaQuery } from "react-responsive";
import { Form, FormControl } from "react-bootstrap";
import { fetchUserWithFilter } from "../../redux/actions/userActions";

const HomeFeeds = (props) => {
  const {
    fetchPosts,
    feeds,
    fetchUser,
    user,
    searchedUsers,
    fetchUserWithFilter,
  } = props;

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    fetchUser(getUserId());
  }, []);

  useEffect(() => {
    if (user != undefined) {
      fetchPosts(getUserId(), user.friendIds);
    }
  }, [user]);

  const handleSearchUser = (e) => {
    e.preventDefault();
    fetchUserWithFilter(e.target.value);
  };

  return (
    <div className="row justify-content-center d-block mt-3">
      {isMobile && isLogin() && (
        <Form className="d-flex mb-3" style={{ marginRight: "auto" }}>
          <FormControl
            type="search"
            placeholder="Search users"
            className="me-2"
            aria-label="Search"
            onChange={(e) => handleSearchUser(e)}
          />
        </Form>
      )}
      {isLogin() && searchedUsers && searchedUsers.length == 0 && (
        <CreateFeed col="6" />
      )}
      {isLogin() &&
        searchedUsers &&
        searchedUsers.length == 0 &&
        feeds &&
        feeds.map((feed) => <Feed key={feed.id} col="6" feed={feed} />)}
      {isLogin() && !searchedUsers && <CreateFeed col="6" />}
      {searchedUsers && searchedUsers.length > 0 && <SearchedUsers />}
      {!searchedUsers &&
        feeds &&
        feeds.map((feed) => <Feed key={feed.id} col="6" feed={feed} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.post.feeds,
  user: state.user.user,
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserWithFilter: (filter) => dispatch(fetchUserWithFilter(filter)),
    fetchPosts: (userId, friendIds) => dispatch(fetchPosts(userId, friendIds)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeeds);
