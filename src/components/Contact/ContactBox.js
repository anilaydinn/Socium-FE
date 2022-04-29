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

const ContactBox = () => {
  const classes = useStyles();

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row justify-content-center ng-scope">
        <div className="col-md-6">
          <div className={classes.panel}>
            <div className="panel-body">
              <div className="h4 text-center pt-3">Contact us</div>
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
                        for="inputContact2"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label" for="message">
                        Your message
                      </label>
                      <div class="col-md-9">
                        <textarea
                          class="form-control"
                          id="message"
                          name="message"
                          placeholder="Please enter your message here..."
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <div className="col-sm-offset-2 col-sm-10 mb-4">
                        <Button className={classes.button}>Send</Button>
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

export default ContactBox;
