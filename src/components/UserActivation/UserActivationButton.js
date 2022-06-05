import React from "react";
import { makeStyles } from "@mui/styles";
import { activateUser } from "../../api";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#17a2b8;",
    border: "none",
  },
});

const UserActivationButton = () => {
  const { id } = useParams();

  const classes = useStyles();

  const handleActivateUser = async () => {
    await activateUser(id);
    window.location.href = "/";
  };

  return (
    <>
      <div className="row mt-5 justify-content-center">
        <div className="d-flex col-md-6 justify-content-center">
          <span>
            Please click <b>Activate</b> button to activate your account!
          </span>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="d-flex col-md-1 justify-content-center">
          <button
            onClick={() => handleActivateUser()}
            className={`btn btn-primary ${classes.button}`}
          >
            Activate
          </button>
        </div>
      </div>
    </>
  );
};

export default UserActivationButton;
