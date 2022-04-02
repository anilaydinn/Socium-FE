import { Button } from "react-bootstrap";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#17a2b8;",
    border: "none",
  },
});

const CreateFeed = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6 grid-margin">
        <form className="post-to-timeline mb-3">
          <textarea
            className="form-control"
            name="content"
            style={{ height: "70px", marginBottom: "10px" }}
            placeholder="Whats on your mind..."
          ></textarea>
          <div className="row justify-content-between">
            <div className="col-sm-3">
              <Button className={`btn btn-sm text-white ${classes.button}`}>
                Image
              </Button>
            </div>
            <div className="col-auto d-flex">
              <Button type="submit" className={`btn btn-sm ${classes.button}`}>
                Post
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeed;
