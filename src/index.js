import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import firebase from "./firebase";
import store from "./redux/store";
import "./index.css";

console.log(process.env.REACT_APP_KEY);

const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};
const Root = () => {
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      } else {
        history.push("/login");
      }
    });
  }, [history]);
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <App />
      </PrivateRoute>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Root />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
