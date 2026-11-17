<script lang="ts">
	const technicalSkills = [
		{
			category: 'Langages de programmation',
			skills: ['C# (.NET 8)', 'TypeScript', 'Python', 'C', 'C++20', 'Zig', 'Java', 'SQL', 'Rust (notions)']
		},
		{
			category: 'Web, Applicatif & Données',
			skills: ['C# .NET', 'Avalonia', 'Angular', 'React', 'WebSockets', 'Node.js', 'PostgreSQL', 'Docker', 'Git']
		},
		{
			category: 'Systèmes & Embarqué',
			skills: ['C embarqué', 'FreeRTOS', 'STM32', 'Bare-metal', 'Drivers matériels', 'DMA', 'SPI/I2C/UART', 'PWM']
		},
		{
			category: 'IA, Vision & Traitement de Signal',
			skills: ['OpenCV', 'Vision par ordinateur', 'Inférence Edge (Raspberry Pi)', 'Suivi facial', 'rPPG', 'OCR', 'ROS 2']
		}
	];

	const experiences = [
		{
			company: 'Conseil national de recherches Canada (CNRC)',
			location: 'Boucherville, QC',
			role: 'Développeur d’applications de recherche en santé numérique',
			type: 'Stage de recherche',
			period: 'Mai 2026 – Sept. 2026',
			bullets: [
				'Développement de VitalSeer, solution de télémédecine mesurant les signes vitaux en temps réel sans contact (pouls, fréquence respiratoire, SpO₂) à partir d’un flux vidéo standard.',
				'Conception et optimisation du pipeline de vision par ordinateur en Python : suivi facial haute cadence, extraction et filtrage numérique du signal pléthysmographique (rPPG).',
				'Déploiement sur nano-ordinateur Raspberry Pi avec transmission sécurisée vers les serveurs backend pour le triage clinique.'
			],
			tags: ['Python', 'OpenCV', 'rPPG', 'Raspberry Pi', 'Signal Processing']
		},
		{
			company: 'HumanWare',
			location: 'Longueuil, QC',
			role: 'Développeur C# .NET Avalonia – Technologies d’assistance basse vision',
			type: 'Stage d’ingénierie',
			period: 'Sept. 2025 – Déc. 2025',
			bullets: [
				'Implémentation de fonctionnalités d’accessibilité multi-écrans sous C# .NET et Avalonia (magnification dynamique, ajustement colorimétrique adaptatif).',
				'Intégration d’un moteur OCR multilingue et TTS couplés à un algorithme de détection vocale (VAD/RMS) isolant le bruit de fond.',
				'Conception d’un module ergonomique de navigation audio adapté aux personnes ayant une limitation visuelle sévère.'
			],
			tags: ['C# .NET', 'Avalonia', 'OCR / TTS', 'VAD/RMS', 'Accessibilité']
		},
		{
			company: 'Evident Scientific',
			location: 'Montréal, QC',
			role: 'Développeur Fullstack (2024) & Développeur Frontend (2023)',
			type: 'Stages consécutifs',
			period: 'Mai 2023 – Déc. 2024',
			bullets: [
				'Encadrement et mentorat technique de 2 stagiaires collégiaux : planification des sprints, revues de code et architecture logicielle.',
				'Conception d’un outil de diagnostic réseau (C# .NET, Angular) pour surveiller l’intégrité télémétrique des appareils ultrasonores (UT).',
				'Réalisation de l’interface d’évaluation SNR en Angular avec rendu haute fidélité en temps réel de données C++ via WebSockets.'
			],
			tags: ['C# .NET', 'Angular', 'WebSockets', 'C++', 'Télémétrie']
		},
		{
			company: 'École de Technologie Supérieure (ÉTS)',
			location: 'Montréal, QC',
			role: 'Chargé de laboratoire',
			type: '9 mandats d’enseignement',
			period: 'Janv. 2023 – Mai 2026',
			bullets: [
				'Enseignement et soutien technique auprès de plus de 400 étudiants en génie logiciel et technologies de l’information.',
				'Encadrement des laboratoires : Systèmes d’exploitation (TCH016/052), Programmation orientée objet (INF111), Bases de données (TCH055) et Programmation Web (TCH056).'
			],
			tags: ['Systèmes d’exploitation', 'POO', 'Bases de données', 'Web']
		},
		{
			company: 'DataAnnotation',
			location: 'À distance (Remote)',
			role: 'Développeur / Évaluateur de code pour modèles d’IA',
			type: 'Pigiste technique',
			period: 'Mai 2025 – Présent',
			bullets: [
				'Revue de code critique et évaluation comparative (A/B) de modèles de fondation : analyse rigoureuse d’algorithmes complexes.',
				'Traque de bogues logiques, validation approfondie des cas limites et rédaction d’implémentations de référence de haute qualité.'
			],
			tags: ['Évaluation IA', 'Algorithmes', 'Code Review', 'Qualité logicielle']
		}
	];

	const engineeringProjects = [
		{
			title: 'Système de Recherche et Sauvetage Drone & Rover',
			context: 'Projet de Fin d’Études (PFE ÉTS)',
			stack: ['Python', 'OpenCV', 'ROS 2', 'Linux'],
			bullets: [
				'Développement du module logiciel embarqué en Python sur le drone pour des missions coordonnées de recherche et sauvetage (S&R).',
				'Implémentation d’un pipeline de vision par ordinateur pour la détection de cibles et de personnes au sol via la caméra embarquée.',
				'Extraction des positions géospatiales et transmission des coordonnées en temps réel pour guider la navigation du véhicule terrestre autonome.'
			]
		},
		{
			title: 'Micro-Noyau & HAL Bare-Metal en Zig pour ARM Cortex-M',
			context: 'Ingénierie embarquée bas niveau',
			stack: ['Zig', 'C', 'STM32', 'Bare-Metal'],
			bullets: [
				'Conception d’une couche d’abstraction matérielle (HAL) sans dépendance (freestanding) pour microcontrôleur STM32.',
				'Implémentation directe des registres matériels (NVIC, timers, PWM) et orchestrateur de transferts DMA haute vitesse.',
				'Validation expérimentale sur robot mobile avec boucle d’asservissement PID temps réel et télémétrie série.'
			]
		}
	];

	const educationAndInvolvement = [
		{
			institution: 'École de Technologie Supérieure (ÉTS)',
			location: 'Montréal, QC',
			degree: 'Baccalauréat en Génie Logiciel (B.Ing)',
			date: 'Diplômé : Décembre 2026',
			details: [
				'Formation approfondie en génie logiciel, systèmes temps réel, architecture logicielle et systèmes d’exploitation.'
			]
		},
		{
			institution: 'Club Scientifique RockETS',
			location: 'ÉTS Montréal',
			degree: 'Développement de l’avionique & Stations de contrôle',
			date: '2022 – 2023',
			details: [
				'Développement de l’avionique de fusée haute altitude en C sur microcontrôleurs STM32.',
				'Conception de la station de contrôle sol en Qt/C++ et maintenance du portail web en Vue.js.'
			]
		},
		{
			institution: 'Ambassadeur Étudiant en Génie Logiciel',
			location: 'ÉTS Montréal',
			degree: 'Représentation officielle du département',
			date: '2024',
			details: [
				'Sélectionné par la direction du département de génie logiciel pour représenter le programme lors des visites officielles et journées d’accueil.'
			]
		}
	];

	function printCV() {
		window.print();
	}
</script>

<svelte:head>
	<title>Curriculum Vitae • Samuel Velasco</title>
	<meta
		name="description"
		content="Curriculum Vitae détaillé de Samuel Velasco — Développeur Logiciel, systèmes embarqués, vision par ordinateur et robotique."
	/>
</svelte:head>

<div class="cv-page">
	<!-- Page Header / Actions -->
	<header class="cv-header">
		<div class="cv-header-left">
			<span class="header-tag">Curriculum Vitae</span>
			<h1 class="cv-title">Parcours & Expériences</h1>
			<p class="cv-subtitle">
				Développeur Logiciel • B.Ing en Génie Logiciel (ÉTS) • Passionné par l’embarqué et la robotique
			</p>
		</div>

		<div class="cv-header-actions no-print">
			<button class="btn-print interactive" onclick={printCV}>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="6 9 6 2 18 2 18 9"></polyline>
					<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
					<rect width="12" height="8" x="6" y="14"></rect>
				</svg>
				<span>Imprimer / PDF</span>
			</button>
			<a href="/contact" class="btn-contact interactive">
				<span>Entrer en contact</span>
			</a>
		</div>
	</header>

	<!-- Quick Metadata Strip -->
	<section class="cv-meta-strip">
		<div class="meta-item">
			<span class="meta-label">Localisation</span>
			<span class="meta-val">Montréal, QC</span>
		</div>
		<div class="meta-divider"></div>
		<div class="meta-item">
			<span class="meta-label">Email</span>
			<a href="mailto:svelasco514@gmail.com" class="meta-val link">svelasco514@gmail.com</a>
		</div>
		<div class="meta-divider"></div>
		<div class="meta-item">
			<span class="meta-label">Téléphone</span>
			<a href="tel:+14389233372" class="meta-val link">(438) 923-3372</a>
		</div>
		<div class="meta-divider"></div>
		<div class="meta-item">
			<span class="meta-label">LinkedIn</span>
			<a href="https://linkedin.com/in/samuelvelascodev" target="_blank" rel="noopener noreferrer" class="meta-val link">
				samuelvelascodev ↗
			</a>
		</div>
	</section>

	<!-- Compétences Techniques -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">01</span>
			<h2 class="section-heading">Compétences Techniques</h2>
		</div>

		<div class="skills-catalog">
			{#each technicalSkills as cat}
				<div class="skill-category-card">
					<h3 class="category-title">{cat.category}</h3>
					<div class="category-badges">
						{#each cat.skills as skill}
							<span class="skill-chip">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Expérience Professionnelle -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">02</span>
			<h2 class="section-heading">Expérience Professionnelle</h2>
		</div>

		<div class="timeline">
			{#each experiences as exp}
				<article class="timeline-item">
					<div class="item-header">
						<div class="item-title-col">
							<h3 class="item-company">{exp.company}</h3>
							<div class="item-role">{exp.role}</div>
						</div>
						<div class="item-meta-col">
							<span class="item-period">{exp.period}</span>
							<span class="item-location">{exp.location}</span>
						</div>
					</div>

					<ul class="item-bullets">
						{#each exp.bullets as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>

					<div class="item-tags no-print">
						{#each exp.tags as tag}
							<span class="tag-crumb">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Projets Techniques & Ingénierie -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">03</span>
			<h2 class="section-heading">Projets Techniques & Ingénierie</h2>
		</div>

		<div class="projects-list">
			{#each engineeringProjects as proj}
				<article class="project-box">
					<div class="project-top">
						<div>
							<h3 class="project-title">{proj.title}</h3>
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
				</article>
			{/each}
		</div>
	</section>

	<!-- Formation & Implication -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">04</span>
			<h2 class="section-heading">Formation & Implication</h2>
		</div>

		<div class="edu-grid">
			{#each educationAndInvolvement as item}
				<div class="edu-card">
					<div class="edu-header">
						<div>
							<h3 class="edu-title">{item.institution}</h3>
							<span class="edu-degree">{item.degree}</span>
						</div>
						<span class="edu-date">{item.date}</span>
					</div>
					<ul class="edu-details">
						{#each item.details as det}
							<li>{det}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.cv-page {
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	/* Header */
	.cv-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 2rem;
		flex-wrap: wrap;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.header-tag {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
		color: var(--accent-purple);
		display: block;
		margin-bottom: 0.5rem;
	}

	.cv-title {
		font-family: var(--font-display);
		font-size: 3.2rem;
		line-height: 1.1;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.cv-subtitle {
		font-size: 1.05rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.cv-header-actions {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	.btn-print {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.7rem 1.25rem;
		background: #ffffff;
		border: 1px solid var(--border-medium);
		border-radius: 9999px;
		color: var(--text-primary);
		font-size: 0.86rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-print svg {
		width: 15px;
		height: 15px;
	}

	.btn-print:hover {
		background: var(--bg-surface-soft);
		border-color: var(--text-primary);
		transform: translateY(-1px);
	}

	.btn-contact {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.25rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 9999px;
		text-decoration: none;
		font-size: 0.86rem;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.btn-contact:hover {
		background: var(--accent-purple);
		transform: translateY(-1px);
	}

	/* Metadata strip */
	.cv-meta-strip {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2rem;
		background: rgba(255, 255, 255, 0.75);
		border: 1px solid var(--border-subtle);
		border-radius: 1rem;
		flex-wrap: wrap;
		gap: 1.25rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.meta-label {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-tertiary);
		font-weight: 600;
	}

	.meta-val {
		font-size: 0.92rem;
		color: var(--text-primary);
		font-weight: 500;
	}

	.meta-val.link {
		text-decoration: none;
		color: var(--accent-purple);
		transition: underline 0.2s ease;
	}

	.meta-val.link:hover {
		text-decoration: underline;
	}

	.meta-divider {
		width: 1px;
		height: 32px;
		background: var(--border-subtle);
	}

	/* Section Base */
	.cv-section {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.section-title-wrap {
		display: flex;
		align-items: baseline;
		gap: 0.85rem;
		border-bottom: 1px solid var(--border-subtle);
		padding-bottom: 0.75rem;
	}

	.section-num {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.section-heading {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
	}

	/* Skills catalog */
	.skills-catalog {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.skill-category-card {
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid var(--border-subtle);
		border-radius: 1rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.category-title {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.category-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.skill-chip {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		padding: 0.3rem 0.65rem;
		background: rgba(243, 238, 228, 0.7);
		border: 1px solid rgba(226, 219, 206, 0.8);
		border-radius: 6px;
		color: var(--text-primary);
		font-weight: 500;
	}

	/* Timeline */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.timeline-item {
		background: rgba(255, 255, 255, 0.75);
		border: 1px solid var(--border-subtle);
		border-radius: 1.25rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.25s ease;
	}

	.timeline-item:hover {
		background: #ffffff;
		border-color: var(--border-medium);
		box-shadow: 0 8px 24px -4px rgba(28, 25, 23, 0.05);
	}

	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.item-title-col {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.item-company {
		font-family: var(--font-display);
		font-size: 1.55rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0;
	}

	.item-role {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--accent-purple);
	}

	.item-meta-col {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.2rem;
	}

	.item-period {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: 500;
		color: var(--text-primary);
		background: rgba(109, 40, 217, 0.06);
		padding: 0.2rem 0.6rem;
		border-radius: 9999px;
	}

	.item-location {
		font-size: 0.8rem;
		color: var(--text-tertiary);
	}

	.item-bullets {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.item-bullets li {
		font-size: 0.92rem;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	.item-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding-top: 0.75rem;
		border-top: 1px dashed var(--border-subtle);
	}

	.tag-crumb {
		font-size: 0.74rem;
		padding: 0.15rem 0.55rem;
		background: rgba(243, 238, 228, 0.6);
		border: 1px solid var(--border-subtle);
		border-radius: 9999px;
		color: var(--text-secondary);
	}

	/* Projects */
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.project-box {
		background: rgba(255, 255, 255, 0.75);
		border: 1px solid var(--border-subtle);
		border-radius: 1.25rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.project-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.project-title {
		font-family: var(--font-display);
		font-size: 1.45rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0 0 0.25rem;
	}

	.project-context {
		font-size: 0.84rem;
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
		padding: 0.25rem 0.6rem;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 6px;
		color: var(--accent-purple);
		font-weight: 600;
	}

	/* Education */
	.edu-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.edu-card {
		background: rgba(255, 255, 255, 0.75);
		border: 1px solid var(--border-subtle);
		border-radius: 1.25rem;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.edu-header {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.edu-title {
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0;
	}

	.edu-degree {
		font-size: 0.86rem;
		font-weight: 600;
		color: var(--accent-purple);
	}

	.edu-date {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--text-tertiary);
	}

	.edu-details {
		margin: 0;
		padding-left: 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.edu-details li {
		font-size: 0.86rem;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	@media (max-width: 900px) {
		.skills-catalog,
		.edu-grid {
			grid-template-columns: 1fr;
		}

		.item-meta-col {
			align-items: flex-start;
		}

		.meta-divider {
			display: none;
		}

		.cv-title {
			font-size: 2.5rem;
		}
	}

	/* Print Styles for flawless PDF generation */
	@media print {
		.no-print,
		:global(.navbar-wrapper),
		:global(.footer),
		:global(.ominous-aura),
		:global(.cursor-dot),
		:global(.ambient-grain) {
			display: none !important;
		}

		:global(body),
		:global(html) {
			background: #ffffff !important;
			color: #000000 !important;
		}

		.cv-page {
			gap: 1.5rem;
		}

		.timeline-item,
		.project-box,
		.skill-category-card,
		.edu-card {
			break-inside: avoid;
			box-shadow: none !important;
			border: 1px solid #ddd !important;
			background: #ffffff !important;
		}
	}
</style>
