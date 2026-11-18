<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import EngineeringDivider from '$lib/components/EngineeringDivider.svelte';

	const content = $derived({
		en: {
			badge: 'Software Developer • Software Engineering Graduate',
			location: 'Montréal, Québec',
			headline: 'I solve complex engineering problems so I can afford climbing chalk and Uber Eats.',
			btnCV: 'Explore My Resume & Experience',
			btnContact: 'Get In Touch',
			directAccess: 'Direct links:',
			setupTag: 'Natural Habitat',
			setupTitle: 'My Average Dev Setup',
			setupSubtitle:
				'I use only the left side of my Moonlander because of my two missing D and X keys. I use a fan to cool down the research drone I was somehow trusted with, and I only drink Diet Pepsi because it saves calories.',
			domainsTag: 'Areas of Focus',
			domainsTitle: 'Software Engineering & Core Focus',
			domainsDesc:
				'First and foremost a software developer: building maintainable web, desktop, and backend systems with the architectural discipline of a B.Eng graduate, complemented by low-level systems insight.',
			skills: [
				{
					title: 'Software Development & Web Architecture',
					subtitle: 'Clean Architecture • Backend Services • Modern Web',
					description:
						'First and foremost a software developer grounded in solid B.Eng software engineering fundamentals: object-oriented design (Java, C# .NET), relational database schemas (SQL, PostgreSQL), REST APIs, and responsive frontends (TypeScript, Angular, SvelteKit). Experienced in production environments, code reviews, unit testing, and design patterns.',
					tags: ['Java', 'C# .NET', 'TypeScript', 'Angular', 'SvelteKit', 'PostgreSQL', 'OOP & Design Patterns', 'REST APIs', 'Docker']
				},
				{
					title: 'Systems, Diagnostics & Real-Time Tooling',
					subtitle: 'Low-Latency Execution • Network Diagnostics • Concurrency',
					description:
						'Bridging application logic and distributed performance: real-time telemetry streaming over WebSockets, custom diagnostic tools for industrial instrumentation (Evident Scientific), desktop application engineering with Avalonia (HumanWare), and asynchronous concurrency.',
					tags: ['C# .NET 8', 'Avalonia', 'WebSockets', 'Network Diagnostics', 'Concurrency', 'CI/CD & Git', 'Linux']
				},
				{
					title: 'Embedded Systems & Robotics (Hardware Experience)',
					subtitle: 'Physical Computing • Hardware-Level Intuition',
					description:
						'Meaningful hands-on experience interfacing software directly with physical hardware: ARM Cortex-M microcontrollers (STM32, C, Zig), computer vision pipelines (OpenCV, Python), and ROS 2 coordinate tracking. Working close to hardware gives me a rare edge in standard software development: I intuitively understand memory allocation, cache locality, network overhead, and concurrency pitfalls.',
					tags: ['STM32', 'C', 'Zig', 'Python', 'OpenCV', 'ROS 2', 'FreeRTOS', 'Hardware Intuition']
				}
			],
			trajectoryTag: 'Professional Experience',
			trajectoryTitle: 'Selected Internships & Roles',
			viewFullCV: 'View full breakdown in resume',
			milestones: [
				{
					period: 'May 2026 – Sept. 2026',
					role: 'Digital Health Research Developer',
					type: 'R&D Internship',
					company: 'National Research Council Canada (NRC / CNRC)',
					detail: 'VitalSeer: Contactless vital signs monitoring & edge computer vision'
				},
				{
					period: 'Sept. 2025 – Dec. 2025',
					role: 'C# .NET Avalonia Developer',
					type: 'R&D Internship',
					company: 'HumanWare',
					detail: 'Low-vision assistive applications, speech technologies & accessibility workflows'
				},
				{
					period: 'May 2024 – Dec. 2024',
					role: 'Fullstack Developer',
					type: 'R&D Internship',
					company: 'Evident Scientific',
					detail: 'Fullstack diagnostic tooling for non-destructive testing & real-time telemetry pipelines'
				},
				{
					period: 'May 2023 – Dec. 2023',
					role: 'Frontend Developer',
					type: 'R&D Internship',
					company: 'Evident Scientific',
					detail: 'Real-time telemetry dashboards & WebSocket signal visualization'
				}
			],
			projectsTag: 'Projects & Engineering',
			projectsTitle: 'Featured Projects (School & Side Work)',
			projectsDesc: 'Distributed microservices, electromechanical prototypes, and autonomous multi-agent robotics.',
			viewFullProjects: 'Explore all projects & photo galleries',
			featuredProjects: [
				{
					title: 'CanBankX — Distributed Microservices Platform',
					category: 'Distributed Systems & Cloud',
					stack: 'Go • Docker Compose • Redis • KrakenD • k6',
					desc: 'Microservices banking backend in Go with isolated MySQL databases, KrakenD API Gateway routing, Redis caching, and k6 load testing.',
					link: '/projects'
				},
				{
					title: 'Automated Tower Crane',
					category: '1st-Year Multidisciplinary Project',
					stack: 'SolidWorks • C • RF • Laser Cutting',
					desc: 'Functional scale tower crane built for the 2nd-semester ÉTS multidisciplinary project: laser-cut lattice mast, custom SolidWorks gear transmission, and wireless joystick controller.',
					link: '/projects'
				},
				{
					title: 'Search & Rescue Autonomous Drone & Rover',
					category: 'Autonomous Perception & Robotics',
					stack: 'Python • ROS 2 • OpenCV • Linux',
					desc: 'Embedded flight software and coordinated multi-agent protocol detecting targets from video feeds via onboard computer vision and dispatching ground rover units.',
					link: '/projects'
				}
			],
			ctaTitle: 'Have an engineering challenge or opportunity to discuss?',
			ctaSub: 'Open to software development, fullstack engineering, and systems discussions.',
			ctaBtn: 'Start a conversation'
		},
		fr: {
			badge: 'Développeur Logiciel • Diplômé en Génie Logiciel',
			location: 'Montréal, Québec',
			headline: 'Je résous des problèmes d’ingénierie complexes pour pouvoir me payer mon abonnement d’escalade et du Uber Eats.',
			btnCV: 'Consulter mon parcours & CV',
			btnContact: 'Me contacter',
			directAccess: 'Accès direct :',
			setupTag: 'Habitat Naturel',
			setupTitle: 'Mon Setup de Dev Habituel',
			setupSubtitle:
				'J’utilise seulement le côté gauche de mon Moonlander à cause de mes deux touches D et X manquantes. J’utilise un ventilateur pour refroidir le drone de recherche qu’on m’a miraculeusement confié, et je bois seulement du Pepsi Diet parce que ça sauve des calories.',
			domainsTag: 'Domaines d’intervention',
			domainsTitle: 'Expertise Logicielle & Systèmes',
			domainsDesc:
				'Avant tout un développeur logiciel : conception d’applications web, applicatives et backend fiables avec la rigueur architecturale d’un diplômé en génie logiciel, enrichie par une solide expérience pratique en embarqué et robotique.',
			skills: [
				{
					title: 'Génie Logiciel & Architecture (Fullstack & Backend)',
					subtitle: 'Architecture Propre • Services Backend • Web Moderne',
					description:
						'Avant tout un développeur logiciel : pratiques d’ingénierie rigoureuses issues de mon baccalauréat à l’ÉTS. Conception d’architectures orientées objet maintenables (Java, C# .NET), modélisation de bases de données relationnelles (SQL, PostgreSQL), API RESTful et interfaces réactives (TypeScript, Angular, SvelteKit). Habitué aux revues de code, tests et intégration continue.',
					tags: ['Java', 'C# .NET', 'TypeScript', 'Angular', 'SvelteKit', 'PostgreSQL', 'Architecture logicielle', 'POO', 'API REST', 'Docker']
				},
				{
					title: 'Systèmes, Diagnostic & Temps Réel',
					subtitle: 'Performance • Outils de Diagnostic • Concurrence',
					description:
						'Rapprochement de la logique métier et des performances système : flux de télémétrie temps réel via WebSockets, outils de diagnostic réseau pour équipements industriels (Evident Scientific), développement d’applications de bureau haute fidélité sous Avalonia (HumanWare) et programmation asynchrone.',
					tags: ['C# .NET 8', 'Avalonia', 'WebSockets', 'Diagnostic réseau', 'Concurrence', 'CI/CD & Git', 'Linux']
				},
				{
					title: 'Systèmes Embarqués & Robotique (Atout Matériel)',
					subtitle: 'Informatique Physique • Compréhension Bas Niveau',
					description:
						'Une compréhension pratique du logiciel jusqu’au silicium : microcontrôleurs ARM Cortex-M (STM32, C, Zig), vision par ordinateur (OpenCV, Python) et navigation ROS 2. Cette proximité avec le matériel constitue un atout direct en développement applicatif : compréhension intuitive de la mémoire, de la localité de cache, de la latence réseau et des verrous de concurrence.',
					tags: ['STM32', 'C', 'Zig', 'Python', 'OpenCV', 'ROS 2', 'FreeRTOS', 'Compréhension matérielle']
				}
			],
			trajectoryTag: 'Expérience Professionnelle',
			trajectoryTitle: 'Stages & Mandats Choisis',
			viewFullCV: 'Voir le détail complet dans le CV',
			milestones: [
				{
					period: 'Mai 2026 – Sept. 2026',
					role: 'Développeur recherche santé numérique',
					type: 'Stage R&D',
					company: 'Conseil national de recherches Canada (CNRC)',
					detail: 'VitalSeer : Télémédecine sans contact & vision par ordinateur sur systèmes embarqués'
				},
				{
					period: 'Sept. 2025 – Déc. 2025',
					role: 'Développeur C# .NET Avalonia',
					type: 'Stage R&D',
					company: 'HumanWare',
					detail: 'Applications d’assistance basse vision, technologies vocales et accessibilité'
				},
				{
					period: 'Mai 2024 – Déc. 2024',
					role: 'Développeur Fullstack',
					type: 'Stage R&D',
					company: 'Evident Scientific',
					detail: 'Outils de diagnostic fullstack pour le contrôle non destructif & flux télémétriques temps réel'
				},
				{
					period: 'Mai 2023 – Déc. 2023',
					role: 'Développeur Frontend',
					type: 'Stage R&D',
					company: 'Evident Scientific',
					detail: 'Tableaux de bord de télémétrie temps réel & visualisation de signaux WebSockets'
				}
			],
			projectsTag: 'Projets & Ingénierie',
			projectsTitle: 'Projets Choisis (Académiques & Personnels)',
			projectsDesc: 'Architectures microservices distribuées, prototypes électromécaniques et robotique multi-agents.',
			viewFullProjects: 'Explorer tous les projets et galeries photo',
			featuredProjects: [
				{
					title: 'CanBankX — Plateforme Microservices Répartie',
					category: 'Systèmes Distribués & Cloud',
					stack: 'Go • Docker Compose • Redis • KrakenD • k6',
					desc: 'Backend bancaire en microservices (Go) avec bases MySQL isolées, passerelle KrakenD, cache Redis et tests de charge k6.',
					link: '/projects'
				},
				{
					title: 'Grue à tour automatisée',
					category: 'Projet multidisciplinaire (1re année)',
					stack: 'SolidWorks • C • RF • Découpe Laser',
					desc: 'Grue à échelle réduite conçue dans le cadre du projet multidisciplinaire de 2e session à l’ÉTS : mât en treillis découpé au laser, transmission SolidWorks et télécommande sans fil.',
					link: '/projects'
				},
				{
					title: 'Système Autonome Drone & Rover',
					category: 'Perception Autonome & Robotique',
					stack: 'Python • ROS 2 • OpenCV • Linux',
					desc: 'Module logiciel embarqué sur drone et protocole de communication multi-agents guidant le rover terrestre par vision par ordinateur et coordonnées géospatiales temps réel.',
					link: '/projects'
				}
			],
			ctaTitle: 'Un projet ou une opportunité à discuter ?',
			ctaSub: 'Disponible pour échanger autour d’opportunités logicielles, fullstack ou systèmes.',
			ctaBtn: 'Initier le contact'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Samuel Velasco • Software & Embedded Developer' : 'Samuel Velasco • Développeur Logiciel & Systèmes'}</title>
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
			<!-- Exact user-requested punchy headline -->
			<h1 class="hero-title">
				{#if i18n.locale === 'en'}
					I solve <span class="highlight-serif">complex engineering problems</span> so I can afford <span class="highlight-serif">climbing chalk</span> and <span class="highlight-serif">Uber Eats</span>.
				{:else}
					Je résous des <span class="highlight-serif">problèmes d’ingénierie complexes</span> pour pouvoir me payer <span class="highlight-serif">mon abonnement d’escalade</span> et du <span class="highlight-serif">Uber Eats</span>.
				{/if}
			</h1>

			<p class="hero-bio">
				{#if i18n.locale === 'en'}
					Hi! I’m <strong class="name-bold">Samuel Velasco</strong>. Software developer, software engineering degree from <span class="emphasis">ÉTS</span>. Developing solid fullstack apps, clean backend systems and scalable web solutions is my day to day plus much relevant experience in <span class="emphasis">system performance</span>, <span class="emphasis">embedded microcontrollers</span>, and <span class="emphasis">autonomous robotics</span>. This allows me to have a more intuitive understanding of how the software operates from the metal up.
				{:else}
					Salut ! Je suis <strong class="name-bold">Samuel Velasco</strong>. Développeur logiciel, diplômé en génie logiciel à l’<span class="emphasis">ÉTS</span>. Développer des applications fullstack solides, des systèmes backend propres et des solutions web scalables est mon quotidien, avec en plus une expérience pertinente en <span class="emphasis">performance système</span>, <span class="emphasis">microcontrôleurs embarqués</span> et <span class="emphasis">robotique autonome</span>. Cela me permet d’avoir une compréhension plus intuitive du fonctionnement du logiciel, de la couche matérielle jusqu’au sommet.
				{/if}
			</p>

			<div class="hero-actions">
				<a href="/experience" data-sveltekit-reload class="btn-primary interactive">
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

				<a href="/contact" data-sveltekit-reload class="btn-secondary interactive">
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

	<!-- Technical Engineering Caliper Divider -->
	<EngineeringDivider label="HABITAT // LAB_BENCH" code="0x7E" />

	<!-- "Average Dev Setup" Feature Card (Clean, annotations removed) -->
	<section class="section-block setup-section">
		<div class="section-header">
			<span class="section-tag">{content.setupTag}</span>
			<h2 class="section-title">{content.setupTitle}</h2>
			<p class="section-desc">{content.setupSubtitle}</p>
		</div>

		<div class="setup-card interactive">
			<div class="setup-image-wrap">
				<img
					src="/dev-setup.jpg"
					alt="Samuel Velasco's development setup with backpack keyboard and drone"
					class="setup-img"
				/>
				<div class="setup-overlay-badge">
					<span class="live-dot"></span>
					<span>{i18n.locale === 'en' ? 'Research Lab • Bench Testing' : 'Laboratoire de recherche • Banc d’essai'}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Technical Engineering Caliper Divider -->
	<EngineeringDivider label="SOFTWARE_FOCUS // WEB_BACKEND_SYSTEMS" code="FULLSTACK_SYS" />

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

	<!-- Technical Engineering Caliper Divider -->
	<EngineeringDivider label="TRAJECTORY // INTERNSHIPS" code="2023-2026" />

	<!-- Professional Experience & Internships Preview -->
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
					<div class="milestone-time-col">
						<span class="milestone-time">{item.period}</span>
						<span class="internship-badge">{item.type}</span>
					</div>
					<div class="milestone-content">
						<div class="milestone-role-row">
							<span class="milestone-role">{item.role}</span>
						</div>
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

	<!-- Technical Engineering Caliper Divider -->
	<EngineeringDivider label="PROJECTS // CODE_AND_SYSTEMS" code="ETS_CAN" />

	<!-- Section: Featured Projects (School & Side Work) -->
	<section class="section-block projects-section">
		<div class="section-header">
			<div class="header-split">
				<div>
					<span class="section-tag">{content.projectsTag}</span>
					<h2 class="section-title">{content.projectsTitle}</h2>
				</div>
				<a href="/projects" data-sveltekit-reload class="link-more interactive">
					<span>{content.viewFullProjects}</span>
					<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 3l5 5-5 5"></path>
					</svg>
				</a>
			</div>
			<p class="section-desc">{content.projectsDesc}</p>
		</div>

		<div class="featured-projects-grid">
			{#each content.featuredProjects as proj}
				<a href={proj.link} data-sveltekit-reload class="featured-project-card interactive">
					<div class="proj-badge-row">
						<span class="proj-category">{proj.category}</span>
						<span class="proj-arrow">↗</span>
					</div>
					<h3 class="proj-title">{proj.title}</h3>
					<div class="proj-stack">{proj.stack}</div>
					<p class="proj-desc">{proj.desc}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Technical Engineering Caliper Divider -->
	<EngineeringDivider label="DISCUSS // CONNECT" code="MTL_QC" />

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
		gap: 3.5rem;
	}

	/* Hero Section */
	.hero-section {
		padding: 1.5rem 0 0.5rem;
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
		border-radius: 3px;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--accent-purple);
		letter-spacing: 0.02em;
	}

	.badge-dot {
		width: 5px;
		height: 5px;
		border-radius: 1px;
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
		max-width: 900px;
	}

	.hero-title {
		font-family: var(--font-display);
		font-size: 3.5rem;
		line-height: 1.15;
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

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.8rem 1.45rem;
		background: var(--text-primary);
		color: #faf7f2;
		border: 1px solid var(--text-primary);
		border-radius: 3px;
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
		border-radius: 3px;
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
		border-radius: 3px;
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

	/* "Average Dev Setup" Feature Card (Clean) */
	.setup-card {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.04);
		transition: backdrop-filter 0.3s ease, border-color 0.25s ease;
	}

	.setup-card:hover {
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
	}

	.setup-image-wrap {
		position: relative;
		width: 100%;
		border-radius: 3px;
		overflow: hidden;
		border: 1px solid var(--border-subtle);
		background: #1c1917;
	}

	.setup-img {
		width: 100%;
		height: auto;
		max-height: 560px;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.setup-card:hover .setup-img {
		transform: scale(1.01);
	}

	.setup-overlay-badge {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		background: rgba(28, 25, 23, 0.85);
		backdrop-filter: blur(8px);
		color: #ffffff;
		padding: 0.35rem 0.75rem;
		border-radius: 3px;
		font-size: 0.78rem;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.live-dot {
		width: 6px;
		height: 6px;
		border-radius: 1px;
		background: #ef4444;
		box-shadow: 0 0 6px #ef4444;
	}

	/* Featured Projects Section */
	.featured-projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.featured-project-card {
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 1.6rem 1.4rem;
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: all 0.2s ease;
	}

	.featured-project-card:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		border-color: var(--border-medium);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px -2px rgba(28, 25, 23, 0.06);
	}

	.proj-badge-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.proj-category {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--accent-purple);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.proj-arrow {
		font-size: 0.9rem;
		color: var(--text-tertiary);
		transition: transform 0.2s ease, color 0.2s ease;
	}

	.featured-project-card:hover .proj-arrow {
		transform: translate(2px, -2px);
		color: var(--accent-purple);
	}

	.proj-title {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 500;
		color: var(--text-primary);
		line-height: 1.25;
		margin: 0;
	}

	.proj-stack {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--text-tertiary);
	}

	.proj-desc {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.55;
		margin: 0;
		flex-grow: 1;
	}

	/* Section Blocks */
	.section-block {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
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
		max-width: 680px;
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
		border-radius: 4px;
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
		border-radius: 2px;
		color: var(--text-secondary);
		font-weight: 500;
	}

	/* Trajectory / Internships */
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
		gap: 0.75rem;
	}

	.milestone-item {
		display: grid;
		grid-template-columns: 210px 1fr 30px;
		align-items: center;
		gap: 1.5rem;
		padding: 1.35rem 1.6rem;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
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

	.milestone-time-col {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		align-items: flex-start;
	}

	.milestone-time {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--text-tertiary);
	}

	.internship-badge {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 0.15rem 0.55rem;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.25);
		border-radius: 2px;
		color: var(--accent-purple);
	}

	.milestone-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.milestone-role-row {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		flex-wrap: wrap;
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
		border-radius: 4px;
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
		.featured-projects-grid {
			grid-template-columns: 1fr;
		}

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
			font-size: 2.7rem;
		}
	}
</style>
