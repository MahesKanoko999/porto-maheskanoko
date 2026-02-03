<script lang="ts">
  interface Certificate {
    id: string;
    name: string;
    issuer: string;
    year: string;
    url?: string;
  }

  interface Props {
    certificates?: Certificate[];
  }

  let { certificates = [] }: Props = $props();

  const defaultCertificates: Certificate[] = [
    { id: 'cert-1', name: 'Belajar Dasar AI', issuer: 'Dicoding', year: '2026' },
    { id: 'cert-2', name: 'Career Preparation', issuer: 'Primakara University', year: '2026' },
    { id: 'cert-3', name: 'Pemrograman Python', issuer: 'Dicoding', year: '2026' },
    { id: 'cert-4', name: 'BNSP Junior Mobile Programmer', issuer: 'BNSP', year: '2025' },
    { id: 'cert-5', name: 'JavaScript Certificate', issuer: 'Dicoding', year: '2025' },
    { id: 'cert-6', name: 'Micro Skill Digital Talent Scholarship', issuer: 'Kominfo', year: '2025' },
    { id: 'cert-7', name: 'English Language Proficiency Test', issuer: 'Primakara University', year: '2025' },
    { id: 'cert-8', name: 'Sponsorship XD Fiesta', issuer: 'XD Fiesta', year: '2025' },
    { id: 'cert-9', name: 'Workshop Career Days Empowerment', issuer: 'Career Days', year: '2024' },
    { id: 'cert-10', name: 'Webinar Membangun Bisnis Digital', issuer: 'National Webinar', year: '2024' },
    { id: 'cert-11', name: 'Seminar Risk Management IT', issuer: 'IT Seminar', year: '2023' },
    { id: 'cert-12', name: 'Digital Forensic In Investigative Auditing', issuer: 'Digital Forensic', year: '2022' },
    { id: 'cert-13', name: 'Preparing Global Career Pathways', issuer: 'IT Industry', year: '2022' },
    { id: 'cert-14', name: 'Gerakan Literasi Digital', issuer: 'STMIK', year: '2022' },
    { id: 'cert-15', name: 'Data As The New Oil', issuer: 'Society 5.0', year: '2022' }
  ];

  let items = $derived(certificates && certificates.length > 0 ? certificates : defaultCertificates);
</script>

<section id="certificates">
  <h2 class="section-heading">Certificates</h2>
  
  <div class="certificates-grid">
    {#each items as cert}
      <div class="cert-card">
        <div class="cert-year">{cert.year}</div>
        <div class="cert-content">
          <h3 class="cert-name">
            {#if cert.url}
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            {:else}
              {cert.name}
            {/if}
          </h3>
          <p class="cert-issuer">{cert.issuer}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .certificates-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .cert-card {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 12px;
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .cert-card:hover {
    background-color: rgba(100, 255, 218, 0.05);
  }

  .cert-year {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    color: var(--color-text);
    padding-top: 2px;
  }

  .cert-name {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-lighter);
    margin-bottom: 4px;
    transition: color 0.25s ease;
  }

  .cert-card:hover .cert-name {
    color: var(--color-primary);
  }

  .cert-name a {
    color: inherit;
  }

  .cert-name a:hover {
    color: var(--color-primary);
  }

  .cert-issuer {
    font-size: 0.85rem;
    color: var(--color-text);
  }
</style>
