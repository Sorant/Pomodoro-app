const shortRestReducer = (state = { mins: 5, secs: 60 }, action) => {
  const { mins, secs } = state;
  switch (action.type) {
    case "shortRestAction/INCREMENT_MINS":
      return state = { ...state, mins: mins + action.payload }
    case "shortRestAction/DECREMENT_SECS":
      return state = { ...state, secs: secs - action.payload }
    case "shortRestAction/SET_MINS":
      return state = { ...state, mins: mins - action.payload }
    case "shortRestAction/SET_SECS":
      return state = { ...state, secs: action.payload }
    default: {
      return state;
    }
  }
}

export default shortRestReducer;