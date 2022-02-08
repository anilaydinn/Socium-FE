import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

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
});

const Header = () => {
  const classes = useStyles();
  return (
    <Navbar className="mt-4" bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#17a2b8" }} href="#">
          Socium
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className={classes.link} to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={classes.link} to="/profile">
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={classes.link} to={"/about"}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={classes.link} to={"/contact"}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <div className={classes.buttonsContainer}>
            <Button className={classes.button}>Login</Button>
            <Button className={classes.button}>Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
