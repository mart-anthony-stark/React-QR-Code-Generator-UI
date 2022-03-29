import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: (state = null, action) => {
    switch (action.type) {
      case "SET_USER":
        return action.payload;
        break;
      default:
        return state;
    }
  },
});

export default rootReducer;
