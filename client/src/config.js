export default {
	paths: {
		topNews: '/',
		categories: '/categories',
		singleNews: '/categories/single-news',
		search: '/search'
	},
	api: {
		news: 'https://newsapi.org/v2/top-headlines',
		categories: 'https://newsapi.org/v2/everything',
	},
	categories: {
		entertainment: 'entertainment',
		general: 'general',
		health: 'health',
		science: 'science',
		sports: 'sports',
		technology: 'technology',
	},
	apiKey: '93dd0b9e705f477d9352ecf39f64c254',
	// apiKey: '28ef0424ce5443a686874c08bcd59d0a',
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
