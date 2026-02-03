<script lang="ts">
	import { onMount } from 'svelte';

	interface Project {
		id: string;
		title: string;
		description: string;
		image: string;
		url: string;
		github: string;
		tags: string[];
	}

	let projects = $state<Project[]>([]);
	let editing = $state<Project | null>(null);
	let isNew = $state(false);
	let saving = $state(false);
	let tagInput = $state('');

	onMount(async () => {
		await loadData();
	});

	async function loadData() {
		const res = await fetch('/api/projects');
		if (res.ok) {
			projects = await res.json();
		}
	}

	function startNew() {
		isNew = true;
		editing = {
			id: '',
			title: '',
			description: '',
			image: '',
			url: '',
			github: '',
			tags: []
		};
	}

	function startEdit(project: Project) {
		isNew = false;
		editing = { ...project, tags: [...project.tags] };
	}

	function cancelEdit() {
		editing = null;
		isNew = false;
	}

	function addTag() {
		if (tagInput.trim() && editing) {
			editing.tags = [...editing.tags, tagInput.trim()];
			tagInput = '';
		}
	}

	function removeTag(index: number) {
		if (editing) {
			editing.tags = editing.tags.filter((_, i) => i !== index);
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!editing) return;

		saving = true;

		try {
			const res = await fetch('/api/projects', {
				method: isNew ? 'POST' : 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(editing)
			});

			if (res.ok) {
				await loadData();
				editing = null;
				isNew = false;
			}
		} catch {
			console.error('Error saving');
		}

		saving = false;
	}

	async function handleDelete(id: string) {
		if (!confirm('Delete this project?')) return;

		await fetch('/api/projects', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});

		await loadData();
	}
</script>

<svelte:head>
	<title>Projects | CMS</title>
</svelte:head>

<div class="page">
	<div class="page-header">
		<h1>Projects</h1>
		<button class="btn-primary" onclick={startNew}>+ Add</button>
	</div>

	<!-- Edit Form -->
	{#if editing}
		<form onsubmit={handleSubmit} class="edit-form">
			<label>
				<span class="label-small">Title</span>
				<input type="text" bind:value={editing.title} placeholder="Project Name" />
			</label>

			<label>
				<span class="label-small">Description</span>
				<textarea bind:value={editing.description} rows="3"></textarea>
			</label>

			<div class="grid-2">
				<label>
					<span class="label-small">Live URL</span>
					<input type="url" bind:value={editing.url} placeholder="https://" />
				</label>
				<label>
					<span class="label-small">GitHub</span>
					<input type="url" bind:value={editing.github} placeholder="https://github.com/..." />
				</label>
			</div>

			<label>
				<span class="label-small">Image URL (optional)</span>
				<input type="url" bind:value={editing.image} placeholder="https://..." />
			</label>

			<div class="tags-section">
				<span class="label-small">Tags</span>
				<div class="tags">
					{#each editing.tags as tag, index}
						<span class="tag">{tag} <button type="button" onclick={() => removeTag(index)}>×</button></span>
					{/each}
				</div>
				<div class="tag-input">
					<input type="text" bind:value={tagInput} placeholder="Add tag..." 
						onkeydown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())} />
					<button type="button" onclick={addTag}>Add</button>
				</div>
			</div>

			<div class="form-actions">
				<button type="button" class="btn-text" onclick={cancelEdit}>Cancel</button>
				<button type="submit" class="btn-primary" disabled={saving}>
					{saving ? 'Saving...' : 'Save'}
				</button>
			</div>
		</form>
	{/if}

	<!-- List -->
	<div class="list">
		{#each projects as project}
			<div class="list-item">
				<div class="list-info">
					<strong>{project.title}</strong>
					<p>{project.description.slice(0, 60)}...</p>
				</div>
				<div class="list-actions">
					<button class="btn-text" onclick={() => startEdit(project)}>Edit</button>
					<button class="btn-text danger" onclick={() => handleDelete(project.id)}>Delete</button>
				</div>
			</div>
		{/each}

		{#if projects.length === 0 && !editing}
			<p class="empty">No projects yet. Click "+ Add" to create one.</p>
		{/if}
	</div>
</div>

<style>
	.page {
		max-width: 600px;
	}

	.page-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
	}

	h1 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-text-lighter);
	}

	.edit-form {
		background: var(--color-bg-light);
		border: 1px solid var(--color-bg-lighter);
		border-radius: 8px;
		padding: 20px;
		margin-bottom: 24px;
	}

	.grid-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.label-small {
		display: block;
		font-size: 0.75rem;
		color: var(--color-text);
		margin-bottom: 4px;
	}

	label {
		display: block;
		margin-bottom: 12px;
	}

	input, textarea {
		width: 100%;
		padding: 10px 12px;
		background-color: var(--color-bg);
		border: 1px solid var(--color-bg-lighter);
		border-radius: 4px;
		color: var(--color-text-lighter);
		font-size: 0.875rem;
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.tags-section {
		margin-top: 12px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin: 8px 0;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 0.75rem;
		padding: 4px 10px;
		background: rgba(100, 255, 218, 0.1);
		color: var(--color-primary);
		border-radius: 999px;
	}

	.tag button {
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		padding: 0;
		font-size: 0.875rem;
	}

	.tag-input {
		display: flex;
		gap: 8px;
	}

	.tag-input input {
		flex: 1;
	}

	.tag-input button {
		padding: 8px 16px;
		background: var(--color-primary);
		border: none;
		border-radius: 4px;
		color: var(--color-bg);
		font-size: 0.75rem;
		cursor: pointer;
	}

	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid var(--color-bg-lighter);
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		background: var(--color-bg-light);
		border: 1px solid var(--color-bg-lighter);
		border-radius: 4px;
	}

	.list-info {
		flex: 1;
	}

	.list-info strong {
		display: block;
		font-size: 0.875rem;
		color: var(--color-text-lighter);
		margin-bottom: 4px;
	}

	.list-info p {
		font-size: 0.75rem;
		color: var(--color-text);
		margin: 0;
	}

	.list-actions {
		display: flex;
		gap: 12px;
	}

	.btn-primary {
		padding: 8px 16px;
		background-color: var(--color-primary);
		border: none;
		border-radius: 4px;
		color: var(--color-bg);
		font-size: 0.75rem;
		font-weight: 600;
		cursor: pointer;
	}

	.btn-text {
		background: none;
		border: none;
		color: var(--color-text);
		font-size: 0.75rem;
		cursor: pointer;
	}

	.btn-text:hover {
		color: var(--color-primary);
	}

	.btn-text.danger:hover {
		color: #ef4444;
	}

	.empty {
		text-align: center;
		color: var(--color-text);
		font-size: 0.875rem;
		padding: 32px;
	}

	@media (max-width: 480px) {
		.grid-2 {
			grid-template-columns: 1fr;
		}
	}
</style>
