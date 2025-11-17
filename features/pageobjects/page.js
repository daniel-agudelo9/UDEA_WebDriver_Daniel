// features/pageobjects/page.js
import { config } from "../../wdio.conf.js";

export default class Page {
    /**
     * Navega a una ruta específica dentro de Parabank.
     * @param {string} path
     */
    open(path = '') {
        const url = `${config.baseUrl}/${path}.htm`;
        return browser.url(url);
    }

    get logoutButton() {
        return $("//a[normalize-space()='Log Out']");
    }

    async logout() {
        await this.logoutButton.waitForClickable();
        await this.logoutButton.click();
    }
}

// util pequeño para evitar repetir waits
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
