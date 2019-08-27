import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';
import config from '../../config';

const SingleNews = ({ singleNews, setCountry, country, disableBtn }) => {

    const [ singleArticle, setSingleArticle ] = useState([]);
    const [ visibility, setVisibility ] = useState(true);

    
    const setTitle = (singleNews) => {
        const countryCode = setCountry ? setCountry : config.countryCode[0].code;
		if (countryCode === config.countryCode[0].code) {
            return <h2 className="h2">{`Top ${singleNews.name} news from Great Britain`}</h2>
		} else if (countryCode === config.countryCode[1].code) {
            return <h2 className="h2">{`Top ${singleNews.name} news from USA`}</h2>
		}
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

	return (
        <div>
            {visibility && setTitle(singleNews, country)}
			<div className="card__wrapper">
				{visibility && singleNews.data && singleNews.data.articles.map(article => {
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

export default SingleNews;
