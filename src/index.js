const Utilities = require('./utilities.js');

module.exports = class Client {
    constructor(token) {
        if (!token) return console.error('You must provide a token!');
        this.utilities = new Utilities(token);
    }

    /**
     * Generate an alt token.
     * @Example await Client.generate()
     * @returns {Promise<Object>}
     */
    async generate() {
        return await this.utilities.fetch('/generate', 'info=true');
    }

    /**
     * Return information about your license.
     * @Example await Client.license()
     * @returns {Promise<Object>}
     */
    async license() {
        return await this.utilities.fetch('/license');
    }

    /**
     * Return information about an alt.
     * @Example await Client.altInfo('seapx-7dclt@alt.com')
     * @Param (alt) The ALT's token.
     * @returns {Promise<Object>}
     */
    async altInfo(alt) {
        return await this.utilities.fetch('/info', 'token=' + alt)
    }

    /**
     * Favorite an alt.
     * @Example await Client.favorite('seapx-7dclt@alt.com')
     * @Param (alt) The ALT's token.
     * @returns {Promise<Object>}
     */
    async favorite(alt) {
        return await this.utilities.fetch('/favorite', 'token=' + alt);
    }

    /**
     * Returns your favorited alts.
     * @Example await Client.favorites()
     * @returns {Promise<Array>}
     */
    async favorites(alt) {
        return await this.utilities.fetch('/favorites');
    }

    /**
     * Private an alt.
     * @Example await Client.private('seapx-7dclt@alt.com')
     * @Param (alt) The ALT's token.
     * @returns {Promise<Object>}
     */
    async private(alt) {
        return await this.utilities.fetch('/private', 'token=' + alt);
    }

    /**
     * Returns your privated alts.
     * @Example await Client.privates()
     * @returns {Promise<Array>}
     */
    async privates() {
        return await this.utilities.fetch('/privates');
    }
}