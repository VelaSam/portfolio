export type Theme = 'light' | 'dark';

class ThemeState {
	current: Theme = $state('light');

	constructor() {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('samuel_portfolio_theme') as Theme | null;
			if (saved === 'light' || saved === 'dark') {
				this.current = saved;
			}
			document.documentElement.dataset.theme = this.current;
		}
	}

	toggle() {
		this.current = this.current === 'light' ? 'dark' : 'light';
		if (typeof window !== 'undefined') {
			localStorage.setItem('samuel_portfolio_theme', this.current);
			document.documentElement.dataset.theme = this.current;
		}
	}
}

export const theme = new ThemeState();
