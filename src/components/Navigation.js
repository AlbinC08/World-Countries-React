import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/" end
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>acceuil</li>
          </NavLink>
          <NavLink
            to="/about" 
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>à propos</li>
          </NavLink>
          <NavLink
            to="/blog" 
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
