<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = $state(-100);
	let mouseY = $state(-100);
	let followerX = $state(-100);
	let followerY = $state(-100);
	let isHovering = $state(false);
	let isClicking = $state(false);
	let isVisible = $state(false);
	let isTouch = $state(false);

	onMount(() => {
		// Detect touch device
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
			if (
				target &&
				(target.closest('a') ||
					target.closest('button') ||
					target.closest('input') ||
					target.closest('textarea') ||
					target.closest('.interactive'))
			) {
				isHovering = true;
			} else {
				isHovering = false;
			}
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		window.addEventListener('mouseover', handleOver, { passive: true });
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseleave', handleMouseLeave);
		document.addEventListener('mouseenter', handleMouseEnter);

		// Physics loop: Slow ominous trailing with smooth dampening
		const loop = () => {
			const ease = 0.09; // Slow ominous drag
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
	<!-- Ominous blurry shadow trailing behind -->
	<div
		class="ominous-aura"
		class:visible={isVisible}
		class:hovering={isHovering}
		class:clicking={isClicking}
		style="transform: translate3d({followerX}px, {followerY}px, 0);"
	>
		<div class="shadow-core"></div>
		<div class="pixel-grain"></div>
	</div>

	<!-- Precision magnetic dot -->
	<div
		class="cursor-dot"
		class:visible={isVisible}
		class:hovering={isHovering}
		class:clicking={isClicking}
		style="transform: translate3d({mouseX}px, {mouseY}px, 0);"
	></div>
{/if}

<style>
	.ominous-aura {
		position: fixed;
		top: 0;
		left: 0;
		width: 320px;
		height: 320px;
		margin-top: -160px;
		margin-left: -160px;
		pointer-events: none;
		z-index: 9998;
		opacity: 0;
		mix-blend-mode: multiply;
		transition: opacity 0.4s ease, transform 0.05s linear;
		will-change: transform;
	}

	.ominous-aura.visible {
		opacity: 0.85;
	}

	.shadow-core {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(20, 16, 25, 0.22) 0%,
			rgba(88, 28, 135, 0.16) 35%,
			rgba(124, 58, 237, 0.08) 55%,
			rgba(0, 0, 0, 0) 70%
		);
		filter: blur(28px);
		transform: scale(1);
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
	}

	.pixel-grain {
		position: absolute;
		inset: 20%;
		border-radius: 50%;
		opacity: 0.35;
		background-image: radial-gradient(rgba(28, 25, 23, 0.25) 1px, transparent 1px);
		background-size: 4px 4px;
		filter: blur(1px);
		mix-blend-mode: overlay;
		pointer-events: none;
	}

	.ominous-aura.hovering .shadow-core {
		transform: scale(1.4);
		filter: blur(34px);
		background: radial-gradient(
			circle,
			rgba(109, 40, 217, 0.28) 0%,
			rgba(20, 16, 25, 0.25) 40%,
			rgba(124, 58, 237, 0.12) 60%,
			rgba(0, 0, 0, 0) 75%
		);
	}

	.ominous-aura.clicking .shadow-core {
		transform: scale(0.9);
		filter: blur(20px);
	}

	.cursor-dot {
		position: fixed;
		top: 0;
		left: 0;
		width: 8px;
		height: 8px;
		margin-top: -4px;
		margin-left: -4px;
		border-radius: 50%;
		background: #6d28d9;
		pointer-events: none;
		z-index: 9999;
		opacity: 0;
		box-shadow: 0 0 10px rgba(109, 40, 217, 0.4);
		transition: opacity 0.2s ease, width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
			height 0.25s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s cubic-bezier(0.16, 1, 0.3, 1),
			background-color 0.25s ease;
		will-change: transform;
	}

	.cursor-dot.visible {
		opacity: 1;
	}

	.cursor-dot.hovering {
		width: 32px;
		height: 32px;
		margin-top: -16px;
		margin-left: -16px;
		background: rgba(109, 40, 217, 0.12);
		border: 1.5px solid rgba(109, 40, 217, 0.6);
		backdrop-filter: blur(2px);
	}

	.cursor-dot.clicking {
		transform: scale(0.75);
	}

	@media (prefers-reduced-motion: reduce) {
		.ominous-aura,
		.cursor-dot {
			display: none !important;
		}
	}
</style>
