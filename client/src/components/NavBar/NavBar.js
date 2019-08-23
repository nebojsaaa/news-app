import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import config from '../../config';


// const Languages = () => config.countryCode.map(country => <button onClick={getCode(country.code)} key={country.code} data-code={country.code}>{country.name}</button>)

const NavBar = ({ getCountry, disableBtn }) => {
	return (
		<div className="nav">
			<NavLink exact to='/' className="nav__link">Top News</NavLink>
			<NavLink exact to='/category' className="nav__link">Category</NavLink>
			<div className="language">
				{config.countryCode.map(country => {
					return (
						<button disabled={disableBtn} onClick={() => getCountry(country.code)} key={country.code} data-code={country.code}>{country.name}</button>
					)
				})}
			</div>
		</div>
	);
}

export default NavBar;
