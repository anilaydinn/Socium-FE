import { SET_HOMEPAGE_FEEDS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_HOMEPAGE_FEEDS:
      return { ...state, feeds: action.payload };
    default:
      return state;
  }
};
