<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import EngineeringDivider from '$lib/components/EngineeringDivider.svelte';

	let selectedCraneIndex = $state(0);

	function nextCraneImage(len: number) {
		selectedCraneIndex = (selectedCraneIndex + 1) % len;
	}

	function prevCraneImage(len: number) {
		selectedCraneIndex = (selectedCraneIndex - 1 + len) % len;
	}

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
			sec3Title: 'Software & Technical Projects',
			sec4Num: '04',
			sec4Title: 'Education & Community Involvement',
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
					tags: ['Python', 'OpenCV', 'rPPG', 'Raspberry Pi', 'Signal Processing']
				},
				{
					company: 'HumanWare',
					location: 'Longueuil, QC',
					role: 'C# .NET Avalonia Software Developer – Assistive Technologies',
					type: 'R&D Internship',
					period: 'Sept. 2025 – Dec. 2025',
					bullets: [
						'Developed accessibility software and multi-screen user interfaces using C# .NET and Avalonia.',
						'Integrated optical character recognition (OCR) and text-to-speech (TTS) workflows with voice activity detection.',
						'Designed ergonomic audio and tactile navigation features tailored for visually impaired users.'
					],
					tags: ['C# .NET', 'Avalonia', 'OCR / TTS', 'VAD/RMS', 'Accessibility']
				},
				{
					company: 'Evident Scientific',
					location: 'Montréal, QC',
					role: 'Fullstack Developer',
					type: 'R&D Internship',
					period: 'May 2024 – Dec. 2024',
					bullets: [
						'Developed fullstack diagnostic and monitoring tools in C# .NET and Angular for industrial non-destructive testing equipment.',
						'Turned cryptic industrial telemetry streams into clean, real-time diagnostic tools that field teams could actually troubleshoot with in seconds.'
					],
					tags: ['C# .NET', 'Angular', 'Diagnostics', 'Telemetry']
				},
				{
					company: 'Evident Scientific',
					location: 'Montréal, QC',
					role: 'Frontend Developer',
					type: 'R&D Internship',
					period: 'May 2023 – Dec. 2023',
					bullets: [
						'Built real-time telemetry dashboards and signal analysis interfaces using Angular and WebSockets.',
						'Rendered high-frequency ultrasonic data streams with real-time performance.'
					],
					tags: ['Angular', 'WebSockets', 'Telemetry', 'UI/UX']
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
			engineeringProjects: [
				{
					title: 'CanBankX — Distributed Microservices Banking Platform',
					context: 'Distributed Systems Architecture (ÉTS)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'KrakenD API Gateway', 'Redis', 'MySQL', 'k6', 'Prometheus & Grafana'],
					bullets: [
						'Architected a distributed microservices banking backend in Go with Database-per-Microservice isolation across 3 independent MySQL databases.',
						'Configured KrakenD API Gateway as a unified secure ingress handling routing, JWT token validation, and inter-service aggregation.',
						'Integrated distributed Redis caching and executed extreme automated load tests using k6 with concurrent ACID transfer operations.',
						'Containerized the full stack (APIs, databases, gateway, Prometheus, Grafana) with automated Go data seeding scripts.'
					]
				},
				{
					title: 'Automated Robotic Tower Crane',
					context: 'First Undergraduate Engineering Challenge (ÉTS)',
					stack: ['SolidWorks CAD', 'C Firmware', '2.4 GHz RF', 'Laser-Cut Timber', 'LCD Telemetry'],
					bullets: [
						'Conceived, modeled, and manufactured a scale electromechanical tower crane featuring custom SolidWorks gear transmission and laser-cut timber structure.',
						'Hand-wired the remote controller circuit prototype: DIP microcontroller, dual-axis thumbstick, 2.4 GHz NRF24L01 wireless transceiver, and 1602A LCD real-time display.',
						'Successfully operated in the ÉTS departmental competition arena, achieving deterministic load stabilization and accurate coordinate placement.'
					],
					craneImages: [
						{
							id: 'team',
							src: '/crane-team.jpg',
							label: 'Team & Prototype',
							badge: 'Cover Photo • ÉTS Competition Arena',
							caption:
								'Our 6-person student engineering team proudly standing with the fully functional scale tower crane on competition day at ÉTS.'
						},
						{
							id: 'cad',
							src: '/crane-cad-1.jpg',
							label: 'SolidWorks Assembly',
							badge: '3D Kinematics & Structure',
							caption:
								'Complete SolidWorks CAD assembly: lattice mast tower, counterweighted boom, rotational bearing slewing ring, and cable trolley carriage.'
						},
						{
							id: 'gears',
							src: '/crane-gears.jpg',
							label: 'Gearbox & Drive',
							badge: 'Custom Mechanical Transmission',
							caption:
								'Detail of the custom rotational drive assembly: 3D printed motor bracket, micro-metal gearmotor, pinion (m0.5 N10) and spur slewing ring (N48).'
						},
						{
							id: 'circuit',
							src: '/crane-circuit.jpg',
							label: 'Embedded Controller',
							badge: 'Wireless RF Circuit & Telemetry',
							caption:
								'Hand-wired remote controller prototype: DIP microcontroller, dual-axis thumbstick, 2.4 GHz NRF24L01 wireless transceiver, and 1602A LCD real-time display.'
						},
						{
							id: 'render',
							src: '/crane-render.jpg',
							label: '3D Render',
							badge: 'Structural Assembly View',
							caption:
								'SolidWorks visualization of the interlocking laser-cut plywood truss sections and self-stabilizing cross base.'
						}
					]
				},
				{
					title: 'Autonomous Search & Rescue Drone-Rover System',
					context: 'Software Engineering Capstone Project (PFE ÉTS)',
					stack: ['Python', 'ROS 2', 'OpenCV', 'Distributed Architecture', 'Linux'],
					bullets: [
						'Architected the distributed communication and telemetry protocol between autonomous drone and ground rover nodes via ROS 2.',
						'Engineered real-time computer vision detection pipelines and target geospatial coordinate translation algorithms.',
						'Designed resilient state machines and automatic fail-safe procedures for dynamic search and rescue operations.'
					]
				},
				{
					title: 'Freestanding Microkernel & Low-Level Driver Architecture',
					context: 'Systems Programming & Performance Engineering',
					stack: ['Zig', 'C', 'STM32', 'ARM Cortex-M', 'Bare-Metal Architecture'],
					bullets: [
						'Designed an architectural Hardware Abstraction Layer (HAL) with zero external runtime dependencies for ARM Cortex-M microcontrollers.',
						'Implemented asynchronous interrupt handlers (NVIC), high-speed circular DMA channels, and deterministic PID control loops.',
						'Gained fundamental mastery of hardware memory boundaries, cache locality, and race-condition prevention, directly applicable to high-throughput backend software.'
					]
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
			sec3Title: 'Projets Logiciels & Techniques',
			sec4Num: '04',
			sec4Title: 'Formation & Implication',
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
					tags: ['Python', 'OpenCV', 'rPPG', 'Raspberry Pi', 'Signal Processing']
				},
				{
					company: 'HumanWare',
					location: 'Longueuil, QC',
					role: 'Développeur C# .NET Avalonia – Technologies d’assistance',
					type: 'Stage R&D',
					period: 'Sept. 2025 – Déc. 2025',
					bullets: [
						'Développement de fonctionnalités logicielles d’accessibilité et d’interfaces multi-écrans en C# .NET et Avalonia.',
						'Intégration de flux OCR et de synthèse vocale (TTS) couplés à la détection d’activité vocale.',
						'Conception de modules ergonomiques de navigation audio adaptés aux personnes ayant une limitation visuelle.'
					],
					tags: ['C# .NET', 'Avalonia', 'OCR / TTS', 'VAD/RMS', 'Accessibilité']
				},
				{
					company: 'Evident Scientific',
					location: 'Montréal, QC',
					role: 'Développeur Fullstack',
					type: 'Stage R&D',
					period: 'Mai 2024 – Déc. 2024',
					bullets: [
						'Conception d’outils de diagnostic et de supervision fullstack en C# .NET et Angular pour des instruments de contrôle non destructif.',
						'Transformation de flux télémétriques industriels complexes en outils de diagnostic temps réel clairs et rapides pour les équipes terrain.'
					],
					tags: ['C# .NET', 'Angular', 'Diagnostic', 'Télémétrie']
				},
				{
					company: 'Evident Scientific',
					location: 'Montréal, QC',
					role: 'Développeur Frontend',
					type: 'Stage R&D',
					period: 'Mai 2023 – Déc. 2023',
					bullets: [
						'Développement de tableaux de bord de télémétrie temps réel et d’interfaces d’analyse de signaux en Angular et WebSockets.',
						'Affichage fluide et haute performance de flux de données ultrasonores haute fréquence.'
					],
					tags: ['Angular', 'WebSockets', 'Télémétrie', 'UI/UX']
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
			engineeringProjects: [
				{
					title: 'CanBankX — Plateforme Bancaire à Microservices Répartis',
					context: 'Architecture de Systèmes Distribués (ÉTS)',
					repoUrl: 'https://github.com/VelaSam/CanBankX_Samuel_Velasco',
					stack: ['Go', 'Docker Compose', 'KrakenD API Gateway', 'Redis', 'MySQL', 'k6', 'Prometheus & Grafana'],
					bullets: [
						'Conception d’un backend bancaire distribué en Go selon le patron Database-per-Microservice (3 bases de données MySQL isolées).',
						'Configuration de la passerelle KrakenD API Gateway comme point d’entrée unique pour le routage et la validation des jetons.',
						'Intégration d’un cache Redis distribué et validation par tests de charge extrêmes (k6) avec transactions ACID concurrentes.',
						'Conteneurisation complète sous Docker Compose (APIs, BDs, Passerelle, Prometheus, Grafana) avec script de génération de données en Go.'
					]
				},
				{
					title: 'Grue à Tour Automatisée & Téléguidée',
					context: 'Premier Défi d’Ingénierie à l’ÉTS',
					stack: ['SolidWorks CAD', 'Firmware C', 'RF 2.4 GHz', 'Découpe Laser Bois', 'Télémétrie LCD'],
					bullets: [
						'Conception, modélisation et usinage d’une grue à tour électromécanique à échelle réduite avec réducteur d’engrenages SolidWorks et mât en treillis de bois.',
						'Câblage du prototype de télécommande sans fil : microcontrôleur DIP, joystick analogique, émetteur-récepteur radio NRF24L01 et écran LCD 1602A.',
						'Participation réussie à l’arène de compétition de l’ÉTS, avec stabilisation précise de la charge et positionnement dynamique sans oscillation.'
					],
					craneImages: [
						{
							id: 'team',
							src: '/crane-team.jpg',
							label: 'L’Équipe & Prototype',
							badge: 'Photo de couverture • Jour de compétition ÉTS',
							caption:
								'Notre équipe de 6 étudiants réunie fièrement autour de la grue à tour automatisée le jour de la compétition à l’ÉTS.'
						},
						{
							id: 'cad',
							src: '/crane-cad-1.jpg',
							label: 'Assemblage SolidWorks',
							badge: 'Cinématique 3D & Structure',
							caption:
								'Assemblage CAD complet sous SolidWorks : mât en treillis découpé au laser, flèche rotative, contrepoids et chariot de levage.'
						},
						{
							id: 'gears',
							src: '/crane-gears.jpg',
							label: 'Boîtier & Engrenages',
							badge: 'Transmission Mécanique',
							caption:
								'Vue détaillée de la transmission mécanique : support moteur usiné, pignon moteur (m0.5 N10) et couronne dentée (N48) pour la rotation fluide de la flèche.'
						},
						{
							id: 'circuit',
							src: '/crane-circuit.jpg',
							label: 'Contrôleur Sans Fil',
							badge: 'Circuit Embarqué & Télémétrie',
							caption:
								'Télécommande sans fil sur platine d’expérimentation : microcontrôleur DIP, joystick analogique, module radio NRF24L01 et écran LCD 1602A pour le retour d’état.'
						},
						{
							id: 'render',
							src: '/crane-render.jpg',
							label: 'Rendu 3D',
							badge: 'Rendu d’Assemblage',
							caption:
								'Modélisation 3D finale illustrant la structure en contreplaqué imbriqué, la flèche et la base en croix stabilisatrice.'
						}
					]
				},
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
					title: 'Micro-Noyau & Architecture de Pilotes Bas Niveau',
					context: 'Programmation système bas niveau & gestion mémoire',
					stack: ['Zig', 'C', 'STM32', 'ARM Cortex-M', 'Architecture Bare-Metal'],
					bullets: [
						'Conception d’une couche d’abstraction matérielle (HAL) modulaire et sans dépendance externe pour ARM Cortex-M.',
						'Implémentation directe des gestionnaires d’interruptions (NVIC), transferts DMA circulaires et boucles de régulation PID.',
						'Maîtrise approfondie des modèles mémoire, de la localité de cache et de la concurrence, directement transposable aux architectures backend scalables.'
					]
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
				</article>
			{/each}
		</div>
	</section>

	<EngineeringDivider label="PROJECTS // DISTRIBUTED_SYSTEMS" code="0x03" />

	<!-- 03 Projets Techniques & Ingénierie -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">{content.sec3Num}</span>
			<h2 class="section-heading">{content.sec3Title}</h2>
		</div>

		<div class="projects-list">
			{#each content.engineeringProjects as proj}
				<article class="project-box interactive">
					<div class="project-top">
						<div>
							<h3 class="project-title">
								{#if proj.repoUrl}
									<a
										href={proj.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link interactive"
										title="View repository on GitHub"
									>
										<span>{proj.title}</span>
										<span class="ext-icon">↗</span>
									</a>
								{:else}
									<span>{proj.title}</span>
								{/if}
							</h3>
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

					{#if proj.craneImages}
						<div class="crane-showcase-cv">
							<div class="crane-image-stage">
								<img
									src={proj.craneImages[selectedCraneIndex].src}
									alt={proj.craneImages[selectedCraneIndex].label}
									class="crane-active-img"
								/>
								<div class="crane-badge-overlay">
									<span class="crane-badge-dot"></span>
									<span>{proj.craneImages[selectedCraneIndex].badge}</span>
								</div>
								<div class="crane-nav-overlay">
									<button
										class="crane-nav-btn interactive"
										onclick={() => prevCraneImage(proj.craneImages.length)}
										aria-label="Previous photo"
									>
										<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
											<polyline points="10 3 5 8 10 13"></polyline>
										</svg>
									</button>
									<span class="crane-counter">
										{selectedCraneIndex + 1} / {proj.craneImages.length}
									</span>
									<button
										class="crane-nav-btn interactive"
										onclick={() => nextCraneImage(proj.craneImages.length)}
										aria-label="Next photo"
									>
										<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
											<polyline points="6 3 11 8 6 13"></polyline>
										</svg>
									</button>
								</div>
							</div>
							<div class="crane-caption-bar">
								<p class="crane-caption-text">
									<strong>{proj.craneImages[selectedCraneIndex].label} :</strong>
									{proj.craneImages[selectedCraneIndex].caption}
								</p>
							</div>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<EngineeringDivider label="ACADEMIA // ETS_MONTREAL" code="B.ING" />

	<!-- 04 Formation & Implication -->
	<section class="cv-section">
		<div class="section-title-wrap">
			<span class="section-num">{content.sec4Num}</span>
			<h2 class="section-heading">{content.sec4Title}</h2>
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

	/* Projects */
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.project-box {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 1.85rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.2s ease;
	}

	.project-box:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
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

	.project-link {
		color: inherit;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		transition: color 0.2s ease;
	}

	.project-link:hover {
		color: var(--accent-purple);
	}

	.project-link .ext-icon {
		font-size: 1rem;
		opacity: 0.6;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	.project-link:hover .ext-icon {
		opacity: 1;
		transform: translate(2px, -2px);
	}

	.project-context {
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
		padding: 0.2rem 0.55rem;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.18);
		border-radius: 2px; /* Sharp */
		color: var(--accent-purple);
		font-weight: 600;
	}

	/* Crane Project Photo Showcase in CV */
	.crane-showcase-cv {
		margin-top: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.5);
		padding: 0.85rem;
	}

	.crane-image-stage {
		position: relative;
		width: 100%;
		height: 440px;
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

	.crane-badge-overlay {
		position: absolute;
		top: 0.85rem;
		left: 0.85rem;
		background: rgba(28, 25, 23, 0.85);
		backdrop-filter: blur(8px);
		color: #ffffff;
		padding: 0.3rem 0.65rem;
		border-radius: 3px;
		font-size: 0.74rem;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.crane-badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 1px;
		background: var(--accent-purple-light);
	}

	.crane-nav-overlay {
		position: absolute;
		bottom: 0.85rem;
		right: 0.85rem;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		background: rgba(28, 25, 23, 0.85);
		backdrop-filter: blur(8px);
		padding: 0.25rem 0.55rem;
		border-radius: 3px;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.crane-nav-btn {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		color: #ffffff;
		cursor: pointer;
		border-radius: 2px;
		transition: background 0.2s ease, transform 0.15s ease;
	}

	.crane-nav-btn:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: scale(1.08);
	}

	.crane-nav-btn svg {
		width: 14px;
		height: 14px;
	}

	.crane-counter {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: #e5e5e5;
		padding: 0 0.35rem;
		font-weight: 600;
	}

	.crane-caption-bar {
		background: rgba(250, 246, 240, 0.85);
		border: 1px solid var(--border-subtle);
		border-radius: 3px;
		padding: 0.75rem 1rem;
	}

	.crane-caption-text {
		margin: 0;
		font-size: 0.84rem;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	.crane-caption-text strong {
		color: var(--text-primary);
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

	@media (max-width: 900px) {
		.skills-catalog,
		.edu-grid {
			grid-template-columns: 1fr;
		}

		.crane-image-stage {
			height: 320px;
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

	@media (max-width: 600px) {
		.crane-image-stage {
			height: 250px;
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
			color: #000000 !important;
		}

		.cv-page {
			gap: 1.25rem;
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
