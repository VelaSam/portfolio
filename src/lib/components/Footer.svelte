<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-inner">
		<div class="footer-top">
			<div class="footer-brand">
				<div class="brand-header">
					<img src="/logo-emblem.png" alt="Samuel Velasco" class="brand-icon" />
					<span class="brand-title">Samuel Velasco</span>
				</div>
				<p class="brand-desc">
					{i18n.locale === 'en'
						? 'Software developer specializing in fullstack applications, backend architectures, and web systems with hardware-level performance intuition.'
						: 'Développeur logiciel spécialisé en applications fullstack, architectures backend et systèmes web avec une rigueur orientée performance.'}
				</p>
			</div>

			<div class="footer-cols">
				<div class="footer-col">
					<span class="col-title">Navigation</span>
					<a href="/" class="col-link interactive">{i18n.locale === 'en' ? 'Home' : 'Accueil'}</a>
					<a href="/experience" class="col-link interactive">{i18n.locale === 'en' ? 'Experience' : 'Expérience'}</a>
					<a href="/projects" class="col-link interactive">{i18n.locale === 'en' ? 'Projects' : 'Projets'}</a>
					<a href="/contact" class="col-link interactive">Contact</a>
				</div>

				<div class="footer-col">
					<span class="col-title">{i18n.locale === 'en' ? 'Networks' : 'Réseaux'}</span>
					<a
						href="https://github.com/VelaSam"
						target="_blank"
						rel="noopener noreferrer"
						class="col-link interactive"
					>
						GitHub ↗
					</a>
					<a
						href="https://www.linkedin.com/in/samuelvelascodev"
						target="_blank"
						rel="noopener noreferrer"
						class="col-link interactive"
					>
						LinkedIn ↗
					</a>
					<a href="mailto:contact@samuelvelasco.dev" class="col-link interactive">
						Email ↗
					</a>
				</div>
			</div>
		</div>

		<div class="footer-divider"></div>

		<div class="footer-bottom">
			<!-- Funny Self-Deprecating Easter Egg (Clickable) -->
			<div class="easter-egg-wrap">
				<span class="copyright-main">© {currentYear} Samuel Velasco</span>
				<span class="separator">•</span>
				<button
					class="easter-egg-btn interactive"
					onclick={() => i18n.cycleEgg()}
					title={i18n.locale === 'en' ? 'Click for another quote' : 'Cliquer pour une autre citation'}
				>
					<span class="egg-quote">{i18n.currentEgg}</span>
					<span class="egg-dice" aria-hidden="true">🎲</span>
				</button>
			</div>

			<p class="location">
				{i18n.locale === 'en' ? 'Montréal, QC' : 'Montréal, QC'}
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		margin-top: 6rem;
		border-top: 1px solid var(--border-subtle);
		background: rgba(246, 241, 233, 0.7);
		padding: 4rem 1.5rem 3rem;
	}

	.footer-inner {
		max-width: 1100px;
		margin: 0 auto;
	}

	.footer-top {
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.footer-brand {
		max-width: 380px;
	}

	.brand-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.85rem;
	}

	.brand-icon {
		width: 22px;
		height: auto;
	}

	.brand-title {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 500;
		color: var(--text-primary);
	}

	.brand-desc {
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	.footer-cols {
		display: flex;
		gap: 4rem;
	}

	.footer-col {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.col-title {
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-tertiary);
		margin-bottom: 0.35rem;
	}

	.col-link {
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.88rem;
		transition: color 0.2s ease, transform 0.2s ease;
		display: inline-block;
	}

	.col-link:hover {
		color: var(--accent-purple);
		transform: translateX(2px);
	}

	.footer-divider {
		height: 1px;
		background: var(--border-subtle);
		margin: 3rem 0 2rem;
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.25rem;
		font-size: 0.82rem;
		color: var(--text-tertiary);
	}

	.easter-egg-wrap {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.copyright-main {
		font-weight: 600;
		color: var(--text-primary);
	}

	.separator {
		color: var(--text-muted);
	}

	.easter-egg-btn {
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp corners */
		padding: 0.25rem 0.55rem;
		font-family: inherit;
		font-size: 0.82rem;
		color: var(--text-secondary);
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		text-align: left;
		transition: all 0.2s ease;
	}

	.easter-egg-btn:hover {
		background: #ffffff;
		border-color: var(--border-medium);
		color: var(--text-primary);
		transform: translateY(-1px);
	}

	.egg-quote {
		font-style: italic;
	}

	.egg-dice {
		font-size: 0.85rem;
		opacity: 0.7;
	}

	.location {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		margin: 0;
	}

	@media (max-width: 640px) {
		.footer-top {
			flex-direction: column;
			gap: 2rem;
		}

		.footer-cols {
			gap: 2.5rem;
		}

		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
