export default {
	paths: {
		topNews: '/',
		category: '/category'
	},
	api: {
		news: 'https://newsapi.org/v2/top-headlines',
		category: 'https://newsapi.org/v2/everything',
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
