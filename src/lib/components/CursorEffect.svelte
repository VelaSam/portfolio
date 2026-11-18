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

	// 3D Dodecahedron state (20 vertices, 12 regular pentagon faces)
	type FaceRender = { points: string; fill: string; z: number };
	let dodecaFaces = $state<FaceRender[]>([]);

	const PHI = (1 + Math.sqrt(5)) / 2;
	const INV_PHI = 1 / PHI;
	const NORM = Math.sqrt(3);

	const DODECA_VERTS: [number, number, number][] = (() => {
		const pts: [number, number, number][] = [];
		for (const sx of [-1, 1]) {
			for (const sy of [-1, 1]) {
				for (const sz of [-1, 1]) pts.push([sx / NORM, sy / NORM, sz / NORM]);
			}
		}
		for (const s1 of [-1, 1]) {
			for (const s2 of [-1, 1]) {
				pts.push([0, (s1 * INV_PHI) / NORM, (s2 * PHI) / NORM]);
				pts.push([(s1 * INV_PHI) / NORM, (s2 * PHI) / NORM, 0]);
				pts.push([(s2 * PHI) / NORM, 0, (s1 * INV_PHI) / NORM]);
			}
		}
		return pts;
	})();

	// Generate 12 outward-facing CCW pentagons from dual icosahedron face normals
	const DODECA_FACES: number[][] = (() => {
		const normals: [number, number, number][] = [];
		for (const s1 of [-1, 1]) {
			for (const s2 of [-1, 1]) {
				normals.push([0, s1 * PHI, s2]);
				normals.push([s2, 0, s1 * PHI]);
				normals.push([s1 * PHI, s2, 0]);
			}
		}
		return normals.map((nRaw) => {
			const nLen = Math.hypot(nRaw[0], nRaw[1], nRaw[2]);
			const n: [number, number, number] = [nRaw[0] / nLen, nRaw[1] / nLen, nRaw[2] / nLen];

			// Pick top 5 vertices closest to normal n
			const ranked = DODECA_VERTS.map((v, idx) => ({
				idx,
				v,
				d: v[0] * n[0] + v[1] * n[1] + v[2] * n[2]
			}))
				.sort((a, b) => b.d - a.d)
				.slice(0, 5);

			// Orthonormal tangent basis (u, w) with u x w = n
			const up: [number, number, number] = Math.abs(n[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
			const ux = up[1] * n[2] - up[2] * n[1];
			const uy = up[2] * n[0] - up[0] * n[2];
			const uz = up[0] * n[1] - up[1] * n[0];
			const uLen = Math.hypot(ux, uy, uz);
			const u: [number, number, number] = [ux / uLen, uy / uLen, uz / uLen];
			const w: [number, number, number] = [
				n[1] * u[2] - n[2] * u[1],
				n[2] * u[0] - n[0] * u[2],
				n[0] * u[1] - n[1] * u[0]
			];

			ranked.sort((a, b) => {
				const angA = Math.atan2(
					a.v[0] * w[0] + a.v[1] * w[1] + a.v[2] * w[2],
					a.v[0] * u[0] + a.v[1] * u[1] + a.v[2] * u[2]
				);
				const angB = Math.atan2(
					b.v[0] * w[0] + b.v[1] * w[1] + b.v[2] * w[2],
					b.v[0] * u[0] + b.v[1] * u[1] + b.v[2] * u[2]
				);
				return angA - angB;
			});

			return ranked.map((r) => r.idx);
		});
	})();

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

		// Physics & 3D dodecahedron rotation loop
		let angleY = 0.4;
		let time = 0;

		const loop = () => {
			const ease = 0.04; // Very slow and ominous
			followerX += (mouseX - followerX) * ease;
			followerY += (mouseY - followerY) * ease;

			time += 0.022;
			angleY += isHovering ? 0.045 : 0.018;
			const angleX = 0.38 + Math.sin(time) * 0.25;

			const cosY = Math.cos(angleY);
			const sinY = Math.sin(angleY);
			const cosX = Math.cos(angleX);
			const sinX = Math.sin(angleX);

			const transformed = DODECA_VERTS.map(([x, y, z]): [number, number, number] => {
				// Rotate Y
				const x1 = x * cosY + z * sinY;
				const z1 = -x * sinY + z * cosY;
				// Rotate X
				const y2 = y * cosX - z1 * sinX;
				const z2 = y * sinX + z1 * cosX;
				return [x1, y2, z2];
			});

			const faces: FaceRender[] = [];
			for (const idxs of DODECA_FACES) {
				const v0 = transformed[idxs[0]];
				const v1 = transformed[idxs[1]];
				const v2 = transformed[idxs[2]];

				// Edge vectors for outward normal
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
				const alpha = isHovering ? 0.32 + shade * 0.25 : 0.92;

				const proj = (v: [number, number, number]) => {
					const persp = 5.5 / (5.5 - v[2]);
					const px = 16 + v[0] * 11.2 * persp;
					const py = 16 + v[1] * 11.2 * persp;
					return `${px.toFixed(1)},${py.toFixed(1)}`;
				};

				const zAvg = idxs.reduce((sum, idx) => sum + transformed[idx][2], 0) / idxs.length;

				faces.push({
					points: idxs.map((idx) => proj(transformed[idx])).join(' '),
					fill: `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`,
					z: zAvg
				});
			}

			faces.sort((a, b) => a.z - b.z);
			dodecaFaces = faces;

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

	<!-- Sharp 3D purple dodecahedron cursor -->
	<div
		class="cursor-octa"
		class:visible={isVisible}
		class:hovering={isHovering}
		class:clicking={isClicking}
		style="transform: translate3d({mouseX}px, {mouseY}px, 0);"
	>
		<svg viewBox="0 0 32 32" class="octa-svg" aria-hidden="true">
			{#each dodecaFaces as face}
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
