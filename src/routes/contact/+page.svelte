<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!firstName || !email || !message) return;
		submitted = true;
	}

	const content = $derived({
		en: {
			tag: 'Get in Touch',
			title: 'Let’s talk engineering & systems.',
			subtitle: 'Whether you have an engineering role, a technical inquiry, or want to discuss bare-metal and robotics, feel free to drop a line.',
			directTitle: 'Direct Channels',
			directDesc: 'I typically respond within 24 to 48 business hours.',
			emailLabel: 'Direct Email',
			phoneLabel: 'Mobile Phone',
			locLabel: 'Location',
			locVal: 'Montréal, Québec, Canada',
			socialTitle: 'Online Profiles',
			firstNameLabel: 'First Name',
			firstNamePh: 'e.g. Samuel',
			lastNameLabel: 'Last Name',
			lastNamePh: 'e.g. Velasco',
			emailFormLabel: 'Email Address',
			emailPh: 'you@example.com',
			subjectLabel: 'Subject',
			subjectPh: 'Software role, embedded project, etc.',
			messageLabel: 'Message',
			messagePh: 'Tell me about your team, project, or technical challenge...',
			btnSubmit: 'Send Message',
			successTitle: 'Message Received!',
			successText: 'Thank you {name}, your message has been recorded. I will get back to you shortly.',
			btnReset: 'Send another message'
		},
		fr: {
			tag: 'Prendre contact',
			title: 'Parlons d’ingénierie et de projets.',
			subtitle: 'Que ce soit pour une opportunité logicielle, une collaboration technique ou une question sur mes projets, n’hésitez pas à m’écrire.',
			directTitle: 'Coordonnées directes',
			directDesc: 'Je réponds généralement en moins de 24 à 48 heures ouvrables.',
			emailLabel: 'Email professionnel',
			phoneLabel: 'Téléphone mobile',
			locLabel: 'Localisation',
			locVal: 'Montréal, Québec, Canada',
			socialTitle: 'Profils en ligne',
			firstNameLabel: 'Prénom',
			firstNamePh: 'Ex. Samuel',
			lastNameLabel: 'Nom',
			lastNamePh: 'Ex. Velasco',
			emailFormLabel: 'Courriel',
			emailPh: 'votre.nom@exemple.com',
			subjectLabel: 'Sujet de discussion',
			subjectPh: 'Opportunité logicielle, projet embarqué, etc.',
			messageLabel: 'Message',
			messagePh: 'Parlez-moi de votre projet, de vos besoins ou de votre équipe...',
			btnSubmit: 'Envoyer le message',
			successTitle: 'Message reçu !',
			successText: 'Merci {name}, votre message a été enregistré avec succès. Je vous répondrai dans les plus brefs délais.',
			btnReset: 'Envoyer un autre message'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Contact • Samuel Velasco' : 'Contact • Samuel Velasco'}</title>
	<meta
		name="description"
		content="Get in touch with Samuel Velasco — Software Developer & Systems Engineer."
	/>
</svelte:head>

<div class="contact-page">
	<header class="contact-header">
		<span class="header-tag">{content.tag}</span>
		<h1 class="contact-title">{content.title}</h1>
		<p class="contact-subtitle">{content.subtitle}</p>
	</header>

	<div class="contact-grid">
		<!-- Left: Direct Channels & Information -->
		<div class="contact-info-col">
			<div class="info-card interactive">
				<h2 class="info-card-title">{content.directTitle}</h2>
				<p class="info-card-desc">{content.directDesc}</p>

				<div class="channels-list">
					<a href="mailto:svelasco514@gmail.com" class="channel-item interactive">
						<div class="channel-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="20" height="16" x="2" y="4" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</svg>
						</div>
						<div class="channel-details">
							<span class="channel-label">{content.emailLabel}</span>
							<span class="channel-value">svelasco514@gmail.com</span>
						</div>
					</a>

					<a href="tel:+14389233372" class="channel-item interactive">
						<div class="channel-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
							</svg>
						</div>
						<div class="channel-details">
							<span class="channel-label">{content.phoneLabel}</span>
							<span class="channel-value">(438) 923-3372</span>
						</div>
					</a>

					<div class="channel-item">
						<div class="channel-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						</div>
						<div class="channel-details">
							<span class="channel-label">{content.locLabel}</span>
							<span class="channel-value">{content.locVal}</span>
						</div>
					</div>
				</div>

				<div class="social-box">
					<span class="social-box-title">{content.socialTitle}</span>
					<div class="social-links-grid">
						<a
							href="https://linkedin.com/in/samuelvelascodev"
							target="_blank"
							rel="noopener noreferrer"
							class="social-btn interactive"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect width="4" height="12" x="2" y="9"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
							<span>LinkedIn ↗</span>
						</a>

						<a
							href="https://github.com/VelaSam"
							target="_blank"
							rel="noopener noreferrer"
							class="social-btn interactive"
						>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
							<span>GitHub ↗</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: Sharp Contact Form -->
		<div class="contact-form-col">
			<div class="form-card interactive">
				{#if submitted}
					<div class="success-message">
						<div class="success-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						</div>
						<h3 class="success-title">{content.successTitle}</h3>
						<p class="success-text">
							{content.successText.replace('{name}', firstName)}
						</p>
						<button class="btn-reset interactive" onclick={() => (submitted = false)}>
							{content.btnReset}
						</button>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form">
						<div class="form-row">
							<div class="form-group">
								<label for="firstName" class="form-label">{content.firstNameLabel} <span class="required">*</span></label>
								<input
									id="firstName"
									type="text"
									class="form-input"
									placeholder={content.firstNamePh}
									bind:value={firstName}
									required
								/>
							</div>

							<div class="form-group">
								<label for="lastName" class="form-label">{content.lastNameLabel}</label>
								<input
									id="lastName"
									type="text"
									class="form-input"
									placeholder={content.lastNamePh}
									bind:value={lastName}
								/>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="form-label">{content.emailFormLabel} <span class="required">*</span></label>
							<input
								id="email"
								type="email"
								class="form-input"
								placeholder={content.emailPh}
								bind:value={email}
								required
							/>
						</div>

						<div class="form-group">
							<label for="subject" class="form-label">{content.subjectLabel}</label>
							<input
								id="subject"
								type="text"
								class="form-input"
								placeholder={content.subjectPh}
								bind:value={subject}
							/>
						</div>

						<div class="form-group">
							<label for="message" class="form-label">{content.messageLabel} <span class="required">*</span></label>
							<textarea
								id="message"
								rows="5"
								class="form-textarea"
								placeholder={content.messagePh}
								bind:value={message}
								required
							></textarea>
						</div>

						<button type="submit" class="btn-submit interactive">
							<span>{content.btnSubmit}</span>
							<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
								<line x1="3" y1="8" x2="13" y2="8"></line>
								<polyline points="9 4 13 8 9 12"></polyline>
							</svg>
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.contact-page {
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	.contact-header {
		max-width: 760px;
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

	.contact-title {
		font-family: var(--font-display);
		font-size: 3.2rem;
		line-height: 1.1;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0 0 1rem;
	}

	.contact-subtitle {
		font-size: 1.05rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.3fr;
		gap: 2.25rem;
		align-items: start;
	}

	/* Left Col */
	.info-card {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp corners */
		padding: 2.25rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		transition: all 0.25s ease;
	}

	.info-card:hover {
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(32px);
		-webkit-backdrop-filter: blur(32px);
		border-color: var(--border-medium);
	}

	.info-card-title {
		font-family: var(--font-display);
		font-size: 1.65rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0 0 0.35rem;
	}

	.info-card-desc {
		font-size: 0.92rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	.channels-list {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.channel-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.9rem 1.15rem;
		background: rgba(250, 246, 240, 0.7);
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
	}

	.channel-item:hover {
		background: #ffffff;
		border-color: var(--border-medium);
		transform: translateX(3px);
	}

	.channel-icon {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(109, 40, 217, 0.08);
		border-radius: 2px; /* Sharp */
		color: var(--accent-purple);
		flex-shrink: 0;
	}

	.channel-icon svg {
		width: 17px;
		height: 17px;
	}

	.channel-details {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.channel-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-tertiary);
		font-weight: 600;
	}

	.channel-value {
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.social-box {
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-subtle);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.social-box-title {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 600;
		color: var(--text-tertiary);
	}

	.social-links-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.social-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.7rem 0.9rem;
		background: #ffffff;
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp */
		text-decoration: none;
		color: var(--text-primary);
		font-size: 0.84rem;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.social-btn svg {
		width: 14px;
		height: 14px;
		color: var(--accent-purple);
	}

	.social-btn:hover {
		border-color: var(--accent-purple);
		color: var(--accent-purple);
		transform: translateY(-1px);
	}

	/* Right Col - Form */
	.form-card {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-subtle);
		border-radius: 4px; /* Sharp */
		padding: 2.25rem;
		box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.04);
		transition: all 0.25s ease;
	}

	.form-card:hover {
		backdrop-filter: blur(34px);
		-webkit-backdrop-filter: blur(34px);
		border-color: var(--border-medium);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.35rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.form-label {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.required {
		color: #dc2626;
	}

	.form-input,
	.form-textarea {
		font-family: inherit;
		font-size: 0.92rem;
		padding: 0.8rem 1rem;
		background: var(--bg-canvas);
		border: 1px solid var(--border-subtle);
		border-radius: 3px; /* Sharp */
		color: var(--text-primary);
		transition: all 0.2s ease;
		outline: none;
	}

	.form-input:focus,
	.form-textarea:focus {
		background: #ffffff;
		border-color: var(--accent-purple);
		box-shadow: 0 0 0 2px rgba(109, 40, 217, 0.12);
	}

	.form-textarea {
		resize: vertical;
		min-height: 130px;
	}

	.btn-submit {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		padding: 0.85rem 1.75rem;
		background: var(--text-primary);
		color: #faf7f2;
		border: none;
		border-radius: 3px; /* Sharp */
		font-size: 0.94rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-top: 0.25rem;
	}

	.btn-submit svg {
		width: 15px;
		height: 15px;
		transition: transform 0.2s ease;
	}

	.btn-submit:hover {
		background: var(--accent-purple);
		transform: translateY(-2px);
		box-shadow: 0 6px 18px -3px rgba(109, 40, 217, 0.3);
	}

	.btn-submit:hover svg {
		transform: translateX(4px);
	}

	/* Success State */
	.success-message {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 3rem 1.5rem;
		gap: 1.25rem;
	}

	.success-icon {
		width: 52px;
		height: 52px;
		border-radius: 2px;
		background: rgba(16, 185, 129, 0.12);
		color: #10b981;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.success-icon svg {
		width: 26px;
		height: 26px;
	}

	.success-title {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 500;
		color: var(--text-primary);
		margin: 0;
	}

	.success-text {
		font-size: 0.98rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 420px;
		margin: 0;
	}

	.btn-reset {
		margin-top: 0.75rem;
		padding: 0.65rem 1.35rem;
		background: rgba(243, 238, 228, 0.7);
		border: 1px solid var(--border-medium);
		border-radius: 3px; /* Sharp */
		color: var(--text-primary);
		font-size: 0.86rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-reset:hover {
		background: #ffffff;
		border-color: var(--text-primary);
	}

	@media (max-width: 900px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.contact-title {
			font-size: 2.6rem;
		}
	}
</style>
