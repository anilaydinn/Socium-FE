import { SET_ADMIN_DASHBOARD_INFORMATIONS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ADMIN_DASHBOARD_INFORMATIONS:
      return { ...state, adminDashboardInformations: action.payload };
    default:
      return state;
  }
};
