<script lang="ts">
	import CursorEffect from '$lib/components/CursorEffect.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="site-container">
	<!-- Custom ominous shadow cursor -->
	<CursorEffect />

	<!-- Bespoke textured background grain -->
	<div class="ambient-grain" aria-hidden="true"></div>

	<!-- Top navigation -->
	<Navbar />

	<!-- Main page content -->
	<main id="main-content" class="main-content">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
	:global(:root) {
		/* Warm creamy designer palette */
		--bg-canvas: #faf6f0;
		--bg-surface: #ffffff;
		--bg-surface-elevated: #ffffff;
		--bg-surface-soft: #f4eee2;
		--bg-card: rgba(255, 255, 255, 0.75);

		/* Typography colors */
		--text-primary: #1c1917;
		--text-secondary: #57534e;
		--text-tertiary: #8c827a;
		--text-muted: #a8a096;

		/* Borders and dividers */
		--border-subtle: #e8e0d2;
		--border-medium: #d6ccbd;
		--border-focus: #6d28d9;

		/* Brand Purple accents */
		--accent-purple: #6d28d9;
		--accent-purple-light: #8b5cf6;
		--accent-purple-dark: #4c1d95;
		--accent-purple-tint: rgba(109, 40, 217, 0.08);

		/* Fonts */
		--font-display: 'Instrument Serif', Georgia, serif;
		--font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--font-mono: 'JetBrains Mono', monospace;

		/* Shadows */
		--shadow-subtle: 0 2px 10px -2px rgba(28, 25, 23, 0.03), 0 1px 3px rgba(28, 25, 23, 0.02);
		--shadow-card: 0 10px 30px -4px rgba(28, 25, 23, 0.05), 0 2px 8px -2px rgba(28, 25, 23, 0.03);
		--shadow-elevated: 0 20px 40px -8px rgba(28, 25, 23, 0.08), 0 4px 14px -2px rgba(28, 25, 23, 0.04);
	}

	:global(html) {
		scroll-behavior: smooth;
		background-color: var(--bg-canvas);
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

	:global(selection) {
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
		z-index: 1;
		opacity: 0.035;
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

	@media (max-width: 768px) {
		.main-content {
			padding: 1.5rem 1rem 3rem;
		}
	}
</style>
