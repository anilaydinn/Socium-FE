import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import { likePost, sendCommentToPost } from "../../api";
import { getUserId } from "../../helpers/helpers";
import { fetchPosts, fetchUserPosts } from "../../redux/actions/postActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  gridMargin: {
    marginBottom: "1rem",
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    border: "1px solid #f2f4f9",
    borderRadius: "0.25rem",
    boxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.2)",
    WebkitBoxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.2)",
    MozBoxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.2)",
  },
  rounded: {
    borderRadius: "0.25rem !important",
  },
  cardHeader: {
    padding: "0.875rem 1.5rem",
    marginBottom: "0",
    backgroundColor: "rgba(0,0,0,0)",
    borderBottom: "1px solid #f2f4f9jus",
  },
  imgXs: {
    width: "37px",
    height: "37px",
  },
  roundedCircle: {
    borderRadius: "50% !important",
  },
  cardFooter: {
    padding: "0.875rem 1.5rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderTop: "1px solid #f2f4f9",
  },
  button: {
    backgroundColor: "#17a2b8;",
    border: "none",
    marginRight: "10px",
  },
});

const Feed = (props) => {
  const { userId } = useParams();
  const { col, feed, fetchPosts, fetchUserPosts } = props;
  const classes = useStyles();

  const [content, setContent] = useState("");
  const [isSeeMore, setIsSeeMore] = useState(false);

  const handleLikePost = async () => {
    const resp = await likePost(feed.id, getUserId());
    fetchPosts();
    fetchUserPosts(getUserId());
  };

  const handleSendComment = async (e) => {
    e.preventDefault();
    await sendCommentToPost(feed.id, content);
    setContent("");
    fetchPosts();
    if (userId) {
      fetchUserPosts(userId);
    } else {
      fetchUserPosts(getUserId());
    }
  };

  return (
    <div className={`col-md-${col} mx-auto ${classes.gridMargin}`}>
      <div className={`${classes.card} ${classes.rounded}`}>
        <div className={`${classes.cardHeader}`}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={
                  feed.user.id === getUserId()
                    ? `/profile`
                    : `/profile/${feed.user.id}`
                }
              >
                <img
                  className={`${classes.imgXs} ${classes.roundedCircle}`}
                  src={feed.user.profileImage}
                  height={37}
                  width={37}
                  alt=""
                />
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={
                  feed.user.id === getUserId()
                    ? `/profile`
                    : `/profile/${feed.user.id}`
                }
              >
                <div className="ml-2">
                  <p>
                    {feed.user.name} {feed.user.surname}
                  </p>
                  <p className="tx-11 text-muted">{feed.createdAt}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="mb-3 tx-14">{feed.description}</p>
          <img className="img-fluid" src={feed.image} alt="" />
        </div>
        <div className={`${classes.cardFooter}`}>
          <div className="d-flex post-actions">
            {feed.whoLikesUserIds && feed.whoLikesUserIds.length}
            <a
              className="d-flex align-items-center text-muted mr-5"
              onClick={() => handleLikePost()}
              style={{
                marginLeft: "5px",
                backgroundColor:
                  feed.whoLikesUserIds &&
                  feed.whoLikesUserIds.includes(getUserId())
                    ? "red"
                    : "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-heart icon-md"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="row">
          {feed.comments && (
            <DynamicComments feed={feed} isSeeMore={isSeeMore} />
          )}
          {feed.comments && feed.comments.length > 3 && !isSeeMore && (
            <div className="col-md-3 d-flex mx-auto mb-2">
              <Button
                className={`btn ${classes.button}`}
                onClick={() => setIsSeeMore(true)}
              >
                See more
              </Button>
            </div>
          )}
          {feed.comments && feed.comments.length > 3 && isSeeMore && (
            <div className="col-md-3 d-flex mx-auto mb-2">
              <Button
                className={`btn ${classes.button}`}
                onClick={() => setIsSeeMore(false)}
              >
                See less
              </Button>
            </div>
          )}
          <div className="col-md-12">
            <form
              onSubmit={(e) => handleSendComment(e)}
              role="form"
              className="post-to-timeline mb-3"
            >
              <textarea
                className="form-control"
                style={{ height: "70px", marginBottom: "10px" }}
                placeholder="Whats on your mind..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
              <div className="row justify-content-end">
                <div className="col-auto">
                  <Button type="submit" className={`btn ${classes.button}`}>
                    Comment
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const DynamicComments = (props) => {
  const { feed, isSeeMore } = props;

  let componentArr = [];
  if (feed.comments && feed.comments.length > 3 && !isSeeMore) {
    for (let i = 0; i < 3; i++) {
      componentArr.push(
        <div key={feed.comments[i].id} className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              {feed.comments[i].user.profileImage && (
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      feed.comments[i].user.id === getUserId()
                        ? "/profile"
                        : `/profile/${feed.comments[i].user.id}`
                    }
                  >
                    <img
                      src={feed.comments[i].user.profileImage}
                      className="comment-profile-image"
                      height={37}
                      width={37}
                    />
                  </Link>
                </div>
              )}
              <div className="col-md-8">
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      feed.comments[i].user.id === getUserId()
                        ? "/profile"
                        : `/profile/${feed.comments[i].user.id}`
                    }
                  >
                    <h6 className="card-title">
                      {`${feed.comments[i].user.name}  ${feed.comments[i].user.surname}`}
                    </h6>
                  </Link>
                  <p className="card-text">{feed.comments[i].content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {feed.comments[i].createdAt}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return componentArr;
  } else if (feed.comments && feed.comments.length <= 3 && !isSeeMore) {
    return (
      feed.comments &&
      feed.comments.map((comment) => (
        <div key={comment.id} className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              {comment.user.profileImage && (
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      comment.user.id === getUserId()
                        ? "/profile"
                        : `/profile/${comment.user.id}`
                    }
                  >
                    <img
                      src={comment.user.profileImage}
                      className="comment-profile-image"
                      height={37}
                      width={37}
                    />
                  </Link>
                </div>
              )}
              <div className="col-md-8">
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      comment.user.id === getUserId()
                        ? "/profile"
                        : `/profile/${comment.user.id}`
                    }
                  >
                    <h6 className="card-title">
                      {`${comment.user.name}  ${comment.user.surname}`}
                    </h6>
                  </Link>
                  <p className="card-text">{comment.content}</p>
                  <p className="card-text">
                    <small className="text-muted">{comment.createdAt}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  } else if (isSeeMore) {
    return (
      feed.comments &&
      feed.comments.map((comment) => (
        <div key={comment.id} className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              {comment.user.profileImage && (
                <div className="col-md-1 d-flex align-items-center justify-content-center pl-1">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      comment.user.id === getUserId()
                        ? "/profile"
                        : `/profile/${comment.user.id}`
                    }
                  >
                    <img
                      src={comment.user.profileImage}
                      className="comment-profile-image"
                      height={37}
                      width={37}
                    />
                  </Link>
                </div>
              )}
              <div className="col-md-8">
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      comment.user.id === getUserId()
                        ? "/profile"
                        : `/profile/${comment.user.id}`
                    }
                  >
                    <h6 className="card-title">
                      {`${comment.user.name}  ${comment.user.surname}`}
                    </h6>
                  </Link>
                  <p className="card-text">{comment.content}</p>
                  <p className="card-text">
                    <small className="text-muted">{comment.createdAt}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }
  return null;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
