import { SET_SOMETHING } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SOMETHING:
      return { ...action.payload };
    default:
      return state;
  }
};
