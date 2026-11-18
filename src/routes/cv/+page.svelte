<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const content = $derived({
		en: {
			kicker: 'CURRICULUM VITAE — SAMUEL VELASCO — MONTRÉAL, QC',
			title: 'Trajectory & Experience',
			subtitle: 'Software Developer • B.Eng. Software Engineering (ÉTS) • Fullstack, Backend & Systems',
			btnContact: 'Get in Touch →',
			sec1Num: '01 / STACK',
			sec1Title: 'Technical Competencies',
			sec2Num: '02 / ROLES',
			sec2Title: 'Professional Experience',
			sec3Num: '03 / ACADEMIA',
			sec3Title: 'Education & Involvement',
			projectsColophon: 'Want to see the code, architecture diagrams, and hardware prototypes?',
			projectsColophonLink: 'Explore Selected Projects →',
			technicalSkills: [
				{
					category: 'Web, Applications & Data',
					skills: ['C# .NET', 'Java', 'Go', 'TypeScript', 'Angular', 'SvelteKit', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Docker', 'Git']
				},
				{
					category: 'Systems & Embedded',
					skills: ['Embedded C', 'C++20', 'Zig', 'STM32 (ARM Cortex-M)', 'FreeRTOS', 'Bare-Metal', 'Hardware Drivers', 'DMA', 'SPI/I2C/UART', 'PWM']
				},
				{
					category: 'AI, Vision & Signal Processing',
					skills: ['OpenCV', 'Computer Vision', 'ROS 2', 'Edge Inference (Raspberry Pi)', 'Facial Tracking', 'rPPG', 'Python']
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
					type: 'Software Dev Internship',
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
					type: 'Software Dev Internship',
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
					type: 'Software Dev Internship',
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
						'Curriculum focused on software architecture, real-time systems, operating systems, and low-level computing.'
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
			kicker: 'CURRICULUM VITAE — SAMUEL VELASCO — MONTRÉAL, QC',
			title: 'Parcours & Expériences',
			subtitle: 'Développeur Logiciel • Diplômé en Génie Logiciel (ÉTS) • Web, Backend & Systèmes',
			btnContact: 'Entrer en contact →',
			sec1Num: '01 / STACK',
			sec1Title: 'Compétences Techniques',
			sec2Num: '02 / MANDATS',
			sec2Title: 'Expérience Professionnelle',
			sec3Num: '03 / FORMATION',
			sec3Title: 'Formation & Implication',
			projectsColophon: 'Vous cherchez mes projets logiciels, schémas d’architecture et prototypes ?',
			projectsColophonLink: 'Explorer la page Projets →',
			technicalSkills: [
				{
					category: 'Web, Applicatif & Données',
					skills: ['C# .NET', 'Java', 'Go', 'TypeScript', 'Angular', 'SvelteKit', 'React', 'Node.js', 'PostgreSQL', 'SQL', 'Docker', 'Git']
				},
				{
					category: 'Systèmes & Embarqué',
					skills: ['C embarqué', 'C++20', 'Zig', 'STM32 (ARM Cortex-M)', 'FreeRTOS', 'Bare-Metal', 'Drivers matériels', 'DMA', 'SPI/I2C/UART', 'PWM']
				},
				{
					category: 'IA, Vision & Traitement de Signal',
					skills: ['OpenCV', 'Vision par ordinateur', 'ROS 2', 'Inférence Edge (Raspberry Pi)', 'Suivi facial', 'rPPG', 'Python']
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
					type: 'Stage en développement logiciel',
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
					type: 'Stage en développement logiciel',
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
					type: 'Stage en développement logiciel',
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
					location: 'Télétravail',
					role: 'Data Annotator',
					type: 'Pigiste technique',
					period: 'Mai 2025 – Présent',
					bullets: [
						'Revues de code approfondies et évaluations comparatives (A/B) de modèles d’IA : analyse d’algorithmes complexes et de structures de données.',
						'Détection de bogues logiques, validation des cas limites et rédaction d’implémentations de référence.'
					],
					tags: ['Évaluation IA', 'Algorithmique', 'Revue de code', 'Qualité logicielle']
				}
			],
			educationAndInvolvement: [
				{
					institution: 'École de Technologie Supérieure (ÉTS)',
					location: 'Montréal, QC',
					degree: 'Baccalauréat en génie logiciel (B.Ing)',
					date: 'Fin prévue : Décembre 2026',
					details: [
						'Formation axée sur l’architecture logicielle, les systèmes temps réel, les systèmes d’exploitation et l’informatique bas niveau.'
					]
				},
				{
					institution: 'Club scientifique RockETS (Fuséologie)',
					location: 'ÉTS Montréal',
					degree: 'Développeur Avionique & Station de contrôle au sol',
					date: '2022 – 2023',
					details: [
						'Programmation de firmwares avioniques en C sur microcontrôleurs STM32 pour fusées sondes haute altitude.',
						'Développement de la station au sol de télémétrie en Qt/C++ et maintien du portail web en Vue.js.'
					]
				},
				{
					institution: 'Ambassadeur étudiant en génie logiciel',
					location: 'ÉTS Montréal',
					degree: 'Représentation départementale',
					date: '2024',
					details: [
						'Nommé par la direction du département de génie logiciel pour représenter le programme lors de délégations et panels publics.'
					]
				}
			]
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Experience & Resume — Samuel Velasco' : 'Parcours & CV — Samuel Velasco'}</title>
	<meta
		name="description"
		content="Professional trajectory and technical competencies of Samuel Velasco — Software Developer."
	/>
</svelte:head>

<div class="cv-editorial">
	<!-- Page Header -->
	<header class="cv-header">
		<div class="cv-kicker">{content.kicker}</div>
		<div class="cv-title-row">
			<div>
				<h1 class="cv-title">{content.title}</h1>
				<p class="cv-subtitle">{content.subtitle}</p>
			</div>
			<div class="cv-meta-links no-print">
				<a href="mailto:svelasco514@gmail.com" class="meta-link interactive">svelasco514@gmail.com ↗</a>
				<a href="https://linkedin.com/in/samuelvelascodev" target="_blank" rel="noopener noreferrer" class="meta-link interactive">LinkedIn ↗</a>
				<a href="/contact" class="meta-cta interactive">{content.btnContact}</a>
			</div>
		</div>
	</header>

	<!-- 01 / Technical Competencies (Architectural Spec Table) -->
	<section class="cv-section">
		<div class="section-rail">
			<span class="rail-index">{content.sec1Num}</span>
			<h2 class="rail-heading">{content.sec1Title}</h2>
		</div>

		<div class="section-main">
			<div class="competency-ledger">
				{#each content.technicalSkills as cat}
					<div class="competency-row">
						<h3 class="comp-domain">{cat.category}</h3>
						<div class="comp-items">
							{#each cat.skills as skill}
								<span class="comp-tag">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 02 / Professional Experience (Editorial Split Timeline) -->
	<section class="cv-section">
		<div class="section-rail">
			<span class="rail-index">{content.sec2Num}</span>
			<h2 class="rail-heading">{content.sec2Title}</h2>
		</div>

		<div class="section-main">
			<div class="exp-ledger">
				{#each content.experiences as exp}
					<article class="exp-entry">
						<div class="exp-meta-col">
							<span class="exp-period">{exp.period}</span>
							<span class="exp-type">{exp.type}</span>
							<span class="exp-loc">{exp.location}</span>
						</div>

						<div class="exp-body-col">
							<header class="exp-head">
								<h3 class="exp-role">{exp.role}</h3>
								<div class="exp-company">{exp.company}</div>
							</header>

							<ul class="exp-bullets">
								{#each exp.bullets as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>

							<div class="exp-tags no-print">
								{#each exp.tags as tag}
									<span class="exp-tag">{tag}</span>
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
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- 03 / Education & Involvement -->
	<section class="cv-section">
		<div class="section-rail">
			<span class="rail-index">{content.sec3Num}</span>
			<h2 class="rail-heading">{content.sec3Title}</h2>
		</div>

		<div class="section-main">
			<div class="edu-ledger">
				{#each content.educationAndInvolvement as item}
					<div class="edu-row">
						<div class="edu-meta">
							<span class="edu-date">{item.date}</span>
							<span class="edu-loc">{item.location}</span>
						</div>
						<div class="edu-body">
							<h3 class="edu-degree">{item.degree}</h3>
							<div class="edu-inst">{item.institution}</div>
							{#each item.details as detail}
								<p class="edu-detail">{detail}</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Understated Colophon to Projects -->
	<section class="cv-colophon no-print">
		<p class="colophon-text">
			{content.projectsColophon}
			<a href="/projects" class="colophon-link interactive">
				{content.projectsColophonLink}
			</a>
		</p>
	</section>
</div>

<style>
	.cv-editorial {
		display: flex;
		flex-direction: column;
		gap: 4.5rem;
	}

	/* Header */
	.cv-header {
		padding: 1.5rem 0 2rem;
		border-bottom: 1px solid var(--text-primary);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.cv-kicker {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		letter-spacing: 0.06em;
		color: var(--text-tertiary);
		text-transform: uppercase;
	}

	.cv-title-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.cv-title {
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 5vw, 3.8rem);
		font-weight: 400;
		line-height: 1.05;
		color: var(--text-primary);
		margin: 0 0 0.6rem;
		letter-spacing: -0.02em;
	}

	.cv-subtitle {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.cv-meta-links {
		display: flex;
		align-items: center;
		gap: 1.35rem;
		flex-wrap: wrap;
	}

	.meta-link {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.meta-link:hover {
		color: var(--accent-purple);
	}

	.meta-cta {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--text-primary);
		padding-bottom: 0.15rem;
		transition: color 0.15s ease, border-color 0.15s ease;
	}

	.meta-cta:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	/* Section Layout */
	.cv-section {
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: 3.5rem;
		align-items: start;
	}

	.cv-section + .cv-section {
		padding-top: 3rem;
		border-top: 1px solid var(--border-medium);
	}

	.section-rail {
		position: sticky;
		top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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
		font-size: 2.1rem;
		font-weight: 400;
		line-height: 1.12;
		color: var(--text-primary);
		margin: 0;
	}

	/* 01 / Competency Ledger */
	.competency-ledger {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--border-subtle);
	}

	.competency-row {
		display: grid;
		grid-template-columns: 230px 1fr;
		gap: 1.5rem;
		align-items: baseline;
		padding: 1.35rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.comp-domain {
		font-size: 0.94rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.comp-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.comp-tag {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text-primary);
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-subtle);
		padding: 0.2rem 0.55rem;
	}

	/* 02 / Experience Ledger */
	.exp-ledger {
		display: flex;
		flex-direction: column;
	}

	.exp-entry {
		display: grid;
		grid-template-columns: 185px 1fr;
		gap: 2rem;
		padding: 2.25rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.exp-entry:first-child {
		padding-top: 0;
	}

	.exp-meta-col {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-family: var(--font-mono);
	}

	.exp-period {
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.exp-type {
		font-size: 0.68rem;
		color: var(--accent-purple);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.exp-loc {
		font-size: 0.74rem;
		color: var(--text-tertiary);
	}

	.exp-body-col {
		display: flex;
		flex-direction: column;
		gap: 0.95rem;
	}

	.exp-head {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.exp-role {
		font-family: var(--font-display);
		font-size: 1.65rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.18;
	}

	.exp-company {
		font-size: 0.94rem;
		font-weight: 600;
		color: var(--text-secondary);
	}

	.exp-bullets {
		margin: 0;
		padding-left: 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.exp-bullets li {
		font-size: 0.93rem;
		line-height: 1.62;
		color: var(--text-secondary);
	}

	.exp-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.exp-tag {
		font-family: var(--font-mono);
		font-size: 0.71rem;
		color: var(--text-secondary);
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-subtle);
		padding: 0.14rem 0.5rem;
	}

	.external-ref-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 0.25rem;
		padding: 0.75rem 1rem;
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-medium);
		text-decoration: none;
		color: inherit;
		transition: border-color 0.18s ease, background-color 0.18s ease;
	}

	.external-ref-card:hover {
		background: #ffffff;
		border-color: var(--accent-purple);
	}

	.ext-card-body {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
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
		gap: 0.45rem;
		flex-shrink: 0;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		color: var(--accent-purple);
	}

	.ext-card-arrow {
		font-size: 0.9rem;
	}

	/* 03 / Education Ledger */
	.edu-ledger {
		display: flex;
		flex-direction: column;
	}

	.edu-row {
		display: grid;
		grid-template-columns: 185px 1fr;
		gap: 2rem;
		padding: 1.75rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.edu-row:first-child {
		padding-top: 0;
	}

	.edu-meta {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-family: var(--font-mono);
	}

	.edu-date {
		font-size: 0.78rem;
		color: var(--text-primary);
		font-weight: 500;
	}

	.edu-loc {
		font-size: 0.74rem;
		color: var(--text-tertiary);
	}

	.edu-body {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.edu-degree {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.2;
	}

	.edu-inst {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent-purple);
	}

	.edu-detail {
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0.2rem 0 0;
	}

	/* Colophon */
	.cv-colophon {
		padding-top: 2rem;
		border-top: 1px solid var(--text-primary);
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
		.cv-section,
		.competency-row,
		.exp-entry,
		.edu-row {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.section-rail {
			position: static;
		}
	}

	@media print {
		.no-print,
		:global(.header-full-bleed),
		:global(.footer),
		:global(.cursor-octa),
		:global(.ambient-grain) {
			display: none !important;
		}

		:global(body),
		:global(html) {
			background: #ffffff !important;
			color: #000000 !important;
		}

		.exp-entry,
		.edu-row {
			break-inside: avoid;
		}
	}
</style>
