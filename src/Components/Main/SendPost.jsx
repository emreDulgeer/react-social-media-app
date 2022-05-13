import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Post = () => {
  const firebase = useFirebase();
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const author = useSelector((state) => state.firebase.profile.name);
  const createNewPost = ({ Post }) => {
    setSubmitting(true);
    firebase
      .push("posts", {
        Author: author,
        Content: Post,
      })
      .then(() => {
        setSubmitting(false);
        setContent("");
      })
      .catch((errors) => {
        alert(errors);
      });
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(createNewPost)}>
          <div className="form-floating">
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              name="Post"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "10vh" }}
              ref={register({
                required: "Post is required",
              })}
              error={errors.Post ? true : false}
            />

            <label htmlFor="floatingTextarea2">Share your secret</label>
            {errors.Post && (
              <div className="form-text text-danger">{errors.Post.message}</div>
            )}
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary my-2 d-block"
              disabled={submitting}
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
