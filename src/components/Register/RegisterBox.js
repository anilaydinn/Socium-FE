import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "react-bootstrap";

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

const RegisterBox = () => {
  const classes = useStyles();

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row justify-content-center ng-scope">
        <div className="col-md-6">
          <div className={classes.panel}>
            <div className="panel-body">
              <div className="h4 text-center pt-3">Register</div>
              <div className="row pv-lg">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <form className="form-horizontal ng-pristine ng-valid">
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        for="inputContact2"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        for="inputContact3"
                      >
                        Surname
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="surname"
                          id="inputContact3"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        for="inputContact3"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="inputContact3"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        for="inputContact3"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="inputContact3"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-4 control-label"
                        for="inputContact3"
                      >
                        Re-Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="inputContact3"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="form-group mt-4 mb-4">
                      <div className="col-sm-offset-2 col-sm-10">
                        <Button className={classes.button}>Register</Button>
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

export default RegisterBox;
