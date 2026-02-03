<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Certificates from '$lib/components/Certificates.svelte';

	interface Props {
		data: {
			profile: {
				name: string;
				title: string;
				bio: string;
				about: string[];
				social: {
					github: string;
					linkedin: string;
					instagram: string;
					email: string;
				};
			} | null;
			experiences: Array<{
				id: string;
				period: string;
				title: string;
				company: string;
				companyUrl: string;
				description: string;
				tags: string[];
			}>;
			projects: Array<{
				id: string;
				title: string;
				description: string;
				image: string;
				url: string;
				github: string;
				tags: string[];
			}>;
			certificates: Array<{
				id: string;
				name: string;
				issuer: string;
				year: string;
				url?: string;
			}>;
		};
	}

	let { data }: Props = $props();

	let spotlightEl: HTMLDivElement;

	onMount(() => {
		// Mouse spotlight effect
		const handleMouseMove = (e: MouseEvent) => {
			document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
			document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
		};

		window.addEventListener('mousemove', handleMouseMove);

		// GSAP entrance animations
		gsap.from('.sidebar > div > *', {
			opacity: 0,
			y: 20,
			stagger: 0.1,
			duration: 0.6,
			ease: 'power2.out',
			delay: 0.2
		});

		// Animate social links separately - use 'to' to ensure they end up visible
		gsap.set('.social-links, .social-links a', { opacity: 0, y: 20 });
		gsap.to('.social-links', {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: 'power2.out',
			delay: 0.8
		});

		gsap.to('.social-links a', {
			opacity: 1,
			y: 0,
			stagger: 0.1,
			duration: 0.4,
			ease: 'power2.out',
			delay: 0.9
		});

		gsap.from('.content section', {
			opacity: 0,
			y: 30,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power2.out',
			delay: 0.4
		});

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<svelte:head>
	<title>{data.profile?.name || 'Portfolio'} | {data.profile?.title || 'Software Engineer'}</title>
	<meta name="description" content="{data.profile?.name || 'Developer'} is a {data.profile?.title || 'software engineer'} who builds accessible, pixel-perfect digital experiences for the web." />
</svelte:head>

<!-- Mouse Spotlight -->
<div class="spotlight" bind:this={spotlightEl}></div>

<!-- Main Layout -->
<div class="main-container">
	<!-- Left: Sidebar -->
	<Sidebar profile={data.profile} />

	<!-- Right: Content -->
	<main class="content">
		<About about={data.profile?.about} />
		<Experience experiences={data.experiences} />
		<Projects projects={data.projects} />
		<Certificates certificates={data.certificates} />

		<!-- Footer -->
		<footer class="footer">
			<p>
				Loosely designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer">Figma</a> and coded in 
				<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>. 
				Built with <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">SvelteKit</a> and 
				<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>, deployed with 
				<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>.
			</p>
		</footer>
	</main>
</div>

<style>
	.footer {
		margin-top: 100px;
		padding-bottom: 50px;
		font-size: 0.875rem;
		color: var(--color-text);
		max-width: 500px;
	}

	.footer a {
		color: var(--color-text-lighter);
		font-weight: 500;
	}

	.footer a:hover {
		color: var(--color-primary);
	}
</style>
