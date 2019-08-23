import React from 'react';
import './CardDetail.scss';

const CardDetail = ({ singleArticle, handleVisibility }) => {
	return (
		<div className="card-full-width">
			<div className="card__img">
				<img src={singleArticle.urlToImage} alt="alt"/>
			</div>
			<h5 className="card__title">{singleArticle.title}</h5>
			<p className="card__text">{singleArticle.content}</p>
			<button onClick={handleVisibility} className="card__btn">Go back</button>
		</div>
	);
}

export default CardDetail;
