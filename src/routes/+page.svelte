<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const content = $derived({
		en: {
			kicker: 'SAMUEL VELASCO — B.ENG. SOFTWARE ENGINEERING (ÉTS) — MONTRÉAL, QC',
			btnCV: 'Experience & Resume',
			btnProjects: 'Selected Projects',
			btnContact: 'Contact',
			metaRoleLabel: 'Focus',
			metaRoleVal: 'Fullstack, Backend & Systems',
			metaSchoolLabel: 'Education',
			metaSchoolVal: 'B.Eng. Software Engineering, ÉTS',
			metaLocLabel: 'Base',
			metaLocVal: 'Montréal, QC',
			setupNum: '01 / BENCH',
			setupTitle: 'My Average Dev Setup',
			setupCaption: 'Fig. 01 — Left half of a Moonlander, desk fan pointed at a VOXL 2 research drone, and Diet Pepsi.',
			setupSubtitle:
				'I use only the left side of my Moonlander because of my two missing D and X keys. I use a fan to cool down the research drone I was somehow trusted with, and I only drink Diet Pepsi because it saves calories.',
			domainsNum: '02 / FOCUS',
			domainsTitle: 'What I Actually Build',
			domainsDesc:
				'Software developer first: building maintainable web, desktop, and backend systems with B.Eng architectural discipline, backed by hands-on embedded and robotics work.',
			skills: [
				{
					idx: '01',
					title: 'Software Development & Web Architecture',
					subtitle: 'Backend Services • Fullstack Web • Databases',
					description:
						'Grounded in core software engineering: object-oriented design (Java, C# .NET, Go), relational database schemas (SQL, PostgreSQL, MySQL), REST APIs, and reactive frontends (TypeScript, Angular, SvelteKit). Used to production codebases, code reviews, automated testing, and Dockerized deployments.',
					tags: ['Java', 'C# .NET', 'Go', 'TypeScript', 'Angular', 'SvelteKit', 'PostgreSQL', 'Docker']
				},
				{
					idx: '02',
					title: 'Systems, Diagnostics & Real-Time Tooling',
					subtitle: 'Low-Latency Streams • Desktop Apps • Concurrency',
					description:
						'Connecting application logic to high-frequency data: real-time ultrasonic telemetry and C++ Data Processing Unit (DPU) integration (Evident Scientific), accessible multi-screen desktop software in Avalonia (HumanWare Prodigi), and split-protocol networking (WebSockets, WebRTC, raw UDP).',
					tags: ['C++', 'C# .NET 8', 'Avalonia', 'WebSockets / WebRTC', 'Concurrency', 'Linux']
				},
				{
					idx: '03',
					title: 'Embedded Systems & Robotics',
					subtitle: 'Physical Computing • From the Metal Up',
					description:
						'Hands-on work interfacing software directly with hardware: ARM Cortex-M microcontrollers (STM32, C, Zig), computer vision pipelines (OpenCV, rPPG, AprilTags), and ROS 2 autonomous navigation. Knowing what happens at the register and memory level makes it much easier to write fast, predictable backend code.',
					tags: ['STM32', 'Embedded C', 'Zig', 'Python', 'OpenCV', 'ROS 2', 'FreeRTOS']
				}
			],
			trajectoryNum: '03 / TRAJECTORY',
			trajectoryTitle: 'Internships & Roles',
			viewFullCV: 'Full resume & technical competencies',
			milestones: [
				{
					period: 'May – Sept. 2026',
					role: 'Digital Health Research Developer',
					type: 'R&D Internship',
					company: 'National Research Council Canada (NRC / CNRC)',
					detail: 'VitalSeer: contactless vital signs monitoring & edge computer vision'
				},
				{
					period: 'Sept. – Dec. 2025',
					role: 'C# .NET Avalonia Developer',
					type: 'Software Dev Internship',
					company: 'HumanWare',
					detail: 'Prodigi assistive application: OCR/TTS speech workflows & accessibility UI'
				},
				{
					period: 'May – Dec. 2024',
					role: 'Software Developer – Ultrasound Systems',
					type: 'Software Dev Internship',
					company: 'Evident Scientific (formerly Olympus)',
					detail: 'OmniScan / UNIS ultrasound software: C++ Data Processing Unit (DPU) & Angular web app'
				},
				{
					period: 'May – Dec. 2023',
					role: 'Web Application Developer – Ultrasound Systems',
					type: 'Software Dev Internship',
					company: 'Evident Scientific (formerly Olympus)',
					detail: 'Angular web dashboards & real-time ultrasonic signal visualization'
				}
			],
			projectsNum: '04 / WORK',
			projectsTitle: 'Selected Projects',
			viewFullProjects: 'Full case studies & diagrams',
			featuredProjects: [
				{
					idx: '01',
					title: 'Autonomous Search & Rescue (Drone + Ground Robot)',
					category: 'ÉTS Capstone',
					stack: 'Python • ROS 2 • Computer Vision • WebSockets / WebRTC',
					desc: 'Autonomous drone exploring indoor GPS-denied spaces, recognizing human shapes from live video, and relaying target coordinates to an autonomous ground robot.',
					link: '/projects'
				},
				{
					idx: '02',
					title: 'CanBankX — Distributed Microservices Platform',
					category: 'Distributed Systems',
					stack: 'Go • Docker Compose • Redis • KrakenD • MySQL • k6',
					desc: 'Microservices banking backend in Go with isolated MySQL databases, KrakenD API Gateway routing, Redis caching, and k6 load testing.',
					link: '/projects'
				},
				{
					idx: '03',
					title: 'Automated Tower Crane',
					category: '1st-Year Multidisciplinary Project',
					stack: 'SolidWorks • Embedded C • RF Telemetry • Laser Cutting',
					desc: 'Functional scale tower crane built for the 1st-year ÉTS multidisciplinary project: laser-cut lattice mast, custom SolidWorks gear transmission, and wireless joystick controller.',
					link: '/projects'
				}
			],
			colophonLead: 'Looking for a software developer who understands the stack from web APIs down to the metal?',
			colophonLink: 'Send a message'
		},
		fr: {
			kicker: 'SAMUEL VELASCO — B.ING. GÉNIE LOGICIEL (ÉTS) — MONTRÉAL, QC',
			btnCV: 'Expérience & CV',
			btnProjects: 'Projets choisis',
			btnContact: 'Contact',
			metaRoleLabel: 'Focus',
			metaRoleVal: 'Fullstack, Backend & Systèmes',
			metaSchoolLabel: 'Formation',
			metaSchoolVal: 'B.Ing. Génie logiciel, ÉTS',
			metaLocLabel: 'Base',
			metaLocVal: 'Montréal, QC',
			setupNum: '01 / ÉTABLI',
			setupTitle: 'Mon Setup de Dev Habituel',
			setupCaption: 'Fig. 01 — Moitié gauche de Moonlander, ventilateur pointé sur un drone de recherche VOXL 2 et Pepsi Diet.',
			setupSubtitle:
				'J’utilise seulement le côté gauche de mon Moonlander à cause de mes deux touches D et X manquantes. J’utilise un ventilateur pour refroidir le drone de recherche qu’on m’a miraculeusement confié, et je bois seulement du Pepsi Diet parce que ça sauve des calories.',
			domainsNum: '02 / FOCUS',
			domainsTitle: 'Ce que je construis',
			domainsDesc:
				'Développeur logiciel avant tout : conception d’applications web, bureau et backend maintenables avec la rigueur d’un bachelier en génie logiciel, complétée par une vraie pratique de l’embarqué et de la robotique.',
			skills: [
				{
					idx: '01',
					title: 'Développement Logiciel & Architecture Web',
					subtitle: 'Services Backend • Web Fullstack • Bases de données',
					description:
						'Ancré dans les fondamentaux du génie logiciel : conception orientée objet (Java, C# .NET, Go), schémas relationnels (SQL, PostgreSQL, MySQL), API REST et interfaces réactives (TypeScript, Angular, SvelteKit). Habitué aux revues de code, aux tests automatisés et aux déploiements Docker.',
					tags: ['Java', 'C# .NET', 'Go', 'TypeScript', 'Angular', 'SvelteKit', 'PostgreSQL', 'Docker']
				},
				{
					idx: '02',
					title: 'Systèmes, Diagnostic & Temps Réel',
					subtitle: 'Flux Basse Latence • Applications Bureau • Concurrence',
					description:
						'Lien direct entre logique applicative et données haute fréquence : télémétrie ultrasonore et intégration avec un moteur C++ Data Processing Unit (Evident Scientific), application de bureau accessible sous Avalonia (HumanWare Prodigi) et protocoles réseau temps réel (WebSockets, WebRTC, UDP).',
					tags: ['C++', 'C# .NET 8', 'Avalonia', 'WebSockets / WebRTC', 'Concurrence', 'Linux']
				},
				{
					idx: '03',
					title: 'Systèmes Embarqués & Robotique',
					subtitle: 'Informatique Physique • De la couche matérielle au sommet',
					description:
						'Expérience concrète à l’interface matériel-logiciel : microcontrôleurs ARM Cortex-M (STM32, C, Zig), pipelines de vision par ordinateur (OpenCV, rPPG, AprilTags) et navigation autonome ROS 2. Comprendre ce qui se passe au niveau de la mémoire et du silicium aide directement à écrire du code backend sobre et performant.',
					tags: ['STM32', 'C embarqué', 'Zig', 'Python', 'OpenCV', 'ROS 2', 'FreeRTOS']
				}
			],
			trajectoryNum: '03 / PARCOURS',
			trajectoryTitle: 'Stages & Mandats',
			viewFullCV: 'Voir le CV complet & les compétences',
			milestones: [
				{
					period: 'Mai – Sept. 2026',
					role: 'Développeur recherche santé numérique',
					type: 'Stage R&D',
					company: 'Conseil national de recherches Canada (CNRC)',
					detail: 'VitalSeer : suivi sans contact des signes vitaux & vision par ordinateur embarquée'
				},
				{
					period: 'Sept. – Déc. 2025',
					role: 'Développeur C# .NET Avalonia',
					type: 'Stage en développement logiciel',
					company: 'HumanWare',
					detail: 'Application d’assistance Prodigi : flux OCR/TTS et accessibilité'
				},
				{
					period: 'Mai – Déc. 2024',
					role: 'Développeur Logiciel – Applications Ultrasons',
					type: 'Stage en développement logiciel',
					company: 'Evident Scientific (anciennement Olympus)',
					detail: 'Écosystème OmniScan / UNIS : moteur C++ DPU et application web Angular'
				},
				{
					period: 'Mai – Déc. 2023',
					role: 'Développeur Web – Applications Ultrasons',
					type: 'Stage en développement logiciel',
					company: 'Evident Scientific (anciennement Olympus)',
					detail: 'Application web Angular & visualisation temps réel de signaux ultrasonores'
				}
			],
			projectsNum: '04 / PROJETS',
			projectsTitle: 'Projets Choisis',
			viewFullProjects: 'Détails techniques & schémas',
			featuredProjects: [
				{
					idx: '01',
					title: 'Système Autonome de Recherche & Sauvetage (Drone + Robot)',
					category: 'PFE ÉTS',
					stack: 'Python • ROS 2 • Vision par ordinateur • WebSockets / WebRTC',
					desc: 'Drone autonome explorant un espace intérieur sans GPS, reconnaissant des formes humaines par vidéo et relayant les coordonnées au robot terrestre.',
					link: '/projects'
				},
				{
					idx: '02',
					title: 'CanBankX — Plateforme de Microservices Distribués',
					category: 'Systèmes Distribués',
					stack: 'Go • Docker Compose • Redis • KrakenD • MySQL • k6',
					desc: 'Backend bancaire en microservices (Go) avec bases MySQL isolées, passerelle KrakenD, cache Redis et tests de charge k6.',
					link: '/projects'
				},
				{
					idx: '03',
					title: 'Grue à tour automatisée',
					category: 'Projet multidisciplinaire (1re année)',
					stack: 'SolidWorks • C embarqué • Télémétrie RF • Découpe Laser',
					desc: 'Grue à échelle réduite conçue dans le cadre du projet multidisciplinaire de 1re année à l’ÉTS : mât en treillis découpé au laser, transmission SolidWorks et télécommande sans fil.',
					link: '/projects'
				}
			],
			colophonLead: 'Vous cherchez un développeur logiciel à l’aise autant sur une architecture web/backend qu’au niveau système ?',
			colophonLink: 'Écrire un message'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Samuel Velasco — Software Developer' : 'Samuel Velasco — Développeur Logiciel'}</title>
	<meta
		name="description"
		content="Portfolio of Samuel Velasco — Software Developer (B.Eng. Software Engineering, ÉTS Montréal)."
	/>
</svelte:head>

<div class="editorial-home">
	<!-- Editorial Hero -->
	<section class="hero">
		<div class="hero-kicker">{content.kicker}</div>

		<h1 class="hero-title">
			{#if i18n.locale === 'en'}
				I solve <span class="serif-italic">complex engineering problems</span> so I can afford <span class="serif-italic">climbing chalk</span> and <span class="serif-italic">Uber Eats</span>.
			{:else}
				Je résous des <span class="serif-italic">problèmes d’ingénierie complexes</span> pour pouvoir me payer <span class="serif-italic">mon abonnement d’escalade</span> et du <span class="serif-italic">Uber Eats</span>.
			{/if}
		</h1>

		<div class="hero-split">
			<div class="hero-bio-col">
				<p class="hero-bio">
					{#if i18n.locale === 'en'}
						Hi! I’m <strong>Samuel Velasco</strong>. Software developer, software engineering degree from <span class="ink-underline">ÉTS</span>. Developing solid fullstack apps, clean backend systems and scalable web solutions is my day to day plus much relevant experience in <span class="ink-underline">system performance</span>, <span class="ink-underline">embedded microcontrollers</span>, and <span class="ink-underline">autonomous robotics</span>. This allows me to have a more intuitive understanding of how the software operates from the metal up.
					{:else}
						Salut ! Je suis <strong>Samuel Velasco</strong>. Développeur logiciel, diplômé en génie logiciel à l’<span class="ink-underline">ÉTS</span>. Développer des applications fullstack solides, des systèmes backend propres et des solutions web scalables est mon quotidien, avec en plus une expérience pertinente en <span class="ink-underline">performance système</span>, <span class="ink-underline">microcontrôleurs embarqués</span> et <span class="ink-underline">robotique autonome</span>. Cela me permet d’avoir une compréhension plus intuitive du fonctionnement du logiciel, de la couche matérielle jusqu’au sommet.
					{/if}
				</p>

				<nav class="hero-nav-links" aria-label="Primary actions">
					<a href="/experience" class="editorial-cta-primary interactive">
						<span>{content.btnCV}</span>
						<span class="arrow">→</span>
					</a>
					<a href="/projects" class="editorial-cta-link interactive">
						<span>{content.btnProjects}</span>
						<span class="arrow">→</span>
					</a>
					<a href="/contact" class="editorial-cta-link interactive">
						<span>{content.btnContact}</span>
						<span class="arrow">→</span>
					</a>
				</nav>
			</div>

			<aside class="hero-spec-ledger" aria-label="Quick specifications">
				<div class="spec-row">
					<span class="spec-key">{content.metaRoleLabel}</span>
					<span class="spec-val">{content.metaRoleVal}</span>
				</div>
				<div class="spec-row">
					<span class="spec-key">{content.metaSchoolLabel}</span>
					<span class="spec-val">{content.metaSchoolVal}</span>
				</div>
				<div class="spec-row">
					<span class="spec-key">{content.metaLocLabel}</span>
					<span class="spec-val">{content.metaLocVal}</span>
				</div>
				<div class="spec-row spec-links">
					<a href="https://github.com/VelaSam" target="_blank" rel="noopener noreferrer" class="spec-ext interactive">GitHub ↗</a>
					<a href="https://www.linkedin.com/in/samuelvelascodev" target="_blank" rel="noopener noreferrer" class="spec-ext interactive">LinkedIn ↗</a>
					<a href="mailto:svelasco514@gmail.com" class="spec-ext interactive">svelasco514@gmail.com ↗</a>
				</div>
			</aside>
		</div>
	</section>

	<!-- 01 / The Bench (Real uncropped photo + dry humor) -->
	<section class="editorial-section">
		<div class="section-rail">
			<span class="rail-index">{content.setupNum}</span>
			<h2 class="rail-heading">{content.setupTitle}</h2>
			<p class="rail-note">{content.setupSubtitle}</p>
		</div>

		<div class="section-main">
			<figure class="bench-figure">
				<div class="bench-frame">
					<img
						src="/dev-setup.jpg"
						alt="Samuel Velasco's desk with split Moonlander keyboard, research drone and cooling fan"
						class="bench-img"
					/>
				</div>
				<figcaption class="bench-caption">{content.setupCaption}</figcaption>
			</figure>
		</div>
	</section>

	<!-- 02 / What I Actually Build (Editorial numbered index, no SaaS 3-box grid) -->
	<section class="editorial-section">
		<div class="section-rail">
			<span class="rail-index">{content.domainsNum}</span>
			<h2 class="rail-heading">{content.domainsTitle}</h2>
			<p class="rail-note">{content.domainsDesc}</p>
		</div>

		<div class="section-main">
			<div class="focus-ledger">
				{#each content.skills as skill}
					<article class="focus-row">
						<div class="focus-row-top">
							<span class="focus-idx">{skill.idx}</span>
							<div class="focus-titles">
								<h3 class="focus-title">{skill.title}</h3>
								<span class="focus-sub">{skill.subtitle}</span>
							</div>
						</div>
						<p class="focus-desc">{skill.description}</p>
						<div class="focus-tags">
							{#each skill.tags as tag}
								<span class="mono-tag">{tag}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- 03 / Trajectory (Scannable typographic ledger) -->
	<section class="editorial-section">
		<div class="section-rail">
			<span class="rail-index">{content.trajectoryNum}</span>
			<h2 class="rail-heading">{content.trajectoryTitle}</h2>
			<a href="/experience" class="rail-link interactive">
				<span>{content.viewFullCV}</span>
				<span>→</span>
			</a>
		</div>

		<div class="section-main">
			<div class="ledger-table">
				{#each content.milestones as item}
					<a href="/experience" class="ledger-row interactive">
						<div class="ledger-period">
							<span class="period-text">{item.period}</span>
							<span class="period-kind">{item.type}</span>
						</div>
						<div class="ledger-body">
							<div class="ledger-headline">
								<span class="ledger-role">{item.role}</span>
								<span class="ledger-at">— {item.company}</span>
							</div>
							<p class="ledger-detail">{item.detail}</p>
						</div>
						<span class="ledger-arrow" aria-hidden="true">→</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- 04 / Selected Work (Editorial project index) -->
	<section class="editorial-section">
		<div class="section-rail">
			<span class="rail-index">{content.projectsNum}</span>
			<h2 class="rail-heading">{content.projectsTitle}</h2>
			<a href="/projects" class="rail-link interactive">
				<span>{content.viewFullProjects}</span>
				<span>→</span>
			</a>
		</div>

		<div class="section-main">
			<div class="work-index">
				{#each content.featuredProjects as proj}
					<a href={proj.link} class="work-row interactive">
						<div class="work-meta-line">
							<span class="work-idx">{proj.idx} / {proj.category}</span>
							<span class="work-stack">{proj.stack}</span>
						</div>
						<div class="work-title-line">
							<h3 class="work-title">{proj.title}</h3>
							<span class="work-arrow" aria-hidden="true">↗</span>
						</div>
						<p class="work-desc">{proj.desc}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Understated Editorial Sign-Off (No SaaS Banner Box) -->
	<section class="editorial-colophon">
		<p class="colophon-text">
			{content.colophonLead}
			<a href="/contact" class="colophon-cta interactive">
				{content.colophonLink} →
			</a>
		</p>
	</section>
</div>

<style>
	.editorial-home {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	/* Hero */
	.hero {
		padding: 1.5rem 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.hero-kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		color: var(--text-tertiary);
		text-transform: uppercase;
	}

	.hero-title {
		font-family: var(--font-display);
		font-size: clamp(2.65rem, 5.2vw, 4.1rem);
		line-height: 1.08;
		font-weight: 400;
		color: var(--text-primary);
		letter-spacing: -0.02em;
		margin: 0;
		max-width: 980px;
	}

	.serif-italic {
		font-style: italic;
		color: var(--accent-purple);
		font-weight: 400;
	}

	.hero-split {
		display: grid;
		grid-template-columns: 1.45fr 1fr;
		gap: 3.5rem;
		align-items: start;
		padding-top: 1.75rem;
		border-top: 1px solid var(--text-primary);
	}

	.hero-bio-col {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.hero-bio {
		font-size: 1.12rem;
		line-height: 1.68;
		color: var(--text-secondary);
		margin: 0;
	}

	.hero-bio strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.ink-underline {
		color: var(--text-primary);
		font-weight: 500;
		text-decoration: underline;
		text-decoration-color: rgba(109, 40, 217, 0.45);
		text-underline-offset: 3px;
	}

	.hero-nav-links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.editorial-cta-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.72rem 1.3rem;
		background: var(--text-primary);
		color: var(--bg-canvas);
		text-decoration: none;
		font-size: 0.88rem;
		font-weight: 600;
		border-radius: 2px;
		transition: background 0.18s ease;
	}

	.editorial-cta-primary:hover {
		background: var(--accent-purple);
	}

	.editorial-cta-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		padding: 0.35rem 0;
		border-bottom: 1px solid var(--border-medium);
		transition: border-color 0.18s ease, color 0.18s ease;
	}

	.editorial-cta-link:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	.arrow {
		font-family: var(--font-mono);
		transition: transform 0.18s ease;
	}

	.editorial-cta-primary:hover .arrow,
	.editorial-cta-link:hover .arrow {
		transform: translateX(3px);
	}

	/* Spec Ledger on Right of Hero */
	.hero-spec-ledger {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--border-medium);
	}

	.spec-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--border-subtle);
		font-size: 0.85rem;
	}

	.spec-key {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-tertiary);
	}

	.spec-val {
		color: var(--text-primary);
		font-weight: 500;
		text-align: right;
	}

	.spec-links {
		justify-content: flex-start;
		gap: 1.15rem;
		flex-wrap: wrap;
		padding-top: 0.85rem;
		border-bottom: none;
	}

	.spec-ext {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.spec-ext:hover {
		color: var(--accent-purple);
	}

	/* Asymmetric Editorial Sections (Sticky Left Rail + Right Content) */
	.editorial-section {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 3.5rem;
		padding-top: 2.5rem;
		border-top: 1px solid var(--border-medium);
		align-items: start;
	}

	.section-rail {
		position: sticky;
		top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.rail-index {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.rail-heading {
		font-family: var(--font-display);
		font-size: 2.15rem;
		font-weight: 400;
		line-height: 1.12;
		color: var(--text-primary);
		margin: 0;
	}

	.rail-note {
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0.25rem 0 0;
	}

	.rail-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--text-primary);
		align-self: flex-start;
		padding-bottom: 0.15rem;
		transition: color 0.18s ease, border-color 0.18s ease;
	}

	.rail-link:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	/* 01 / Bench Figure (Uncropped natural aspect ratio) */
	.bench-figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.bench-frame {
		border: 1px solid var(--border-medium);
		background: var(--bg-surface-soft);
		padding: 0.5rem;
	}

	.bench-img {
		width: 100%;
		height: auto;
		display: block;
	}

	.bench-caption {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text-tertiary);
		line-height: 1.5;
	}

	/* 02 / Focus Ledger */
	.focus-ledger {
		display: flex;
		flex-direction: column;
	}

	.focus-row {
		padding: 1.75rem 0;
		border-bottom: 1px solid var(--border-subtle);
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	.focus-row:first-child {
		padding-top: 0;
	}

	.focus-row-top {
		display: flex;
		align-items: baseline;
		gap: 1.1rem;
	}

	.focus-idx {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.focus-titles {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.focus-title {
		font-family: var(--font-display);
		font-size: 1.65rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.18;
	}

	.focus-sub {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.focus-desc {
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--text-secondary);
		margin: 0;
		padding-left: 2.1rem;
	}

	.focus-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		padding-left: 2.1rem;
	}

	.mono-tag {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--text-primary);
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-subtle);
		padding: 0.15rem 0.5rem;
	}

	/* 03 / Trajectory Ledger Table */
	.ledger-table {
		display: flex;
		flex-direction: column;
	}

	.ledger-row {
		display: grid;
		grid-template-columns: 180px 1fr 24px;
		gap: 1.5rem;
		align-items: baseline;
		padding: 1.35rem 0.75rem;
		border-bottom: 1px solid var(--border-subtle);
		text-decoration: none;
		color: inherit;
		transition: background-color 0.15s ease, padding-left 0.18s ease;
	}

	.ledger-row:first-child {
		border-top: 1px solid var(--border-subtle);
	}

	.ledger-row:hover {
		background-color: var(--bg-surface-soft);
		padding-left: 1.15rem;
	}

	.ledger-period {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.period-text {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--text-primary);
		font-weight: 500;
	}

	.period-kind {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.ledger-body {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.ledger-headline {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		align-items: baseline;
	}

	.ledger-role {
		font-weight: 600;
		font-size: 1rem;
		color: var(--text-primary);
		transition: color 0.15s ease;
	}

	.ledger-row:hover .ledger-role {
		color: var(--accent-purple);
	}

	.ledger-at {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.ledger-detail {
		font-size: 0.86rem;
		color: var(--text-tertiary);
		margin: 0;
		line-height: 1.5;
	}

	.ledger-arrow {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--text-tertiary);
		transition: transform 0.18s ease, color 0.18s ease;
	}

	.ledger-row:hover .ledger-arrow {
		transform: translateX(3px);
		color: var(--accent-purple);
	}

	/* 04 / Work Index */
	.work-index {
		display: flex;
		flex-direction: column;
	}

	.work-row {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding: 1.75rem 0.75rem;
		border-bottom: 1px solid var(--border-subtle);
		text-decoration: none;
		color: inherit;
		transition: background-color 0.15s ease, padding-left 0.18s ease;
	}

	.work-row:first-child {
		border-top: 1px solid var(--border-subtle);
	}

	.work-row:hover {
		background-color: var(--bg-surface-soft);
		padding-left: 1.15rem;
	}

	.work-meta-line {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 0.72rem;
	}

	.work-idx {
		color: var(--accent-purple);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.work-stack {
		color: var(--text-tertiary);
	}

	.work-title-line {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
	}

	.work-title {
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.18;
		transition: font-style 0.15s ease, color 0.15s ease;
	}

	.work-row:hover .work-title {
		color: var(--accent-purple);
		font-style: italic;
	}

	.work-arrow {
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--text-tertiary);
		transition: transform 0.18s ease, color 0.18s ease;
	}

	.work-row:hover .work-arrow {
		transform: translate(2px, -2px);
		color: var(--accent-purple);
	}

	.work-desc {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		max-width: 680px;
	}

	/* Understated Editorial Colophon */
	.editorial-colophon {
		padding: 2.25rem 0 0.5rem;
		border-top: 1px solid var(--text-primary);
	}

	.colophon-text {
		font-family: var(--font-display);
		font-size: 1.65rem;
		line-height: 1.35;
		color: var(--text-primary);
		margin: 0;
	}

	.colophon-cta {
		color: var(--accent-purple);
		font-style: italic;
		text-decoration: underline;
		text-underline-offset: 4px;
		margin-left: 0.35rem;
	}

	@media (max-width: 900px) {
		.hero-split,
		.editorial-section {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}

		.section-rail {
			position: static;
		}

		.focus-desc,
		.focus-tags {
			padding-left: 0;
		}

		.ledger-row {
			grid-template-columns: 1fr;
			gap: 0.45rem;
		}

		.ledger-arrow {
			display: none;
		}
	}
</style>
