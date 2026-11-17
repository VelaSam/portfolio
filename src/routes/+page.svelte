<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const content = $derived({
		en: {
			badge: 'Software & Systems Engineer',
			location: 'Montréal, Québec',
			headlinePre: 'Engineered with precision,',
			headlineMid: 'from',
			headlineWord1: 'silicon',
			headlineAnd: 'to',
			headlineWord2: 'interfaces',
			bioLead: 'Hello, I’m',
			bioText:
				'Software engineering graduate from ÉTS. I build high-performance software with an active engineering interest in',
			bioInterest1: 'autonomous robotics',
			bioInterest2: 'bare-metal embedded systems',
			bioInterest3: 'computer vision pipelines',
			btnCV: 'Explore My Resume & Experience',
			btnContact: 'Get In Touch',
			directAccess: 'Direct links:',
			quote:
				'Bridging the gap between bare-metal microcontrollers and modern interfaces to solve tangible engineering challenges.',
			domainsTag: 'Areas of Focus',
			domainsTitle: 'Core Engineering Capabilities',
			domainsDesc:
				'A versatile engineering mindset bridging low-level hardware performance, real-time telemetry, and modern desktop/web software.',
			skills: [
				{
					title: 'Embedded Systems & Bare-Metal',
					subtitle: 'Hardware layer & deterministic timing',
					description:
						'Direct firmware development on ARM Cortex-M microcontrollers (STM32) in Zig and C without heavy runtimes. Custom HALs, direct register programming (NVIC, DMA, PWM timers), and real-time PID control loops.',
					tags: ['STM32', 'Zig', 'C', 'FreeRTOS', 'Bare-Metal', 'DMA', 'PID']
				},
				{
					title: 'Computer Vision & Robotics',
					subtitle: 'Autonomous perception & signal processing',
					description:
						'OpenCV pipelines and edge inference on nano-computers (Raspberry Pi). High-frame-rate facial tracking, contactless rPPG vital signs extraction, and ROS 2 coordinate transmission for autonomous drone/rover missions.',
					tags: ['Python', 'OpenCV', 'ROS 2', 'rPPG', 'Edge Inference', 'Linux']
				},
				{
					title: 'Software & Fullstack Engineering',
					subtitle: 'Reactive applications & robust architectures',
					description:
						'High-fidelity desktop engineering (C# .NET 8, Avalonia) and real-time web applications (TypeScript, SvelteKit, WebSockets). Network diagnostic tooling, telemetry feeds, and assistive accessibility systems.',
					tags: ['C# .NET 8', 'Avalonia', 'TypeScript', 'SvelteKit', 'WebSockets', 'PostgreSQL']
				}
			],
			trajectoryTag: 'Recent Trajectory',
			trajectoryTitle: 'Selected Experience & Roles',
			viewFullCV: 'View full breakdown in resume',
			milestones: [
				{
					period: 'May 2026 – Sept. 2026',
					role: 'Digital Health Research Software Developer',
					company: 'National Research Council Canada (NRC / CNRC)',
					detail: 'VitalSeer: Contactless real-time vital signs (rPPG) & edge vision on Raspberry Pi'
				},
				{
					period: 'Sept. 2025 – Dec. 2025',
					role: 'C# .NET Avalonia Software Developer',
					company: 'HumanWare',
					detail: 'Low-vision accessibility tools, multilingual OCR/TTS & voice activity detection (VAD)'
				},
				{
					period: 'May 2023 – Dec. 2024',
					role: 'Fullstack & Frontend Software Developer',
					company: 'Evident Scientific',
					detail: 'Ultrasonic testing network telemetry diagnostics & real-time WebSocket SNR tooling'
				}
			],
			ctaTitle: 'Have an engineering challenge or opportunity to discuss?',
			ctaSub: 'Open to software, embedded systems, and robotics discussions.',
			ctaBtn: 'Start a conversation'
		},
		fr: {
			badge: 'Ingénieur & Développeur Logiciel',
			location: 'Montréal, Québec',
			headlinePre: 'Concevoir avec rigueur,',
			headlineMid: 'du',
			headlineWord1: 'silicium',
			headlineAnd: 'jusqu’aux',
			headlineWord2: 'interfaces',
			bioLead: 'Bonjour, je suis',
			bioText:
				'Diplômé en génie logiciel à l’ÉTS, je conçois des logiciels performants avec un intérêt marqué pour la',
			bioInterest1: 'robotique autonome',
			bioInterest2: 'les systèmes embarqués bare-metal',
			bioInterest3: 'la vision par ordinateur',
			btnCV: 'Consulter mon parcours & CV',
			btnContact: 'Me contacter',
			directAccess: 'Accès direct :',
			quote:
				'Allier la précision du bas niveau et des microcontrôleurs aux interfaces modernes, pour résoudre des problématiques tangibles d’ingénierie.',
			domainsTag: 'Domaines d’intervention',
			domainsTitle: 'Ce que j’apporte aux projets',
			domainsDesc:
				'Une expertise polyvalente liant le génie logiciel aux systèmes matériels temps réel et au traitement de signaux.',
			skills: [
				{
					title: 'Systèmes Embarqués & Bare-Metal',
					subtitle: 'Couche matérielle & performance',
					description:
						'Développement direct sur microcontrôleurs ARM Cortex-M (STM32) en Zig et C, sans runtime lourd. Implémentation directe de pilotes DMA, timers PWM et boucles PID temps réel.',
					tags: ['STM32', 'Zig', 'C', 'FreeRTOS', 'Bare-Metal', 'DMA', 'PID']
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
					tags: ['C# .NET 8', 'Avalonia', 'TypeScript', 'SvelteKit', 'WebSockets', 'PostgreSQL']
				}
			],
			trajectoryTag: 'Aperçu récent',
			trajectoryTitle: 'Mandats & Expériences',
			viewFullCV: 'Voir le détail complet dans le CV',
			milestones: [
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
			],
			ctaTitle: 'Un projet ou une opportunité à discuter ?',
			ctaSub: 'Disponible pour échanger autour de défis logiciels, embarqués ou robotiques.',
			ctaBtn: 'Initier le contact'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Samuel Velasco • Software & Embedded Engineer' : 'Samuel Velasco • Développeur Logiciel & Robotique'}</title>
	<meta
		name="description"
		content="Portfolio of Samuel Velasco — Software Developer specializing in embedded systems, computer vision, and robotics."
	/>
</svelte:head>

<div class="landing">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-header">
			<div class="hero-badge">
				<span class="badge-dot"></span>
				<span>{content.badge}</span>
			</div>
			<div class="hero-location">
				<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
					<path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5A4.5 4.5 0 0 0 8 1.5z"></path>
					<circle cx="8" cy="6" r="1.5"></circle>
				</svg>
				<span>{content.location}</span>
			</div>
		</div>

		<div class="hero-content">
			<h1 class="hero-title">
				{content.headlinePre}<br />
				{content.headlineMid} <span class="highlight-serif">{content.headlineWord1}</span> {content.headlineAnd} <span class="highlight-serif">{content.headlineWord2}</span>.
			</h1>

			<p class="hero-bio">
				{content.bioLead} <strong class="name-bold">Samuel Velasco</strong>. {content.bioText}
				<span class="emphasis">{content.bioInterest1}</span>,
				<span class="emphasis">{content.bioInterest2}</span>, {i18n.locale === 'en' ? 'and' : 'et'}
				<span class="emphasis">{content.bioInterest3}</span>.
			</p>

			<div class="hero-actions">
				<a href="/cv" class="btn-primary interactive">
					<span>{content.btnCV}</span>
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
					<span>{content.btnContact}</span>
				</a>
			</div>

			<div class="hero-social-links">
				<span class="social-label">{content.directAccess}</span>
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
		<div class="quote-container interactive">
			<span class="quote-mark">“</span>
			<p class="quote-text">{content.quote}</p>
		</div>
	</section>

	<!-- Core Domains of Expertise -->
	<section class="section-block">
		<div class="section-header">
			<span class="section-tag">{content.domainsTag}</span>
			<h2 class="section-title">{content.domainsTitle}</h2>
			<p class="section-desc">{content.domainsDesc}</p>
		</div>

		<div class="skills-grid">
			{#each content.skills as skill}
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
					<span class="section-tag">{content.trajectoryTag}</span>
					<h2 class="section-title">{content.trajectoryTitle}</h2>
				</div>
				<a href="/cv" class="link-more interactive">
					<span>{content.viewFullCV}</span>
					<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 3l5 5-5 5"></path>
					</svg>
				</a>
			</div>
		</div>

		<div class="milestones-list">
			{#each content.milestones as item}
				<a href="/cv" class="milestone-item interactive">
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
				</a>
			{/each}
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="cta-banner">
		<div class="cta-banner-inner interactive">
			<div class="cta-content">
				<h2 class="cta-heading">{content.ctaTitle}</h2>
				<p class="cta-sub">{content.ctaSub}</p>
			</div>
			<a href="/contact" class="btn-primary cta-btn interactive">
				<span>{content.ctaBtn}</span>
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
		padding: 2rem 0 1rem;
	}

	.hero-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.75rem;
		background: rgba(109, 40, 217, 0.06);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 3px; /* Sharp corners */
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--accent-purple);
		letter-spacing: 0.02em;
	}

	.badge-dot {
		width: 5px;
		height: 5px;
		border-radius: 1px; /* Sharp */
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
		font-size: 1.2rem;
		line-height: 1.68;
		color: var(--text-secondary);
		margin: 0 0 2.25rem;
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
		text-decoration-color: rgba(109, 40, 217, 0.35);
		text-underline-offset: 3px;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2.25rem;
	}

	/* Sharp architectural buttons */
	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.8rem 1.45rem;
		background: var(--text-primary);
		color: #faf7f2;
		border: 1px solid var(--text-primary);
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		font-size: 0.92rem;
		font-weight: 600;
		box-shadow: 0 2px 8px -1px rgba(28, 25, 23, 0.12);
		transition: all 0.2s ease;
	}

	.btn-primary:hover {
		background: var(--accent-purple);
		border-color: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 6px 18px -3px rgba(109, 40, 217, 0.3);
	}

	.btn-icon {
		width: 14px;
		height: 14px;
		transition: transform 0.2s ease;
	}

	.btn-primary:hover .btn-icon {
		transform: translateX(3px);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.45rem;
		background: rgba(255, 255, 255, 0.8);
		color: var(--text-primary);
		border: 1px solid var(--border-medium);
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		font-size: 0.92rem;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.btn-secondary:hover {
		background: #ffffff;
		border-color: var(--text-primary);
		transform: translateY(-2px);
	}

	.hero-social-links {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		flex-wrap: wrap;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
	}

	.social-label {
		font-size: 0.8rem;
		color: var(--text-tertiary);
		font-weight: 500;
		margin-right: 0.25rem;
	}

	.social-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.75rem;
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.social-pill:hover {
		background: #ffffff;
		color: var(--accent-purple);
		border-color: var(--accent-purple);
		transform: translateY(-1px);
	}

	.social-icon {
		width: 14px;
		height: 14px;
	}

	/* Quote Strip */
	.quote-strip {
		padding: 1rem 0;
	}

	.quote-container {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-left: 3px solid var(--accent-purple);
		border-radius: 4px; /* Sharp */
		padding: 2rem 2.25rem;
		position: relative;
		transition: backdrop-filter 0.3s ease, border-color 0.2s ease;
	}

	.quote-container:hover {
		backdrop-filter: blur(32px);
		-webkit-backdrop-filter: blur(32px);
		border-color: var(--border-medium);
	}

	.quote-mark {
		font-family: var(--font-display);
		font-size: 2.8rem;
		color: var(--accent-purple);
		line-height: 0.8;
		opacity: 0.4;
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
		gap: 2rem;
	}

	.section-header {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.section-tag {
		font-size: 0.74rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
		color: var(--accent-purple);
	}

	.section-title {
		font-family: var(--font-display);
		font-size: 2.35rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.15;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 1.02rem;
		color: var(--text-secondary);
		margin: 0;
		max-width: 650px;
	}

	/* Skills Grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.skill-card {
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp corners */
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		position: relative;
		overflow: hidden;
		transition: all 0.25s ease;
	}

	.card-accent-line {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: transparent;
		transition: background 0.25s ease;
	}

	.skill-card:hover {
		transform: translateY(-3px);
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
		box-shadow: 0 8px 24px -4px rgba(28, 25, 23, 0.06);
	}

	.skill-card:hover .card-accent-line {
		background: var(--accent-purple);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
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
		font-size: 0.76rem;
		color: var(--accent-purple);
		font-weight: 600;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.skill-desc {
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		flex: 1;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--border-subtle);
	}

	.tag-pill {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		padding: 0.18rem 0.5rem;
		background: rgba(243, 238, 228, 0.7);
		border: 1px solid rgba(226, 219, 206, 0.8);
		border-radius: 2px; /* Sharp */
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
		font-size: 0.9rem;
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
		gap: 0.65rem;
	}

	.milestone-item {
		display: grid;
		grid-template-columns: 200px 1fr 30px;
		align-items: center;
		gap: 1.5rem;
		padding: 1.25rem 1.6rem;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
	}

	.milestone-item:hover {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		border-color: var(--border-medium);
		transform: translateX(4px);
		box-shadow: 0 4px 16px -2px rgba(28, 25, 23, 0.05);
	}

	.milestone-time {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--text-tertiary);
	}

	.milestone-content {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.milestone-role {
		font-weight: 600;
		font-size: 0.98rem;
		color: var(--text-primary);
	}

	.milestone-company {
		font-size: 0.86rem;
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
		width: 16px;
		height: 16px;
	}

	.milestone-item:hover .milestone-arrow {
		transform: translateX(3px);
		color: var(--accent-purple);
	}

	/* CTA Banner */
	.cta-banner {
		padding: 0.5rem 0;
	}

	.cta-banner-inner {
		background: rgba(255, 255, 255, 0.82);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 2.75rem 2.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
		box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.04);
		transition: backdrop-filter 0.3s ease;
	}

	.cta-banner-inner:hover {
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
	}

	.cta-heading {
		font-family: var(--font-display);
		font-size: 2.1rem;
		color: var(--text-primary);
		margin: 0 0 0.4rem;
		line-height: 1.2;
	}

	.cta-sub {
		font-size: 0.98rem;
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
			gap: 0.65rem;
		}

		.milestone-arrow {
			display: none;
		}

		.hero-title {
			font-size: 2.8rem;
		}
	}
</style>
