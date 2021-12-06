import React from 'react';
import { useDispatch } from 'react-redux';

export default function PlusBtn({ nr = 5, incrementMins }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementMins())}>Plus {nr}</button>
  )
};
