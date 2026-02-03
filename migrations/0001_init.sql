-- Initial schema for portfolio CMS

-- Profile table (single row)
CREATE TABLE IF NOT EXISTS profile (
  id INTEGER PRIMARY KEY DEFAULT 1,
  name TEXT NOT NULL DEFAULT 'Your Name',
  title TEXT NOT NULL DEFAULT 'Software Engineer',
  bio TEXT DEFAULT '',
  about TEXT DEFAULT '[]',
  social TEXT DEFAULT '{}'
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id TEXT PRIMARY KEY,
  period TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  company_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch())
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  url TEXT DEFAULT '',
  github TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch())
);

-- Insert default profile
INSERT INTO profile (id, name, title, bio, about, social)
VALUES (
  1,
  'Boss Mahes',
  'Software Engineer',
  'I build pixel-perfect, engaging, and accessible digital experiences.',
  '["I''m a passionate software engineer who loves building things for the web. My interest in web development started back in 2015 when I decided to try creating custom themes — turns out hacking together HTML & CSS taught me a lot about coding!", "Fast-forward to today, and I''ve had the privilege of working at various companies, building software for diverse clients. My main focus these days is creating accessible, pixel-perfect user interfaces that not only look great but also provide seamless user experiences.", "When I''m not at the computer, I''m usually exploring new places, reading tech blogs, or experimenting with new technologies."]',
  '{"github": "https://github.com/maheskanoko", "linkedin": "https://linkedin.com/in/maheskanoko", "instagram": "https://instagram.com/maheskanoko", "email": "hello@maheskanoko.com"}'
);

-- Insert sample experience
INSERT INTO experience (id, period, title, company, company_url, description, tags, sort_order)
VALUES 
  ('exp-1', '2023 — Present', 'Senior Software Engineer', 'Tech Company', '#', 'Build and maintain critical components used to construct the company''s frontend. Work closely with cross-functional teams to implement best practices in web development.', '["JavaScript", "TypeScript", "React", "Svelte", "Node.js"]', 1),
  ('exp-2', '2021 — 2023', 'Software Engineer', 'Startup Inc', '#', 'Developed and maintained web applications for clients. Built design systems and component libraries for improved developer experience.', '["Vue.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]', 2),
  ('exp-3', '2019 — 2021', 'Frontend Developer', 'Digital Agency', '#', 'Created responsive, pixel-perfect websites from design mockups. Optimized site performance and implemented SEO best practices.', '["HTML", "CSS", "JavaScript", "WordPress", "PHP"]', 3);

-- Insert sample projects
INSERT INTO projects (id, title, description, image, url, github, tags, sort_order)
VALUES
  ('proj-1', 'Portfolio Website', 'A modern portfolio website built with SvelteKit and Tailwind CSS. Features smooth animations, dark theme, and responsive design.', '', '#', 'https://github.com/maheskanoko/portfolio', '["SvelteKit", "Tailwind CSS", "GSAP", "TypeScript"]', 1),
  ('proj-2', 'E-Commerce Platform', 'Full-stack e-commerce solution with product management, cart functionality, and payment integration.', '', '#', '#', '["Next.js", "Node.js", "PostgreSQL", "Stripe"]', 2),
  ('proj-3', 'Task Management App', 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.', '', '#', '#', '["React", "Firebase", "Material UI", "Redux"]', 3),
  ('proj-4', 'Weather Dashboard', 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.', '', '#', '#', '["Vue.js", "OpenWeather API", "Chart.js", "Leaflet"]', 4);
