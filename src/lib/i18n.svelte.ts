export type Locale = 'en' | 'fr';

export const easterEggs = [
	'Still tweaking my Neovim init.lua since 2018 (one day I will actually start coding).',
	'One day I will have things figured out. Today is not that day.',
	'You should try the moonlander. Seriously.',
	'White Monster.',
	'Don’t take yourself too seriously. Nobody else does anyway.',
	'I once accidentally joined a competitive salsa dance competition because I thought it was a tortilla chip tasting, but I’ll never tell anybody.',
	'Neovim Tweaker Level 99. Still searching for the exit command.'
];

class I18nState {
	locale: Locale = $state('en');
	eggIndex: number = $state(0);

	constructor() {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('samuel_portfolio_locale') as Locale | null;
			if (saved === 'en' || saved === 'fr') {
				this.locale = saved;
			}
		}
	}

	toggleLocale() {
		this.locale = this.locale === 'en' ? 'fr' : 'en';
		if (typeof window !== 'undefined') {
			localStorage.setItem('samuel_portfolio_locale', this.locale);
		}
	}

	setLocale(loc: Locale) {
		this.locale = loc;
		if (typeof window !== 'undefined') {
			localStorage.setItem('samuel_portfolio_locale', loc);
		}
	}

	cycleEgg() {
		this.eggIndex = (this.eggIndex + 1) % easterEggs.length;
	}

	get currentEgg() {
		return easterEggs[this.eggIndex];
	}
}

export const i18n = new I18nState();
