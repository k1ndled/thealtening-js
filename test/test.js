const Client = require('../src/index.js');
const TheAltening = new Client(require('./config.json').token);

(async () => {
	const res = await TheAltening.generate();
	console.log(res);
})();
