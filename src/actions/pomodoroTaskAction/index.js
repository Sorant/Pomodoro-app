export const incrementMins = (mins = 5) => {
  return {
    type: "pomodoroTaskAction/INCREMENT_MINS",
    payload: mins
  }
}

export const decrementSecs = (secs = 1) => {
  return {
    type: "pomodoroTaskAction/DECREMENT_SECS",
    payload: secs
  }
}

export const setMins = (mins = 1) => {
  return {
    type: "pomodoroTaskAction/SET_MINS",
    payload: mins
  }
}

export const setSecs = (secs) => {
  return {
    type: "pomodoroTaskAction/SET_SECS",
    payload: secs
  }
}