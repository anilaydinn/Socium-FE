import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "../../style/profile.css";
import Feed from "../Home/Feed";

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

const ProfileContent = () => {
  const classes = useStyles();

  return (
    <div className="container mb-5">
      <div className="profile-page tx-13">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="profile-header">
              <div className="cover">
                <figure>
                  <img
                    src="https://bootdey.com/img/Content/bg1.jpg"
                    className="img-fluid"
                    alt="profile cover"
                  />
                </figure>
                <div className="cover-body d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      className="profile-pic"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="profile"
                    />
                    <span className="profile-name">Amiah Burton</span>
                  </div>
                  <div className="d-none d-md-block">
                    <button className="btn btn-info btn-icon-text btn-edit-profile text-white">
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
                        className="feather feather-edit btn-icon-prepend"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="header-links">
                <ul className="links d-flex align-items-center mt-3 mt-md-0">
                  <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row profile-body">
          <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
            <div className="card rounded">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="card-title mb-0">About</h6>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
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
                        className="feather feather-more-horizontal icon-lg text-muted pb-3px"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
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
                          className="feather feather-edit-2 icon-sm mr-2"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        <span className="">Edit</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
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
                          className="feather feather-git-branch icon-sm mr-2"
                        >
                          <line x1="6" y1="3" x2="6" y2="15"></line>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                        <span className="">Update</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
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
                          className="feather feather-eye icon-sm mr-2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span className="">View all</span>
                      </a>
                    </div>
                  </div>
                </div>
                <p>
                  Hi! I'm Amiah the Senior UI Designer at Vibrant. We hope you
                  enjoy the design and quality of Social.
                </p>
                <div className="mt-3">
                  <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                    Joined:
                  </label>
                  <p className="text-muted">November 15, 2015</p>
                </div>
                <div className="mt-3">
                  <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                    Age:
                  </label>
                  <p className="text-muted">15</p>
                </div>
                <div className="mt-3">
                  <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                    Email:
                  </label>
                  <p className="text-muted">me@nobleui.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-6 middle-wrapper">
            <div className="row">
              <Feed col="12" />
              <Feed col="12" />
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
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar5.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar6.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center hover-pointer">
                        <img
                          className="img-xs rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt=""
                        />
                        <div
                          className={`ml-2 ${classes.geoLocationTextContainer}`}
                        >
                          <p className="m-0">Mike Popescu</p>
                          <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <button className="btn btn-icon">
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

export default ProfileContent;
