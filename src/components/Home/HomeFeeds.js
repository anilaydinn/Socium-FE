import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";
import { getUserId, isLogin } from "../../helpers/helpers";
import { fetchUser } from "../../redux/actions/userActions";
import { fetchPosts } from "../../redux/actions/postActions";

const HomeFeeds = (props) => {
  const { fetchPosts, feeds, fetchUser, user } = props;

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
      {isLogin() && <CreateFeed col="6" />}
      {feeds && feeds.map((feed) => <Feed key={feed.id} col="6" feed={feed} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.post.feeds,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId, friendIds) => dispatch(fetchPosts(userId, friendIds)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeeds);
