const counterReducer = (state = { mins: 25, secs: 60 }, action) => {
  const { mins, secs } = state;
  switch (action.type) {
    case "pomodoroTaskAction/INCREMENT_MINS":
      return state = { ...state, mins: mins + action.payload }
    case "pomodoroTaskAction/DECREMENT_SECS":
      return state = { ...state, secs: secs - action.payload }
    case "pomodoroTaskAction/SET_MINS":
      return state = { ...state, mins: mins - action.payload }
    case "pomodoroTaskAction/SET_SECS":
      return state = { ...state, secs: action.payload }
    default: {
      return state;
    }
  }
}

export default counterReducer;