<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import EngineeringDivider from '$lib/components/EngineeringDivider.svelte';

	const content = $derived({
		en: {
			kicker: 'SELECTED WORK — CODE, ARCHITECTURE & PROTOTYPES',
			title: 'Engineering & Software Projects',
			btnContact: 'Get in Touch →',
			viewRepo: 'GitHub Repository ↗',
			colophonLead: 'Want to see my internship history and technical stack?',
			colophonLink: 'View Experience & Resume →',
			projects: [
				{
					idx: '01 / CAPSTONE',
					title: 'Autonomous Search & Rescue (Drone + Ground Robot)',
					context: 'Software Engineering Capstone (ÉTS Montréal)',
					stack: ['Python', 'ROS 2', 'Computer Vision', 'WebSockets / WebRTC', 'Embedded Linux'],
					bullets: [
						'Built an autonomous aerial-ground Search & Rescue system where an autonomous drone explores indoor, GPS-denied spaces and coordinates with a ground rover.',
						'Implemented real-time computer vision to recognize human shapes and victims from the drone’s live video stream.',
						'Handled spatial orientation and coordinate alignment so the drone locates itself in space and relays target positions to the ground rover for autonomous navigation.'
					],
					hardwareGallery: [
						{
							src: '/starling-2-max.png',
							label: 'Fig. 01a — ModalAI Starling 2 Max',
							specs: 'VOXL 2 • PX4 • 5G'
						},
						{
							src: '/waveshare-ugv-rover.jpg',
							label: 'Fig. 01b — Waveshare UGV Rover',
							specs: 'Jetson Orin Nano • ESP32 • LiDAR'
						}
					]
				},
				{
					idx: '02 / MICROSERVICES',
					title: 'CanBankX — Distributed Microservices Platform',
					context: 'Distributed Systems & Cloud Architecture (Go, Docker, Redis)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'Redis', 'KrakenD API Gateway', 'MySQL', 'Prometheus', 'Grafana', 'k6'],
					bullets: [
						'Built a microservices banking backend in Go with an isolated database per service (User, Account, Transaction, Ledger).',
						'Placed KrakenD API Gateway in front of the services to handle auth, rate limiting, and request routing.',
						'Added Redis caching for session checks and frequently accessed account balances.',
						'Load-tested the stack with k6 and monitored service metrics using Prometheus and Grafana.'
					],
					showcaseImage: {
						src: '/canbankx-deployment.png',
						label: 'Fig. 02 — Microservices Deployment View',
						caption: 'Phase 3 distributed deployment architecture showing KrakenD API Gateway, isolated Go microservices, Redis cache, MySQL databases, and Prometheus/Grafana observability.',
						isDiagram: true
					}
				},
				{
					idx: '03 / MULTIDISCIPLINARY',
					title: 'Automated Tower Crane',
					context: '1st-Year Multidisciplinary Project (ÉTS Montréal)',
					repoUrl: 'https://github.com/VelaSam/crane',
					stack: ['SolidWorks CAD', 'Embedded C', 'RF Telemetry', 'Laser Cutting CNC', 'Mechanical Transmission'],
					bullets: [
						'Designed, modeled, and built a functional scale tower crane for the 1st-year multidisciplinary engineering project at ÉTS.',
						'Modeled full 3D assembly in SolidWorks: lattice mast tower, counterweighted boom, rotational slewing bearing, and trolley winch drive.',
						'Engineered a custom spur-and-pinion transmission driven by a micro-metal gearmotor for smooth horizontal slewing.',
						'Hand-wired a standalone wireless remote controller with a dual-axis joystick, RF telemetry link, and live status display.'
					],
					showcaseImage: {
						src: '/crane-team.jpg',
						label: 'Fig. 03 — Team & Prototype',
						caption: 'Our 6-person student engineering team standing with the functional scale tower crane on competition day at ÉTS.',
						isDiagram: false
					}
				},
				{
					hidden: true,
					idx: '04 / SYSTEMS',
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
			kicker: 'TRAVAUX CHOISIS — CODE, ARCHITECTURE & PROTOTYPES',
			title: 'Projets d’Ingénierie & Logiciel',
			btnContact: 'Entrer en contact →',
			viewRepo: 'Dépôt GitHub ↗',
			colophonLead: 'Vous souhaitez consulter mes stages et mes compétences techniques ?',
			colophonLink: 'Voir mon Parcours & CV →',
			projects: [
				{
					idx: '01 / PFE',
					title: 'Système Autonome de Recherche & Sauvetage (Drone + Robot)',
					context: 'Projet de fin d’études en génie logiciel (ÉTS Montréal)',
					stack: ['Python', 'ROS 2', 'Vision par ordinateur', 'WebSockets / WebRTC', 'Linux embarqué'],
					bullets: [
						'Développement d’un système autonome de recherche et sauvetage (S&R) combinant un drone autonome et un robot terrestre en milieu intérieur sans GPS.',
						'Intégration de vision par ordinateur pour la reconnaissance de formes humaines (détection de victimes) à partir du flux vidéo du drone.',
						'Gestion de l’orientation spatiale du drone autonome et relayage en temps réel des coordonnées vers le robot au sol pour qu’il s’y rende de manière autonome.'
					],
					hardwareGallery: [
						{
							src: '/starling-2-max.png',
							label: 'Fig. 01a — ModalAI Starling 2 Max',
							specs: 'VOXL 2 • PX4 • 5G'
						},
						{
							src: '/waveshare-ugv-rover.jpg',
							label: 'Fig. 01b — Waveshare UGV Rover',
							specs: 'Jetson Orin Nano • ESP32 • LiDAR'
						}
					]
				},
				{
					idx: '02 / MICROSERVICES',
					title: 'CanBankX — Plateforme de Microservices Distribués',
					context: 'Systèmes Distribués & Architecture Cloud (Go, Docker, Redis)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'Redis', 'KrakenD API Gateway', 'MySQL', 'Prometheus', 'Grafana', 'k6'],
					bullets: [
						'Backend bancaire en microservices (Go) avec une base de données dédiée par service (User, Account, Transaction, Ledger).',
						'Passerelle KrakenD API Gateway pour gérer l’authentification, le rate-limiting et le routage des requêtes.',
						'Cache Redis pour la validation des sessions et la lecture rapide des soldes de comptes.',
						'Tests de charge avec k6 et suivi des métriques via Prometheus et Grafana.'
					],
					showcaseImage: {
						src: '/canbankx-deployment.png',
						label: 'Fig. 02 — Diagramme de déploiement microservices',
						caption: 'Architecture de déploiement distribuée (Phase 3) illustrant KrakenD API Gateway, les microservices Go isolés, Redis, MySQL et la télémétrie Prometheus/Grafana.',
						isDiagram: true
					}
				},
				{
					idx: '03 / MULTIDISCIPLINAIRE',
					title: 'Grue à tour automatisée',
					context: 'Projet multidisciplinaire de 1re année (ÉTS Montréal)',
					repoUrl: 'https://github.com/VelaSam/crane',
					stack: ['SolidWorks CAO', 'C embarqué', 'Télémétrie RF', 'Découpe laser CNC', 'Transmission mécanique'],
					bullets: [
						'Conception, modélisation et fabrication d’une grue à tour automatisée à échelle réduite dans le cadre du projet multidisciplinaire de 1re année à l’ÉTS.',
						'Modélisation 3D complète sous SolidWorks : mât en treillis, flèche rotative avec contrepoids, couronne d’orientation et chariot treuil.',
						'Conception d’un boîtier de réduction sur mesure avec pignon et couronne dentée entraînés par micro-motoréducteur métallique.',
						'Câblage complet d’une radiocommande sans fil avec joystick analogique, liaison RF et affichage d’état en direct.'
					],
					showcaseImage: {
						src: '/crane-team.jpg',
						label: 'Fig. 03 — L’Équipe & Prototype',
						caption: 'Notre équipe de 6 étudiants réunie autour de la grue à tour automatisée le jour de la compétition à l’ÉTS.',
						isDiagram: false
					}
				},
				{
					hidden: true,
					idx: '04 / SYSTÈMES',
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
	<title>{i18n.locale === 'en' ? 'Projects — Samuel Velasco' : 'Projets — Samuel Velasco'}</title>
	<meta
		name="description"
		content="Software, distributed microservices, and robotics engineering projects by Samuel Velasco."
	/>
</svelte:head>

<div class="projects-editorial">
	<!-- Page Header -->
	<header class="projects-header">
		<div class="projects-kicker">{content.kicker}</div>
		<div class="projects-title-row">
			<div>
				<h1 class="projects-title">{content.title}</h1>
			</div>
			<a href="/contact" class="header-cta interactive">
				{content.btnContact}
			</a>
		</div>
	</header>

	<!-- Editorial Case Study Rows -->
	<div class="projects-ledger">
		{#each content.projects.filter((p) => !p.hidden) as proj, idx}
			{#if idx > 0}
				<EngineeringDivider label={`0x0${idx + 1}`} />
			{/if}
			<article class="project-study">
				<aside class="study-rail">
					<span class="study-idx">{proj.idx}</span>
					<span class="study-context">{proj.context}</span>

					<div class="study-stack">
						{#each proj.stack as tech}
							<span class="study-tag">{tech}</span>
						{/each}
					</div>

					{#if proj.repoUrl}
						<a
							href={proj.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="study-repo-link interactive"
						>
							{content.viewRepo}
						</a>
					{/if}
				</aside>

				<div class="study-main">
					<h2 class="study-title">
						{#if proj.repoUrl}
							<a
								href={proj.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="study-title-link interactive"
							>
								<span>{proj.title}</span>
								<span class="ext-arrow">↗</span>
							</a>
						{:else}
							<span>{proj.title}</span>
						{/if}
					</h2>

					<ul class="study-bullets">
						{#each proj.bullets as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>

					{#if proj.hardwareGallery}
						<div class="hardware-grid">
							{#each proj.hardwareGallery as hw}
								<figure class="study-figure">
									<div class="study-frame diagram-frame hw-frame">
										<img src={hw.src} alt={hw.label} class="study-img hw-img" />
									</div>
									<figcaption class="study-caption">
										<strong>{hw.label}</strong>
										<span class="hw-specs">{hw.specs}</span>
									</figcaption>
								</figure>
							{/each}
						</div>
					{/if}

					{#if proj.showcaseImage}
						<figure class="study-figure">
							<div class="study-frame" class:diagram-frame={proj.showcaseImage.isDiagram}>
								<img
									src={proj.showcaseImage.src}
									alt={proj.showcaseImage.label}
									class="study-img"
								/>
							</div>
							<figcaption class="study-caption">
								<strong>{proj.showcaseImage.label} —</strong>
								{proj.showcaseImage.caption}
							</figcaption>
						</figure>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	<!-- Understated Colophon -->
	<section class="projects-colophon">
		<p class="colophon-text">
			{content.colophonLead}
			<a href="/experience" class="colophon-link interactive">
				{content.colophonLink}
			</a>
		</p>
	</section>
</div>

<style>
	.projects-editorial {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	/* Header */
	.projects-header {
		padding: 1.5rem 0 2rem;
		border-bottom: 1px solid var(--text-primary);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.projects-kicker {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		letter-spacing: 0.06em;
		color: var(--text-tertiary);
		text-transform: uppercase;
	}

	.projects-title-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.projects-title {
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 5vw, 3.8rem);
		font-weight: 400;
		line-height: 1.05;
		color: var(--text-primary);
		margin: 0;
		letter-spacing: -0.02em;
	}

	.header-cta {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--text-primary);
		padding-bottom: 0.15rem;
		transition: color 0.15s ease, border-color 0.15s ease;
	}

	.header-cta:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	/* Case Study Rows */
	.projects-ledger {
		display: flex;
		flex-direction: column;
	}

	.project-study {
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: 3.5rem;
		padding: 2.25rem 0;
		align-items: start;
	}

	.project-study:first-child {
		padding-top: 0.5rem;
	}

	.study-rail {
		position: sticky;
		top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.study-idx {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.study-context {
		font-size: 0.86rem;
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.study-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding-top: 0.25rem;
	}

	.study-tag {
		font-family: var(--font-mono);
		font-size: 0.71rem;
		color: var(--text-primary);
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-subtle);
		padding: 0.16rem 0.5rem;
	}

	.study-repo-link {
		display: inline-block;
		margin-top: 0.35rem;
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--text-primary);
		align-self: flex-start;
		padding-bottom: 0.12rem;
		transition: color 0.15s ease, border-color 0.15s ease;
	}

	.study-repo-link:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	/* Right Column */
	.study-main {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.study-title {
		font-family: var(--font-display);
		font-size: 2.15rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.12;
	}

	.study-title-link {
		text-decoration: none;
		color: inherit;
		display: inline-flex;
		align-items: baseline;
		gap: 0.45rem;
		transition: color 0.15s ease;
	}

	.study-title-link:hover {
		color: var(--accent-purple);
		font-style: italic;
	}

	.ext-arrow {
		font-family: var(--font-mono);
		font-size: 1rem;
		font-style: normal;
	}

	.study-bullets {
		margin: 0;
		padding-left: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.study-bullets li {
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--text-secondary);
	}

	/* 2-Column Hardware Platform Gallery */
	.hardware-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		margin-top: 0.5rem;
	}

	.hw-frame {
		aspect-ratio: 4 / 3;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hw-img {
		max-height: 220px;
		width: auto !important;
		max-width: 100%;
		object-fit: contain;
	}

	.hw-specs {
		display: block;
		margin-top: 0.2rem;
	}

	/* Uncropped Natural Aspect Ratio Figure */
	.study-figure {
		margin: 0.5rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.study-frame {
		border: 1px solid var(--border-medium);
		background: var(--bg-surface-soft);
		padding: 0.5rem;
	}

	.study-frame.diagram-frame {
		background: #ffffff;
		padding: 1.25rem;
	}

	.study-img {
		width: 100%;
		height: auto;
		display: block;
	}

	.study-caption {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		line-height: 1.5;
		color: var(--text-tertiary);
	}

	.study-caption strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	/* Colophon */
	.projects-colophon {
		padding-top: 1.5rem;
	}

	.colophon-text {
		font-family: var(--font-display);
		font-size: 1.6rem;
		color: var(--text-primary);
		margin: 0;
	}

	.colophon-link {
		color: var(--accent-purple);
		font-style: italic;
		text-decoration: underline;
		text-underline-offset: 4px;
		margin-left: 0.35rem;
		white-space: nowrap;
		display: inline-block;
	}

	@media (max-width: 900px) {
		.project-study,
		.hardware-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.study-rail {
			position: static;
		}
	}
</style>
