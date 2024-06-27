import { combineReducers } from "redux";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  someReducer,
});

export default rootReducer;
