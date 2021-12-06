export const incrementMinsLong = (mins = 5) => {
  return {
    type: "longRestAction/INCREMENT_MINS",
    payload: mins
  }
}

export const decrementSecsLong = (secs = 1) => {
  return {
    type: "longRestAction/DECREMENT_SECS",
    payload: secs
  }
}

export const setMinsLong = (mins = 1) => {
  return {
    type: "longRestAction/SET_MINS",
    payload: mins
  }
}

export const setSecsLong = (secs) => {
  return {
    type: "longRestAction/SET_SECS",
    payload: secs
  }
}