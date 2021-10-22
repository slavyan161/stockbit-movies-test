import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  data: dataReducer
});

export default rootReducer;
