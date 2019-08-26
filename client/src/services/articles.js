import config from '../config';
import axios from 'axios';

export const articleService = {
    fetchData,
	fetchDataCategories,
	fetchQueryData
}

function fetchData (countryCode, setData) {
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

function fetchDataCategories (countryCode, setData, categories) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };


    axios.get(`${config.api.news}?country=${countryCode}&category=${categories}&apiKey=${config.apiKey}&pageSize=6`, requestOptions)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));
	}
	
function fetchQueryData (countryCode, setData, query) {
	const requestOptions = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	};

	axios.get(`${config.api.news}?country=${countryCode}&apiKey=${config.apiKey}&pageSize=6&q=${query}`, requestOptions)
		.then(res => {
			setData(res.data);
		})
		.catch(err => console.log(err));
	}
