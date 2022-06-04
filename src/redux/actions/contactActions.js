import { SET_CONTACTS } from "./types";
import { getContacts } from "../../api/contactApi";

export const fetchContacts = () => async (dispatch) => {
  const contacts = await getContacts();

  dispatch({
    type: SET_CONTACTS,
    payload: contacts,
  });
};
