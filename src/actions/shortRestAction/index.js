export const incrementMinsShort = (mins = 1) => {
  return {
    type: "shortRestAction/INCREMENT_MINS",
    payload: mins
  }
}

export const decrementSecsShort = (secs = 1) => {
  return {
    type: "shortRestAction/DECREMENT_SECS",
    payload: secs
  }
}

export const setMinsShort = (mins = 1) => {
  return {
    type: "shortRestAction/SET_MINS",
    payload: mins
  }
}

export const setSecsShort = (secs) => {
  return {
    type: "shortRestAction/SET_SECS",
    payload: secs
  }
}