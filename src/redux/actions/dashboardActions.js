import { SET_ADMIN_DASHBOARD_INFORMATIONS } from "./types";
import { getAdminDashboardInformations } from "../../api/dashboardApi";

export const fetchAdminDashboardInformations = () => async (dispatch) => {
  const posts = await getAdminDashboardInformations();

  dispatch({
    type: SET_ADMIN_DASHBOARD_INFORMATIONS,
    payload: posts,
  });
};
