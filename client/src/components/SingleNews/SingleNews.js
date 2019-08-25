import React from 'react';
import Card from '../../components/Card/Card';
import CardDetail from '../../components/CardDetail/CardDetail';

const SingleNews = ({ data, visibility, singleArticle, getSingleArticle, handleVisibility }) => {
    let convertData = data[5];
    console.log(convertData)
    return (
        <div className="category-wrapper">
            <h2 className="h2">Entertainment</h2>
            <div className="card-wrapper">
                {data && data.map(article => {
                    console.log(article)
                    return (
                        article.data.map(item => {
                            return (
                               <Card
                                   getSingleArticle={getSingleArticle}
                                   key={item.url}
                                   article={item}
                               />
                           )
                        })
                    )
                })}
                {!visibility && <CardDetail singleArticle={singleArticle} handleVisibility={handleVisibility} />}
            </div>
        </div>
	);
}

export default SingleNews;
