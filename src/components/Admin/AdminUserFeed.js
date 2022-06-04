import React from "react";
import { Link } from "react-router-dom";

const AdminUserFeed = (props) => {
  const { feed } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="row g-0">
            {feed.image && (
              <div className="col-md-1 d-flex align-items-center justify-content-center">
                <img
                  src={feed.image && feed.image}
                  className="comment-profile-image"
                  height={80}
                  width={80}
                />
              </div>
            )}
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">{`${feed.user && feed.user.name} ${
                  feed.user && feed.user.surname
                }`}</h6>
                <p className="card-text">
                  {feed.description && <b>Description:</b>}
                  {feed.description}
                  {feed.description && <br />}
                  <b>Like Count:</b>{" "}
                  {feed.whoLikesUserIds ? feed.whoLikesUserIds.length : 0}{" "}
                  <br />
                </p>

                <button className="btn btn-sm btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserFeed;
