<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let botcheck = $state('');
	let isSubmitting = $state(false);
	let submitError = $state('');
	let submitted = $state(false);

	// Free Web3Forms key: can be stored in .env as VITE_WEB3FORMS_ACCESS_KEY
	const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!firstName || !email || !message) return;

		// Anti-Bot Honeypot: If a bot filled out the hidden field, drop silently
		if (botcheck) {
			submitted = true;
			return;
		}

		if (!accessKey) {
			submitError =
				i18n.locale === 'en'
					? 'Web3Forms access key not found. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file or reach out directly at svelasco514@gmail.com.'
					: 'Clé d’accès Web3Forms introuvable. Ajoutez VITE_WEB3FORMS_ACCESS_KEY dans votre fichier .env ou écrivez directement à svelasco514@gmail.com.';
			return;
		}

		isSubmitting = true;
		submitError = '';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: accessKey,
					name: `${firstName} ${lastName}`.trim(),
					email,
					subject: subject || `Portfolio Contact from ${firstName}`,
					message,
					from_name: 'Samuel Velasco Portfolio',
					botcheck: botcheck
				})
			});

			const data = await response.json();

			if (response.ok && data.success) {
				submitted = true;
			} else {
				submitError =
					data.message ||
					(i18n.locale === 'en'
						? 'Unable to transmit message. Please contact me directly at svelasco514@gmail.com.'
						: 'Impossible d’acheminer le message. Écrivez-moi directement à svelasco514@gmail.com.');
			}
		} catch {
			submitError =
				i18n.locale === 'en'
					? 'Network connection error. Please try again or reach out at svelasco514@gmail.com.'
					: 'Erreur réseau. Veuillez réessayer ou m’écrire à svelasco514@gmail.com.';
		} finally {
			isSubmitting = false;
		}
	}

	const content = $derived({
		en: {
			tag: 'Get in Touch',
			title: 'Let’s talk software & engineering.',
			subtitle: 'Whether you have a software development role, fullstack/backend opportunities, or want to discuss low-level systems, feel free to drop a line.',
			directTitle: 'Direct Channels',
			directDesc: 'I typically respond within 24 to 48 business hours.',
			emailLabel: 'Direct Email',
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
			subjectPh: 'Software role, fullstack opportunity, etc.',
			messageLabel: 'Message',
			messagePh: 'Tell me about your team, project, or technical challenge...',
			btnSubmit: 'Send Message',
			btnSending: 'Sending Message...',
			antiSpamNotice: 'I already honeypotted this form, so don’t bother trying to use bots to spam me.',
			successTitle: 'Message Received!',
			successText: 'Thank you {name}, your message has been transmitted successfully. I will get back to you shortly.',
			btnReset: 'Send another message'
		},
		fr: {
			tag: 'Prendre contact',
			title: 'Parlons développement logiciel & projets.',
			subtitle: 'Que ce soit pour une opportunité en développement logiciel (fullstack, backend, web) ou échanger sur des défis systèmes, n’hésitez pas à m’écrire.',
			directTitle: 'Coordonnées directes',
			directDesc: 'Je réponds généralement en moins de 24 à 48 heures ouvrables.',
			emailLabel: 'Email professionnel',
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
			subjectPh: 'Opportunité logicielle, projet fullstack, etc.',
			messageLabel: 'Message',
			messagePh: 'Parlez-moi de votre projet, de vos besoins ou de votre équipe...',
			btnSubmit: 'Envoyer le message',
			btnSending: 'Envoi en cours...',
			antiSpamNotice: 'J’ai déjà honeypotté donc prenez pas la peine d’utiliser des bots pour me spammer.',
			successTitle: 'Message reçu !',
			successText: 'Merci {name}, votre message a bien été transmis. Je vous répondrai dans les plus brefs délais.',
			btnReset: 'Envoyer un autre message'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>{i18n.locale === 'en' ? 'Contact • Samuel Velasco' : 'Contact • Samuel Velasco'}</title>
	<meta
		name="description"
		content="Get in touch with Samuel Velasco — Software Engineering Graduate & Systems Developer."
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
						<!-- Invisible Anti-Bot Honeypot Field (Invisible to Humans, Trap for Bots) -->
						<div class="botcheck-field" aria-hidden="true" style="display: none;">
							<label for="botcheck">Do not fill this field</label>
							<input
								id="botcheck"
								type="checkbox"
								name="botcheck"
								tabindex="-1"
								autocomplete="off"
								bind:value={botcheck}
							/>
						</div>

						{#if submitError}
							<div class="submit-error-banner" role="alert">
								<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" class="error-icon">
									<circle cx="8" cy="8" r="6"></circle>
									<line x1="8" y1="5" x2="8" y2="8.5"></line>
									<circle cx="8" cy="11" r="0.5" fill="currentColor"></circle>
								</svg>
								<span>{submitError}</span>
							</div>
						{/if}

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

						<div class="submit-action-row">
							<button type="submit" class="btn-submit interactive" disabled={isSubmitting}>
								{#if isSubmitting}
									<span class="submit-spinner" aria-hidden="true"></span>
									<span>{content.btnSending}</span>
								{:else}
									<span>{content.btnSubmit}</span>
									<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
										<line x1="3" y1="8" x2="13" y2="8"></line>
										<polyline points="9 4 13 8 9 12"></polyline>
									</svg>
								{/if}
							</button>

							<div class="anti-spam-indicator" title="Double honeypot trap & rate limiting">
								<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" class="shield-icon">
									<path d="M8 1.5 2.5 3.5v5c0 3.5 3 5.5 5.5 6 2.5-.5 5.5-2.5 5.5-6v-5L8 1.5Z"></path>
									<path d="m5.5 8 2 2 3-3.5"></path>
								</svg>
								<span>{content.antiSpamNotice}</span>
							</div>
						</div>
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

	.submit-error-banner {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.85rem 1.15rem;
		background: rgba(239, 68, 68, 0.08);
		border: 1px solid rgba(239, 68, 68, 0.25);
		border-radius: 3px;
		color: #b91c1c;
		font-size: 0.86rem;
		line-height: 1.4;
	}

	.error-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
	}

	.submit-action-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		flex-wrap: wrap;
		margin-top: 0.35rem;
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
	}

	.btn-submit:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none !important;
	}

	.submit-spinner {
		width: 14px;
		height: 14px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top-color: #ffffff;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.anti-spam-indicator {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		line-height: 1.4;
		color: var(--text-tertiary);
		max-width: 360px;
		user-select: none;
	}

	.shield-icon {
		width: 14px;
		height: 14px;
		color: #10b981;
		flex-shrink: 0;
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
