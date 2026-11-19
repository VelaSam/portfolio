<script lang="ts">
	let { label = '' } = $props<{ label?: string }>();
</script>

<div class="signal-divider" aria-hidden="true">
	<span class="trace-line"></span>

	<div class="trace-core">
		<svg viewBox="0 0 72 20" class="pulse-svg" fill="none">
			<path
				d="M0 10 H14 V4 H24 V16 H34 V4 H44 V16 H54 V10 H72"
				stroke="currentColor"
				stroke-width="1.4"
				stroke-linecap="square"
				stroke-linejoin="miter"
			/>
			<rect x="22.5" y="2.5" width="3" height="3" fill="var(--accent-purple)" />
		</svg>

		{#if label}
			<span class="trace-label">{label}</span>
		{/if}
	</div>

	<span class="trace-line"></span>
</div>

<style>
	.signal-divider {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
		margin: 0.5rem 0;
		user-select: none;
		pointer-events: none;
	}

	.trace-line {
		flex: 1;
		height: 1px;
		background: var(--border-medium);
	}

	.trace-core {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		color: var(--text-primary);
	}

	.pulse-svg {
		width: 58px;
		height: 16px;
		display: block;
	}

	.trace-label {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-tertiary);
	}
</style>
