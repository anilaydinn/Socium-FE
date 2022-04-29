import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
