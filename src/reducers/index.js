import { combineReducers } from "redux";
import user from './user';

export const generateReducers = () => 
  combineReducers({
    user
  });