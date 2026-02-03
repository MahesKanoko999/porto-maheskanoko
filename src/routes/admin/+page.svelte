<script lang="ts">
	import { onMount } from 'svelte';

	interface Profile {
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
	}

	let profile = $state<Profile>({
		name: '',
		title: '',
		bio: '',
		about: [''],
		social: {
			github: '',
			linkedin: '',
			instagram: '',
			email: ''
		}
	});

	let saving = $state(false);
	let message = $state('');

	onMount(async () => {
		const res = await fetch('/api/profile');
		if (res.ok) {
			profile = await res.json();
		}
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		saving = true;
		message = '';

		try {
			const res = await fetch('/api/profile', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(profile)
			});

			if (res.ok) {
				message = 'Saved!';
			} else {
				message = 'Failed to save';
			}
		} catch {
			message = 'Error saving';
		}

		saving = false;
		setTimeout(() => message = '', 2000);
	}

	function addParagraph() {
		profile.about = [...profile.about, ''];
	}

	function removeParagraph(index: number) {
		profile.about = profile.about.filter((_, i) => i !== index);
	}
</script>

<svelte:head>
	<title>Profile | CMS</title>
</svelte:head>

<div class="page">
	<h1>Profile</h1>

	<form onsubmit={handleSubmit}>
		<!-- Basic Info -->
		<section class="section">
			<label>
				<span class="label">Name</span>
				<input type="text" bind:value={profile.name} />
			</label>

			<label>
				<span class="label">Title</span>
				<input type="text" bind:value={profile.title} />
			</label>

			<label>
				<span class="label">Short Bio</span>
				<input type="text" bind:value={profile.bio} />
			</label>
		</section>

		<!-- About Paragraphs -->
		<section class="section">
			<div class="section-header">
				<span class="label">About Section</span>
				<button type="button" class="btn-text" onclick={addParagraph}>+ Add</button>
			</div>

			{#each profile.about as _, index}
				<div class="input-row">
					<textarea bind:value={profile.about[index]} rows="3"></textarea>
					{#if profile.about.length > 1}
						<button type="button" class="btn-remove" onclick={() => removeParagraph(index)}>×</button>
					{/if}
				</div>
			{/each}
		</section>

		<!-- Social Links -->
		<section class="section">
			<span class="label">Social Links</span>
			
			<div class="grid-2">
				<label>
					<span class="label-small">GitHub</span>
					<input type="url" bind:value={profile.social.github} />
				</label>

				<label>
					<span class="label-small">LinkedIn</span>
					<input type="url" bind:value={profile.social.linkedin} />
				</label>

				<label>
					<span class="label-small">Instagram</span>
					<input type="url" bind:value={profile.social.instagram} />
				</label>

				<label>
					<span class="label-small">Email</span>
					<input type="email" bind:value={profile.social.email} />
				</label>
			</div>
		</section>

		<!-- Submit -->
		<div class="actions">
			{#if message}
				<span class="message">{message}</span>
			{/if}
			<button type="submit" class="btn-primary" disabled={saving}>
				{saving ? 'Saving...' : 'Save'}
			</button>
		</div>
	</form>
</div>

<style>
	.page {
		max-width: 600px;
	}

	h1 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin-bottom: 32px;
	}

	.section {
		margin-bottom: 32px;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}

	.label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-text);
		margin-bottom: 8px;
	}

	.label-small {
		display: block;
		font-size: 0.75rem;
		color: var(--color-text);
		margin-bottom: 4px;
	}

	input, textarea {
		width: 100%;
		padding: 12px 16px;
		background-color: var(--color-bg-light);
		border: 1px solid var(--color-bg-lighter);
		border-radius: 4px;
		color: var(--color-text-lighter);
		font-size: 0.875rem;
		margin-bottom: 12px;
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.grid-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.grid-2 input {
		margin-bottom: 0;
	}

	.input-row {
		position: relative;
	}

	.btn-text {
		background: none;
		border: none;
		color: var(--color-primary);
		font-size: 0.75rem;
		cursor: pointer;
	}

	.btn-remove {
		position: absolute;
		top: 8px;
		right: 8px;
		background: none;
		border: none;
		color: var(--color-text);
		font-size: 1.25rem;
		cursor: pointer;
		opacity: 0.5;
	}

	.btn-remove:hover {
		opacity: 1;
		color: #ef4444;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 12px;
		padding-top: 16px;
		border-top: 1px solid var(--color-bg-lighter);
	}

	.btn-primary {
		padding: 10px 24px;
		background-color: var(--color-primary);
		border: none;
		border-radius: 4px;
		color: var(--color-bg);
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
	}

	.btn-primary:hover {
		opacity: 0.9;
	}

	.btn-primary:disabled {
		opacity: 0.5;
	}

	.message {
		font-size: 0.875rem;
		color: var(--color-primary);
	}

	@media (max-width: 480px) {
		.grid-2 {
			grid-template-columns: 1fr;
		}
	}
</style>
