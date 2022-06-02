import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { isLogin } from "../../helpers/helpers";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import {
  fetchUserWithFilter,
  resetSearchedUsers,
} from "../../redux/actions/userActions";

const useStyles = makeStyles({
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "160px",
  },
  button: {
    backgroundColor: "#17a2b8;",
    border: "none",
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

const Header = (props) => {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  const { fetchUserWithFilter, resetSearchedUsers } = props;

  const handleLogout = () => {
    removeCookie("user-token", { path: "/" });
    window.location.href = "/";
  };

  const handleSearchUser = (e) => {
    e.preventDefault();
    fetchUserWithFilter(e.target.value);
  };

  return (
    <Navbar className="mt-4" bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#17a2b8" }} href="/">
          Socium
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => resetSearchedUsers()}>
              <Link className={classes.link} to={"/"}>
                Home
              </Link>
            </Nav.Link>
            {isLogin() && (
              <Nav.Link onClick={() => resetSearchedUsers()}>
                <Link className={classes.link} to="/profile">
                  Profile
                </Link>
              </Nav.Link>
            )}
            <Nav.Link onClick={() => resetSearchedUsers()}>
              <Link className={classes.link} to={"/about"}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => resetSearchedUsers()}>
              <Link className={classes.link} to={"/contact"}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          {isLogin() && (
            <Form className="d-flex" style={{ marginRight: "auto" }}>
              <FormControl
                type="search"
                placeholder="Search users"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearchUser(e)}
              />
            </Form>
          )}
          {!isLogin() ? (
            <div className={classes.buttonsContainer}>
              <Link className={classes.link} to={"/login"}>
                <Button className={classes.button}>Login</Button>
              </Link>
              <Link className={classes.link} to={"/register"}>
                <Button className={classes.button}>Register</Button>
              </Link>
            </div>
          ) : (
            <div className={classes.logoutButtonContainer}>
              <Button
                onClick={() => handleLogout()}
                className={`btn btn-sm ${classes.button}`}
              >
                Logout
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserWithFilter: (filter) => dispatch(fetchUserWithFilter(filter)),
    resetSearchedUsers: () => dispatch(resetSearchedUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
