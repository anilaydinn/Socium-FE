import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginUser as loginUserApi } from "../../api";
import { setCookie } from "../../helpers/helpers";

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
  panel: {
    boxShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.14)",
    border: "0",
    borderRadius: "4px",
    marginBottom: "16px",
  },
});

const LoginBox = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await loginUserApi(email, password);
    if (resp) {
      setCookie("user-token", resp.token, 1);
      window.location.href = "/";
    } else {
      alert("Failed to login!");
    }
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row justify-content-center ng-scope">
        <div className="col-md-6">
          <div className={classes.panel}>
            <div className="panel-body">
              <div className="h4 text-center pt-3">Login</div>
              <div className="row pv-lg">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <form
                    onSubmit={(e) => handleLogin(e)}
                    className="form-horizontal ng-pristine ng-valid"
                  >
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="inputContact2"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="inputContact3"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="password"
                          id="inputContact3"
                          type="text"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <div className="col-sm-offset-2 col-sm-10">
                        <Button type="submit" className={classes.button}>
                          Login
                        </Button>
                      </div>
                    </div>
                  </form>
                  <div className="text-center mb-4">
                    <Link to={"/forgot-password"}>Forgot password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
