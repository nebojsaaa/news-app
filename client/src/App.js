import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNews from './pages/top-news/top-news';
import Category from './pages/category/category';
import NavBar from './components/NavBar/NavBar';
import config from './config';

const App = () => {
	const [ countryCode, setCountryCode ] = useState('');
	const [ disableBtn, handleDisableBtn ] = useState(false);

	return (
		<div className="wrapper">
			<BrowserRouter>
				<NavBar 
					getCountry={(code) => setCountryCode(code)}
					handleClick={() => {
						setCountryCode('');
						handleDisableBtn(false);
					}}
					setActiveBtn = {countryCode}
					disableBtn={disableBtn}
				/>
				<Switch>
					<Route 
						exact 
						path={config.paths.topNews} 
						render={() => <TopNews setCountry={countryCode} disableBtn={handleDisableBtn} />}
					/>
					<Route 
						exact 
						path={config.paths.category} 
						render={() => <Category setCountry={countryCode} disableBtn={handleDisableBtn} />}	
					/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;
