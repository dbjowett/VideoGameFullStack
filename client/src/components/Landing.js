import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <h1>Welcome</h1>
      <button className='landing-btn'>
        <Link to='/games'>GET STARTED</Link>
      </button>
    </div>
  );
}
