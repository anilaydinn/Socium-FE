import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdminUser } from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";

const UserDetail = (props) => {
  const { id } = useParams();
  const { fetchAdminUser, adminUser } = props;

  useEffect(() => {
    fetchAdminUser(id);
  }, []);

  return (
    <div className="container">
      <h1>
        {adminUser && adminUser.name} {adminUser && adminUser.surname}
      </h1>
      <div className="row mt-3">
        {adminUser && adminUser.profileImage && (
          <div>
            <div className="col-md-3">
              <img src="https://picsum.photos/200" />
            </div>
            <div className="col-md-8"></div>
          </div>
        )}
        {adminUser && !adminUser.profileImage && (
          <div className="col-md-12">
            <b>Email:</b> {adminUser && adminUser.email} <br />
            <b>BirthDate:</b> {adminUser && adminUser.birthDate} <br />
            <b>Description:</b>{" "}
            {adminUser && adminUser.description ? adminUser.description : "-"}{" "}
            <br />
            <b>User Type:</b> {adminUser && adminUser.userType} <br />
            <b>Is Activated:</b> {adminUser && adminUser.isActivated} <br />
            <b>Created At:</b> {adminUser && adminUser.createdAt} <br />
            <b>Latitude:</b> {adminUser && adminUser.latitude} <br />
            <b>Longitude:</b> {adminUser && adminUser.longitude} <br />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  adminUser: state.user.adminUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdminUser: (userId) => dispatch(fetchAdminUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
