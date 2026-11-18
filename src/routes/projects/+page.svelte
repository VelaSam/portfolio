<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import EngineeringDivider from '$lib/components/EngineeringDivider.svelte';

	const content = $derived({
		en: {
			tag: 'Portfolio & Code',
			title: 'Engineering & Software Projects',
			subtitle: 'Distributed cloud architectures, autonomous multi-agent robotics, and electromechanical prototypes.',
			btnContact: 'Get in Touch',
			metaLocation: 'Location',
			metaEmail: 'Email',
			metaLinkedIn: 'LinkedIn',
			viewRepo: 'View repository on GitHub',
			projects: [
				{
					title: 'Autonomous Multi-Agent Search & Rescue Drone-Rover System',
					context: 'Software Engineering Capstone Project (PFE ÉTS)',
					stack: ['Python', 'ROS 2', 'OpenCV', 'Distributed Architecture', 'Linux'],
					bullets: [
						'Engineered distributed telemetry and messaging architecture coordinating autonomous aerial and terrestrial search agents via ROS 2.',
						'Developed real-time computer vision detection pipelines and coordinate mapping algorithms to locate missing persons in simulated hazardous zones.',
						'Implemented resilient state machines, heartbeat monitoring, and automated mission fail-safes for autonomous operations.'
					]
				},
				{
					title: 'CanBankX — Distributed Microservices Platform',
					context: 'Distributed Systems & Cloud Architecture (Go, Docker, Redis)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'Redis', 'KrakenD API Gateway', 'MySQL', 'Prometheus', 'Grafana', 'k6'],
					bullets: [
						'Architected an event-driven banking backend implementing the Database-per-Microservice pattern across isolated Go services (User, Account, Transaction, Ledger).',
						'Integrated KrakenD API Gateway for centralized authentication, rate limiting, and unified request routing across downstream microservices.',
						'Implemented Redis caching for sub-millisecond session validation and hot balance verification, dramatically reducing primary database load.',
						'Demonstrated high throughput and zero-data-loss consistency through rigorous k6 stress testing and Grafana/Prometheus telemetry metrics.'
					]
				},
				{
					title: 'Automated Robotic Tower Crane',
					context: '1st-Year Undergraduate Engineering Challenge (ÉTS Montréal)',
					stack: ['SolidWorks CAD', 'Embedded C', 'NRF24L01 RF Telemetry', 'Laser Cutting CNC', 'Mechanical Transmission'],
					bullets: [
						'Designed, modeled, and manufactured a scale automated tower crane as our first-year undergraduate engineering competition project at ÉTS.',
						'Modeled full 3D assembly in SolidWorks: lattice mast tower, counterweighted boom, rotational slewing bearing, and trolley winch drive.',
						'Engineered a custom spur-and-pinion transmission driven by a micro-metal gearmotor for smooth horizontal slewing.',
						'Hand-wired a standalone wireless remote controller: DIP microcontroller, dual-axis thumbstick, 2.4 GHz NRF24L01 RF transceiver, and 1602A LCD telemetry display.'
					],
					craneImages: [
						{
							id: 'team',
							src: '/crane-team.jpg',
							label: 'Team & Prototype',
							badge: 'Cover Photo • ÉTS Competition Arena',
							caption: 'Our 6-person student engineering team proudly standing with the fully functional scale tower crane on competition day at ÉTS.'
						}
					]
				},
				{
					hidden: true,
					title: 'Micro-Kernel & Low-Level Hardware Driver Architecture',
					context: 'Systems Programming & Memory Management',
					stack: ['Zig', 'C', 'STM32', 'ARM Cortex-M', 'Bare-Metal Architecture'],
					bullets: [
						'Architected a modular Hardware Abstraction Layer (HAL) for ARM Cortex-M microcontrollers without external vendor libraries.',
						'Implemented direct NVIC interrupt handling, circular DMA transfers for high-speed sensor streams, and real-time PID motor controllers.',
						'Applied deep understanding of memory models, cache locality, and concurrency directly to building resilient backend systems.'
					]
				}
			]
		},
		fr: {
			tag: 'Portfolio & Code',
			title: 'Projets d’Ingénierie & Systèmes Logiciels',
			subtitle: 'Architectures cloud distribuées, robotique multi-agents autonome et prototypes électromécaniques.',
			btnContact: 'Entrer en contact',
			metaLocation: 'Localisation',
			metaEmail: 'Email',
			metaLinkedIn: 'LinkedIn',
			viewRepo: 'Voir le dépôt sur GitHub',
			projects: [
				{
					title: 'Système Autonome de Recherche & Sauvetage Drone-Rover',
					context: 'Projet de fin d’études en génie logiciel (PFE ÉTS)',
					stack: ['Python', 'ROS 2', 'OpenCV', 'Architecture distribuée', 'Linux'],
					bullets: [
						'Conception de l’architecture de communication distribuée et de télémétrie entre drone et rover terrestre via ROS 2.',
						'Développement de pipelines de vision par ordinateur en temps réel et d’algorithmes de calcul de coordonnées géospatiales.',
						'Mise en place de machines à états résilientes et de protocoles de sécurité pour les opérations autonomes de recherche.'
					]
				},
				{
					title: 'CanBankX — Plateforme de Microservices Distribués',
					context: 'Systèmes Distribués & Architecture Cloud (Go, Docker, Redis)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'Redis', 'KrakenD API Gateway', 'MySQL', 'Prometheus', 'Grafana', 'k6'],
					bullets: [
						'Conception et développement d’un backend bancaire distribué suivant le pattern Database-per-Microservice en Go (User, Account, Transaction, Ledger).',
						'Mise en place de la passerelle KrakenD API Gateway pour la centralisation de l’authentification, du rate-limiting et du routage.',
						'Implémentation de caches Redis ultra-rapides pour la validation des sessions et la consultation des soldes chauds.',
						'Validation de la haute disponibilité et de la cohérence des données par des tests de charge k6 intensifs et métriques Grafana/Prometheus.'
					]
				},
				{
					title: 'Grue à Tour Automatisée Robotisée',
					context: 'Défi d’ingénierie de première année (Baccalauréat ÉTS Montréal)',
					stack: ['SolidWorks CAO', 'C embarqué', 'Télémétrie RF NRF24L01', 'Découpe laser CNC', 'Transmission mécanique'],
					bullets: [
						'Conception, modélisation et fabrication d’une grue à tour automatisée à échelle réduite dans le cadre du projet d’intégration à l’ÉTS.',
						'Modélisation 3D complète sous SolidWorks : mât en treillis, flèche rotative avec contrepoids, couronne d’orientation et chariot treuil.',
						'Conception d’un boîtier de réduction sur mesure avec pignon et couronne dentée entraînés par micro-motoréducteur métallique.',
						'Câblage complet d’une radiocommande sans fil : microcontrôleur DIP, joystick analogique, module 2.4 GHz NRF24L01 et écran LCD 1602A.'
					],
					craneImages: [
						{
							id: 'team',
							src: '/crane-team.jpg',
							label: 'L’Équipe & Prototype',
							badge: 'Photo de couverture • Jour de compétition ÉTS',
							caption: 'Notre équipe de 6 étudiants réunie fièrement autour de la grue à tour automatisée le jour de la compétition à l’ÉTS.'
						}
					]
				},
				{
					hidden: true,
					title: 'Micro-Noyau & Architecture de Pilotes Bas Niveau',
					context: 'Programmation système bas niveau & gestion mémoire',
					stack: ['Zig', 'C', 'STM32', 'ARM Cortex-M', 'Architecture Bare-Metal'],
					bullets: [
						'Conception d’une couche d’abstraction matérielle (HAL) modulaire et sans dépendance externe pour ARM Cortex-M.',
						'Implémentation directe des gestionnaires d’interruptions (NVIC), transferts DMA circulaires et boucles de régulation PID.',
						'Maîtrise approfondie des modèles mémoire, de la localité de cache et de la concurrence, directement transposable aux architectures backend scalables.'
					]
				}
			]
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Projects & Engineering • Samuel Velasco' : 'Projets & Ingénierie • Samuel Velasco'}</title>
	<meta
		name="description"
		content="Software, distributed microservices, and robotics engineering projects by Samuel Velasco."
	/>
</svelte:head>

<div class="projects-page">
	<!-- Page Header -->
	<header class="projects-header">
		<div class="header-left">
			<span class="header-tag">{content.tag}</span>
			<h1 class="projects-title">{content.title}</h1>
			<p class="projects-subtitle">{content.subtitle}</p>
		</div>
		<div class="header-actions">
			<a href="/contact" class="btn-contact interactive">
				{content.btnContact}
			</a>
		</div>
	</header>

	<EngineeringDivider label="SYSTEMS // CODE // PROTOTYPES" code="ARCH_01" />

	<!-- Projects List -->
	<div class="projects-list">
		{#each content.projects.filter((p) => !p.hidden) as proj}
			<article class="project-box interactive">
				<div class="project-header">
					<div>
						<h2 class="project-title">
							{#if proj.repoUrl}
								<a
									href={proj.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link interactive"
									title={content.viewRepo}
								>
									<span>{proj.title}</span>
									<span class="ext-icon">↗</span>
								</a>
							{:else}
								<span>{proj.title}</span>
							{/if}
						</h2>
						<span class="project-context">{proj.context}</span>
					</div>
					<div class="project-stack">
						{#each proj.stack as tech}
							<span class="stack-badge">{tech}</span>
						{/each}
					</div>
				</div>

				<ul class="item-bullets">
					{#each proj.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>

				<!-- Photo Showcase (Crane Project) -->
				{#if proj.craneImages && proj.craneImages.length > 0}
					{@const craneImg = proj.craneImages[0]}
					<div class="crane-showcase-card">
						<div class="crane-image-stage">
							<img
								src={craneImg.src}
								alt={craneImg.label}
								class="crane-active-img"
							/>
						</div>
						<div class="crane-caption-bar">
							<p class="crane-caption-text">
								<strong>{craneImg.label} :</strong>
								{craneImg.caption}
							</p>
						</div>
					</div>
				{/if}
			</article>
		{/each}
	</div>
</div>

<style>
	.projects-page {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.projects-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.header-left {
		max-width: 750px;
	}

	.header-tag {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent-purple);
		display: inline-block;
		margin-bottom: 0.5rem;
	}

	.projects-title {
		font-family: var(--font-display);
		font-size: 3.2rem;
		font-weight: 500;
		color: var(--text-primary);
		line-height: 1.1;
		margin: 0 0 0.85rem;
		letter-spacing: -0.02em;
	}

	.projects-subtitle {
		font-size: 1.05rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.btn-contact {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.4rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px;
		font-size: 0.88rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-contact:hover {
		background: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 6px 18px -3px rgba(109, 40, 217, 0.25);
	}

	/* Projects List */
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project-box {
		background: rgba(255, 255, 255, 0.82);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 2.25rem;
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
		box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.04);
		transition: all 0.25s ease;
	}

	.project-box:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
		box-shadow: 0 8px 28px -4px rgba(28, 25, 23, 0.08);
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.project-title {
		font-family: var(--font-display);
		font-size: 1.7rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0 0 0.35rem;
		line-height: 1.2;
	}

	.project-link {
		color: inherit;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		transition: color 0.2s ease;
	}

	.project-link:hover {
		color: var(--accent-purple);
	}

	.ext-icon {
		font-size: 1.1rem;
		color: var(--accent-purple);
		transition: transform 0.2s ease;
	}

	.project-link:hover .ext-icon {
		transform: translate(2px, -2px);
	}

	.project-context {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--accent-purple);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.project-stack {
		display: flex;
		gap: 0.45rem;
		flex-wrap: wrap;
	}

	.stack-badge {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		padding: 0.22rem 0.55rem;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 2px;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.item-bullets {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.item-bullets li {
		font-size: 0.94rem;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	/* Crane Photo Showcase */
	.crane-showcase-card {
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.6);
		padding: 0.85rem;
	}

	.crane-image-stage {
		position: relative;
		width: 100%;
		height: 480px;
		background: #181513;
		border-radius: 3px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--border-subtle);
	}

	.crane-active-img {
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
		transition: opacity 0.3s ease;
	}

	.crane-caption-bar {
		background: rgba(250, 246, 240, 0.85);
		border: 1px solid var(--border-subtle);
		border-radius: 3px;
		padding: 0.85rem 1.15rem;
	}

	.crane-caption-text {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	.crane-caption-text strong {
		color: var(--text-primary);
	}

	@media (max-width: 900px) {
		.projects-title {
			font-size: 2.5rem;
		}

		.crane-image-stage {
			height: 340px;
		}
	}

	@media (max-width: 600px) {
		.crane-image-stage {
			height: 260px;
		}

		.project-box {
			padding: 1.5rem;
		}
	}
</style>
