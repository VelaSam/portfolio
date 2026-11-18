<script lang="ts">
	let { label = 'ENG // SYS // SPEC', code = '0x2A' } = $props<{ label?: string; code?: string }>();
</script>

<div class="eng-divider-wrap" aria-hidden="true">
	<div class="eng-tick-ruler">
		{#each Array(24) as _, i}
			<span class="eng-tick" class:major={i % 6 === 0} class:mid={i % 3 === 0 && i % 6 !== 0}></span>
		{/each}
	</div>

	<div class="eng-center-badge">
		<span class="fiducial-mark">✛</span>
		<span class="eng-label-text">{label}</span>
		<span class="eng-code-pill">{code}</span>
		<span class="fiducial-mark">✛</span>
	</div>

	<div class="eng-tick-ruler reverse">
		{#each Array(24) as _, i}
			<span class="eng-tick" class:major={i % 6 === 0} class:mid={i % 3 === 0 && i % 6 !== 0}></span>
		{/each}
	</div>
</div>

<style>
	.eng-divider-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin: 2.5rem 0;
		user-select: none;
		pointer-events: none;
	}

	.eng-tick-ruler {
		flex: 1;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		height: 14px;
		border-bottom: 1.5px solid var(--border-medium);
		position: relative;
	}

	.eng-tick {
		width: 1px;
		height: 5px;
		background: var(--border-medium);
		display: block;
	}

	.eng-tick.mid {
		height: 9px;
		background: var(--text-tertiary);
	}

	.eng-tick.major {
		height: 14px;
		width: 1.5px;
		background: var(--accent-purple);
	}

	.eng-center-badge {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.2rem 0.65rem;
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid var(--border-medium);
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(28, 25, 23, 0.04);
	}

	.fiducial-mark {
		color: var(--accent-purple);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 700;
	}

	.eng-label-text {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		color: var(--text-primary);
		text-transform: uppercase;
	}

	.eng-code-pill {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		padding: 0.05rem 0.35rem;
		background: rgba(109, 40, 217, 0.1);
		border: 1px solid rgba(109, 40, 217, 0.25);
		border-radius: 2px;
		color: var(--accent-purple);
		font-weight: 600;
	}

	@media (max-width: 640px) {
		.eng-divider-wrap {
			gap: 0.5rem;
		}

		.eng-center-badge {
			padding: 0.15rem 0.4rem;
			gap: 0.35rem;
		}

		.eng-code-pill {
			display: none;
		}
	}
</style>
