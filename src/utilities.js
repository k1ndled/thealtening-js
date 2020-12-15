const https = require('https');
const fetch = require('node-fetch');

module.exports = class Utilities {
	constructor(token) {
		this.token = token;
	}

	async fetch(url, attach) {
		if (this.token) {
			const req = await fetch(
				'https://api.thealtening.com/v2' +
					url +
					`?key=${this.token}${attach ? `&${attach}` : ''}`,
				{
					agent: new https.Agent({
						rejectUnauthorized: false,
					}),
				}
			);
			if ((await req.status) == 401) {
				console.error(
					'API Key was not provided or is invalid. Get your API Key from https://panel.thealtening.com/#account'
				);
				return {
					error: `API Key was not provided or is invalid. Get your API Key from https://panel.thealtening.com/#account`,
				};
			} else if ((await req.status) == 403) {
				console.error(
					`The provided API Key cannot access the ${url} endpoint.`
				);
				return {
					error: `The provided API Key cannot access the ${url} endpoint.`,
				};
			} else if ((await req.status) == 404) {
				console.error(`${url} is an invalid endpoint`);
				return { error: `${url} is an invalid endpoint` };
			} else if ((await req.status) == 500) {
				console.error(`TheAltening servers encountered an error.`);
				return { error: 'TheAltening servers encountered an error.' };
			}
			return await req.json();
		}
	}
};
