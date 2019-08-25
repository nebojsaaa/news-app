import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import config from '../../config';


const NavBar = ({ getCountry, disableBtn, setActiveBtn, handleClick }) => {

	return (
		<div className="nav">
			<div className="nav__content-left">
				<NavLink exact to='/' onClick={handleClick} className="nav__link">Top News</NavLink>
				<NavLink exact to='/categories' onClick={handleClick} className="nav__link">Categories</NavLink>
			</div>
			<div className="nav__content-right">
				{config.countryCode.map(country => {
					// set which country is active on load
					const countryCode = setActiveBtn ? setActiveBtn : config.countryCode[0].code;
					// add active classes on button
					const disableClass = disableBtn ? ' nav__lang-btn--disabled': '';
					const addActiveClass = countryCode === country.code ? ' nav__lang-btn--active' : '';
					return (
						<button disabled={disableBtn} className={`nav__lang-btn${disableClass}${addActiveClass}`} onClick={() => getCountry(country.code)} key={country.code} data-code={country.code}>{country.name}</button>
					)
				})}
			</div>
		</div>
	);
}

export default NavBar;
