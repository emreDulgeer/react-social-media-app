import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={() =>
        isLoaded(auth) && !isEmpty(auth) ? children : <div>loading</div>
      }
    />
  );
};

export default PrivateRoute;
