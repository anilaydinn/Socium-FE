import React, { useState, useEffect } from "react";
import { Container, Table, Pagination, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAdminUsers } from "../../redux/actions/userActions";
import dateFormat from "dateformat";

const UsersList = (props) => {
  const { adminUsers, setAdminUsers } = props;
  const [page, setPage] = useState(adminUsers.page.number);

  useEffect(() => {
    setAdminUsers(page, 12, "");
  }, []);

  const handlePagination = (page) => {
    setPage(page);
    setAdminUsers(page, 12, "");
  };

  const handleSearchLectures = (filter) => {
    setAdminUsers(page, 12, filter);
  };

  const pages = () => {
    let pageItems = [];
    for (let i = 0; i < adminUsers.page.totalPages; i++) {
      pageItems.push(
        <Pagination.Item onClick={() => handlePagination(i)}>
          {i + 1}
        </Pagination.Item>
      );
    }
    return pageItems;
  };

  return (
    <Container>
      <h1>All Users</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Birth Date</th>
            <th>Description</th>
            <th>Profile Image</th>
            <th>User Type</th>
            <th>Is Activated</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers &&
            adminUsers.users.map((user) => (
              <tr>
                <td align="center">
                  <Link to={`/admin/users/${user.id}`}>{user.id}</Link>
                </td>
                <td align="center">{user.name}</td>
                <td align="center">{user.surname}</td>
                <td align="center">{user.email}</td>
                <td align="center">{dateFormat(user.birthDate)}</td>
                <td align="center">
                  {user.description ? user.description : "-"}
                </td>
                <td align="center">
                  {user.profileImage ? (
                    <img src={user.profileImage} width="60" />
                  ) : (
                    "-"
                  )}
                </td>
                <td align="center">{user.userType}</td>
                <td align="center">
                  {user.isActivated ? "Activated" : "Not Activated"}
                </td>
                <td align="center">{dateFormat(user.createdAt)}</td>
                <td align="center">{dateFormat(user.updatedAt)}</td>
                <td align="center">{user.latitude}</td>
                <td align="center">{user.longitude}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Row className="justify-content-center">
        <Col md="12" className="d-flex justify-content-center">
          <Pagination>{pages()}</Pagination>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  adminUsers: state.user.adminUsers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAdminUsers: (page, size, filter) =>
      dispatch(setAdminUsers(page, size, filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
