export const incrementMins = (nr = 5) => {
  return {
    type: "INCREMENT_TIME",
    payload: nr
  }
}

export const decrementTime = (nr = 5) => {
  return {
    type: "DECREMENT_TIME",
    payload: nr
  }
}