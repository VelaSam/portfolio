<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let botcheck = $state(false);
	let isSubmitting = $state(false);
	let submitError = $state('');
	let submitted = $state(false);

	const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!firstName || !email || !message) return;

		if (botcheck) {
			submitted = true;
			return;
		}

		if (!accessKey) {
			submitError =
				i18n.locale === 'en'
					? 'Web3Forms access key not found. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file or reach out directly at contact@samuelvelasco.dev.'
					: 'Clé d’accès Web3Forms introuvable. Ajoutez VITE_WEB3FORMS_ACCESS_KEY dans votre fichier .env ou écrivez directement à contact@samuelvelasco.dev.';
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
						? 'Unable to transmit message. Please contact me directly at contact@samuelvelasco.dev.'
						: 'Impossible d’acheminer le message. Écrivez-moi directement à contact@samuelvelasco.dev.');
			}
		} catch {
			submitError =
				i18n.locale === 'en'
					? 'Network connection error. Please try again or reach out at contact@samuelvelasco.dev.'
					: 'Erreur réseau. Veuillez réessayer ou m’écrire à contact@samuelvelasco.dev.';
		} finally {
			isSubmitting = false;
		}
	}

	const content = $derived({
		en: {
			kicker: 'CORRESPONDENCE — MONTRÉAL, QC — DIRECT & FORM',
			title: 'Let’s talk software & engineering.',
			subtitle: 'Whether you have a software development role, fullstack/backend opportunities, or want to discuss low-level systems, feel free to drop a line.',
			railIndex: '01 / DIRECT',
			directDesc: 'I typically respond within 24 to 48 business hours.',
			emailLabel: 'Email',
			locLabel: 'Location',
			locVal: 'Montréal, Québec, Canada',
			socialLabel: 'Profiles',
			firstNameLabel: 'First Name',
			firstNamePh: 'Samuel',
			lastNameLabel: 'Last Name',
			lastNamePh: 'Velasco',
			emailFormLabel: 'Email Address',
			emailPh: 'you@example.com',
			subjectLabel: 'Subject',
			subjectPh: 'Software role, fullstack opportunity, etc.',
			messageLabel: 'Message',
			messagePh: 'Tell me about your team, project, or technical challenge...',
			btnSubmit: 'Send Message →',
			btnSending: 'Sending...',
			antiSpamNotice: 'I already honeypotted this form, so don’t bother trying to use bots to spam me.',
			successTitle: 'Message Received.',
			successText: 'Thank you {name}, your message has been transmitted. I will get back to you shortly.',
			btnReset: 'Send another message'
		},
		fr: {
			kicker: 'CORRESPONDANCE — MONTRÉAL, QC — DIRECT & FORMULAIRE',
			title: 'Parlons développement logiciel & projets.',
			subtitle: 'Que ce soit pour une opportunité en développement logiciel (fullstack, backend, web) ou échanger sur des défis systèmes, n’hésitez pas à m’écrire.',
			railIndex: '01 / DIRECT',
			directDesc: 'Je réponds généralement en moins de 24 à 48 heures ouvrables.',
			emailLabel: 'Courriel',
			locLabel: 'Localisation',
			locVal: 'Montréal, Québec, Canada',
			socialLabel: 'Profils',
			firstNameLabel: 'Prénom',
			firstNamePh: 'Samuel',
			lastNameLabel: 'Nom',
			lastNamePh: 'Velasco',
			emailFormLabel: 'Courriel',
			emailPh: 'votre.nom@exemple.com',
			subjectLabel: 'Sujet',
			subjectPh: 'Opportunité logicielle, projet fullstack, etc.',
			messageLabel: 'Message',
			messagePh: 'Parlez-moi de votre projet, de vos besoins ou de votre équipe...',
			btnSubmit: 'Envoyer le message →',
			btnSending: 'Envoi en cours...',
			antiSpamNotice: 'J’ai déjà honeypotté donc prenez pas la peine d’utiliser des bots pour me spammer.',
			successTitle: 'Message reçu.',
			successText: 'Merci {name}, votre message a bien été transmis. Je vous répondrai dans les plus brefs délais.',
			btnReset: 'Envoyer un autre message'
		}
	}[i18n.locale]);
</script>

<svelte:head>
	<title>Contact — Samuel Velasco</title>
	<meta
		name="description"
		content="Get in touch with Samuel Velasco — Software Developer."
	/>
</svelte:head>

<div class="contact-editorial">
	<header class="contact-header">
		<div class="contact-kicker">{content.kicker}</div>
		<h1 class="contact-title">{content.title}</h1>
		<p class="contact-subtitle">{content.subtitle}</p>
	</header>

	<div class="contact-split">
		<!-- Left Rail: Typographic Directory (No Tinted Icon Boxes) -->
		<aside class="contact-rail">
			<span class="rail-index">{content.railIndex}</span>
			<p class="rail-desc">{content.directDesc}</p>

			<div class="directory-ledger">
				<div class="dir-row">
					<span class="dir-key">{content.emailLabel}</span>
					<a href="mailto:contact@samuelvelasco.dev" class="dir-val dir-link interactive">
						contact@samuelvelasco.dev ↗
					</a>
				</div>

				<div class="dir-row">
					<span class="dir-key">{content.locLabel}</span>
					<span class="dir-val">{content.locVal}</span>
				</div>

				<div class="dir-row">
					<span class="dir-key">{content.socialLabel}</span>
					<div class="dir-socials">
						<a
							href="https://linkedin.com/in/samuelvelascodev"
							target="_blank"
							rel="noopener noreferrer"
							class="dir-link interactive"
						>
							LinkedIn ↗
						</a>
						<a
							href="https://github.com/VelaSam"
							target="_blank"
							rel="noopener noreferrer"
							class="dir-link interactive"
						>
							GitHub ↗
						</a>
					</div>
				</div>
			</div>
		</aside>

		<!-- Right Column: Solid-Surface Editorial Form -->
		<div class="contact-form-wrap">
			{#if submitted}
				<div class="success-panel">
					<h2 class="success-title">{content.successTitle}</h2>
					<p class="success-text">
						{content.successText.replace('{name}', firstName)}
					</p>
					<button class="btn-reset interactive" onclick={() => (submitted = false)}>
						{content.btnReset}
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="editorial-form">
					<!-- Invisible Anti-Bot Honeypot Field -->
					<div class="botcheck-field" aria-hidden="true" style="display: none;">
						<label for="botcheck">Do not fill this field</label>
						<input
							id="botcheck"
							type="checkbox"
							name="botcheck"
							tabindex="-1"
							autocomplete="off"
							bind:checked={botcheck}
						/>
					</div>

					{#if submitError}
						<div class="submit-error-banner" role="alert">
							<span>{submitError}</span>
						</div>
					{/if}

					<div class="form-row">
						<div class="form-group">
							<label for="firstName" class="form-label">{content.firstNameLabel} *</label>
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
						<label for="email" class="form-label">{content.emailFormLabel} *</label>
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
						<label for="message" class="form-label">{content.messageLabel} *</label>
						<textarea
							id="message"
							rows="6"
							class="form-textarea"
							placeholder={content.messagePh}
							bind:value={message}
							required
						></textarea>
					</div>

					<div class="submit-action-row">
						<button type="submit" class="btn-submit interactive" disabled={isSubmitting}>
							{#if isSubmitting}
								<span>{content.btnSending}</span>
							{:else}
								<span>{content.btnSubmit}</span>
							{/if}
						</button>

						<span class="anti-spam-note">{content.antiSpamNotice}</span>
					</div>
				</form>
			{/if}
		</div>
	</div>
</div>

<style>
	.contact-editorial {
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	.contact-header {
		padding: 1.5rem 0 2rem;
		border-bottom: 1px solid var(--text-primary);
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	.contact-kicker {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		letter-spacing: 0.06em;
		color: var(--text-tertiary);
		text-transform: uppercase;
	}

	.contact-title {
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 5vw, 3.8rem);
		line-height: 1.05;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
		letter-spacing: -0.02em;
	}

	.contact-subtitle {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		max-width: 680px;
	}

	.contact-split {
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 4rem;
		align-items: start;
	}

	/* Left Directory Rail */
	.contact-rail {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.rail-index {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--accent-purple);
		font-weight: 600;
	}

	.rail-desc {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.55;
		margin: 0 0 0.5rem;
	}

	.directory-ledger {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--border-medium);
	}

	.dir-row {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.95rem 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.dir-key {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-tertiary);
	}

	.dir-val {
		font-size: 0.92rem;
		color: var(--text-primary);
		font-weight: 500;
	}

	.dir-socials {
		display: flex;
		gap: 1.25rem;
	}

	.dir-link {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--border-medium);
		padding-bottom: 0.1rem;
		align-self: flex-start;
		transition: color 0.15s ease, border-color 0.15s ease;
	}

	.dir-link:hover {
		color: var(--accent-purple);
		border-color: var(--accent-purple);
	}

	/* Right Form */
	.contact-form-wrap {
		background: #ffffff;
		border: 1px solid var(--border-medium);
		padding: 2.25rem;
	}

	.editorial-form {
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
		font-family: var(--font-mono);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		font-weight: 600;
	}

	.form-input,
	.form-textarea {
		font-family: var(--font-sans);
		font-size: 0.94rem;
		padding: 0.75rem 0.9rem;
		background: var(--bg-canvas);
		border: 1px solid var(--border-medium);
		border-radius: 0;
		color: var(--text-primary);
		transition: border-color 0.15s ease, background-color 0.15s ease;
		outline: none;
	}

	.form-input:focus,
	.form-textarea:focus {
		background: #ffffff;
		border-color: var(--accent-purple);
	}

	.form-textarea {
		resize: vertical;
		min-height: 140px;
	}

	.submit-error-banner {
		padding: 0.8rem 1rem;
		background: rgba(185, 28, 28, 0.06);
		border-left: 3px solid #b91c1c;
		color: #b91c1c;
		font-size: 0.85rem;
		line-height: 1.45;
	}

	.submit-action-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		padding-top: 0.4rem;
	}

	.btn-submit {
		padding: 0.8rem 1.6rem;
		background: var(--text-primary);
		color: var(--bg-canvas);
		border: none;
		border-radius: 2px;
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.18s ease;
	}

	.btn-submit:hover {
		background: var(--accent-purple);
	}

	.btn-submit:disabled {
		opacity: 0.65;
	}

	.anti-spam-note {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		line-height: 1.45;
		color: var(--text-tertiary);
		max-width: 340px;
	}

	/* Success Panel */
	.success-panel {
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
	}

	.success-title {
		font-family: var(--font-display);
		font-size: 2.2rem;
		font-weight: 400;
		color: var(--text-primary);
		margin: 0;
	}

	.success-text {
		font-size: 0.96rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	.btn-reset {
		margin-top: 0.5rem;
		padding: 0.6rem 1.15rem;
		background: var(--bg-surface-soft);
		border: 1px solid var(--border-medium);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		cursor: pointer;
	}

	.btn-reset:hover {
		background: #ffffff;
		border-color: var(--text-primary);
	}

	@media (max-width: 900px) {
		.contact-split,
		.form-row {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.contact-form-wrap {
			padding: 1.5rem;
		}
	}
</style>
