import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import postReducer from "./reducers/postReducer";
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  post: postReducer,
});

export default rootReducer;
