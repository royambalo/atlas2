import React from 'react';
import { Link } from 'react-router-dom';
function NavBar(props) {
  return (
    <nav className="container d-flex justify-content-between align-items-center bg-secondary">
      <Link to={"/add/"} className="btn btn-warning">Add</Link>
      <Link to={"/list/"} className="btn btn-warning">List</Link>
      <Link to={"/count/"} className="btn btn-warning">count</Link>
    </nav>
  )
}

export default NavBar
