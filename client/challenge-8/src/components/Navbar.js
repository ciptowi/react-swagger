import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/add" className="nav-link text-light">
                  Add Player
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/api/players" className="nav-link text-light">
                  Players API
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
