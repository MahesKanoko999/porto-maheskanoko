<script lang="ts">
	interface Experience {
		id: string;
		period: string;
		title: string;
		company: string;
		companyUrl: string;
		description: string;
		tags: string[];
	}

	interface Props {
		experiences?: Experience[];
	}

	let { experiences = [] }: Props = $props();

	const defaultExperiences: Experience[] = [
		{ id: 'exp-1', period: 'Jan 2021 — Sekarang', title: 'Freelance Fullstack Developer', company: 'Remote · Denpasar', companyUrl: '', description: 'Mengembangkan aplikasi web dan sistem backend sesuai kebutuhan klien.', tags: ['JavaScript', 'PHP', 'REST API', 'Git'] },
		{ id: 'exp-2', period: 'Mar 2024 — Nov 2025', title: 'Fullstack Developer & Technical PM', company: 'PT Doka Digital Nusantara', companyUrl: '', description: 'Mengembangkan aplikasi fullstack dengan Web3 integration.', tags: ['PHP', 'JavaScript', 'Web3', 'REST API'] },
		{ id: 'exp-3', period: 'Nov 2024 — Jan 2025', title: 'Assistant Developer', company: 'Anomali Community', companyUrl: '', description: 'Mengembangkan fitur sistem menggunakan JavaScript dan Lua.', tags: ['JavaScript', 'Lua', 'Git'] },
		{ id: 'exp-4', period: 'Des 2023 — Okt 2024', title: 'Technical PM & Lead Developer', company: 'Nusa Indah Community', companyUrl: '', description: 'Memimpin pengembangan sistem backend dan database.', tags: ['Backend', 'Database', 'Git'] },
		{ id: 'exp-5', period: 'Agu 2023 — Okt 2023', title: 'Technical PM & Lead Developer', company: 'Royal Community', companyUrl: '', description: 'Mengelola pengembangan sistem server-side dan database.', tags: ['Server-side', 'Database', 'Git'] },
		{ id: 'exp-6', period: 'Jun 2022 — Jul 2023', title: 'Project Manager & Fullstack Developer', company: 'Retro Community', companyUrl: '', description: 'Mengelola roadmap pengembangan sistem aplikasi.', tags: ['Backend', 'Frontend', 'Database'] },
		{ id: 'exp-7', period: 'Mar 2021 — Des 2022', title: 'Head Developer & Founder', company: 'Hopefully Community', companyUrl: '', description: 'Mengelola pengembangan sistem aplikasi web.', tags: ['Web Development', 'Git'] },
		{ id: 'exp-8', period: 'Jan 2024 — Des 2024', title: 'Ketua UKM Multimedia', company: 'Universitas Primakara', companyUrl: '', description: 'Memimpin dan mengelola organisasi UKM Multimedia.', tags: ['Leadership', 'Multimedia'] },
		{ id: 'exp-9', period: 'Jan 2024 — Des 2024', title: 'Komunikasi dan Informatika', company: 'BEM Universitas Primakara', companyUrl: '', description: 'Mengelola konten dan informasi digital organisasi.', tags: ['Digital Content', 'Communication'] },
		{ id: 'exp-10', period: 'Jan 2023 — Des 2023', title: 'Staff Minat dan Bakat', company: 'HMTI Universitas Primakara', companyUrl: '', description: 'Mengelola kegiatan pengembangan minat dan bakat mahasiswa.', tags: ['Event Planning', 'Coordination'] }
	];

	const items = experiences.length > 0 ? experiences : defaultExperiences;
</script>

<section id="experience">
	<h2 class="section-heading md:hidden">Experience</h2>
	
	<div class="experience-list">
		{#each items as exp}
			<a href={exp.companyUrl} class="card group" target="_blank" rel="noopener noreferrer">
				<div class="card-date">{exp.period}</div>
				<div class="card-content">
					<h3 class="card-title">
						{exp.title} · <span class="card-company">{exp.company}</span>
						<svg class="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="7" y1="17" x2="17" y2="7"/>
							<polyline points="7 7 17 7 17 17"/>
						</svg>
					</h3>
					<p class="card-description">{exp.description}</p>
					<div class="tags">
						{#each exp.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>

	<a href="/resume.pdf" class="resume-link" target="_blank" rel="noopener noreferrer">
		View Full Résumé
		<svg class="inline-block w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<line x1="7" y1="17" x2="17" y2="7"/>
			<polyline points="7 7 17 7 17 17"/>
		</svg>
	</a>
</section>

<style>
	.experience-list {
		display: flex;
		flex-direction: column;
	}

	.card-content {
		flex: 1;
	}

	.resume-link {
		display: inline-flex;
		align-items: center;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin-top: 24px;
		transition: var(--transition);
	}

	.resume-link:hover {
		color: var(--color-primary);
	}

	.resume-link:hover svg {
		transform: translate(4px, -4px);
	}

	.resume-link svg {
		transition: transform 0.2s ease;
	}
</style>
