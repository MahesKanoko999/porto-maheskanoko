import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
    const db = platform?.env?.DB;

    if (!db) {
        // Fallback for local dev without D1
        console.log('Using fallback data - no D1 database');
        const fallbackData = {
            profile: {
                name: 'F. Maheswara Jevero Kanoko',
                title: 'Fullstack Web Developer | Technical Project Manager',
                bio: 'I build pixel-perfect, engaging, and accessible web experiences with 4+ years of expertise.',
                about: [
                    "Fullstack Web Developer & Technical Project Manager dengan pengalaman lebih dari 4 tahun dalam membangun dan mengelola sistem web end-to-end.",
                    "Menguasai pengembangan backend, REST API, optimasi performa, serta keamanan sistem. Terbiasa bekerja lintas tim menggunakan Git.",
                    "Passionate about Web3 & Blockchain Integration, UI/UX Design, and building scalable applications."
                ],
                social: {
                    github: 'https://github.com/maheskanoko',
                    linkedin: 'https://linkedin.com/in/maheskanoko',
                    instagram: 'https://instagram.com/maheskanoko',
                    email: 'mahesyt@gmail.com'
                }
            },
            experiences: [
                { id: 'exp-1', period: 'Jan 2021 — Sekarang', title: 'Freelance Fullstack Developer', company: 'Remote · Denpasar', companyUrl: '', description: 'Mengembangkan aplikasi web dan sistem backend sesuai kebutuhan klien. Membangun dashboard web, API, dan sistem manajemen data dengan JavaScript dan PHP.', tags: ['JavaScript', 'PHP', 'REST API', 'Git'] },
                { id: 'exp-2', period: 'Mar 2024 — Nov 2025', title: 'Fullstack Developer & Technical PM', company: 'PT Doka Digital Nusantara · Jakarta', companyUrl: '', description: 'Mengembangkan aplikasi fullstack dengan Web3 integration. Membangun dan memelihara sistem backend, database, dan REST API.', tags: ['PHP', 'JavaScript', 'Web3', 'REST API', 'DDoS Mitigation'] },
                { id: 'exp-3', period: 'Nov 2024 — Jan 2025', title: 'Assistant Developer', company: 'Anomali Community · Jakarta', companyUrl: '', description: 'Mengembangkan fitur sistem menggunakan JavaScript dan Lua. Berkolaborasi dengan Lead Developer menggunakan Git version control.', tags: ['JavaScript', 'Lua', 'Git'] },
                { id: 'exp-4', period: 'Des 2023 — Okt 2024', title: 'Technical PM & Lead Developer', company: 'Nusa Indah Community · Bandung', companyUrl: '', description: 'Memimpin pengembangan sistem backend dan database. Mengelola repository Git dan alur kolaborasi tim developer.', tags: ['Backend', 'Database', 'Git', 'Performance'] },
                { id: 'exp-5', period: 'Agu 2023 — Okt 2023', title: 'Technical PM & Lead Developer', company: 'Royal Community · Bandung', companyUrl: '', description: 'Mengelola pengembangan sistem server-side dan database. Mengatur workflow pengembangan berbasis Git.', tags: ['Server-side', 'Database', 'Git'] },
                { id: 'exp-6', period: 'Jun 2022 — Jul 2023', title: 'Project Manager & Fullstack Developer', company: 'Retro Community · Denpasar', companyUrl: '', description: 'Mengelola roadmap pengembangan sistem aplikasi. Mengembangkan backend, frontend, dan database.', tags: ['Backend', 'Frontend', 'Database', 'Git'] },
                { id: 'exp-7', period: 'Mar 2021 — Des 2022', title: 'Head Developer & Founder', company: 'Hopefully Community · Jakarta', companyUrl: '', description: 'Mengelola pengembangan sistem aplikasi web. Mengimplementasikan version control Git untuk kolaborasi tim.', tags: ['Web Development', 'Git', 'System Architecture'] },
                { id: 'exp-8', period: 'Jan 2024 — Des 2024', title: 'Ketua UKM Multimedia', company: 'Universitas Primakara · Denpasar', companyUrl: '', description: 'Memimpin dan mengelola organisasi UKM Multimedia. Mengkoordinasikan tim desain, konten, dan teknis multimedia.', tags: ['Leadership', 'Multimedia', 'Event Management'] },
                { id: 'exp-9', period: 'Jan 2024 — Des 2024', title: 'Komunikasi dan Informatika', company: 'BEM Universitas Primakara · Denpasar', companyUrl: '', description: 'Mengelola konten dan informasi digital organisasi. Mendukung kebutuhan teknis dan komunikasi internal.', tags: ['Digital Content', 'Communication'] },
                { id: 'exp-10', period: 'Jan 2023 — Des 2023', title: 'Staff Minat dan Bakat', company: 'HMTI Universitas Primakara · Denpasar', companyUrl: '', description: 'Mengelola dan mengkoordinasikan kegiatan pengembangan minat dan bakat mahasiswa Informatika.', tags: ['Event Planning', 'Coordination'] }
            ],
            projects: [
                { id: 'proj-1', title: 'Portfolio Website V2', description: 'Modern portfolio with SvelteKit and Cloudflare D1.', image: '', url: '#', github: '#', tags: ['SvelteKit', 'Cloudflare D1', 'Tailwind CSS'] },
                { id: 'proj-2', title: 'Web3 Digital Platform', description: 'Fullstack web with Web3 integration.', image: '', url: '#', github: '#', tags: ['Web3', 'Blockchain', 'JavaScript'] }
            ],
            certificates: [
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
            ]
        };
        console.log('Fallback certificates count:', fallbackData.certificates.length);
        return fallbackData;
    }

    try {
        // Fetch profile
        const profileRow = await db.prepare('SELECT * FROM profile WHERE id = 1').first();
        const profile = profileRow ? {
            ...profileRow,
            about: JSON.parse(profileRow.about as string || '[]'),
            social: JSON.parse(profileRow.social as string || '{}')
        } : null;

        // Fetch experiences
        const { results: expRows } = await db.prepare('SELECT * FROM experience ORDER BY sort_order ASC').all();
        const experiences = expRows.map((row: Record<string, unknown>) => ({
            ...row,
            tags: JSON.parse(row.tags as string || '[]'),
            companyUrl: row.company_url
        }));

        // Fetch projects
        const { results: projRows } = await db.prepare('SELECT * FROM projects ORDER BY sort_order ASC').all();
        const projects = projRows.map((row: Record<string, unknown>) => ({
            ...row,
            tags: JSON.parse(row.tags as string || '[]')
        }));

        // Fetch certificates
        let certificates: Record<string, unknown>[] = [];
        try {
            const { results: certRows } = await db.prepare('SELECT * FROM certificates ORDER BY sort_order ASC').all();
            certificates = certRows;
        } catch {
            // Table might not exist yet
            certificates = [];
        }

        return {
            profile,
            experiences,
            projects,
            certificates
        };
    } catch (error) {
        console.error('Failed to load data:', error);
        return {
            profile: null,
            experiences: [],
            projects: [],
            certificates: []
        };
    }
};
