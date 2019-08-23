import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNews from './pages/top-news/top-news';
import Category from './pages/category/category';
import NavBar from './components/NavBar/NavBar';
import config from './config';

const App = () => {
	const [ countryCode, setCountryCode ] = useState('');

	return (
		<div className="wrapper">
			<BrowserRouter>
				<NavBar getCountry={(code) => setCountryCode(code)} />
				<Switch>
					<Route 
						exact 
						path={config.paths.topNews} 
						render={() => { return <TopNews setCountry={countryCode} />}}
					/>
					<Route exact path={config.paths.category} component={Category} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;
