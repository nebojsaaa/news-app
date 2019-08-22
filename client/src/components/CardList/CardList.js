import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import Card from '../Card/Card';
import './CardList.scss'

const CardList = () => {

	const [data, setData] = useState([]);

	const fetchData = () => {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		};

		console.log(`${config.api.news}?country=${config.countryCode.us}&apiKey=${config.apiKey}`);
	
		axios.get(`${config.api.news}?country=${config.countryCode.us}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(err));
		}
		
	useEffect(() => {
		fetchData();	
	}, [])

	console.log(data);

	return (
		<div className="card-wrapper">
			{data.articles && data.articles.map(article => {
				return (
					<Card
						key={article.url}
						article={article}
					/>
				)
			})}
		</div>
	);
}

export default CardList;
