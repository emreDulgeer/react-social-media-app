import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
const Login = () => {
  const firebase = useFirebase();

  const [submitting, setSubmitting] = useState(false);

  const login = ({ email, password }) => {
    firebase
      .login({
        email,
        password,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const { register, errors, handleSubmit } = useForm();
  return (
    <div className="background-login">
      <form
        className="position-absolute top-50 start-50 translate-middle bg-white p-4"
        onSubmit={handleSubmit(login)}
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
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Enter email"
            ref={register({
              required: "Email is required",
            })}
            error={errors.password ? true : false}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Login
        </button>
        <div className="form-text bg-light mt-2 p-2 rounded">
          You haven't got account? <Link to="/signup">create now!!!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
