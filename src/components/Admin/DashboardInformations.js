import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdminDashboardInformations } from "../../redux/actions/dashboardActions";
import { Card } from "react-bootstrap";

const DashboardInformations = (props) => {
  const { fetchAdminDashboardInformations, adminDashboardInformations } = props;

  useEffect(() => {
    fetchAdminDashboardInformations();
  }, []);

  console.log(adminDashboardInformations);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row mt-5">
        <div className="col-md-3">
          <Card
            bg={"light"}
            key={"light"}
            text={"dark"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <b>User Count</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {adminDashboardInformations &&
                  adminDashboardInformations.userCount}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            bg={"light"}
            key={"light"}
            text={"dark"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <b>Activated User Count</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>Todo</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            bg={"light"}
            key={"light"}
            text={"dark"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <b>Post Count</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {adminDashboardInformations &&
                  adminDashboardInformations.postCount}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card
            bg={"light"}
            key={"light"}
            text={"dark"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <b>Comment Count</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {adminDashboardInformations &&
                  adminDashboardInformations.commentCount}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  adminDashboardInformations: state.dashboard.adminDashboardInformations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdminDashboardInformations: () =>
      dispatch(fetchAdminDashboardInformations()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardInformations);
