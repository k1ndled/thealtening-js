const https = require('https');
const fetch = require('node-fetch');

module.exports = class Utilities {
    constructor(token) {
        this.token = token;
    }

    async fetch (url, attach) {
        if (this.token) {
            const req = await fetch('https://api.thealtening.com/v2' + url + `?key=${this.token}${attach ? `&${attach}` : ''}`, {
                agent:
                    new https.Agent({
                        rejectUnauthorized: false,
                }),
            });
            return await req.json()
        }
    }
}