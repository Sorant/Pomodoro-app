const longRestReducer = (state = { mins: 15, secs: 60 }, action) => {
  const { mins, secs } = state;
  switch (action.type) {
    case "longRestAction/INCREMENT_MINS":
      return state = { ...state, mins: mins + action.payload }
    case "longRestAction/DECREMENT_SECS":
      return state = { ...state, secs: secs - action.payload }
    case "longRestAction/SET_MINS":
      return state = { ...state, mins: mins - action.payload }
    case "longRestAction/SET_SECS":
      return state = { ...state, secs: action.payload }
    default: {
      return state;
    }
  }
}

export default longRestReducer;