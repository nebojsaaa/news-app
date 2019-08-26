import React from 'react';
import './Card.scss'

const Card = ({ article, getSingleArticle }) => {
	return (
		<div className="card">
			<div className="card__img">
				<img className="cover-img" src={article.urlToImage} alt="alt"/>
			</div>
			<h5 className="card__title">{article.title}</h5>
			<p className="card__text">{article.content}</p>
			<button onClick={() => getSingleArticle(article)} className="card__btn">Read more</button>
		</div>
	);
}

export default Card;
