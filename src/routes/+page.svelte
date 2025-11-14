<script lang="ts">
	const contacts = [
		{ name: 'GitHub', icon: 'github', url: 'https://github.com/VelaSam' },
		{ name: 'Email', icon: 'email', url: 'mailto:svelasco514@gmail.com' },
		{ name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/samuelvelascodev' },
		{ name: 'Phone', icon: 'phone', url: 'tel:+14389233372' }
	];
</script>

<div class="container">
	<div class="card">
		<div class="content">
			<h1 class="name">Samuel Velasco</h1>
			<p class="title">Programmer & Profesionnal Vim Tweaker</p>
			<p class="bio">
				One day I will have things figured out. Today is not that day.
				Don't take yourself too seriously.

				You should try the moonlander you'll impress your boss.
			</p>
			
			<div class="contact-section">
				<div class="contact-icons">
					{#each contacts as contact}
						<a href={contact.url} class="icon-link" aria-label={contact.name}>
							<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								{#if contact.icon === 'github'}
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
									<path d="M9 18c-4.51 2-5-2-7-2"/>
								{:else if contact.icon === 'email'}
									<rect width="20" height="16" x="2" y="4" rx="2"/>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
								{:else if contact.icon === 'linkedin'}
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
									<rect width="4" height="12" x="2" y="9"/>
									<circle cx="4" cy="4" r="2"/>
								{:else if contact.icon === 'phone'}
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
								{/if}
							</svg>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background: #0D0D0D;
		position: relative;
		overflow: hidden;
	}

	.container::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 300%;
		height: 300%;
		background-image: 
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='86.6' viewBox='0 0 100 86.6'%3E%3Cpolygon fill='%232B2B2B' fill-opacity='0.4' points='50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'/%3E%3C/svg%3E"),
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='86.6' viewBox='0 0 100 86.6'%3E%3Cpolygon fill='%232B2B2B' fill-opacity='0.4' points='50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'/%3E%3C/svg%3E");
		background-size: 100px 86.6px;
		background-position: 0 0, 50px 43.3px;
		background-repeat: repeat;
		opacity: 0.3;
		animation: hexagonShift 20s linear infinite;
	}

	.container::after {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 300%;
		height: 300%;
		background-image: 
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='86.6' viewBox='0 0 100 86.6'%3E%3Cpolygon fill='none' stroke='%23FF7A00' stroke-width='0.5' stroke-opacity='0.15' points='50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'/%3E%3C/svg%3E"),
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='86.6' viewBox='0 0 100 86.6'%3E%3Cpolygon fill='none' stroke='%23FF7A00' stroke-width='0.5' stroke-opacity='0.15' points='50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'/%3E%3C/svg%3E");
		background-size: 100px 86.6px;
		background-position: 0 0, 50px 43.3px;
		background-repeat: repeat;
		opacity: 0.4;
		animation: hexagonShift 25s linear infinite reverse;
	}

	@keyframes hexagonShift {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(100px, 86.6px);
		}
	}

	.card {
		background: rgba(43, 43, 43, 0.4);
		backdrop-filter: blur(20px) saturate(180%);
		-webkit-backdrop-filter: blur(20px) saturate(180%);
		border-radius: 24px;
		border: 1px solid rgba(255, 122, 0, 0.2);
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.4),
			0 0 0 1px rgba(255, 122, 0, 0.1) inset,
			0 0 40px rgba(255, 122, 0, 0.1);
		padding: 3rem 4rem;
		max-width: 600px;
		width: 100%;
		position: relative;
		overflow: hidden;
		z-index: 1;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, transparent, #FF7A00, transparent);
		opacity: 0.6;
	}

	.content {
		position: relative;
		z-index: 1;
		text-align: center;
	}

	.name {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: #ECECEC;
		letter-spacing: -0.02em;
		position: relative;
		display: inline-block;
	}

	.name::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 3px;
		background: #FF7A00;
		border-radius: 2px;
		opacity: 0.8;
	}

	.title {
		font-size: 1.25rem;
		color: #ECECEC;
		margin: 0 0 1.5rem 0;
		opacity: 0.9;
		font-weight: 400;
	}

	.bio {
		font-size: 1rem;
		color: #ECECEC;
		line-height: 1.6;
		margin: 0 0 2.5rem 0;
		opacity: 0.8;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.contact-section {
		margin-top: 2rem;
	}

	.contact-icons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.icon-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: 12px;
		background: rgba(255, 122, 0, 0.1);
		border: 1px solid rgba(255, 122, 0, 0.3);
		color: #FF7A00;
		transition: all 0.3s ease;
		text-decoration: none;
		position: relative;
		overflow: hidden;
	}

	.icon-link::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 122, 0, 0.2);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.icon-link:hover {
		background: rgba(255, 122, 0, 0.2);
		border-color: #FF7A00;
		color: #FF7A00;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 122, 0, 0.3);
	}

	.icon-link:hover::before {
		width: 300px;
		height: 300px;
	}

	.icon {
		width: 24px;
		height: 24px;
		position: relative;
		z-index: 1;
		stroke: currentColor;
	}

	@media (max-width: 640px) {
		.card {
			padding: 2rem 1.5rem;
			border-radius: 20px;
		}

		.name {
			font-size: 2.25rem;
		}

		.name::after {
			width: 50px;
			height: 2px;
		}

		.title {
			font-size: 1.1rem;
		}

		.bio {
			font-size: 0.95rem;
		}

		.icon-link {
			width: 48px;
			height: 48px;
		}

		.icon {
			width: 20px;
			height: 20px;
		}
	}
</style>
