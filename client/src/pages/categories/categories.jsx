import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { articleService } from '../../services/articles';
import config from '../../config';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const Category = ({ setCountry, disableBtn, setSingleNews, getCountry }) => {

	const [ dataEntertainment, setDataEntertainment ] = useState([]);
	const [ dataGeneral, setDataGeneral ] = useState([]);
	const [ dataHealth, setDataHealth ] = useState([]);
	const [ dataScience, setDataScience ] = useState([]);
	const [ dataSports, setDataSports ] = useState([]);
	const [ dataTechnology, setDataTechnology ] = useState([]);

	const [ singleArticle, setSingleArticle ] = useState([]);
	const [ visibility, setVisibility ] = useState(true);

	const [ country, getCountryName ] = useState('');

	useEffect(() => {
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		getCountryName(countryCode);
		articleService.fetchDataCategories(countryCode, setDataEntertainment, config.categories.entertainment);
		articleService.fetchDataCategories(countryCode, setDataGeneral, config.categories.general);
		articleService.fetchDataCategories(countryCode, setDataHealth, config.categories.health);
		articleService.fetchDataCategories(countryCode, setDataScience, config.categories.science);
		articleService.fetchDataCategories(countryCode, setDataSports, config.categories.sports);
		articleService.fetchDataCategories(countryCode, setDataTechnology, config.categories.technology);
	}, [setCountry]);
	
	const categories = [
		{
			name: "Entertainment",
			data: dataEntertainment
		},
		{
			name: "General",
			data: dataGeneral
		},
		{
			name: "Health",
			data: dataHealth
		},
		{
			name: "Science",
			data: dataScience
		},
		{
			name: "Sports",
			data: dataSports
		},
		{
			name: "Technology",
			data: dataTechnology
		}
	];
	
	const getSingleArticle = (card) => {
		setSingleArticle(card);
		setVisibility(false);
		disableBtn(true);
	}

	const handleVisibility = () => {
		setVisibility(true);
		disableBtn(false);
	}

	const handleClick = (item) => {
		setSingleNews(item);
		getCountry(country);
	}

	const setTitle = () => {
		// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		if (countryCode === config.countryCode[0].code) {
			return <h1 className="h1">Top 5 news by categories from Great Britain:</h1>
		} else if (countryCode === config.countryCode[1].code) {
			return <h1 className="h1">Top 5 news by categories from USA:</h1>
		}
	}
	
	return (
		<div>
			{visibility && 
				<div className="category-wrapper">
					{setTitle()}
					{categories && categories.map((item, i) => {
						return (
							<div className="category__card-wrapper" key={i}>
								<NavLink exact to="categories/single-news" onClick={() => handleClick(item)} className="category__title">{item.name}</NavLink>
								<div className="card-wrapper">
									{item.data.articles && item.data.articles.map(article => {
										return (
											<Card
												getSingleArticle={getSingleArticle}
												key={article.url}
												article={article}
											/>
										)
									})}
								</div>
							</div>
							)
						})}
				</div>
			}
			{!visibility && <CardDetail singleArticle={singleArticle} handleVisibility={handleVisibility} />}
		</div>
	);
}

export default Category;
