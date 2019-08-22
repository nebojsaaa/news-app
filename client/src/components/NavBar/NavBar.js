import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<div className="nav">
			<NavLink exact to='/' className="nav__link">Top News</NavLink>
			<NavLink exact to='/category' className="nav__link">Category</NavLink>
		</div>
	);
}

export default NavBar;
