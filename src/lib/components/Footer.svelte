<script lang="ts">
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
					Développeur logiciel passionné par les systèmes embarqués, la vision par ordinateur et la robotique.
				</p>
			</div>

			<div class="footer-cols">
				<div class="footer-col">
					<span class="col-title">Navigation</span>
					<a href="/" class="col-link">Accueil</a>
					<a href="/cv" class="col-link">CV & Expérience</a>
					<a href="/contact" class="col-link">Contact</a>
				</div>

				<div class="footer-col">
					<span class="col-title">Réseaux</span>
					<a
						href="https://github.com/VelaSam"
						target="_blank"
						rel="noopener noreferrer"
						class="col-link"
					>
						GitHub ↗
					</a>
					<a
						href="https://www.linkedin.com/in/samuelvelascodev"
						target="_blank"
						rel="noopener noreferrer"
						class="col-link"
					>
						LinkedIn ↗
					</a>
					<a href="mailto:svelasco514@gmail.com" class="col-link">
						Email ↗
					</a>
				</div>
			</div>
		</div>

		<div class="footer-divider"></div>

		<div class="footer-bottom">
			<p class="copyright">
				© {currentYear} Samuel Velasco • Conçu avec soin & typographie éditoriale
			</p>
			<p class="location">
				<span class="location-dot"></span>
				Basé à Montréal, QC
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		margin-top: 6rem;
		border-top: 1px solid var(--border-subtle);
		background: rgba(247, 243, 235, 0.6);
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
		width: 24px;
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
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
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
		gap: 1rem;
		font-size: 0.82rem;
		color: var(--text-tertiary);
	}

	.copyright {
		margin: 0;
	}

	.location {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
	}

	.location-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #10b981;
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
