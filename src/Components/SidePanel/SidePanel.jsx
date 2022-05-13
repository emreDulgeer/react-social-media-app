import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const SidePanel = () => {
  const firebase = useFirebase();
  const logout = () => {
    firebase.logout();
  };
  const image = useSelector((state) => state.firebase.profile.avatar);
  const name = useSelector((state) => state.firebase.profile.name);
  const username = useSelector((state) => state.firebase.profile.username);
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container d-flex flex-column py-5 align-items-center">
        <div className="my-3">
          <img
            src={image}
            className="rounded-circle"
            style={{ width: "15vh" }}
          />
        </div>
        <div className="mb-3">
          <h2>{username}</h2>
        </div>
        <div className="mb-3">
          <h6>{name}</h6>
        </div>
      </div>
      <div>
        <div className="d-flex flex-column align-items-center">
          <button className="btn btn-primary w-75 my-3">
            <Link to="/" className="link-light">
              <div className="d-flex  justify-content-between align-items-center">
                <i className="fa-solid fa-house"></i>{" "}
                <div className="me-auto ms-auto">Home</div>
              </div>
            </Link>
          </button>
          <button className="btn btn-danger w-75" onClick={logout}>
            <div className="d-flex  justify-content-between align-items-center">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
              <div className="me-auto ms-auto">Logout</div>{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
