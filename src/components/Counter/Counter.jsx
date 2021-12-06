import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlusBtn from './../PlusBtn/PlusBtn';

export default function Counter({ counterType, incrementMins, decrementSecs, setMins, setSecs }) {
  const { mins, secs } = useSelector(state => counterType === "pomodoroTaskCounter" ? state.pomodoroTaskCounter : counterType === "shortRestCounter" ? state.shortRestCounter : counterType === "longRestCounter" ? state.longRestCounter : state);
  const [activeCounter, setActiveCounter] = useState(false);
  const [interval, setStateInterval] = useState();
  const dispatch = useDispatch();
  const countStart = () => setActiveCounter(true);
  const countPause = () => setActiveCounter(false);

  const countStartInterval = () => {
    if (secs > 0) dispatch(decrementSecs())
  }

  useEffect(() => {
    if (activeCounter === true) setStateInterval(setInterval(() => countStartInterval(), 1000))
    else clearInterval(interval);
  }, [activeCounter])

  useEffect(() => {
    document.title = `${mins}:${secs === 60 ? "00" : secs < 10 ? "0" + secs : secs}`
    if (secs < 1) dispatch(setSecs(60));
    if (secs === 59) dispatch(setMins());
  }, [secs])

  useEffect(() => {
    countPause()
  }, [counterType])
  return (
    <div>
      {mins}:{secs === 60 ? "00" : `${secs === 60 ? "00" : secs < 10 ? "0" + secs : secs}`}
      <button onClick={() => countStart()}>Start</button>
      <button onClick={() => countPause()}>Pause</button>
      <PlusBtn nr={5} incrementMins={incrementMins}></PlusBtn>
    </div>
  )
}