<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let glitchText: HTMLElement;

	onMount(() => {
		// Glitch animation
		const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
		tl.to(glitchText, {
			duration: 0.1,
			skewX: 10,
			ease: 'power4.inOut'
		})
		.to(glitchText, {
			duration: 0.04,
			skewX: 0,
			ease: 'power4.inOut'
		})
		.to(glitchText, {
			duration: 0.04,
			opacity: 0.8
		})
		.to(glitchText, {
			duration: 0.04,
			opacity: 1
		})
		.to(glitchText, {
			duration: 0.04,
			skewX: -5
		})
		.to(glitchText, {
			duration: 0.04,
			skewX: 0
		});
	});
</script>

<svelte:head>
	<title>404 | Page Not Found</title>
</svelte:head>

<div class="error-container">
	<div class="error-content">
		<!-- Glitch 404 -->
		<h1 class="error-code" bind:this={glitchText}>
			<span class="glitch-layer" data-text="404">404</span>
			<span class="glitch-layer" data-text="404">404</span>
			404
		</h1>
		
		<h2 class="error-title">Page Not Found</h2>
		
		<p class="error-message">
			Oops! The page you're looking for doesn't exist or has been moved.
		</p>

		<div class="error-actions">
			<a href="/" class="btn-primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M19 12H5M12 19l-7-7 7-7"/>
				</svg>
				Back to Home
			</a>
			<a href="/admin" class="btn-secondary">
				Go to Admin
			</a>
		</div>

		<!-- Decorative Elements -->
		<div class="code-block">
			<span class="code-line"><span class="code-keyword">if</span> (page === <span class="code-string">"not_found"</span>) {'{'}</span>
			<span class="code-line">  <span class="code-keyword">return</span> <span class="code-number">404</span>;</span>
			<span class="code-line">{'}'}</span>
		</div>
	</div>

	<!-- Floating particles -->
	<div class="particles">
		{#each Array(20) as _, i}
			<div class="particle" style="--delay: {i * 0.2}s; --x: {Math.random() * 100}%; --duration: {3 + Math.random() * 4}s;"></div>
		{/each}
	</div>
</div>

<style>
	.error-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-bg);
		position: relative;
		overflow: hidden;
		padding: 40px;
	}

	.error-content {
		text-align: center;
		z-index: 10;
		max-width: 500px;
	}

	/* Glitch Effect */
	.error-code {
		font-size: clamp(8rem, 20vw, 12rem);
		font-weight: 900;
		color: var(--color-text-lighter);
		line-height: 1;
		margin-bottom: 24px;
		position: relative;
		display: inline-block;
	}

	.glitch-layer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.8;
	}

	.glitch-layer:first-child {
		color: var(--color-primary);
		animation: glitch-1 2s infinite linear alternate-reverse;
		clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
	}

	.glitch-layer:nth-child(2) {
		color: #ff006e;
		animation: glitch-2 3s infinite linear alternate-reverse;
		clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
	}

	@keyframes glitch-1 {
		0%, 100% { transform: translate(0); }
		20% { transform: translate(-3px, 3px); }
		40% { transform: translate(-3px, -3px); }
		60% { transform: translate(3px, 3px); }
		80% { transform: translate(3px, -3px); }
	}

	@keyframes glitch-2 {
		0%, 100% { transform: translate(0); }
		20% { transform: translate(3px, -3px); }
		40% { transform: translate(3px, 3px); }
		60% { transform: translate(-3px, -3px); }
		80% { transform: translate(-3px, 3px); }
	}

	.error-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin-bottom: 16px;
	}

	.error-message {
		color: var(--color-text);
		font-size: 1rem;
		margin-bottom: 32px;
		line-height: 1.6;
	}

	.error-actions {
		display: flex;
		gap: 16px;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 48px;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 14px 28px;
		background-color: var(--color-primary);
		color: var(--color-bg);
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.2s ease;
	}

	.btn-primary:hover {
		background-color: #5eead4;
		transform: translateY(-2px);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 14px 28px;
		background-color: transparent;
		border: 1px solid var(--color-bg-lighter);
		color: var(--color-text-lighter);
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.2s ease;
	}

	.btn-secondary:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	/* Code Block Decoration */
	.code-block {
		display: inline-block;
		text-align: left;
		padding: 20px 24px;
		background-color: var(--color-bg-light);
		border-radius: 8px;
		border: 1px solid var(--color-bg-lighter);
		font-family: var(--font-mono);
		font-size: 0.875rem;
	}

	.code-line {
		display: block;
		color: var(--color-text);
	}

	.code-keyword {
		color: #c792ea;
	}

	.code-string {
		color: #c3e88d;
	}

	.code-number {
		color: #f78c6c;
	}

	/* Floating Particles */
	.particles {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background-color: var(--color-primary);
		opacity: 0.3;
		border-radius: 50%;
		left: var(--x);
		animation: float var(--duration) ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(100vh) scale(0);
			opacity: 0;
		}
		10% {
			opacity: 0.3;
		}
		90% {
			opacity: 0.3;
		}
		100% {
			transform: translateY(-100vh) scale(1);
			opacity: 0;
		}
	}

	/* Responsive */
	@media (max-width: 480px) {
		.error-actions {
			flex-direction: column;
		}

		.btn-primary, .btn-secondary {
			width: 100%;
			justify-content: center;
		}
	}
</style>
