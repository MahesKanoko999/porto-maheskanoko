<script lang="ts">
	interface Project {
		id: string;
		title: string;
		description: string;
		image: string;
		url: string;
		github: string;
		tags: string[];
	}

	interface Props {
		projects?: Project[];
	}

	let { projects = [] }: Props = $props();

	const defaultProjects: Project[] = [
		{
			id: '1',
			title: 'Portfolio Website',
			description: 'A modern portfolio website built with SvelteKit and Tailwind CSS. Features smooth animations, dark theme, and responsive design.',
			image: '',
			url: '#',
			github: 'https://github.com/maheskanoko/portfolio',
			tags: ['SvelteKit', 'Tailwind CSS', 'GSAP', 'TypeScript']
		},
		{
			id: '2',
			title: 'E-Commerce Platform',
			description: 'Full-stack e-commerce solution with product management, cart functionality, and payment integration.',
			image: '',
			url: '#',
			github: '#',
			tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']
		}
	];

	const items = projects.length > 0 ? projects : defaultProjects;
</script>

<section id="projects">
	<h2 class="section-heading md:hidden">Projects</h2>
	
	<div class="projects-list">
		{#each items as project}
			<a href="/projects/{project.id}" class="card group">
				<div class="project-image">
					{#if project.image}
						<img src={project.image} alt={project.title} />
					{:else}
						<div class="image-placeholder">
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
								<circle cx="8.5" cy="8.5" r="1.5"/>
								<polyline points="21 15 16 10 5 21"/>
							</svg>
						</div>
					{/if}
				</div>
				<div class="card-content">
					<h3 class="card-title">
						{project.title}
						<svg class="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"/>
							<polyline points="7 7 17 7 17 17"/>
						</svg>
					</h3>
					<p class="card-description">{project.description}</p>
					<div class="tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>

	<a href="https://github.com/maheskanoko" class="archive-link" target="_blank" rel="noopener noreferrer">
		View Full Project Archive
		<svg class="inline-block w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<line x1="7" y1="17" x2="17" y2="7"/>
			<polyline points="7 7 17 7 17 17"/>
		</svg>
	</a>
</section>

<style>
	.projects-list {
		display: flex;
		flex-direction: column;
	}

	.card {
		grid-template-columns: 120px 1fr;
	}

	.project-image {
		width: 100px;
		height: 60px;
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid var(--color-bg-lighter);
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.image-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-bg-light);
		color: var(--color-text);
	}

	.card-content {
		flex: 1;
	}

	.archive-link {
		display: inline-flex;
		align-items: center;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin-top: 24px;
		transition: var(--transition);
	}

	.archive-link:hover {
		color: var(--color-primary);
	}

	.archive-link:hover svg {
		transform: translate(4px, -4px);
	}

	.archive-link svg {
		transition: transform 0.2s ease;
	}

	@media (max-width: 768px) {
		.card {
			grid-template-columns: 1fr;
		}

		.project-image {
			width: 100%;
			height: 120px;
			margin-bottom: 12px;
		}
	}
</style>
