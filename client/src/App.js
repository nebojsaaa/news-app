import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNews from './pages/top-news/top-news';
import Categories from './pages/categories/categories';
import NavBar from './components/NavBar/NavBar';
import config from './config';
import SingleNews from './pages/single-news/single-news';
import Search from './pages/search/search';

const App = () => {
	const [ countryCode, setCountryCode ] = useState('');
	const [ disableBtn, handleDisableBtn ] = useState(false);
	const [ singleNews, setSingleNews ] = useState([]);
	const [ country, getCountry ] = useState(''); // izmeni ovo

	return (
		<div className="main">
			<BrowserRouter>
				<NavBar 
					getCountry={(code) => setCountryCode(code)}
					handleClick={() => {
						// izbrisi sve za ovo svuda gde se nalazi
						// setCountryCode(''); 
						handleDisableBtn(false);
					}}
					setActiveBtn = {countryCode}
					disableBtn={disableBtn}
				/>
				<div className="wrapper">
					<Switch>
						<Route 
							exact 
							path={config.paths.topNews} 
							render={() => <TopNews setCountry={countryCode} disableBtn={handleDisableBtn} />}
						/>
						<Route 
							exact 
							path={config.paths.categories} 
							render={() => <Categories setCountry={countryCode} disableBtn={handleDisableBtn} setSingleNews={setSingleNews} getCountry={getCountry} />}	
						/>
						<Route 
							exact 
							path={config.paths.singleNews} 
							render={() => <SingleNews setCountry={countryCode} disableBtn={handleDisableBtn} singleNews={singleNews} country={country} />}	
						/>
						<Route 
							exact 
							path={config.paths.search} 
							render={() => <Search setCountry={countryCode} disableBtn={handleDisableBtn} />}	
						/>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App;
