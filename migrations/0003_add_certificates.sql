-- Create certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  issuer TEXT,
  year TEXT,
  url TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Insert certificates from CV
INSERT INTO certificates (id, name, issuer, year, url, sort_order) VALUES
  ('cert-1', 'Belajar Dasar AI', 'Dicoding', '2026', '', 1),
  ('cert-2', 'Career Preparation', 'Primakara University', '2026', '', 2),
  ('cert-3', 'Pemrograman Python', 'Dicoding', '2026', '', 3),
  ('cert-4', 'BNSP Junior Mobile Programmer', 'BNSP', '2025', '', 4),
  ('cert-5', 'JavaScript', 'Dicoding', '2025', '', 5),
  ('cert-6', 'Micro Skill Digital Talent Scholarship', 'Kominfo', '2025', '', 6),
  ('cert-7', 'English Language Proficiency Test', 'Primakara University', '2025', '', 7),
  ('cert-8', 'Sponsorship XD Fiesta', 'XD Fiesta', '2025', '', 8),
  ('cert-9', 'Workshop Career Days Empowerment', 'Career Days', '2024', '', 9),
  ('cert-10', 'Webinar Membangun Bisnis Digital', 'National Webinar', '2024', '', 10),
  ('cert-11', 'Seminar Risk Management IT', 'IT Seminar', '2023', '', 11),
  ('cert-12', 'Digital Forensic In Investigative Auditing', 'Digital Forensic', '2022', '', 12),
  ('cert-13', 'Preparing Global Career Pathways In IT Industry', 'IT Industry', '2022', '', 13),
  ('cert-14', 'Gerakan Literasi Digital', 'STMIK', '2022', '', 14),
  ('cert-15', 'Data As The New Oil', 'Society 5.0', '2022', '', 15);
