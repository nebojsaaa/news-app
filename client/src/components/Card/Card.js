import React from 'react';
import './Card.scss'

const Card = ({ article }) => {
	return (
		<div className="card">
			<div className="card__img">
				<img src={article.urlToImage} alt="alt"/>
			</div>
			<h5 className="card__title">{article.title}</h5>
			<p className="card__text">{article.description}</p>
			<button className="card__btn">More</button>
		</div>
	);
}

export default Card;
