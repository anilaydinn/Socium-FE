import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchAdminUser,
  fetchAdminUserPosts,
} from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";
import AdminUserFeed from "./AdminUserFeed";

const UserDetail = (props) => {
  const { id } = useParams();
  const { fetchAdminUser, adminUser, adminUserFeeds, fetchAdminUserPosts } =
    props;

  useEffect(() => {
    fetchAdminUser(id);
    fetchAdminUserPosts(id);
  }, []);

  return (
    <div className="container">
      <h1>
        {adminUser && adminUser.name} {adminUser && adminUser.surname}
      </h1>
      <div className="row mt-3">
        {adminUser && adminUser.profileImage && (
          <div>
            <div className="col-md-3 mb-4">
              <img src={adminUser.profileImage} width="200" />
            </div>
          </div>
        )}
        {adminUser && (
          <div className="col-md-12">
            <b>ID:</b> {adminUser && adminUser.id} <br />
            <b>Email:</b> {adminUser && adminUser.email} <br />
            <b>BirthDate:</b> {adminUser && adminUser.birthDate} <br />
            <b>Description:</b>{" "}
            {adminUser && adminUser.description ? adminUser.description : "-"}{" "}
            <br />
            <b>User Type:</b> {adminUser && adminUser.userType} <br />
            <b>Is Activated:</b>{" "}
            {adminUser && adminUser.isActivated ? "Activated" : "Not Activated"}{" "}
            <br />
            <b>Created At:</b> {adminUser && adminUser.createdAt} <br />
            <b>Latitude:</b> {adminUser && adminUser.latitude} <br />
            <b>Longitude:</b> {adminUser && adminUser.longitude} <br />
          </div>
        )}
      </div>
      {adminUserFeeds && <h2 className="mt-5">User Posts</h2>}
      <div className="row mt-3">
        {adminUserFeeds &&
          adminUserFeeds.map((post) => <AdminUserFeed feed={post} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  adminUser: state.user.adminUser,
  adminUserFeeds: state.post.adminUserFeeds,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdminUser: (userId) => dispatch(fetchAdminUser(userId)),
    fetchAdminUserPosts: (userId) => dispatch(fetchAdminUserPosts(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
