import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">Pomodoro link</Link>
      <Link to="/short-rest">Short rest</Link>
      <Link to="/long-rest">Long rest</Link>
    </header>
  )
};
