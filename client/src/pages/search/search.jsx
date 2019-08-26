import React, { useState, useEffect } from 'react';
import { articleService } from '../../services/articles';
import config from '../../config';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const Search = ({ setCountry, disableBtn }) => {

	const [ data, setData ] = useState([]);
	const [ query, setQuery ] = useState('');
	const [ singleArticle, setSingleArticle ] = useState([]);
	const [ visibility, setVisibility ] = useState(true);

	useEffect(() => {
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		articleService.fetchData(countryCode, setData);
	}, [setCountry, setData]);
	
	const handleChange = (e) => {
		setQuery(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query === '') return false;
		const convertQuery = encodeURI(query);
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		articleService.fetchQueryData(countryCode, setData, convertQuery);
	}

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

	if (data.length < 1) return <span>No members at the moment</span>;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Search top news from GB by term
				<input 
					type="text"
					name="query"
					value={query}
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>

			{visibility && setTitle()}
			<div className="card-wrapper">
				{data.articles && data.articles.length < 1 && <span>Sorry, no articles at the moment</span>}

				{visibility && data.articles && data.articles.map((article, index) => {
					return (
						<Card
							getSingleArticle={getSingleArticle}
							key={index}
							article={article}
						/>
					)
				})}
				{!visibility && <CardDetail singleArticle={singleArticle} handleVisibility={handleVisibility} />}
			</div>
		</div>
	);
}

export default Search;
