import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateFeed from "./CreateFeed";
import Feed from "./Feed";
import { isLogin } from "../../helpers/helpers";
import { fetchPosts } from "../../redux/actions/postActions";

const HomeFeeds = (props) => {
  const { fetchPosts, feeds } = props;
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="row justify-content-center d-block mt-3">
      {isLogin() && <CreateFeed col="6" />}
      {feeds && feeds.map((feed) => <Feed col="6" feed={feed} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.post.feeds,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeeds);
