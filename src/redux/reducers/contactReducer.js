import { SET_CONTACTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};
