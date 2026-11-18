<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import CursorEffect from '$lib/components/CursorEffect.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	});
</script>

<div class="site-container">
	<!-- Custom 3D dodecahedron cursor -->
	<CursorEffect />

	<!-- Subtle linen background grain -->
	<div class="ambient-grain" aria-hidden="true"></div>

	<!-- Top navigation -->
	<Navbar />

	<!-- Main page content: keyed by pathname for progressive rendering without full-page FOUC/FOUT -->
	{#key page.url.pathname}
		<main id="main-content" class="main-content progressive-stage">
			{@render children()}
		</main>
	{/key}

	<!-- Footer -->
	<Footer />
</div>

<style>
	:global(:root) {
		/* Warm paper palette */
		--bg-canvas: #faf6f0;
		--bg-surface: #ffffff;
		--bg-surface-elevated: #ffffff;
		--bg-surface-soft: #f4eee2;
		--bg-card: #ffffff;

		/* Typography colors */
		--text-primary: #1c1917;
		--text-secondary: #57534e;
		--text-tertiary: #8c827a;
		--text-muted: #a8a096;

		/* Borders and dividers */
		--border-subtle: #e6ded0;
		--border-medium: #d4cabb;
		--border-focus: #6d28d9;

		/* Brand Purple accents */
		--accent-purple: #6d28d9;
		--accent-purple-light: #8b5cf6;
		--accent-purple-dark: #4c1d95;
		--accent-purple-tint: rgba(109, 40, 217, 0.08);

		/* Sharp radius variables */
		--radius-sm: 2px;
		--radius-md: 4px;
		--radius-lg: 6px;

		/* Fonts */
		--font-display: 'Instrument Serif', Georgia, serif;
		--font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--font-mono: 'JetBrains Mono', monospace;
	}

	:global(html) {
		background-color: var(--bg-canvas);
		scrollbar-gutter: stable;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: var(--font-sans);
		color: var(--text-primary);
		background-color: var(--bg-canvas);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		line-height: 1.6;
		overflow-x: hidden;
		min-height: 100vh;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: inherit;
	}

	:global(::selection) {
		background: rgba(109, 40, 217, 0.15);
		color: var(--text-primary);
	}

	.site-container {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.ambient-grain {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		opacity: 0.03;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	}

	.main-content {
		position: relative;
		z-index: 10;
		flex: 1;
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 4rem;
	}

	.progressive-stage {
		animation: progressiveEnter 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes progressiveEnter {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.main-content {
			padding: 1.5rem 1rem 3rem;
		}
	}
</style>
