import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const TopNews = ({ setCountry, disableBtn }) => {

	const [data, setData] = useState([]);
	const [singleArticle, setSingleArticle] = useState([]);
	const [visibility, setVisibility] = useState(true);

	const fetchData = () => {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		};

		axios.get(`${config.api.news}?country=${config.countryCode[1].code}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(err));
		}

	const updateData = () => {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		};

		axios.get(`${config.api.news}?country=${setCountry}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(err));
		}

	
		
	useEffect(() => {
		fetchData();
	}, [])

	useEffect(() => {
		if (setCountry !== '') {
			updateData();
		}
	}, [setCountry])



	// const fetchData = () => {
	// 	const countryCode = setCountry ? setCountry : config.countryCode[0].code;
	// 	const requestOptions = {
	// 		method: 'GET',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json',
	// 		}
	// 	};

	// 	axios.get(`${config.api.news}?country=${countryCode}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
	// 		.then(res => {
	// 			setData(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// 	}

	// useEffect(() => {
	// 	fetchData();
	// }, [setCountry]);


	const getSingleArticle = (card) => {
		setSingleArticle(card);
		setVisibility(false);
		disableBtn(true);
	}

	const handleVisibility = () => {
		setVisibility(true);
		disableBtn(false);
	}

	return (
		<div className="card-wrapper">
			{visibility && data.articles && data.articles.map(article => {
				return (
					<Card
						getSingleArticle={getSingleArticle}
						key={article.url}
						article={article}
					/>
				)
			})}

			{!visibility && <CardDetail singleArticle={singleArticle} handleVisibility={handleVisibility} />}
		</div>
	);
}

export default TopNews;
