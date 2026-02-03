<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		data: {
			project: {
				id: string;
				title: string;
				description: string;
				content: string;
				image: string;
				url: string;
				github: string;
				tags: string[];
				date?: string;
			} | null;
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	{#if data.project}
		<title>{data.project.title} | F. Maheswara Jevero Kanoko</title>
		<meta name="description" content={data.project.description} />
	{:else}
		<title>Project Not Found</title>
	{/if}
</svelte:head>

<!-- Mouse Spotlight -->
<div class="spotlight"></div>

<div class="project-page">
	<!-- Back Button -->
	<a href="/" class="back-link">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<line x1="19" y1="12" x2="5" y2="12"></line>
			<polyline points="12 19 5 12 12 5"></polyline>
		</svg>
		Back to Portfolio
	</a>

	{#if data.project}
		<article class="project-content">
			<!-- Header -->
			<header class="project-header">
				{#if data.project.date}
					<p class="project-date">{data.project.date}</p>
				{/if}
				<h1 class="project-title">{data.project.title}</h1>
				<p class="project-description">{data.project.description}</p>
				
				<!-- Tags -->
				<div class="tags">
					{#each data.project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>

				<!-- Links -->
				<div class="project-links">
					{#if data.project.url && data.project.url !== '#'}
						<a href={data.project.url} class="btn btn-primary" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
							Live Demo
						</a>
					{/if}
					{#if data.project.github && data.project.github !== '#'}
						<a href={data.project.github} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
							</svg>
							View Code
						</a>
					{/if}
				</div>
			</header>

			<!-- Image -->
			{#if data.project.image}
				<div class="project-image">
					<img src={data.project.image} alt={data.project.title} />
				</div>
			{/if}

			<!-- Content (Markdown-like) -->
			<div class="prose">
				{@html data.project.content.replace(/\n## /g, '<h2>').replace(/\n- /g, '<li>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}
			</div>
		</article>
	{:else}
		<div class="not-found">
			<h1>Project Not Found</h1>
			<p>The project you're looking for doesn't exist.</p>
			<a href="/" class="btn btn-primary">Back to Portfolio</a>
		</div>
	{/if}
</div>

<style>
	.project-page {
		max-width: 800px;
		margin: 0 auto;
		padding: 80px 24px;
		min-height: 100vh;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--color-primary);
		font-weight: 600;
		margin-bottom: 48px;
		transition: var(--transition);
	}

	.back-link:hover {
		transform: translateX(-4px);
	}

	.project-header {
		margin-bottom: 48px;
	}

	.project-date {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--color-primary);
		margin-bottom: 16px;
	}

	.project-title {
		font-size: 3rem;
		font-weight: 700;
		color: var(--color-text-lighter);
		margin-bottom: 16px;
		line-height: 1.2;
	}

	.project-description {
		font-size: 1.25rem;
		color: var(--color-text-light);
		margin-bottom: 24px;
		line-height: 1.6;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 32px;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		padding: 4px 12px;
		border-radius: 9999px;
		background-color: rgba(100, 255, 218, 0.1);
		color: var(--color-primary);
	}

	.project-links {
		display: flex;
		gap: 16px;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.875rem;
		transition: var(--transition);
	}

	.btn-primary {
		background-color: var(--color-primary);
		color: var(--color-bg);
	}

	.btn-primary:hover {
		background-color: rgba(100, 255, 218, 0.9);
		transform: translateY(-2px);
	}

	.btn-secondary {
		border: 1px solid var(--color-primary);
		color: var(--color-primary);
	}

	.btn-secondary:hover {
		background-color: rgba(100, 255, 218, 0.1);
		transform: translateY(-2px);
	}

	.project-image {
		margin-bottom: 48px;
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid var(--color-bg-lighter);
	}

	.project-image img {
		width: 100%;
		height: auto;
	}

	.prose {
		color: var(--color-text-light);
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.prose :global(h2) {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin: 48px 0 16px;
	}

	.prose :global(p) {
		margin-bottom: 16px;
	}

	.prose :global(li) {
		margin-left: 24px;
		margin-bottom: 8px;
	}

	.prose :global(strong) {
		color: var(--color-text-lighter);
	}

	.not-found {
		text-align: center;
		padding: 100px 0;
	}

	.not-found h1 {
		font-size: 2rem;
		color: var(--color-text-lighter);
		margin-bottom: 16px;
	}

	.not-found p {
		color: var(--color-text);
		margin-bottom: 32px;
	}

	@media (max-width: 768px) {
		.project-title {
			font-size: 2rem;
		}

		.project-description {
			font-size: 1rem;
		}

		.project-links {
			flex-direction: column;
		}
	}
</style>
