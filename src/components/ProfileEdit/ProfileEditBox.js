import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import { getUserId } from "../../helpers/helpers";
import { updateUser } from "../../api";

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

const ProfileEditBox = (props) => {
  const { fetchUser, user } = props;
  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(user ? user.profileImage : "");

  useEffect(() => {
    fetchUser(getUserId());
  }, []);

  const handleOnloadCoverImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      setImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    await updateUser(getUserId(), description, image);
    fetchUser(getUserId());
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row justify-content-center ng-scope">
        <div className="col-md-6">
          <div className={classes.panel}>
            <div className="panel-body">
              <div className="h4 text-center pt-3">Edit Profile</div>
              <div className="row pv-lg">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <form
                    onSubmit={(e) => handleUpdateUser(e)}
                    className="form-horizontal ng-pristine ng-valid"
                  >
                    <div className="col-sm-3 d-flex">
                      <input
                        type="file"
                        className="form-control-file"
                        id="postImage"
                        hidden={true}
                        onChange={(e) => handleOnloadCoverImage(e)}
                      />
                      <label
                        htmlFor="postImage"
                        className={`btn btn-sm text-white ${classes.button}`}
                      >
                        Image
                      </label>

                      {image && user.profileImage && (
                        <img
                          src={image}
                          alt="post-image"
                          className={`img-fluid ${classes.marginLeft}`}
                          width={30}
                          height={30}
                        />
                      )}
                      {user && user.profileImage && !image && (
                        <img
                          src={user.profileImage}
                          alt="post-image"
                          className={`img-fluid ${classes.marginLeft}`}
                          width={30}
                          height={30}
                        />
                      )}
                    </div>
                    <div className="form-group">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="inputContact2"
                      >
                        Description
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          className="form-control"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <div className="col-sm-offset-2 col-sm-10">
                        <Button
                          type="submit"
                          className={`${classes.button} mb-4`}
                        >
                          Update
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

const mapStateToProps = (state) => ({
  userFeeds: state.post.userFeeds,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditBox);
