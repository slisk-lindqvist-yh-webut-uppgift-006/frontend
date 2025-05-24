import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/portal" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
      <NavLink to="/portal/bookings" className={({ isActive }) => (isActive ? 'active' : '')}>Bookings</NavLink>
      <NavLink to="/portal/events" className={({ isActive }) => (isActive ? 'active' : '')}>Events</NavLink>
    </nav>
  );
};

export default Nav;