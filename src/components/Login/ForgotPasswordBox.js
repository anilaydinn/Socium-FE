import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Alert } from "react-bootstrap";
import { forgotPassword as forgotPasswordApi } from "../../api/userApi";

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

const ForgotPasswordBox = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [forgotPasswordSuccessAlert, setForgotPasswordSuccessAlert] =
    useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const resp = await forgotPasswordApi(email);
    if (resp) {
      setForgotPasswordSuccessAlert(true);
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
                    onSubmit={(e) => handleForgotPassword(e)}
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
                    <div className="form-group mt-4">
                      <div className="col-sm-offset-2 col-sm-10 mb-4">
                        <Button type="submit" className={classes.button}>
                          Send
                        </Button>
                      </div>
                    </div>
                  </form>
                  {forgotPasswordSuccessAlert && (
                    <Alert key={"success"} variant={"success"}>
                      Please check <b>{email}</b> email to change your password!
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordBox;
