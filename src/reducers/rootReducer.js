import { combineReducers } from "redux";
import pomodoroTaskReducer from "./pomodoroTaskReducer";
import longRestReducer from "./longRestReducer";
import shortRestReducer from "./shortRestReducer";

const rootReducer = combineReducers({
  pomodoroTaskCounter: pomodoroTaskReducer,
  shortRestCounter: shortRestReducer,
  longRestCounter: longRestReducer
})

export default rootReducer;