<script lang="ts">
	import { page } from '$app/state';

	const navItems = [
		{ label: 'Accueil', href: '/' },
		{ label: 'CV & Expérience', href: '/cv' },
		{ label: 'Contact', href: '/contact' }
	];

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="navbar-wrapper">
	<nav class="navbar" aria-label="Navigation principale">
		<!-- Brand Logo -->
		<a href="/" class="brand" onclick={closeMobileMenu}>
			<div class="brand-logo-container">
				<img src="/logo-emblem.png" alt="Samuel Velasco Logo" class="brand-logo" />
			</div>
			<div class="brand-text">
				<span class="brand-name">Samuel Velasco</span>
				<span class="brand-role">Software & Embedded</span>
			</div>
		</a>

		<!-- Desktop Nav Links -->
		<div class="nav-links">
			{#each navItems as item}
				{@const isActive = page.url.pathname === item.href}
				<a
					href={item.href}
					class="nav-item"
					class:active={isActive}
					aria-current={isActive ? 'page' : undefined}
				>
					<span class="nav-dot"></span>
					<span class="nav-label">{item.label}</span>
				</a>
			{/each}
		</div>

		<!-- Status Badge & CTA -->
		<div class="nav-right">
			<div class="status-pill" title="Disponible pour mandats et opportunités">
				<span class="status-indicator"></span>
				<span class="status-text">Montréal, QC</span>
			</div>
			<a href="/contact" class="nav-cta">
				<span>Discuter</span>
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
				class="mobile-toggle"
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
							<span class="active-badge">Actuel</span>
						{/if}
					</a>
				{/each}
				<a href="/contact" class="mobile-nav-cta" onclick={closeMobileMenu}>
					Prendre contact
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

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.65rem 1.15rem;
		background: rgba(255, 255, 255, 0.78);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(226, 219, 206, 0.85);
		border-radius: 9999px;
		box-shadow:
			0 4px 20px -2px rgba(44, 38, 30, 0.04),
			0 1px 3px rgba(44, 38, 30, 0.02);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--text-primary);
		padding: 0.25rem 0.5rem;
		border-radius: 9999px;
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
		background: rgba(109, 40, 217, 0.06);
		border: 1px solid rgba(109, 40, 217, 0.15);
		border-radius: 50%;
		transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.brand:hover .brand-logo-container {
		transform: rotate(12deg) scale(1.08);
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
		font-size: 1.15rem;
		font-weight: 500;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	.brand-role {
		font-size: 0.7rem;
		color: var(--text-tertiary);
		font-weight: 400;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		background: rgba(243, 238, 228, 0.5);
		padding: 0.25rem 0.35rem;
		border-radius: 9999px;
		border: 1px solid rgba(226, 219, 206, 0.6);
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 0.95rem;
		border-radius: 9999px;
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.86rem;
		font-weight: 500;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	.nav-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: transparent;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-item:hover {
		color: var(--text-primary);
		background: rgba(255, 255, 255, 0.7);
		transform: translateY(-1px);
	}

	.nav-item:hover .nav-dot {
		background: var(--accent-purple);
		transform: scale(1.4);
	}

	.nav-item.active {
		color: var(--text-primary);
		background: #ffffff;
		box-shadow: 0 2px 8px -1px rgba(44, 38, 30, 0.08);
		font-weight: 600;
	}

	.nav-item.active .nav-dot {
		background: var(--accent-purple);
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.status-pill {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.75rem;
		background: rgba(243, 239, 230, 0.65);
		border: 1px solid rgba(226, 219, 206, 0.7);
		border-radius: 9999px;
		font-size: 0.74rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.status-indicator {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #10b981;
		box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
		animation: pulseStatus 2.2s infinite;
	}

	@keyframes pulseStatus {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(0.85);
		}
	}

	.nav-cta {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 1.05rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 9999px;
		text-decoration: none;
		font-size: 0.84rem;
		font-weight: 500;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.nav-cta:hover {
		background: var(--accent-purple);
		transform: translateY(-1px);
		box-shadow: 0 6px 18px -2px rgba(109, 40, 217, 0.3);
	}

	.cta-arrow {
		width: 14px;
		height: 14px;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
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
		border-radius: 2px;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(226, 219, 206, 0.9);
		border-radius: 1.25rem;
		padding: 1rem;
		box-shadow: 0 12px 30px -4px rgba(44, 38, 30, 0.1);
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
		padding: 0.75rem 1rem;
		border-radius: 0.75rem;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 500;
		background: transparent;
		transition: background 0.2s ease;
	}

	.mobile-nav-item.active {
		background: rgba(109, 40, 217, 0.08);
		color: var(--accent-purple);
		font-weight: 600;
	}

	.active-badge {
		font-size: 0.7rem;
		padding: 0.2rem 0.5rem;
		border-radius: 9999px;
		background: rgba(109, 40, 217, 0.12);
		color: var(--accent-purple);
	}

	.mobile-nav-cta {
		margin-top: 0.5rem;
		text-align: center;
		padding: 0.85rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 0.75rem;
		text-decoration: none;
		font-weight: 500;
	}

	@media (max-width: 820px) {
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
