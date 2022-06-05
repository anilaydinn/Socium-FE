import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Alert } from "react-bootstrap";
import { registerUser as registerUserApi } from "../../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [startDate] = useState(new Date());
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [registerSuccessAlert, setRegisterSuccessAlert] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const resp = await registerUserApi({
      name,
      surname,
      email,
      birthDate,
      password,
      rePassword,
      latitude,
      longitude,
    });
    if (resp) {
      setRegisterSuccessAlert(true);
    }
  };

  navigator.geolocation.getCurrentPosition((location) => {
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  });

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
                  <form
                    onSubmit={(e) => handleRegister(e)}
                    className="form-horizontal ng-pristine ng-valid"
                  >
                    <div className="form-group w-100">
                      <label className="col-sm-2 control-label" htmlFor="name">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="surname"
                      >
                        Surname
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="surname"
                          id="surname"
                          type="text"
                          required
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="surnameFormItem" className="form-label">
                        Doğum Tarihi
                      </label>

                      <div className="col-sm-10 mt-2">
                        <DatePicker
                          selected={birthDate === null ? startDate : birthDate}
                          onChange={(date) => setBirthDate(date)}
                          className="form-control shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="email">
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="password"
                          type="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-4 control-label"
                        htmlFor="re-password"
                      >
                        Re-Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          name="email"
                          id="re-password"
                          type="password"
                          required
                          onChange={(e) => setRePassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-4 mb-4">
                      <div className="col-sm-offset-2 col-sm-10">
                        <Button type="submit" className={classes.button}>
                          Register
                        </Button>
                      </div>
                    </div>
                  </form>
                  {registerSuccessAlert && (
                    <Alert key={"success"} variant={"success"}>
                      You have successfully registered! Please check{" "}
                      <b>{email}</b> email to activate your account!
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

export default RegisterBox;
