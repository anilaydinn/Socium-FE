import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserId } from "../../helpers/helpers";
import { fetchUserFriends } from "../../redux/actions/userActions";

const FriendList = (props) => {
  const { friends, fetchUserFriends } = props;

  useEffect(() => {
    fetchUserFriends(getUserId());
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h4 className="text-center">Friends</h4>
      </div>
      {!friends && <div className="text-center mt-5">No friend requests</div>}
      {friends &&
        friends.map((friend) => (
          <div key={friend.id} className="row">
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row g-0">
                  {friend.profileImage && (
                    <div className="col-md-1 d-flex align-items-center justify-content-center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/profile/${friend.id}`}
                      >
                        <img
                          src={friend.profileImage}
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
                        to={`/profile/${friend.id}`}
                      >
                        <h6 className="card-title">{`${friend.name} ${friend.surname}`}</h6>
                      </Link>
                      <Link to={`/profile/${friend.id}/messages`}>
                        <button
                          style={{ marginRight: "5px" }}
                          className="btn btn-sm btn-success"
                        >
                          Send Message
                        </button>
                      </Link>
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
  friends: state.user.friends,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFriends: (userId) => dispatch(fetchUserFriends(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
