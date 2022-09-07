import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { isLogin } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useCookies } from "react-cookie";

const useStyles = makeStyles({
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "160px",
  },
  button: {
    color: "black",
    background: "none",
    border: "none",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "unset",
    color: "unset",
    "&:hover": {
      color: "unset",
    },
  },
  logoutButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Header = () => {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  const handleLogout = () => {
    removeCookie("user-token", { path: "/" });
    window.location.href = "/";
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/admin">Socium Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/admin/users">Users</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/admin/contacts">Contact Messages</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Go Socium Home</Nav.Link>
          </Nav>
          {isLogin() && (
            <div className={classes.logoutButtonContainer}>
              <button
                onClick={handleLogout}
                className={`btn btn-sm ${classes.button}`}
              >
                Logout
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
