import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";
import { getUserId, isLogin } from "../../helpers/helpers";
import { fetchUser } from "../../redux/actions/userActions";
import { fetchPosts } from "../../redux/actions/postActions";
import SearchedUsers from "../SearchedUsers/SearchedUsers";

const HomeFeeds = (props) => {
  const { fetchPosts, feeds, fetchUser, user, searchedUsers } = props;

  useEffect(() => {
    fetchUser(getUserId());
  }, []);

  useEffect(() => {
    if (user != undefined) {
      fetchPosts(getUserId(), user.friendIds);
    }
  }, [user]);

  return (
    <div className="row justify-content-center d-block mt-3">
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
    fetchPosts: (userId, friendIds) => dispatch(fetchPosts(userId, friendIds)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeeds);
