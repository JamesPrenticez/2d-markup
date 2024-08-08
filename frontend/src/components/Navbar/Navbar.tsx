import React from 'react'
import { project } from '@constants';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="h-[80px] flex items-center text-2xl font-semibold p-4 text-major">
      {project.title.toUpperCase()}
      <Link to="/draw">
        Draw
      </Link>
      <Link to="/map">
        Map
      </Link>
    </header>

  )
}

export default Navbar;