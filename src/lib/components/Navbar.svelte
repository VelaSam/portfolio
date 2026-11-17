<script lang="ts">
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n.svelte';

	const navItems = $derived(
		i18n.locale === 'en'
			? [
					{ label: 'Home', href: '/' },
					{ label: 'Resume & Experience', href: '/cv' },
					{ label: 'Contact', href: '/contact' }
				]
			: [
					{ label: 'Accueil', href: '/' },
					{ label: 'CV & Expérience', href: '/cv' },
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

<header class="navbar-wrapper">
	<nav class="navbar" aria-label="Main Navigation">
		<!-- Brand Logo -->
		<a href="/" class="brand interactive" onclick={closeMobileMenu}>
			<div class="brand-logo-container">
				<img src="/logo-emblem.png" alt="Samuel Velasco Logo" class="brand-logo" />
			</div>
			<div class="brand-text">
				<span class="brand-name">Samuel Velasco</span>
				<span class="brand-role">
					{i18n.locale === 'en' ? 'Software & Embedded' : 'Logiciel & Embarqué'}
				</span>
			</div>
		</a>

		<!-- Desktop Nav Links -->
		<div class="nav-links">
			{#each navItems as item}
				{@const isActive = page.url.pathname === item.href}
				<a
					href={item.href}
					class="nav-item interactive"
					class:active={isActive}
					aria-current={isActive ? 'page' : undefined}
				>
					<span class="nav-indicator"></span>
					<span class="nav-label">{item.label}</span>
				</a>
			{/each}
		</div>

		<!-- Status Badge, Fun Quebec Switcher & CTA -->
		<div class="nav-right">
			<!-- Fun Quebec/English Language Switcher -->
			<button
				class="lang-switcher interactive"
				onclick={() => i18n.toggleLocale()}
				title={i18n.locale === 'en'
					? 'Passer au français (Mode Québécois ⚜️)'
					: 'Switch to English (Standard mode)'}
				aria-label="Toggle language"
			>
				{#if i18n.locale === 'en'}
					<span class="lang-flag">⚜️</span>
					<span class="lang-text">QC</span>
				{:else}
					<span class="lang-flag">🇨🇦</span>
					<span class="lang-text">EN</span>
				{/if}
			</button>

			<div class="status-pill" title={i18n.locale === 'en' ? 'Based in Montreal, QC' : 'Basé à Montréal, QC'}>
				<span class="status-indicator"></span>
				<span class="status-text">Montréal</span>
			</div>

			<a href="/contact" class="nav-cta interactive">
				<span>{i18n.locale === 'en' ? 'Let’s talk' : 'Discuter'}</span>
				<svg
					class="cta-arrow"
					viewBox="0 0 16 16"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="8" x2="13" y2="8"></line>
					<polyline points="9 4 13 8 9 12"></polyline>
				</svg>
			</a>

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
		</div>
	</nav>

	<!-- Mobile Drawer -->
	{#if mobileMenuOpen}
		<div class="mobile-drawer">
			<div class="mobile-nav-links">
				{#each navItems as item}
					{@const isActive = page.url.pathname === item.href}
					<a
						href={item.href}
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

				<div class="mobile-lang-row">
					<button class="mobile-lang-btn" onclick={() => { i18n.toggleLocale(); closeMobileMenu(); }}>
						{i18n.locale === 'en' ? '⚜️ Passer en Français (QC)' : '🇨🇦 Switch to English'}
					</button>
				</div>

				<a href="/contact" class="mobile-nav-cta" onclick={closeMobileMenu}>
					{i18n.locale === 'en' ? 'Get in touch' : 'Prendre contact'}
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.navbar-wrapper {
		position: sticky;
		top: 1rem;
		z-index: 900;
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	/* Sharp, architectural rectangular frame */
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.65rem 1.15rem;
		background: rgba(255, 255, 255, 0.82);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp corners */
		box-shadow: 0 2px 8px -1px rgba(44, 38, 30, 0.04);
		transition: all 0.25s ease;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--text-primary);
		padding: 0.25rem 0.5rem;
		border-radius: 3px;
		transition: transform 0.2s ease;
	}

	.brand:hover {
		transform: translateX(2px);
	}

	.brand-logo-container {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(109, 40, 217, 0.06);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 3px; /* Sharp corners */
		transition: transform 0.35s ease;
	}

	.brand:hover .brand-logo-container {
		transform: scale(1.08);
	}

	.brand-logo {
		width: 17px;
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
		font-size: 1.18rem;
		font-weight: 500;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	.brand-role {
		font-size: 0.68rem;
		color: var(--text-tertiary);
		font-weight: 500;
		letter-spacing: 0.03em;
		text-transform: uppercase;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.2rem;
		background: rgba(243, 238, 228, 0.5);
		padding: 0.2rem 0.3rem;
		border-radius: 3px; /* Sharp */
		border: 1px solid rgba(226, 219, 206, 0.7);
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.4rem 0.85rem;
		border-radius: 2px; /* Sharp */
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.85rem;
		font-weight: 500;
		transition: all 0.2s ease;
		position: relative;
	}

	.nav-indicator {
		width: 4px;
		height: 4px;
		border-radius: 1px; /* Sharp */
		background: transparent;
		transition: all 0.2s ease;
	}

	.nav-item:hover {
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.75);
	}

	.nav-item:hover .nav-indicator {
		background: var(--accent-purple);
	}

	.nav-item.active {
		color: var(--text-primary);
		background: #ffffff;
		border: 1px solid rgba(226, 219, 206, 0.8);
		font-weight: 600;
	}

	.nav-item.active .nav-indicator {
		background: var(--accent-purple);
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	/* Quebec / English Fun Switcher */
	.lang-switcher {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.65rem;
		background: #ffffff;
		border: 1px solid var(--border-medium);
		border-radius: 3px; /* Sharp */
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.lang-switcher:hover {
		border-color: var(--accent-purple);
		background: rgba(109, 40, 217, 0.05);
		transform: translateY(-1px);
	}

	.lang-flag {
		font-size: 0.95rem;
		line-height: 1;
	}

	.status-pill {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.65rem;
		background: rgba(243, 239, 230, 0.7);
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp */
		font-size: 0.74rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.status-indicator {
		width: 5px;
		height: 5px;
		border-radius: 1px; /* Sharp indicator */
		background: #10b981;
	}

	.nav-cta {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 1rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		font-size: 0.84rem;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.nav-cta:hover {
		background: var(--accent-purple);
		transform: translateY(-1px);
	}

	.cta-arrow {
		width: 13px;
		height: 13px;
		transition: transform 0.2s ease;
	}

	.nav-cta:hover .cta-arrow {
		transform: translateX(3px);
	}

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
		display: none;
		margin-top: 0.5rem;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 1rem;
		box-shadow: 0 10px 25px -4px rgba(44, 38, 30, 0.08);
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

	.mobile-lang-row {
		padding: 0.5rem 0;
		border-top: 1px solid var(--border-subtle);
		border-bottom: 1px solid var(--border-subtle);
		margin: 0.25rem 0;
	}

	.mobile-lang-btn {
		width: 100%;
		padding: 0.65rem;
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-medium);
		border-radius: 3px;
		font-weight: 600;
		font-size: 0.85rem;
		color: var(--text-primary);
		cursor: pointer;
	}

	.mobile-nav-cta {
		text-align: center;
		padding: 0.85rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px;
		text-decoration: none;
		font-weight: 600;
	}

	@media (max-width: 860px) {
		.nav-links,
		.status-pill,
		.nav-cta {
			display: none;
		}

		.mobile-toggle,
		.mobile-drawer {
			display: flex;
		}
	}
</style>
