import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { resetPassword as resetPasswordApi } from "../api/userApi";

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

const ResetPasswordBox = () => {
  const classes = useStyles();

  const { id } = useParams();

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      await resetPasswordApi(id, password);
      window.location.href = "/login";
    }
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row justify-content-center ng-scope">
        <div className="col-md-6">
          <div className={classes.panel}>
            <div className="panel-body">
              <div className="h4 text-center pt-3">Forgot Password</div>
              <div className="row pv-lg">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <form
                    onSubmit={(e) => handleResetPassword(e)}
                    className="form-horizontal ng-pristine ng-valid"
                  >
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="inputContact2"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="password"
                          id="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="inputContact2"
                      >
                        Re-Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="re-password"
                          id="re-password"
                          type="password"
                          onChange={(e) => setRePassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <div className="col-sm-offset-2 col-sm-10 mb-4">
                        <Button type="submit" className={classes.button}>
                          Send
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordBox;
