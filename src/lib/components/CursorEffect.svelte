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

	// 3D Octahedron state
	type FaceRender = { points: string; fill: string; z: number };
	let octaFaces = $state<FaceRender[]>([]);

	const OCTA_VERTS: [number, number, number][] = [
		[0, -1, 0], // top
		[0, 1, 0],  // bottom
		[1, 0, 0],  // right
		[0, 0, 1],  // front
		[-1, 0, 0], // left
		[0, 0, -1]  // back
	];

	const OCTA_FACES: [number, number, number][] = [
		[0, 2, 3],
		[0, 5, 2],
		[0, 4, 5],
		[0, 3, 4],
		[1, 3, 2],
		[1, 2, 5],
		[1, 5, 4],
		[1, 4, 3]
	];

	const LIGHT_DIR: [number, number, number] = [0.42, -0.58, 0.7];

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

		// Physics & 3D octahedron rotation loop
		let angleY = 0.4;
		let time = 0;

		const loop = () => {
			const ease = 0.04; // Very slow and ominous
			followerX += (mouseX - followerX) * ease;
			followerY += (mouseY - followerY) * ease;

			time += 0.025;
			angleY += isHovering ? 0.05 : 0.022;
			const angleX = 0.42 + Math.sin(time) * 0.22;

			const cosY = Math.cos(angleY);
			const sinY = Math.sin(angleY);
			const cosX = Math.cos(angleX);
			const sinX = Math.sin(angleX);

			const transformed = OCTA_VERTS.map(([x, y, z]): [number, number, number] => {
				// Rotate Y
				const x1 = x * cosY + z * sinY;
				const z1 = -x * sinY + z * cosY;
				// Rotate X
				const y2 = y * cosX - z1 * sinX;
				const z2 = y * sinX + z1 * cosX;
				return [x1, y2, z2];
			});

			const faces: FaceRender[] = [];
			for (const [i0, i1, i2] of OCTA_FACES) {
				const v0 = transformed[i0];
				const v1 = transformed[i1];
				const v2 = transformed[i2];

				// Edge vectors for normal
				const ux = v1[0] - v0[0];
				const uy = v1[1] - v0[1];
				const uz = v1[2] - v0[2];
				const vx = v2[0] - v0[0];
				const vy = v2[1] - v0[1];
				const vz = v2[2] - v0[2];

				const nx = uy * vz - uz * vy;
				const ny = uz * vx - ux * vz;
				const nz = ux * vy - uy * vx;

				// Back-face culling
				if (nz <= 0) continue;

				const nLen = Math.hypot(nx, ny, nz) || 1;
				const dot = (nx * LIGHT_DIR[0] + ny * LIGHT_DIR[1] + nz * LIGHT_DIR[2]) / nLen;
				const shade = Math.max(0.15, Math.min(1, (dot + 1) * 0.5));

				// Purple facet palette
				const r = Math.round(76 + shade * 78);   // 76..154
				const g = Math.round(29 + shade * 74);   // 29..103
				const b = Math.round(149 + shade * 96);  // 149..245
				const alpha = isHovering ? 0.35 + shade * 0.25 : 0.92;

				const proj = (v: [number, number, number]) => {
					const persp = 3.4 / (3.4 - v[2]);
					const px = 16 + v[0] * 10.5 * persp;
					const py = 16 + v[1] * 10.5 * persp;
					return `${px.toFixed(1)},${py.toFixed(1)}`;
				};

				faces.push({
					points: `${proj(v0)} ${proj(v1)} ${proj(v2)}`,
					fill: `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`,
					z: (v0[2] + v1[2] + v2[2]) / 3
				});
			}

			faces.sort((a, b) => a.z - b.z);
			octaFaces = faces;

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

	<!-- Sharp 3D purple octahedron cursor -->
	<div
		class="cursor-octa"
		class:visible={isVisible}
		class:hovering={isHovering}
		class:clicking={isClicking}
		style="transform: translate3d({mouseX}px, {mouseY}px, 0);"
	>
		<svg viewBox="0 0 32 32" class="octa-svg" aria-hidden="true">
			{#each octaFaces as face}
				<polygon
					points={face.points}
					fill={face.fill}
					stroke="rgba(255, 255, 255, 0.45)"
					stroke-width="0.65"
					stroke-linejoin="round"
				/>
			{/each}
		</svg>
	</div>
{/if}

<style>
	/* Hide native OS cursor on desktop when custom purple square cursor is active */
	@media (pointer: fine) and (prefers-reduced-motion: no-preference) {
		:global(html),
		:global(body),
		:global(*) {
			cursor: none !important;
		}
	}

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

	.cursor-octa {
		position: fixed;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
		margin-top: -10px;
		margin-left: -10px;
		pointer-events: none;
		z-index: 9999;
		opacity: 0;
		filter: drop-shadow(0 2px 6px rgba(109, 40, 217, 0.35));
		transition:
			opacity 0.2s ease,
			width 0.22s cubic-bezier(0.16, 1, 0.3, 1),
			height 0.22s cubic-bezier(0.16, 1, 0.3, 1),
			margin 0.22s cubic-bezier(0.16, 1, 0.3, 1),
			scale 0.12s ease;
		will-change: transform;
	}

	.octa-svg {
		width: 100%;
		height: 100%;
		display: block;
		overflow: visible;
	}

	.cursor-octa.visible {
		opacity: 1;
	}

	.cursor-octa.hovering {
		width: 28px;
		height: 28px;
		margin-top: -14px;
		margin-left: -14px;
	}

	.cursor-octa.clicking {
		scale: 0.75;
	}

	@media (prefers-reduced-motion: reduce) {
		.ominous-aura,
		.cursor-octa {
			display: none !important;
		}
	}
</style>
