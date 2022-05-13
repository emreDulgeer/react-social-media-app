import { GET_POST } from "./types";

export const getPost = (post) => {
  return {
    type: GET_POST,
    payload: post,
  };
};
