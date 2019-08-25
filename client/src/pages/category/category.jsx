import React, { useState, useEffect } from 'react';
import { articleService } from '../../services/articles';
import config from '../../config';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const Category = ({ setCountry, disableBtn }) => {

	const [dataEntertainment, setDataEntertainment] = useState([]);
	const [dataGeneral, setDataGeneral] = useState([]);
	const [dataHealth, setDataHealth] = useState([]);
	const [dataScience, setDataScience] = useState([]);
	const [dataSports, setDataSports] = useState([]);
	const [dataTechnology, setDataTechnology] = useState([]);

	const [singleArticle, setSingleArticle] = useState([]);
	const [visibility, setVisibility] = useState(true);

	useEffect(() => {
    	// set which country is active on load
		const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		articleService.fetchDataCategories(countryCode, setDataEntertainment, config.categories.entertainment);
		articleService.fetchDataCategories(countryCode, setDataGeneral, config.categories.general);
		articleService.fetchDataCategories(countryCode, setDataHealth, config.categories.health);
		articleService.fetchDataCategories(countryCode, setDataScience, config.categories.science);
		articleService.fetchDataCategories(countryCode, setDataSports, config.categories.sports);
		articleService.fetchDataCategories(countryCode, setDataTechnology, config.categories.technology);
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


	return (
		<div>
			{/* <div>
				<SingleNews 
					data={dataCategory}
					visibility={visibility}
					getSingleArticle={getSingleArticle}
					singleArticle={singleArticle}
					handleVisibility={handleVisibility} 
				/>
			</div> */}
			<div>
				<div>
					{visibility && 
						<div className="category-wrapper">
							<h2 className="h2">Entertainment</h2>
							<div className="card-wrapper">
								{dataEntertainment.articles && dataEntertainment.articles.map(article => {
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
					}
				</div>
				<div>
					{visibility && 
					<div className="category-wrapper">
						<h2 className="h2">General</h2>
						<div className="card-wrapper">
							{dataGeneral.articles && dataGeneral.articles.map(article => {
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
					}
				</div>
				
				<div>
					{visibility && 
					<div className="category-wrapper">
						<h2 className="h2">Health</h2>
						<div className="card-wrapper">
							{dataHealth.articles && dataHealth.articles.map(article => {
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
					}
				</div>
				<div>
					{visibility && 
					<div className="category-wrapper">
						<h2 className="h2">Science</h2>
						<div className="card-wrapper">
							{dataScience.articles && dataScience.articles.map(article => {
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
					}
				</div>
				<div>
					{visibility && 
					<div className="category-wrapper">
						<h2 className="h2">Sports</h2>
						<div className="card-wrapper">
							{dataSports.articles && dataSports.articles.map(article => {
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
					}
				</div>
				<div>
					{visibility && 
					<div className="category-wrapper">
						<h2 className="h2">Technology</h2>
						<div className="card-wrapper">
							{dataSports.articles && dataSports.articles.map(article => {
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
					}
				</div>
				{!visibility && <CardDetail singleArticle={singleArticle} handleVisibility={handleVisibility} />}
			</div>
		</div>
		
	);
}

export default Category;
