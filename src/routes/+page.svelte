<script lang="ts">
	const skillsHighlights = [
		{
			title: 'Systèmes Embarqués & Bare-Metal',
			subtitle: 'Couche matérielle & performance',
			description:
				'Développement direct sur microcontrôleurs ARM Cortex-M (STM32) en Zig et C, sans runtime lourd. Implémentation directe de pilotes DMA, timers PWM et boucles PID temps réel.',
			tags: ['STM32', 'Zig', 'C', 'FreeRTOS', 'Bare-Metal', 'DMA']
		},
		{
			title: 'Vision par Ordinateur & Robotique',
			subtitle: 'Perception autonome & traitement de signal',
			description:
				'Pipelines OpenCV et inférence edge sur nano-ordinateurs (Raspberry Pi). Suivi facial haute cadence, extraction rPPG de signaux vitaux sans contact et guidage ROS 2 drone-rover.',
			tags: ['Python', 'OpenCV', 'ROS 2', 'rPPG', 'Inférence Edge', 'Linux']
		},
		{
			title: 'Logiciel & Ingénierie Fullstack',
			subtitle: 'Applications réactives & architectures robustes',
			description:
				'Conception d’applications de bureau haute fidélité (C# .NET, Avalonia) et web temps réel (WebSockets, TypeScript, SvelteKit). Outils de diagnostic réseau et accessibilité avancée.',
			tags: ['C# .NET 8', 'Avalonia', 'TypeScript', 'Svelte', 'WebSockets', 'PostgreSQL']
		}
	];

	const quickMilestones = [
		{
			period: 'Mai 2026 – Sept. 2026',
			role: 'Développeur recherche santé numérique',
			company: 'Conseil national de recherches Canada (CNRC)',
			detail: 'Télémédecine temps réel sans contact (rPPG) & vision sur Raspberry Pi'
		},
		{
			period: 'Sept. 2025 – Déc. 2025',
			role: 'Développeur C# .NET Avalonia',
			company: 'HumanWare',
			detail: 'Technologies d’assistance basse vision, OCR/TTS et détection vocale VAD'
		},
		{
			period: 'Mai 2023 – Déc. 2024',
			role: 'Développeur Fullstack & Frontend',
			company: 'Evident Scientific',
			detail: 'Outil de diagnostic réseau UT & télémétrie WebSocket temps réel'
		}
	];
</script>

<svelte:head>
	<title>Samuel Velasco • Développeur Logiciel & Robotique</title>
	<meta
		name="description"
		content="Portfolio de Samuel Velasco — Développeur logiciel spécialisé en systèmes embarqués, vision par ordinateur et robotique."
	/>
</svelte:head>

<div class="landing">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-header">
			<div class="hero-badge">
				<span class="badge-dot"></span>
				<span>Ingénieur & Développeur Logiciel</span>
			</div>
			<div class="hero-location">
				<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
					<path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5A4.5 4.5 0 0 0 8 1.5z"></path>
					<circle cx="8" cy="6" r="1.5"></circle>
				</svg>
				<span>Montréal, Québec</span>
			</div>
		</div>

		<div class="hero-content">
			<h1 class="hero-title">
				Concevoir avec rigueur,<br />
				du <span class="highlight-serif">silicium</span> jusqu’aux <span class="highlight-serif">interfaces</span>.
			</h1>

			<p class="hero-bio">
				Bonjour, je suis <strong class="name-bold">Samuel Velasco</strong>. Diplômé en génie logiciel à l'ÉTS,
				je développe des logiciels performants avec un intérêt passionné pour la 
				<span class="emphasis">robotique autonome</span>, les 
				<span class="emphasis">systèmes embarqués bare-metal</span> et la 
				<span class="emphasis">vision par ordinateur</span>.
			</p>

			<div class="hero-actions">
				<a href="/cv" class="btn-primary interactive">
					<span>Consulter mon parcours & CV</span>
					<svg
						class="btn-icon"
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

				<a href="/contact" class="btn-secondary interactive">
					<span>Me contacter</span>
				</a>
			</div>

			<div class="hero-social-links">
				<span class="social-label">Accès direct :</span>
				<a
					href="https://github.com/VelaSam"
					target="_blank"
					rel="noopener noreferrer"
					class="social-pill interactive"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
						<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
						<path d="M9 18c-4.51 2-5-2-7-2"/>
					</svg>
					<span>GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/samuelvelascodev"
					target="_blank"
					rel="noopener noreferrer"
					class="social-pill interactive"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
						<rect width="4" height="12" x="2" y="9"/>
						<circle cx="4" cy="4" r="2"/>
					</svg>
					<span>LinkedIn</span>
				</a>
				<a href="mailto:svelasco514@gmail.com" class="social-pill interactive">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
						<rect width="20" height="16" x="2" y="4" rx="2"/>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
					</svg>
					<span>svelasco514@gmail.com</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Editorial Highlight Strip -->
	<section class="quote-strip">
		<div class="quote-container">
			<span class="quote-mark">“</span>
			<p class="quote-text">
				Allier la précision du bas niveau et des microcontrôleurs aux interfaces modernes, pour résoudre des problématiques tangibles d'ingénierie.
			</p>
		</div>
	</section>

	<!-- Core Domains of Expertise -->
	<section class="section-block">
		<div class="section-header">
			<span class="section-tag">Domaines d’intervention</span>
			<h2 class="section-title">Ce que j’apporte aux projets</h2>
			<p class="section-desc">
				Une expertise polyvalente liant le génie logiciel pur aux systèmes matériels et au traitement de signaux.
			</p>
		</div>

		<div class="skills-grid">
			{#each skillsHighlights as skill}
				<div class="skill-card interactive">
					<div class="card-accent-line"></div>
					<div class="card-header">
						<h3 class="skill-title">{skill.title}</h3>
						<span class="skill-subtitle">{skill.subtitle}</span>
					</div>
					<p class="skill-desc">{skill.description}</p>
					<div class="skill-tags">
						{#each skill.tags as tag}
							<span class="tag-pill">{tag}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Recent Trajectory Preview -->
	<section class="section-block trajectory-section">
		<div class="section-header">
			<div class="header-split">
				<div>
					<span class="section-tag">Aperçu récent</span>
					<h2 class="section-title">Mandats & Expériences</h2>
				</div>
				<a href="/cv" class="link-more interactive">
					<span>Voir le détail complet dans le CV</span>
					<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 3l5 5-5 5"></path>
					</svg>
				</a>
			</div>
		</div>

		<div class="milestones-list">
			{#each quickMilestones as item}
				<div class="milestone-item interactive">
					<div class="milestone-time">{item.period}</div>
					<div class="milestone-content">
						<div class="milestone-role">{item.role}</div>
						<div class="milestone-company">{item.company}</div>
						<div class="milestone-detail">{item.detail}</div>
					</div>
					<div class="milestone-arrow">
						<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M4 8h8m-4-4l4 4-4 4"></path>
						</svg>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="cta-banner">
		<div class="cta-banner-inner">
			<div class="cta-content">
				<h2 class="cta-heading">Un projet ou une opportunité à discuter ?</h2>
				<p class="cta-sub">
					Disponible pour échanger autour de défis logiciels, embarqués ou robotiques.
				</p>
			</div>
			<a href="/contact" class="btn-primary cta-btn interactive">
				<span>Initier le contact</span>
				<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
					<line x1="3" y1="8" x2="13" y2="8"></line>
					<polyline points="9 4 13 8 9 12"></polyline>
				</svg>
			</a>
		</div>
	</section>
</div>

<style>
	.landing {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	/* Hero Section */
	.hero-section {
		padding: 2.5rem 0 1rem;
	}

	.hero-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2.25rem;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.95rem;
		background: rgba(109, 40, 217, 0.06);
		border: 1px solid rgba(109, 40, 217, 0.16);
		border-radius: 9999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--accent-purple);
		letter-spacing: 0.01em;
	}

	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent-purple);
	}

	.hero-location {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.84rem;
		color: var(--text-tertiary);
	}

	.hero-location svg {
		width: 15px;
		height: 15px;
		color: var(--text-tertiary);
	}

	.hero-content {
		max-width: 860px;
	}

	.hero-title {
		font-family: var(--font-display);
		font-size: 3.75rem;
		line-height: 1.1;
		font-weight: 400;
		color: var(--text-primary);
		letter-spacing: -0.02em;
		margin: 0 0 1.75rem;
	}

	.highlight-serif {
		font-style: italic;
		color: var(--accent-purple);
		font-weight: 400;
	}

	.hero-bio {
		font-size: 1.22rem;
		line-height: 1.68;
		color: var(--text-secondary);
		margin: 0 0 2.5rem;
		max-width: 760px;
		font-weight: 400;
	}

	.name-bold {
		color: var(--text-primary);
		font-weight: 600;
	}

	.emphasis {
		color: var(--text-primary);
		font-weight: 500;
		text-decoration: underline;
		text-decoration-color: rgba(109, 40, 217, 0.3);
		text-underline-offset: 3px;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-wrap: wrap;
		margin-bottom: 2.5rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.85rem 1.65rem;
		background: var(--text-primary);
		color: #faf7f2;
		border: 1px solid var(--text-primary);
		border-radius: 9999px;
		text-decoration: none;
		font-size: 0.94rem;
		font-weight: 600;
		box-shadow: 0 4px 14px -2px rgba(28, 25, 23, 0.15);
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-primary:hover {
		background: var(--accent-purple);
		border-color: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px -4px rgba(109, 40, 217, 0.35);
	}

	.btn-icon {
		width: 15px;
		height: 15px;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-primary:hover .btn-icon {
		transform: translateX(4px);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.85rem 1.65rem;
		background: rgba(255, 255, 255, 0.7);
		color: var(--text-primary);
		border: 1px solid var(--border-medium);
		border-radius: 9999px;
		text-decoration: none;
		font-size: 0.94rem;
		font-weight: 500;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-secondary:hover {
		background: #ffffff;
		border-color: var(--text-primary);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px -2px rgba(28, 25, 23, 0.06);
	}

	.hero-social-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
	}

	.social-label {
		font-size: 0.82rem;
		color: var(--text-tertiary);
		font-weight: 500;
		margin-right: 0.25rem;
	}

	.social-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.85rem;
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid var(--border-subtle);
		border-radius: 9999px;
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.social-pill:hover {
		background: #ffffff;
		color: var(--accent-purple);
		border-color: rgba(109, 40, 217, 0.3);
		transform: translateY(-1px);
	}

	.social-icon {
		width: 14px;
		height: 14px;
	}

	/* Quote Strip */
	.quote-strip {
		padding: 1.5rem 0;
	}

	.quote-container {
		background: linear-gradient(135deg, rgba(243, 238, 227, 0.7) 0%, rgba(250, 246, 240, 0.9) 100%);
		border: 1px solid var(--border-subtle);
		border-left: 3px solid var(--accent-purple);
		border-radius: 1.25rem;
		padding: 2rem 2.5rem;
		position: relative;
	}

	.quote-mark {
		font-family: var(--font-display);
		font-size: 3rem;
		color: var(--accent-purple);
		line-height: 0.8;
		opacity: 0.35;
		display: block;
		margin-bottom: 0.25rem;
	}

	.quote-text {
		font-family: var(--font-display);
		font-size: 1.45rem;
		line-height: 1.4;
		color: var(--text-primary);
		font-style: italic;
		margin: 0;
	}

	/* Section Blocks */
	.section-block {
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.section-header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section-tag {
		font-size: 0.76rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
		color: var(--accent-purple);
	}

	.section-title {
		font-family: var(--font-display);
		font-size: 2.4rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.15;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 1.05rem;
		color: var(--text-secondary);
		margin: 0;
		max-width: 650px;
	}

	/* Skills Grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.skill-card {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(8px);
		border: 1px solid var(--border-subtle);
		border-radius: 1.25rem;
		padding: 1.85rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: relative;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card-accent-line {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: transparent;
		transition: background 0.3s ease;
	}

	.skill-card:hover {
		transform: translateY(-4px);
		background: #ffffff;
		border-color: var(--border-medium);
		box-shadow: 0 14px 30px -6px rgba(28, 25, 23, 0.06);
	}

	.skill-card:hover .card-accent-line {
		background: var(--accent-purple);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.skill-title {
		font-family: var(--font-display);
		font-size: 1.45rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.2;
	}

	.skill-subtitle {
		font-size: 0.78rem;
		color: var(--accent-purple);
		font-weight: 600;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.skill-desc {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		flex: 1;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		padding-top: 0.5rem;
		border-top: 1px dashed var(--border-subtle);
	}

	.tag-pill {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		padding: 0.2rem 0.55rem;
		background: rgba(243, 238, 228, 0.6);
		border: 1px solid rgba(226, 219, 206, 0.7);
		border-radius: 6px;
		color: var(--text-secondary);
		font-weight: 500;
	}

	/* Trajectory */
	.header-split {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.link-more {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--accent-purple);
		text-decoration: none;
		font-size: 0.92rem;
		font-weight: 600;
		transition: transform 0.2s ease;
	}

	.link-more svg {
		width: 14px;
		height: 14px;
		transition: transform 0.2s ease;
	}

	.link-more:hover svg {
		transform: translateX(3px);
	}

	.milestones-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.milestone-item {
		display: grid;
		grid-template-columns: 200px 1fr 30px;
		align-items: center;
		gap: 1.5rem;
		padding: 1.35rem 1.75rem;
		background: rgba(255, 255, 255, 0.65);
		border: 1px solid var(--border-subtle);
		border-radius: 1rem;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.milestone-item:hover {
		background: #ffffff;
		border-color: var(--border-medium);
		transform: translateX(4px);
		box-shadow: 0 8px 20px -4px rgba(28, 25, 23, 0.05);
	}

	.milestone-time {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-tertiary);
	}

	.milestone-content {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.milestone-role {
		font-weight: 600;
		font-size: 1rem;
		color: var(--text-primary);
	}

	.milestone-company {
		font-size: 0.88rem;
		color: var(--accent-purple);
		font-weight: 500;
	}

	.milestone-detail {
		font-size: 0.84rem;
		color: var(--text-secondary);
	}

	.milestone-arrow {
		color: var(--text-muted);
		display: flex;
		justify-content: center;
		transition: transform 0.2s ease, color 0.2s ease;
	}

	.milestone-arrow svg {
		width: 18px;
		height: 18px;
	}

	.milestone-item:hover .milestone-arrow {
		transform: translateX(3px);
		color: var(--accent-purple);
	}

	/* CTA Banner */
	.cta-banner {
		padding: 1rem 0;
	}

	.cta-banner-inner {
		background: #ffffff;
		border: 1px solid var(--border-subtle);
		border-radius: 1.5rem;
		padding: 3rem 2.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
		box-shadow: 0 10px 30px -4px rgba(28, 25, 23, 0.04);
	}

	.cta-heading {
		font-family: var(--font-display);
		font-size: 2.2rem;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
		line-height: 1.2;
	}

	.cta-sub {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.cta-btn {
		white-space: nowrap;
	}

	@media (max-width: 900px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}

		.milestone-item {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}

		.milestone-arrow {
			display: none;
		}

		.hero-title {
			font-size: 2.8rem;
		}
	}
</style>
