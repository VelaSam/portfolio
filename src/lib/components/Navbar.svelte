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

<!-- Full-bleed transparent borderless header spanning 100% viewport width -->
<header class="header-full-bleed">
	<nav class="navbar" aria-label="Main Navigation">
		<!-- Brand Logo & Name -->
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

		<!-- Clean Borderless Nav Links -->
		<div class="nav-links">
			{#each navItems as item}
				{@const isActive = page.url.pathname === item.href}
				<a
					href={item.href}
					class="nav-item interactive"
					class:active={isActive}
					aria-current={isActive ? 'page' : undefined}
				>
					<span class="nav-label">{item.label}</span>
					{#if isActive}
						<span class="active-hairline"></span>
					{/if}
				</a>
			{/each}
		</div>

		<!-- Status, Fun Quebec Switcher & CTA -->
		<div class="nav-right">
			<!-- Quebec / English Toggle Button -->
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
				<span class="status-text">Montréal, QC</span>
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
					<button
						class="mobile-lang-btn"
						onclick={() => {
							i18n.toggleLocale();
							closeMobileMenu();
						}}
					>
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
	/* Full-bleed transparent header spanning the full width (100%) */
	.header-full-bleed {
		width: 100%;
		background: transparent;
		border: none;
		box-shadow: none;
		padding: 1.5rem 2.5rem 1rem;
		position: relative;
		z-index: 900;
	}

	/* Max-width container inside full-bleed header */
	.navbar {
		max-width: 1150px;
		margin: 0 auto;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: transparent;
		border: none;
		box-shadow: none;
		padding: 0;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--text-primary);
		padding: 0.2rem 0;
		transition: transform 0.2s ease;
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
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	.brand-role {
		font-size: 0.68rem;
		color: var(--text-tertiary);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	/* Borderless Nav Links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.75rem;
		background: transparent;
		border: none;
		padding: 0;
	}

	.nav-item {
		display: inline-flex;
		align-items: center;
		position: relative;
		padding: 0.4rem 0;
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.88rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.nav-item:hover {
		color: var(--text-primary);
	}

	.nav-item.active {
		color: var(--text-primary);
		font-weight: 600;
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

	.nav-right {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	/* Quebec / English Fun Switcher */
	.lang-switcher {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.65rem;
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid var(--border-medium);
		border-radius: 3px;
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.lang-switcher:hover {
		border-color: var(--accent-purple);
		background: #ffffff;
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
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid var(--border-subtle);
		border-radius: 3px;
		font-size: 0.74rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.status-indicator {
		width: 5px;
		height: 5px;
		border-radius: 1px;
		background: #10b981;
	}

	.nav-cta {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 1.05rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px;
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
		margin-top: 1rem;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 1.25rem;
		box-shadow: 0 10px 25px -4px rgba(44, 38, 30, 0.08);
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
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
		.header-full-bleed {
			padding: 1.25rem 1.25rem 0.5rem;
		}

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
