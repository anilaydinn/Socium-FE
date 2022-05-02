import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import { createPost } from "../../api";
import { getUserId } from "../../helpers/helpers";
import { fetchPosts } from "../../redux/actions/postActions";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#17a2b8;",
    border: "none",
  },
  marginLeft: {
    marginLeft: "10px",
  },
});

const CreateFeed = (props) => {
  const { fetchPosts } = props;
  const classes = useStyles();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    await createPost({
      image: image,
      description: description,
      userId: getUserId(),
    });
    fetchPosts();
  };

  return (
    <div className="row justify-content-center mt-3 pe-0">
      <div className={`col-md-${props.col} grid-margin`}>
        <form
          onSubmit={(e) => handlePostSubmit(e)}
          className="post-to-timeline mb-3"
        >
          <textarea
            className="form-control"
            name="content"
            style={{ height: "70px", marginBottom: "10px" }}
            placeholder="Whats on your mind..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="row justify-content-between">
            <div className="col-sm-3 d-flex">
              <input
                type="file"
                class="form-control-file"
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
              {image.length > 0 && (
                <img
                  src={image}
                  alt="post-image"
                  className={`img-fluid ${classes.marginLeft}`}
                  width={30}
                  height={30}
                />
              )}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFeed);
