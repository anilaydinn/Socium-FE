import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SearchedUsers = (props) => {
  const { searchedUsers } = props;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h4 className="text-center">Search Result</h4>
      </div>
      {!searchedUsers && <div className="text-center mt-5">No user found!</div>}
      {searchedUsers &&
        searchedUsers.map((user) => (
          <div key={user.id} className="row">
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row g-0">
                  {user.profileImage && (
                    <div className="col-md-1 d-flex align-items-center justify-content-center">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={"/profile/" + user.id}
                      >
                        <img
                          src={user.profileImage}
                          className="comment-profile-image"
                          height={37}
                          width={37}
                        />
                      </a>
                    </div>
                  )}
                  <div className="col-md-8">
                    <div className="card-body">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href={"/profile/" + user.id}
                      >
                        <h6 className="card-title">{`${user.name} ${user.surname}`}</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedUsers: state.user.searchedUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchedUsers);
