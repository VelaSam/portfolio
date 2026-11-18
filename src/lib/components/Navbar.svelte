<script lang="ts">
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n.svelte';

	const navItems = $derived(
		i18n.locale === 'en'
			? [
					{ label: 'Home', href: '/' },
					{ label: 'Experience', href: '/experience' },
					{ label: 'Projects', href: '/projects' },
					{ label: 'Contact', href: '/contact' }
				]
			: [
					{ label: 'Accueil', href: '/' },
					{ label: 'Expérience', href: '/experience' },
					{ label: 'Projets', href: '/projects' },
					{ label: 'Contact', href: '/contact' }
				]
	);

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<!-- Full-bleed transparent borderless header spanning 100% viewport width -->
<header class="header-full-bleed">
	<nav class="navbar" aria-label="Main Navigation">
		<!-- Left Group: Samuel Velasco Brand -->
		<div class="nav-left-group">
			<a href="/" data-sveltekit-reload class="brand interactive" onclick={closeMobileMenu}>
				<div class="brand-logo-container">
					<img src="/logo-emblem.png" alt="Samuel Velasco Logo" class="brand-logo" />
				</div>
				<div class="brand-text">
					<span class="brand-name">Samuel Velasco</span>
					<span class="brand-role">
						{i18n.locale === 'en' ? 'Software Developer' : 'Développeur Logiciel'}
					</span>
				</div>
			</a>
		</div>

		<!-- Right Group: Nav Links starting with Home -->
		<div class="nav-links">
			{#each navItems as item}
				{@const isActive =
					page.url.pathname === item.href ||
					(item.href === '/experience' && page.url.pathname === '/cv')}
				<a
					href={item.href}
					data-sveltekit-reload
					class="nav-item interactive"
					class:active={isActive}
					aria-current={isActive ? 'page' : undefined}
					onclick={closeMobileMenu}
				>
					<span class="nav-label">{item.label}</span>
					{#if isActive}
						<span class="active-hairline"></span>
					{/if}
				</a>
			{/each}
		</div>

		<!-- Mobile Burger Button -->
		<button
			class="mobile-toggle interactive"
			aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
			aria-expanded={mobileMenuOpen}
			onclick={toggleMobileMenu}
		>
			<span class="burger-bar" class:open={mobileMenuOpen}></span>
			<span class="burger-bar" class:open={mobileMenuOpen}></span>
		</button>
	</nav>

	<!-- Mobile Drawer -->
	{#if mobileMenuOpen}
		<div class="mobile-drawer">
			<div class="mobile-nav-links">
				{#each navItems as item}
					{@const isActive =
						page.url.pathname === item.href ||
						(item.href === '/experience' && page.url.pathname === '/cv')}
					<a
						href={item.href}
						data-sveltekit-reload
						class="mobile-nav-item"
						class:active={isActive}
						onclick={closeMobileMenu}
					>
						<span>{item.label}</span>
						{#if isActive}
							<span class="active-badge">{i18n.locale === 'en' ? 'Current' : 'Actuel'}</span>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<!-- Tactile Screen-Attached Floating Language Toggle (Fixed to Bottom-Right of Viewport) -->
<aside class="screen-lang-dock no-print" aria-label="Language selection">
	<button
		class="floating-lang-pill interactive"
		onclick={() => i18n.toggleLocale()}
		title={i18n.locale === 'en'
			? 'Passer au français québécois (Mode QC ⚜️)'
			: 'Switch to English (Standard mode 🍁)'}
		aria-label="Toggle language"
	>
		{#if i18n.locale === 'en'}
			<span class="lang-flag" aria-hidden="true">⚜️</span>
			<span class="lang-active">QC</span>
			<span class="lang-divider" aria-hidden="true">/</span>
			<span class="lang-alt">FR</span>
		{:else}
			<span class="lang-flag" aria-hidden="true">🍁</span>
			<span class="lang-active">EN</span>
			<span class="lang-divider" aria-hidden="true">/</span>
			<span class="lang-alt">ENG</span>
		{/if}
	</button>
</aside>

<style>
	/* Full-bleed transparent borderless header spanning 100% viewport width */
	.header-full-bleed {
		width: 100%;
		background: transparent;
		border: none;
		box-shadow: none;
		padding: 1.25rem 2.5rem 0.75rem;
		position: relative;
		z-index: 900;
		box-sizing: border-box;
	}

	/* Exploded navbar taking 100% of the viewport width */
	.navbar {
		width: 100%;
		max-width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: nowrap;
		background: transparent;
		border: none;
		box-shadow: none;
		padding: 0;
		box-sizing: border-box;
	}

	/* Left group: Brand + Montreal */
	.nav-left-group {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-shrink: 0;
	}

	/* Brand */
	.brand {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		text-decoration: none;
		color: var(--text-primary);
		padding: 0.2rem 0;
		transition: transform 0.2s ease;
		flex-shrink: 0;
	}

	.brand:hover {
		transform: translateX(2px);
	}

	.brand-logo-container {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 3px;
		transition: transform 0.25s ease;
	}

	.brand:hover .brand-logo-container {
		transform: scale(1.08);
	}

	.brand-logo {
		width: 18px;
		height: auto;
		display: block;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.15;
	}

	.brand-name {
		font-family: var(--font-display);
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--text-primary);
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.brand-role {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		color: var(--text-tertiary);
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	/* Nav Links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
		background: transparent;
		border: none;
		padding: 0;
		flex-shrink: 0;
	}

	.nav-item {
		display: inline-flex;
		align-items: center;
		position: relative;
		padding: 0.4rem 0;
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.92rem;
		font-weight: 500;
		transition: color 0.2s ease;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.nav-item:hover,
	.nav-item.active {
		color: var(--text-primary);
	}

	.active-hairline {
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--accent-purple);
		border-radius: 1px;
	}

	/* Screen-Attached Floating Language Dock (Bottom Right) */
	.screen-lang-dock {
		position: fixed;
		bottom: 2rem;
		right: 2.5rem;
		z-index: 9999;
		pointer-events: auto;
	}

	.floating-lang-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.55rem 0.95rem;
		background: rgba(255, 255, 255, 0.88);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-medium);
		border-radius: 4px; /* Sharp architectural aesthetic */
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		cursor: pointer;
		box-shadow: 0 4px 18px -2px rgba(28, 25, 23, 0.08), 0 2px 6px -1px rgba(28, 25, 23, 0.04);
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		user-select: none;
	}

	.floating-lang-pill:hover {
		background: #ffffff;
		border-color: var(--accent-purple);
		color: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px -4px rgba(109, 40, 217, 0.16), 0 3px 8px -2px rgba(28, 25, 23, 0.06);
	}

	.floating-lang-pill:active {
		transform: translateY(0) scale(0.97);
	}

	.lang-flag {
		font-size: 1rem;
		line-height: 1;
	}

	.lang-active {
		font-weight: 700;
		color: var(--text-primary);
	}

	.lang-divider {
		color: var(--text-tertiary);
		font-size: 0.7rem;
	}

	.lang-alt {
		color: var(--text-tertiary);
		font-size: 0.72rem;
	}

	.floating-lang-pill:hover .lang-active,
	.floating-lang-pill:hover .lang-alt {
		color: var(--accent-purple);
	}

	/* Mobile Toggle & Drawer */
	.mobile-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 6px;
	}

	.burger-bar {
		width: 20px;
		height: 2px;
		background: var(--text-primary);
		transition: all 0.25s ease;
	}

	.burger-bar.open:nth-child(1) {
		transform: translateY(3.5px) rotate(45deg);
	}

	.burger-bar.open:nth-child(2) {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	.mobile-drawer {
		margin-top: 1rem;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 1.25rem;
		box-shadow: 0 10px 25px -4px rgba(44, 38, 30, 0.08);
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.mobile-nav-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem;
		border-radius: 3px;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 500;
	}

	.mobile-nav-item.active {
		background: rgba(109, 40, 217, 0.08);
		color: var(--accent-purple);
		font-weight: 600;
	}

	.active-badge {
		font-size: 0.7rem;
		padding: 0.15rem 0.45rem;
		border-radius: 2px;
		background: rgba(109, 40, 217, 0.12);
		color: var(--accent-purple);
	}

	/* Responsive */
	@media (max-width: 900px) {
		.header-full-bleed {
			padding: 1.25rem 1.75rem 0.5rem;
		}

		.nav-links {
			gap: 1.35rem;
		}

		.screen-lang-dock {
			bottom: 1.5rem;
			right: 1.75rem;
		}
	}

	@media (max-width: 768px) {
		.header-full-bleed {
			padding: 1.1rem 1.25rem 0.5rem;
		}

		.nav-links {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}

		.screen-lang-dock {
			bottom: 1.25rem;
			right: 1.25rem;
		}
	}

	/* Print Cleanliness */
	@media print {
		.screen-lang-dock,
		.mobile-toggle {
			display: none !important;
		}
	}
</style>
