<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import EngineeringDivider from '$lib/components/EngineeringDivider.svelte';

	const content = $derived({
		en: {
			tag: 'Curriculum Vitae',
			title: 'Trajectory & Experience',
			subtitle: 'Software Developer • Software Engineering Graduate (ÉTS) • Fullstack, Backend & Web Systems with Low-Level Precision',
			btnContact: 'Get in Touch',
			metaLocation: 'Location',
			metaEmail: 'Email',
			metaLinkedIn: 'LinkedIn',
			sec1Num: '01',
			sec1Title: 'Technical Competencies',
			sec2Num: '02',
			sec2Title: 'Professional Experience',
			sec3Num: '03',
			sec3Title: 'Education & Community Involvement',
			projectsCtaTitle: 'Looking for Engineering & Software Projects?',
			projectsCtaDesc: 'Explore CanBankX (Go Microservices), the Automated Tower Crane (1st-Year Multidisciplinary Project), and autonomous Search & Rescue.',
			projectsCtaBtn: 'Explore Projects Page ↗',
			technicalSkills: [
				{
					category: 'Web, Applications & Data',
					skills: ['C# .NET', 'Java', 'TypeScript', 'Angular', 'SvelteKit', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Docker', 'Git']
				},
				{
					category: 'Systems & Embedded',
					skills: ['Embedded C', 'C++20', 'Zig', 'STM32 (ARM Cortex-M)', 'FreeRTOS', 'Bare-Metal', 'Hardware Drivers', 'DMA', 'SPI/I2C/UART', 'PWM']
				},
				{
					category: 'AI, Vision & Signal Processing',
					skills: ['OpenCV', 'Computer Vision', 'ROS 2', 'Edge Inference (Raspberry Pi)', 'Facial Tracking', 'rPPG', 'OCR', 'Python']
				},
				{
					category: 'Engineering, CAD & Industrial Tools',
					skills: ['SolidWorks', 'Solid Edge', 'RSLogix 500 (PLC)', 'MATLAB / Simulink', 'Industrial Automation', 'Laser Cutting & CNC', 'Rapid Prototyping (3D Printing)']
				}
			],
			experiences: [
				{
					company: 'National Research Council Canada (NRC / CNRC)',
					location: 'Boucherville, QC',
					role: 'Digital Health Research Software Developer',
					type: 'R&D Internship',
					period: 'May 2026 – Sept. 2026',
					bullets: [
						'Contributed to the VitalSeer project, a contactless real-time telemedicine solution monitoring physiological vital signs from video feeds.',
						'Developed and optimized computer vision pipelines for facial tracking and signal processing (rPPG).',
						'Integrated and validated edge computing solutions on compact single-board devices.'
					],
					tags: ['Python', 'OpenCV', 'rPPG', 'Raspberry Pi', 'Signal Processing'],
					externalCard: {
						title: 'NRC VitalSeer — Official Publication',
						subtitle: 'Contactless video-based vital signs monitoring research (NRC Canada)',
						url: 'https://nrc-publications.canada.ca/eng/view/object/?id=87a9660d-1b51-4760-bad0-5afee3606302',
						domain: 'nrc-publications.canada.ca'
					}
				},
				{
					company: 'HumanWare',
					location: 'Longueuil, QC',
					role: 'C# .NET Avalonia Software Developer – Prodigi',
					type: 'R&D Internship',
					period: 'Sept. 2025 – Dec. 2025',
					bullets: [
						'Developed features and multi-screen accessibility interfaces for the Prodigi assistive reading suite using C# .NET and Avalonia.',
						'Integrated optical character recognition (OCR) and text-to-speech (TTS) workflows with voice activity detection.',
						'Designed ergonomic audio and tactile navigation features tailored for visually impaired users.'
					],
					tags: ['C# .NET', 'Avalonia', 'Prodigi', 'OCR / TTS', 'Accessibility'],
					externalCard: {
						title: 'HumanWare Prodigi — Official Product Page',
						subtitle: 'Low-vision magnification, OCR, and TTS assistive software suite',
						url: 'https://store.humanware.com/hca/prodigi-for-windows-advanced-low-vision-software.html',
						domain: 'store.humanware.com'
					}
				},
				{
					company: 'Evident Scientific (formerly Olympus)',
					location: 'Montréal, QC',
					role: 'Software Developer – Ultrasound Systems (OmniScan / UNIS)',
					type: 'R&D Internship',
					period: 'May 2024 – Dec. 2024',
					bullets: [
						'Worked on the OmniScan / UNIS phased-array ultrasound software ecosystem, bridging a C++ Data Processing Unit (DPU) backend with a modern web application.',
						'Developed diagnostic and monitoring workflows to turn high-frequency ultrasonic telemetry streams into responsive, real-time field tools.'
					],
					tags: ['C++', 'DPU', 'Angular', 'Ultrasound / NDT', 'Web App'],
					externalCard: {
						title: 'Evident OmniScan — Official Product Line',
						subtitle: 'Phased-array ultrasonic flaw detection instruments & UNIS platform',
						url: 'https://ims.evidentscientific.com/en/products/phased-array/omniscan-x4',
						domain: 'ims.evidentscientific.com'
					}
				},
				{
					company: 'Evident Scientific (formerly Olympus)',
					location: 'Montréal, QC',
					role: 'Web Application Developer – Ultrasound Systems',
					type: 'R&D Internship',
					period: 'May 2023 – Dec. 2023',
					bullets: [
						'Built real-time web interfaces and telemetry dashboards in Angular for industrial ultrasonic non-destructive testing (OmniScan) during the Olympus-to-Evident transition.',
						'Rendered high-frequency ultrasonic signal and inspection data streams with smooth real-time performance.'
					],
					tags: ['Angular', 'TypeScript', 'Ultrasound / NDT', 'Telemetry', 'UI/UX']
				},
				{
					company: 'École de Technologie Supérieure (ÉTS)',
					location: 'Montréal, QC',
					role: 'Laboratory Instructor / Teaching Assistant',
					type: '9 academic terms',
					period: 'Jan. 2023 – May 2026',
					bullets: [
						'Delivered technical mentoring and lab supervision for over 400 software and IT engineering students.',
						'Guided lab courses: Operating Systems (TCH016/052), Object-Oriented Programming (INF111), Relational Databases (TCH055), and Web Systems (TCH056).'
					],
					tags: ['Operating Systems', 'OOP', 'Databases', 'Web Architecture']
				},
				{
					company: 'DataAnnotation',
					location: 'Remote',
					role: 'Data Annotator',
					type: 'Technical Freelance',
					period: 'May 2025 – Present',
					bullets: [
						'Conducted critical code reviews and comparative (A/B) evaluations of foundation models: analyzed complex algorithms and data structures.',
						'Identified logical edge bugs, validated corner cases, and authored high-reliability reference implementations.'
					],
					tags: ['AI Evaluation', 'Algorithms', 'Code Review', 'Software Quality']
				}
			],
			educationAndInvolvement: [
				{
					institution: 'École de Technologie Supérieure (ÉTS)',
					location: 'Montréal, QC',
					degree: 'Bachelor of Software Engineering (B.Eng)',
					date: 'Graduation: December 2026',
					details: [
						'Rigorous curriculum focused on software architecture, real-time systems, operating systems, and low-level computing.'
					]
				},
				{
					institution: 'RockETS Scientific Rocketry Club',
					location: 'ÉTS Montréal',
					degree: 'Avionics & Ground Control Station Developer',
					date: '2022 – 2023',
					details: [
						'Programmed flight avionics firmware in C on STM32 microcontrollers for high-altitude sounding rockets.',
						'Engineered the mission control telemetry ground station in Qt/C++ and maintained the team web portal in Vue.js.'
					]
				},
				{
					institution: 'Software Engineering Student Ambassador',
					location: 'ÉTS Montréal',
					degree: 'Departmental Representation',
					date: '2024',
					details: [
						'Appointed by the software engineering department chair to represent the discipline during institutional delegations and public panels.'
					]
				}
			]
		},
		fr: {
			tag: 'Curriculum Vitae',
			title: 'Parcours & Expériences',
			subtitle: 'Développeur Logiciel • Diplômé en Génie Logiciel (ÉTS) • Systèmes Web, Backend & Fullstack avec Rigueur Systèmes',
			btnContact: 'Entrer en contact',
			metaLocation: 'Localisation',
			metaEmail: 'Email',
			metaLinkedIn: 'LinkedIn',
			sec1Num: '01',
			sec1Title: 'Compétences Techniques',
			sec2Num: '02',
			sec2Title: 'Expérience Professionnelle',
			sec3Num: '03',
			sec3Title: 'Formation & Implication',
			projectsCtaTitle: 'Vous cherchez mes projets logiciels & d’ingénierie ?',
			projectsCtaDesc: 'Découvrez CanBankX (Microservices Go), la Grue à tour automatisée (projet multidisciplinaire de 1re année) et notre projet de recherche et sauvetage.',
			projectsCtaBtn: 'Explorer la page Projets ↗',
			technicalSkills: [
				{
					category: 'Web, Applicatif & Données',
					skills: ['C# .NET', 'Java', 'TypeScript', 'Angular', 'SvelteKit', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Docker', 'Git']
				},
				{
					category: 'Systèmes & Embarqué',
					skills: ['C embarqué', 'C++20', 'Zig', 'STM32 (ARM Cortex-M)', 'FreeRTOS', 'Bare-Metal', 'Drivers matériels', 'DMA', 'SPI/I2C/UART', 'PWM']
				},
				{
					category: 'IA, Vision & Traitement de Signal',
					skills: ['OpenCV', 'Vision par ordinateur', 'ROS 2', 'Inférence Edge (Raspberry Pi)', 'Suivi facial', 'rPPG', 'OCR', 'Python']
				},
				{
					category: 'Ingénierie, CAO & Outils Industriels',
					skills: ['SolidWorks', 'Solid Edge', 'RSLogix 500 (Automates)', 'MATLAB / Simulink', 'Automatisation industrielle', 'Découpe laser & CNC', 'Prototypage rapide (Impression 3D)']
				}
			],
			experiences: [
				{
					company: 'Conseil national de recherches Canada (CNRC)',
					location: 'Boucherville, QC',
					role: 'Développeur d’applications de recherche en santé numérique',
					type: 'Stage R&D',
					period: 'Mai 2026 – Sept. 2026',
					bullets: [
						'Participation au projet VitalSeer, solution de télémédecine sans contact mesurant les signes physiologiques à partir de flux vidéo.',
						'Développement et optimisation de pipelines de vision par ordinateur pour le suivi facial et le traitement de signal (rPPG).',
						'Intégration et validation de solutions d’inférence edge sur ordinateurs monocartes compacts.'
					],
					tags: ['Python', 'OpenCV', 'rPPG', 'Raspberry Pi', 'Signal Processing'],
					externalCard: {
						title: 'CNRC VitalSeer — Publication officielle',
						subtitle: 'Suivi sans contact des signes vitaux par caméra (CNRC Canada)',
						url: 'https://nrc-publications.canada.ca/eng/view/object/?id=87a9660d-1b51-4760-bad0-5afee3606302',
						domain: 'nrc-publications.canada.ca'
					}
				},
				{
					company: 'HumanWare',
					location: 'Longueuil, QC',
					role: 'Développeur C# .NET Avalonia – Prodigi',
					type: 'Stage R&D',
					period: 'Sept. 2025 – Déc. 2025',
					bullets: [
						'Développement de fonctionnalités d’accessibilité et d’interfaces multi-écrans pour l’application Prodigi en C# .NET et Avalonia.',
						'Intégration de flux OCR et de synthèse vocale (TTS) couplés à la détection d’activité vocale.',
						'Conception de modules ergonomiques de navigation audio adaptés aux personnes ayant une limitation visuelle.'
					],
					tags: ['C# .NET', 'Avalonia', 'Prodigi', 'OCR / TTS', 'Accessibilité'],
					externalCard: {
						title: 'HumanWare Prodigi — Page produit officielle',
						subtitle: 'Suite logicielle d’accessibilité, loupe numérique, OCR et synthèse vocale',
						url: 'https://store.humanware.com/hca/prodigi-for-windows-advanced-low-vision-software.html',
						domain: 'store.humanware.com'
					}
				},
				{
					company: 'Evident Scientific (anciennement Olympus)',
					location: 'Montréal, QC',
					role: 'Développeur Logiciel – Applications Ultrasons (OmniScan / UNIS)',
					type: 'Stage R&D',
					period: 'Mai 2024 – Déc. 2024',
					bullets: [
						'Contribution à l’écosystème logiciel d’inspection par ultrasons OmniScan / UNIS, reliant un moteur C++ Data Processing Unit (DPU) à une application web.',
						'Développement d’outils de diagnostic et de supervision transformant les flux ultrasonores haute fréquence en interfaces temps réel claires pour les équipes terrain.'
					],
					tags: ['C++', 'DPU', 'Angular', 'Ultrasons / CND', 'Application Web'],
					externalCard: {
						title: 'Evident OmniScan — Gamme de produits officielle',
						subtitle: 'Appareils de contrôle non destructif par ultrasons multiéléments & plateforme UNIS',
						url: 'https://ims.evidentscientific.com/en/products/phased-array/omniscan-x4',
						domain: 'ims.evidentscientific.com'
					}
				},
				{
					company: 'Evident Scientific (anciennement Olympus)',
					location: 'Montréal, QC',
					role: 'Développeur Web – Applications Ultrasons',
					type: 'Stage R&D',
					period: 'Mai 2023 – Déc. 2023',
					bullets: [
						'Développement de l’application web et de tableaux de bord temps réel en Angular pour des appareils à ultrasons (OmniScan) durant la transition Olympus vers Evident Scientific.',
						'Affichage fluide et haute performance de flux de données et de signaux ultrasonores haute fréquence.'
					],
					tags: ['Angular', 'TypeScript', 'Ultrasons / CND', 'Télémétrie', 'UI/UX']
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
					role: 'Annotateur de données',
					type: 'Pigiste technique',
					period: 'Mai 2025 – Présent',
					bullets: [
						'Revue de code critique et évaluation comparative (A/B) de modèles de fondation : analyse rigoureuse d’algorithmes complexes.',
						'Traque de bogues logiques, validation approfondie des cas limites et rédaction d’implémentations de référence de haute qualité.'
					],
					tags: ['Évaluation IA', 'Algorithmes', 'Code Review', 'Qualité logicielle']
				}
			],
			educationAndInvolvement: [
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
			]
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Resume & Experience • Samuel Velasco' : 'Curriculum Vitae • Samuel Velasco'}</title>
	<meta
		name="description"
		content="Detailed trajectory of Samuel Velasco — Software Developer specialized in embedded systems, computer vision, and robotics."
	/>
</svelte:head>

<div class="cv-page">
	<!-- Page Header / Actions -->
	<header class="cv-header">
		<div class="cv-header-left">
			<span class="header-tag">{content.tag}</span>
			<h1 class="cv-title">{content.title}</h1>
			<p class="cv-subtitle">{content.subtitle}</p>
		</div>

		<div class="cv-header-actions no-print">
			<a href="/contact" class="btn-contact interactive">
				<span>{content.btnContact}</span>
			</a>
		</div>
	</header>

	<!-- Quick Metadata Strip -->
	<section class="cv-meta-strip">
		<div class="meta-item">
			<span class="meta-label">{content.metaLocation}</span>
			<span class="meta-val">Montréal, QC</span>
		</div>
		<div class="meta-divider"></div>
		<div class="meta-item">
			<span class="meta-label">{content.metaEmail}</span>
			<a href="mailto:svelasco514@gmail.com" class="meta-val link interactive">svelasco514@gmail.com</a>
		</div>
		<div class="meta-divider"></div>
		<div class="meta-item">
			<span class="meta-label">{content.metaLinkedIn}</span>
			<a href="https://linkedin.com/in/samuelvelascodev" target="_blank" rel="noopener noreferrer" class="meta-val link interactive">
				samuelvelascodev ↗
			</a>
		</div>
	</section>

	<!-- 01 Compétences Techniques -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">{content.sec1Num}</span>
			<h2 class="section-heading">{content.sec1Title}</h2>
		</div>

		<div class="skills-catalog">
			{#each content.technicalSkills as cat}
				<div class="skill-category-card interactive">
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

	<EngineeringDivider label="EXPERIENCE // STAGES" code="0x02" />

	<!-- 02 Expérience Professionnelle -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">{content.sec2Num}</span>
			<h2 class="section-heading">{content.sec2Title}</h2>
		</div>

		<div class="timeline">
			{#each content.experiences as exp}
				<article class="timeline-item interactive">
					<div class="item-header">
						<div class="item-title-col">
							<div class="company-badge-line">
								<h3 class="item-company">{exp.company}</h3>
								<span class="internship-chip">{exp.type}</span>
							</div>
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

					{#if exp.externalCard}
						<a
							href={exp.externalCard.url}
							target="_blank"
							rel="noopener noreferrer"
							class="external-ref-card no-print interactive"
						>
							<div class="ext-card-body">
								<span class="ext-card-title">{exp.externalCard.title}</span>
								<span class="ext-card-sub">{exp.externalCard.subtitle}</span>
							</div>
							<div class="ext-card-meta">
								<span class="ext-card-domain">{exp.externalCard.domain}</span>
								<span class="ext-card-arrow">↗</span>
							</div>
						</a>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<EngineeringDivider label="ACADEMIA // ETS_MONTREAL" code="B.ING" />

	<!-- 03 Formation & Implication -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">{content.sec3Num}</span>
			<h2 class="section-heading">{content.sec3Title}</h2>
		</div>

		<div class="edu-grid">
			{#each content.educationAndInvolvement as item}
				<div class="edu-card interactive">
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

	<!-- Dedicated Projects Page CTA Banner -->
	<section class="projects-cta-section no-print">
		<div class="projects-cta-card">
			<div class="projects-cta-left">
				<span class="cta-tag">Portfolio & Showcase</span>
				<h3 class="cta-title">{content.projectsCtaTitle}</h3>
				<p class="cta-desc">{content.projectsCtaDesc}</p>
			</div>
			<a href="/projects" data-sveltekit-reload class="btn-projects-cta interactive">
				<span>{content.projectsCtaBtn}</span>
			</a>
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
		font-size: 0.76rem;
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

	.btn-contact {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.25rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px; /* Sharp */
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
		padding: 1.25rem 1.75rem;
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		flex-wrap: wrap;
		gap: 1.25rem;
		transition: backdrop-filter 0.3s ease;
	}

	.cv-meta-strip:hover {
		backdrop-filter: blur(28px);
		-webkit-backdrop-filter: blur(28px);
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
		height: 28px;
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
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: all 0.2s ease;
	}

	.skill-category-card:hover {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(32px);
		-webkit-backdrop-filter: blur(32px);
		border-color: var(--border-medium);
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
		gap: 0.4rem;
	}

	.skill-chip {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		padding: 0.25rem 0.6rem;
		background: rgba(243, 238, 228, 0.7);
		border: 1px solid rgba(226, 219, 206, 0.8);
		border-radius: 2px; /* Sharp */
		color: var(--text-primary);
		font-weight: 500;
	}

	/* Timeline */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.timeline-item {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 1.85rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.25s ease;
	}

	.timeline-item:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
		box-shadow: 0 6px 20px -3px rgba(28, 25, 23, 0.05);
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
		gap: 0.35rem;
	}

	.company-badge-line {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.internship-chip {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 0.15rem 0.55rem;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.25);
		border-radius: 2px;
		color: var(--accent-purple);
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
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--text-primary);
		background: rgba(109, 40, 217, 0.06);
		padding: 0.15rem 0.55rem;
		border-radius: 2px; /* Sharp */
		border: 1px solid rgba(109, 40, 217, 0.12);
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
		border-top: 1px solid var(--border-subtle);
	}

	.tag-crumb {
		font-size: 0.74rem;
		padding: 0.15rem 0.55rem;
		background: rgba(243, 238, 228, 0.6);
		border: 1px solid var(--border-subtle);
		border-radius: 2px; /* Sharp */
		color: var(--text-secondary);
	}

	.external-ref-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 0.25rem;
		padding: 0.8rem 1rem;
		background: rgba(250, 246, 240, 0.72);
		border: 1px solid var(--border-subtle);
		border-radius: 3px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
	}

	.external-ref-card:hover {
		background: #ffffff;
		border-color: var(--accent-purple);
		transform: translateX(3px);
	}

	.ext-card-body {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.ext-card-title {
		font-size: 0.84rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.ext-card-sub {
		font-size: 0.76rem;
		color: var(--text-secondary);
	}

	.ext-card-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--accent-purple);
	}

	.ext-card-arrow {
		font-size: 0.9rem;
		font-weight: 700;
	}

	/* Education */
	.edu-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.edu-card {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 1.65rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: all 0.2s ease;
	}

	.edu-card:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(32px);
		-webkit-backdrop-filter: blur(32px);
		border-color: var(--border-medium);
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

	/* Projects CTA Card */
	.projects-cta-section {
		margin-top: 1rem;
	}

	.projects-cta-card {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-medium);
		border-radius: 4px;
		padding: 2rem 2.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		box-shadow: 0 6px 24px -3px rgba(28, 25, 23, 0.05);
	}

	.projects-cta-left {
		max-width: 680px;
	}

	.cta-tag {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--accent-purple);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		display: inline-block;
		margin-bottom: 0.35rem;
	}

	.cta-title {
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0 0 0.45rem;
	}

	.cta-desc {
		font-size: 0.92rem;
		color: var(--text-secondary);
		line-height: 1.55;
		margin: 0;
	}

	.btn-projects-cta {
		display: inline-flex;
		align-items: center;
		padding: 0.8rem 1.6rem;
		background: var(--text-primary);
		color: #faf7f2;
		border-radius: 3px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
		transition: all 0.2s ease;
		flex-shrink: 0;
	}

	.btn-projects-cta:hover {
		background: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 6px 18px -3px rgba(109, 40, 217, 0.25);
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

	/* Flawless Print / PDF export styles */
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
		}
		:global(body),
		:global(html) {
			color: #000000 !important;
		}

		.cv-page {
			gap: 1.25rem;
		}

		.timeline-item,
		.skill-category-card,
		.edu-card {
			break-inside: avoid;
			box-shadow: none !important;
			border: 1px solid #ddd !important;
			background: #ffffff !important;
		}
	}
</style>
