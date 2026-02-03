<script lang="ts">
	import { onMount } from 'svelte';
	import SocialLinks from './SocialLinks.svelte';

	interface Profile {
		name: string;
		title: string;
		bio: string;
		social: {
			github: string;
			linkedin: string;
			instagram: string;
			email: string;
		};
	}

	interface Props {
		profile?: Profile;
	}

	let { profile = undefined }: Props = $props();

	let activeSection = $state('about');

	const navItems = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'certificates', label: 'Certificates' }
	];

	function handleNavClick(e: MouseEvent, sectionId: string) {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);

		navItems.forEach((item) => {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<header class="sidebar">
	<div>
		<!-- Greeting & Name -->
		<p class="font-mono text-[--color-primary] text-sm mb-6">Hi, my name is</p>
		<h1 class="text-5xl font-bold text-[--color-text-lighter] leading-tight" style="margin-bottom: 25px;">
			{profile?.name || 'Your Name'}
		</h1>
		
		<!-- Title with accent -->
		<h2 class="text-2xl font-semibold text-[--color-text-light] leading-relaxed" style="margin-bottom: 5px;">
			{profile?.title || 'Software Engineer'}
		</h2>
		
		<!-- Bio with better styling -->
		<p class="text-[--color-text] max-w-sm leading-relaxed text-base" style="margin-bottom: 50px;">
			{profile?.bio || 'I build pixel-perfect, engaging, and accessible digital experiences.'}
		</p>
		
		<!-- Decorative accent line -->
		<div class="w-16 h-[2px] bg-[--color-primary] mt-10 opacity-60"></div>

		<!-- Navigation -->
		<nav>
			<ul class="nav-list">
				{#each navItems as item}
					<li class="nav-item">
						<a
							href="#{item.id}"
							class:active={activeSection === item.id}
							onclick={(e) => handleNavClick(e, item.id)}
						>
							<span class="nav-line"></span>
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<!-- Social Links -->
	<SocialLinks profile={profile} />
</header>
