import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import "../../style/profile.css";
import Feed from "../Home/Feed";
import { getUserId, isLogin } from "../../helpers/helpers";
import { fetchUserPosts } from "../../redux/actions/postActions";
import { fetchUser, fetchNearUsers } from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";
import { sendFriendRequest } from "../../api";

const useStyles = makeStyles({
  link: {
    textDecoration: "unset",
    color: "unset",
    "&:hover": {
      color: "unset",
    },
  },
  geoLocationTextContainer: {
    marginLeft: "10px",
    marginTop: "15px",
  },
});

const OtherProfileContent = (props) => {
  const { userId } = useParams();
  const {
    fetchUserPosts,
    userFeeds,
    fetchUser,
    user,
    fetchNearUsers,
    nearUsers,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (isLogin()) {
      if (userId == getUserId()) {
        window.location.href = "/profile";
      }
    }
    fetchUserPosts(userId);
    fetchUser(userId);
  }, []);

  const handleSendFriendRequest = async () => {
    await sendFriendRequest(getUserId(), userId);
    fetchUser(userId);
  };

  return (
    <div className="container mb-5">
      <div className="profile-page tx-13">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="profile-header px-2">
              <div>
                {user && user.profileImage && (
                  <img
                    className="profile-image"
                    src={user && user.profileImage}
                    height={100}
                    width={100}
                    alt="profile"
                  />
                )}
                <span className="profile-name">{`${user && user.name} ${
                  user && user.surname
                }`}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginRight: "5px",
                }}
              >
                <Link
                  className={`pt-1px d-none d-md-block ${classes.link}`}
                  to="/"
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
                    className="feather feather-users mr-1 icon-md"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Friends <span className="text-muted tx-12">3,765</span>
                </Link>
              </div>
              <div className="edit-button-wrapper">
                <button
                  onClick={() => handleSendFriendRequest()}
                  className="btn btn-info btn-icon-text btn-edit-profile text-white"
                  disabled={
                    (user &&
                      user.friendRequestUserIDs &&
                      user.friendRequestUserIDs.includes(getUserId())) ||
                    (user &&
                      user.friendIds &&
                      user.friendIds.includes(getUserId()))
                  }
                >
                  <img
                    src="https://img.icons8.com/ultraviolet/40/000000/add-user-group-man-man.png"
                    width={25}
                    height={25}
                  />
                  {user &&
                    !user.friendRequestUserIDs &&
                    !user.friendIds &&
                    "Add Friend"}
                  {user &&
                    !user.friendRequestUserIDs &&
                    user.friendIds &&
                    !user.friendIds.includes(getUserId()) &&
                    "Add Friend"}
                  {user &&
                    user.friendRequestUserIDs &&
                    user.friendIds &&
                    !user.friendRequestUserIDs.includes(getUserId()) &&
                    !user.friendIds.includes(getUserId()) &&
                    "Add Friend"}
                  {user &&
                    user.friendRequestUserIDs &&
                    user.friendRequestUserIDs.includes(getUserId()) &&
                    "Friend Request Sended"}
                  {user &&
                    user.friendIds &&
                    user.friendIds.includes(getUserId()) &&
                    "You are already friend"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row profile-body">
          <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
            <div className="card rounded">
              <div className="card-body">
                {user && user.description && (
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="card-title mb-0">About</h6>
                  </div>
                )}
                {user && user.description && <p>{user.description}</p>}
                <div className="mt-3">
                  <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                    Joined:
                  </label>
                  <p className="text-muted">{user && user.createdAt}</p>
                </div>
                {user && user.birthDate && (
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Birth Date:
                    </label>
                    <p className="text-muted">{user.birthDate}</p>
                  </div>
                )}
                <div className="mt-3">
                  <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                    Email:
                  </label>
                  <p className="text-muted">{user && user.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-6 middle-wrapper">
            <div className="row">
              {userFeeds &&
                user &&
                user.friendIds &&
                user.friendIds.includes(getUserId()) &&
                userFeeds.map((feed) => (
                  <Feed key={feed.id} col="12" feed={feed} />
                ))}
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-3 right-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card rounded">
                  <div className="card-body">
                    <h6 className="card-title">
                      suggestions for you by geolocation
                    </h6>
                    {nearUsers &&
                      nearUsers.map((user) => {
                        if (
                          user.friendRequestUserIDs &&
                          !user.friendRequestUserIDs.includes(getUserId()) &&
                          user.friendIds &&
                          !user.friendIds.includes(getUserId())
                        ) {
                          return (
                            <div
                              key={user.id}
                              className="d-flex justify-content-between mb-2 pb-2 border-bottom"
                            >
                              <div className="d-flex align-items-center hover-pointer">
                                {user.profileImage && (
                                  <img
                                    className="img-xs rounded-circle"
                                    src={user.profileImage}
                                  />
                                )}
                                <div
                                  className={`ml-2 ${classes.geoLocationTextContainer}`}
                                >
                                  <p className="m-0">
                                    <Link
                                      className={classes.link}
                                      to={`/profile/${user.id}`}
                                    >
                                      {user.name} {user.surname}
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => handleSendFriendRequest(user.id)}
                                className="btn btn-icon"
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
                                  className="feather feather-user-plus"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Connect"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="8.5" cy="7" r="4"></circle>
                                  <line x1="20" y1="8" x2="20" y2="14"></line>
                                  <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                              </button>
                            </div>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userFeeds: state.post.userFeeds,
  user: state.user.user,
  nearUsers: state.user.nearUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchNearUsers: (userId) => dispatch(fetchNearUsers(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherProfileContent);
