import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";

const SignUp = () => {
  const firebase = useFirebase();

  const [submitting, setSubmitting] = useState(false);

  const { register, errors, handleSubmit } = useForm();
  const createNewUser = ({
    email,
    password,
    username,
    firstName,
    lastName,
  }) => {
    setSubmitting(true);

    firebase
      .createUser(
        { email, password, username },
        {
          username: username,
          name: firstName + " " + lastName,
          avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&color=fff`,
        }
      )
      .then((user) => {
        console.log(user);
      })
      .catch((errors) => {
        alert(errors);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="background-signup">
      <div className="container">
        <form
          onSubmit={handleSubmit(createNewUser)}
          className="position-absolute top-50 start-50 translate-middle bg-white p-4"
        >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              ref={register({
                required: "Email is required",
              })}
              error={errors.email ? true : false}
              className="form-control"
            />
            {errors.email && (
              <div className="form-text text-danger">
                {errors.email.message}
              </div>
            )}

            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Username </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              ref={register({
                required: "Username is required",
              })}
              error={errors.username ? true : false}
              className="form-control"
            />
            {errors.username && (
              <div className="form-text text-danger">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">First Name </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              ref={register({
                required: "Name is required",
              })}
              error={errors.username ? true : false}
              className="form-control"
            />
            {errors.firstName && (
              <div className="form-text text-danger">
                {errors.firstName.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              ref={register({
                required: "Last name is required",
              })}
              error={errors.lastName ? true : false}
              className="form-control"
            />
            {errors.lastName && (
              <div className="form-text text-danger">
                {errors.lastName.message}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              ref={register({
                required: "Password is required",
                minLength: 8,
              })}
              error={errors.password ? true : false}
              className="form-control"
            />
            {errors.password && (
              <div className="form-text text-danger">
                {errors.password.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            Signup
          </button>
          <div className="form-text bg-light mt-2 p-2 rounded">
            Do you have account <Link to="/login">login now!!!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
