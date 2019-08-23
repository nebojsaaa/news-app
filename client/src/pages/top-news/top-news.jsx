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
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		const requestOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		};

		axios.get(`${config.api.news}?country=${countryCode}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(err));
		}

	useEffect(() => {
		fetchData();
	}, [setCountry]);


	const getSingleArticle = (card) => {
		setSingleArticle(card);
		setVisibility(false);
		disableBtn(true);
	}

	const handleVisibility = () => {
		setVisibility(true);
		disableBtn(false);
	}

	const setTitle = () => {
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		if (countryCode === config.countryCode[0].code) {
			return <h1 className="h1">Top News from Great Britain</h1>
		} else if (countryCode === config.countryCode[1].code) {
			return <h1 className="h1">Top News from USA</h1>
		}
	}

	return (
		<div>
			{visibility && setTitle()}
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
		</div>
	);
}

export default TopNews;
