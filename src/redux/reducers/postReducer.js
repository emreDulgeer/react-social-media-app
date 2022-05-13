import * as types from "../actions/types";

const initialState = {
  post: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return { ...state, post: action.payload };
      break;

    default:
      return { ...state };
      break;
  }
};
