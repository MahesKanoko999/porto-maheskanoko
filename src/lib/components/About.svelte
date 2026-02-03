<script lang="ts">
	interface Props {
		about?: string[];
	}

	let { about = [] }: Props = $props();

	const defaultAbout = [
		"I'm a passionate software engineer who loves building things for the web. My interest in web development started back in 2015 when I decided to try creating custom themes — turns out hacking together HTML & CSS taught me a lot about coding!",
		"Fast-forward to today, and I've had the privilege of working at various companies, building software for diverse clients. My main focus these days is creating accessible, pixel-perfect user interfaces that not only look great but also provide seamless user experiences.",
		"When I'm not at the computer, I'm usually exploring new places, reading tech blogs, or experimenting with new technologies."
	];

	const paragraphs = about.length > 0 ? about : defaultAbout;
</script>

<section id="about">
	<h2 class="section-heading md:hidden">About</h2>
	<div class="about-content">
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>

<style>
	.about-content {
		font-size: 1rem;
		line-height: 1.75;
	}

	.about-content p {
		margin-bottom: 1.5rem;
	}

	.about-content :global(a) {
		color: var(--color-text-lighter);
		font-weight: 500;
		position: relative;
	}

	.about-content :global(a)::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: var(--color-primary);
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.3s ease-out;
	}

	.about-content :global(a):hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.about-content :global(a):hover {
		color: var(--color-primary);
	}
</style>
