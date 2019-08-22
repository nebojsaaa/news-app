import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNews from '../../pages/top-news/top-news';
import Category from '../../pages/category/category';
import NavBar from '../NavBar/NavBar';
import config from '../../config';

const Routes = () => {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path={config.paths.topNews} component={TopNews} />
					<Route exact path={config.paths.category} component={Category} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes;
