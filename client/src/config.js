export default {
	paths: {
		topNews: '/',
		category: '/category',
		singleNews: '/single-news'
	},
	api: {
		news: 'https://newsapi.org/v2/top-headlines',
		category: 'https://newsapi.org/v2/everything',
	},
	apiKey: '93dd0b9e705f477d9352ecf39f64c254',
	countryCode: [
		{
			name: 'GB',
			code: 'gb'
		},
		{
			name: 'US',
			code: 'us'
		}
	]
};

// api + news + country + apiKey
