-- Update profile with CV data
UPDATE profile SET
  name = 'F. Maheswara Jevero Kanoko',
  title = 'Fullstack Web Developer | Technical Project Manager',
  bio = 'I build pixel-perfect, engaging, and accessible web experiences with 4+ years of expertise.',
  about = '["Fullstack Web Developer & Technical Project Manager dengan pengalaman lebih dari 4 tahun dalam membangun dan mengelola sistem web end-to-end. Menguasai pengembangan backend, REST API, optimasi performa, serta keamanan sistem.", "Terbiasa bekerja lintas tim menggunakan Git dan menangani proyek skala enterprise maupun komunitas. Currently studying at Universitas Primakara - Fakultas Teknologi Informasi dan Design.", "Passionate about Web3 & Blockchain Integration, UI/UX Design, and building scalable applications that make a difference."]',
  social = '{"github": "https://github.com/maheskanoko", "linkedin": "https://linkedin.com/in/maheskanoko", "instagram": "https://instagram.com/maheskanoko", "email": "mahesyt@gmail.com"}'
WHERE id = 1;

-- Clear existing experience
DELETE FROM experience;

-- Insert experience from CV
INSERT INTO experience (id, period, title, company, company_url, description, tags, sort_order)
VALUES 
  ('exp-1', 'Jan 2021 — Sekarang', 'Freelance Fullstack Developer', 'Remote · Denpasar', '', 'Mengembangkan aplikasi web dan sistem backend sesuai kebutuhan klien. Membangun dashboard web, API, dan sistem manajemen data. Melakukan optimasi performa, debugging, dan maintenance sistem.', '["JavaScript", "PHP", "REST API", "Git", "Server Management"]', 1),
  
  ('exp-2', 'Mar 2024 — Nov 2025', 'Fullstack Developer & Technical Project Manager', 'PT Doka Digital Nusantara · Jakarta', '', 'Mengembangkan aplikasi fullstack menggunakan PHP, JavaScript, dan framework modern. Membangun sistem backend, database, dan REST API. Mengembangkan Web3-based features dan mengimplementasikan proteksi keamanan sistem termasuk mitigasi DDoS.', '["PHP", "JavaScript", "Web3", "REST API", "DDoS Protection", "UI/UX"]', 2),
  
  ('exp-3', 'Nov 2024 — Jan 2025', 'Assistant Developer', 'Anomali Community · Jakarta', '', 'Mengembangkan fitur sistem menggunakan JavaScript dan Lua. Berkolaborasi dengan Lead Developer menggunakan Git version control. Melakukan testing, debugging, dan optimasi fitur.', '["JavaScript", "Lua", "Git", "Testing", "Debugging"]', 3),
  
  ('exp-4', 'Des 2023 — Okt 2024', 'Technical Project Manager & Lead Developer', 'Nusa Indah Community · Bandung', '', 'Memimpin pengembangan sistem backend dan database. Mengelola repository Git dan alur kolaborasi tim developer. Mengimplementasikan optimasi performa dan keamanan sistem.', '["Backend", "Database", "Git", "Team Management", "Security"]', 4),
  
  ('exp-5', 'Jun 2022 — Jul 2023', 'Project Manager & Fullstack Developer', 'Retro Community · Denpasar', '', 'Mengelola roadmap pengembangan sistem aplikasi. Mengembangkan backend, frontend dan database. Mengatur kolaborasi tim developer dan version control.', '["Fullstack", "Project Management", "Git", "Database"]', 5),
  
  ('exp-6', 'Mar 2021 — Des 2022', 'Head Developer & Founder', 'Hopefully Community · Jakarta', '', 'Mengelola pengembangan sistem aplikasi web. Mengimplementasikan version control Git untuk kolaborasi tim. Menjaga stabilitas, skalabilitas dan keberlanjutan sistem.', '["Web Development", "Git", "Team Leadership", "System Architecture"]', 6);

-- Clear existing projects
DELETE FROM projects;

-- Insert projects based on skills
INSERT INTO projects (id, title, description, image, url, github, tags, sort_order)
VALUES
  ('proj-1', 'Portfolio Website V2', 'Modern portfolio website built with SvelteKit, featuring CMS admin panel with Cloudflare D1 database integration. Dark theme with smooth GSAP animations.', '', 'https://portfolio-cms-6j5.pages.dev', 'https://github.com/maheskanoko', '["SvelteKit", "Cloudflare D1", "Tailwind CSS", "GSAP"]', 1),
  
  ('proj-2', 'Web3 Digital Platform', 'Fullstack web application with Web3 integration, blockchain features, and modern UI/UX design. Built with JavaScript and PHP backend.', '', '#', '#', '["Web3", "Blockchain", "JavaScript", "PHP", "MySQL"]', 2),
  
  ('proj-3', 'REST API Backend System', 'Scalable backend system with REST API architecture, authentication, and database management. Focus on performance optimization and security.', '', '#', '#', '["REST API", "Node.js", "Express.js", "MySQL", "Security"]', 3),
  
  ('proj-4', 'Community Management Platform', 'Full-featured platform for community management with real-time features, user roles, and collaborative tools built with React and Laravel.', '', '#', '#', '["React.js", "Laravel", "MySQL", "Git", "Team Collaboration"]', 4);
