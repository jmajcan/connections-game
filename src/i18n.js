import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import GAME_JSON from './assets/locale/game.json'

i18n.use(initReactI18next).init({
 resources: {
	en: { ...GAME_JSON },
 },
 lng: 'en',
 fallbackLng: 'en',
 interpolation: {
		escapeValue: false // react already safes from xss
	}
});

export default i18n;