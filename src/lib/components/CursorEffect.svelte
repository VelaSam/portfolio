<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = $state(-200);
	let mouseY = $state(-200);
	let followerX = $state(-200);
	let followerY = $state(-200);
	let isHovering = $state(false);
	let isOverComponent = $state(false);
	let isClicking = $state(false);
	let isVisible = $state(false);
	let isTouch = $state(false);

	onMount(() => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			isTouch = true;
			return;
		}

		let rafId: number;

		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (!isVisible) isVisible = true;
		};

		const handleMouseDown = () => (isClicking = true);
		const handleMouseUp = () => (isClicking = false);
		const handleMouseLeave = () => (isVisible = false);
		const handleMouseEnter = () => (isVisible = true);

		const handleOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			// Check if hovering clickable links/buttons
			const isClickable = Boolean(
				target.closest('a') ||
				target.closest('button') ||
				target.closest('input') ||
				target.closest('textarea') ||
				target.closest('.interactive')
			);
			isHovering = isClickable;

			// Check if cursor is over any content surface/card/component
			const isComponent = Boolean(
				target.closest('.skill-card') ||
				target.closest('.timeline-item') ||
				target.closest('.project-box') ||
				target.closest('.info-card') ||
				target.closest('.form-card') ||
				target.closest('.edu-card') ||
				target.closest('.quote-container') ||
				target.closest('.cta-banner-inner') ||
				target.closest('.navbar') ||
				target.closest('.milestone-item')
			);
			isOverComponent = isComponent;
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		window.addEventListener('mouseover', handleOver, { passive: true });
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mouseenter', handleMouseEnter);

		// Physics loop: Much slower, ominous heavy drag
		const loop = () => {
			const ease = 0.04; // Very slow and ominous
			followerX += (mouseX - followerX) * ease;
			followerY += (mouseY - followerY) * ease;
			rafId = requestAnimationFrame(loop);
		};

		rafId = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseover', handleOver);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mouseenter', handleMouseEnter);
		};
	});
</script>

{#if !isTouch}
	<!-- Ominous blurry shadow residing in the background -->
	<div
		class="ominous-aura"
		class:visible={isVisible}
		class:over-component={isOverComponent}
		class:clicking={isClicking}
		style="transform: translate3d({followerX}px, {followerY}px, 0);"
	>
		<div class="shadow-core" class:deep-blur={isOverComponent}></div>
		<div class="pixel-grain"></div>
	</div>

	<!-- Sharp precision cursor point -->
	<div
		class="cursor-dot"
		class:visible={isVisible}
		class:hovering={isHovering}
		class:clicking={isClicking}
		style="transform: translate3d({mouseX}px, {mouseY}px, 0);"
	></div>
{/if}

<style>
	/* Positioned far in the background behind components */
	.ominous-aura {
		position: fixed;
		top: 0;
		left: 0;
		width: 220px;
		height: 220px;
		margin-top: -110px;
		margin-left: -110px;
		pointer-events: none;
		z-index: 1; /* In the background layer */
		opacity: 0;
		mix-blend-mode: multiply;
		transition: opacity 0.6s ease;
		will-change: transform;
	}

	.ominous-aura.visible {
		opacity: 0.28;
	}

	.shadow-core {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(20, 16, 25, 0.45) 0%,
			rgba(88, 28, 135, 0.35) 30%,
			rgba(124, 58, 237, 0.18) 50%,
			rgba(0, 0, 0, 0) 70%
		);
		filter: blur(28px);
		transform: scale(1);
		transition: filter 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
	}

	/* When passing over components, blob diffuses heavily into the background */
	.shadow-core.deep-blur {
		filter: blur(55px);
		transform: scale(1.3);
		opacity: 0.7;
	}

	.ominous-aura.over-component {
		opacity: 0.18;
	}

	.pixel-grain {
		position: absolute;
		inset: 15%;
		border-radius: 50%;
		opacity: 0.2;
		background-image: radial-gradient(rgba(28, 25, 23, 0.3) 1px, transparent 1px);
		background-size: 3px 3px;
		filter: blur(0.5px);
		mix-blend-mode: overlay;
		pointer-events: none;
	}

	.ominous-aura.clicking .shadow-core {
		transform: scale(0.85);
		filter: blur(22px);
	}

	.cursor-dot {
		position: fixed;
		top: 0;
		left: 0;
		width: 6px;
		height: 6px;
		margin-top: -3px;
		margin-left: -3px;
		border-radius: 1px; /* Sharper geometric designer dot */
		background: #6d28d9;
		pointer-events: none;
		z-index: 9999;
		opacity: 0;
		box-shadow: 0 0 8px rgba(109, 40, 217, 0.3);
		transition: opacity 0.2s ease, width 0.2s cubic-bezier(0.16, 1, 0.3, 1),
			height 0.2s cubic-bezier(0.16, 1, 0.3, 1), margin 0.2s cubic-bezier(0.16, 1, 0.3, 1),
			background-color 0.2s ease, border-radius 0.2s ease;
		will-change: transform;
	}

	.cursor-dot.visible {
		opacity: 1;
	}

	.cursor-dot.hovering {
		width: 24px;
		height: 24px;
		margin-top: -12px;
		margin-left: -12px;
		background: rgba(109, 40, 217, 0.08);
		border: 1px solid rgba(109, 40, 217, 0.7);
		border-radius: 3px; /* Sharp corners on hover */
		backdrop-filter: blur(2px);
	}

	.cursor-dot.clicking {
		transform: scale(0.7);
	}

	@media (prefers-reduced-motion: reduce) {
		.ominous-aura,
		.cursor-dot {
			display: none !important;
		}
	}
</style>
