import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, platform }) => {
    const db = platform?.env?.DB;
    const { id } = params;

    // Default projects for local dev
    const defaultProjects = [
        {
            id: 'proj-1',
            title: 'Portfolio Website V2',
            description: 'Modern portfolio with SvelteKit and Cloudflare D1.',
            content: `
## Overview
Portfolio website ini dibangun menggunakan teknologi modern untuk menampilkan karya dan pengalaman saya sebagai Fullstack Developer.

## Tech Stack
- **Frontend**: SvelteKit 5, Tailwind CSS, GSAP Animations
- **Backend**: Cloudflare D1 (SQLite), REST API
- **Deployment**: Cloudflare Pages

## Features
- ✅ Dark theme dengan spotlight effect
- ✅ Responsive design
- ✅ CMS untuk update konten
- ✅ Smooth scroll navigation
- ✅ Animated entrance effects

## Challenges & Solutions
Salah satu tantangan utama adalah integrasi dengan Cloudflare D1 untuk database. Solusinya adalah menggunakan migration files dan wrangler CLI untuk manage schema.
            `,
            image: '',
            url: '#',
            github: 'https://github.com/maheskanoko/portfolio',
            tags: ['SvelteKit', 'Cloudflare D1', 'Tailwind CSS', 'GSAP'],
            date: '2026'
        },
        {
            id: 'proj-2',
            title: 'Web3 Digital Platform',
            description: 'Fullstack web with Web3 and blockchain integration.',
            content: `
## Overview
Platform digital yang mengintegrasikan teknologi Web3 dan blockchain untuk pengalaman pengguna yang lebih aman dan transparan.

## Tech Stack
- **Frontend**: JavaScript, React
- **Backend**: Node.js, PHP
- **Blockchain**: Web3.js, Smart Contracts

## Features
- ✅ Wallet connection (MetaMask)
- ✅ NFT minting capabilities
- ✅ Smart contract integration
- ✅ Secure authentication

## Learning Points
Project ini memberikan pengalaman berharga dalam memahami cara kerja blockchain dan bagaimana mengintegrasikannya dengan aplikasi web tradisional.
            `,
            image: '',
            url: '#',
            github: '#',
            tags: ['Web3', 'Blockchain', 'JavaScript', 'React'],
            date: '2024-2025'
        }
    ];

    if (!db) {
        // Fallback for local dev
        const project = defaultProjects.find(p => p.id === id);
        if (!project) {
            return { project: null };
        }
        return { project };
    }

    try {
        const row = await db.prepare('SELECT * FROM projects WHERE id = ?').bind(id).first();
        if (!row) {
            return { project: null };
        }

        const project = {
            ...row,
            tags: JSON.parse(row.tags as string || '[]'),
            content: row.content || `## ${row.title}\n\n${row.description}`
        };

        return { project };
    } catch (error) {
        console.error('Failed to load project:', error);
        return { project: null };
    }
};
