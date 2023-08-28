import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavBar({ snacks }) {
  return (
    <nav className="Nav">
      {snacks.map((snack =>
        <Link
          className="Nav-snack"
          key={snack.id}
          to={`/snack/${snack.name}`}>
          {snack.name}
        </Link>))}
    </nav>
  );
}

export default NavBar;