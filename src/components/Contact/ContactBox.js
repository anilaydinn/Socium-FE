import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Alert } from "react-bootstrap";
import { createContact } from "../../api";

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

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [createContactSuccessAlert, setCreateContactSuccessAlert] =
    useState(false);

  const handleCreateContact = async (e) => {
    e.preventDefault();
    const resp = createContact(name, surname, email, message);
    if (resp) {
      setCreateContactSuccessAlert(true);
    }
  };

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
                  <form
                    onSubmit={(e) => handleCreateContact(e)}
                    className="form-horizontal ng-pristine ng-valid"
                  >
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlor="inputContact2"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlor="inputContact2"
                      >
                        Surname
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="surname"
                          id="surname"
                          type="text"
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>
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
                        className="col-md-3 control-label"
                        htmlFor="message"
                      >
                        Your message
                      </label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Please enter your message here..."
                          rows="5"
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
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
                  {createContactSuccessAlert && (
                    <Alert key={"success"} variant={"success"}>
                      Your message has been sent successfully!
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

export default ContactBox;
