import React, { useState, useEffect } from 'react';
import { articleService } from '../../services/articles';
import config from '../../config';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const TopNews = ({ setCountry, disableBtn }) => {

	const [data, setData] = useState([]);
	const [singleArticle, setSingleArticle] = useState([]);
	const [visibility, setVisibility] = useState(true);

	useEffect(() => {
    	// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		articleService.fetchData(countryCode, setData);
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
			return 'Great Britain'
		} else if (countryCode === config.countryCode[1].code) {
			return 'USA'
		}
	}

	return (
		<div>
			{visibility}
			<h1 className="h1">{`Top News from ${setTitle()}`}</h1>
			<div className="card__wrapper">
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
