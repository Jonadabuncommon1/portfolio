'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  name: string;
  repository: string;
  url?: string;
  role: string;
  description: string;
  technologies: string[];
  liveStatus: 'Live' | 'Preview' | 'In development';
}

const projects: Project[] = [
  {
    name: 'Master Point',
    repository: 'masterpoint-website',
    url: 'https://masterpoint-website-e5yo.vercel.app/',
    role: 'Lead Frontend Architecture',
    description:
      'A high-performance corporate platform engineered with Next.js, built to showcase business offerings with streamlined navigation and sub-second load times.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    liveStatus: 'Preview',
  },
  {
    name: 'Joe Tech',
    repository: 'Joe-Tech',
    url: 'https://joetech.shop',
    role: 'Full UI and Frontend Build',
    description:
      'A modern e-commerce storefront designed to maximise conversion with responsive product catalogues, seamless navigation, and clean product discovery.',
    technologies: ['TypeScript', 'React', 'CSS Modules'],
    liveStatus: 'Live',
  },
  {
    name: 'Onyi Writes',
    repository: 'OnyiWrites',
    url: 'https://onyiwrites.com',
    role: 'Design and Development',
    description:
      'A sleek literary publication platform built for long-form readability, minimal distraction, and fluid mobile reading experiences.',
    technologies: ['TypeScript', 'React', 'CSS'],
    liveStatus: 'Live',
  },
  {
    name: 'Sam Stones Resources',
    repository: 'samstones1',
    url: 'https://samstonesresources.com',
    role: 'Frontend Development',
    description:
      'A content and resource hub structured for intuitive discovery, fast search, and practical tool distribution.',
    technologies: ['TypeScript', 'HTML5', 'CSS'],
    liveStatus: 'Live',
  },
];

export default function Profile() {
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0].name);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBFBFB' }}>
      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: '#FA7921' }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight md:text-2xl"
            style={{ color: '#FA7921' }}
          >
            Jonadabuncommon1
          </Link>
          <a
            href="mailto:christopherjonadab24@gmail.com"
            className="text-sm font-semibold transition hover:opacity-80"
            style={{ color: '#1a1a1a' }}
          >
            christopherjonadab24@gmail.com
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-6">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#FA7921' }}
          >
            Frontend Engineer and Digital Builder
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl">
            Building fast, reliable web apps that turn visitors into users.
          </h1>
        </div>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#4a4a4a]">
          I engineer performant web applications using Next.js, React, and TypeScript. 
          My focus is clean architecture, intuitive UI interactions, and digital platforms that deliver measurable value.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:christopherjonadab24@gmail.com"
            className="rounded-lg px-6 py-3 font-semibold shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: '#FA7921', color: '#FBFBFB' }}
          >
            Start a Conversation
          </a>
          <Link
            href="https://github.com/Jonadabuncommon1"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-2 px-6 py-3 font-semibold transition hover:bg-black/5"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
          >
            View GitHub
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a] md:text-3xl">
          What I Bring to the Table
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#1a1a1a]">
              Modern Web Engineering
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Specialised in scalable frontend stacks with React, Next.js, and TypeScript. 
              I write clean, modular, and maintainable code with strict attention to performance and web standards.
            </p>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#1a1a1a]">
              UI Precision and User Experience
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              A website should look intentional and feel effortless. I bridge technical execution with design thinking, ensuring every screen is responsive, accessible, and frictionless.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a] md:text-3xl">
          Technical Toolkit
        </h2>

        <div className="flex flex-wrap gap-2.5">
          {[
            'TypeScript',
            'React',
            'Next.js',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'CSS Architecture',
            'Responsive Design',
            'Web Performance',
            'Git and GitHub',
            'REST APIs',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full px-4 py-1.5 text-sm font-semibold transition"
              style={{ backgroundColor: '#FDE74C', color: '#1a1a1a' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl">
            Selected Works
          </h2>
          <span className="text-sm text-[#4a4a4a]">Click to inspect tech and links</span>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.name;

            return (
              <div
                key={project.name}
                className="overflow-hidden rounded-xl border transition-all"
                style={{ borderColor: isExpanded ? '#FA7921' : '#e5e5e5' }}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.name)
                  }
                  className="w-full bg-white px-6 py-5 text-left transition hover:bg-orange-50/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FA7921]">
                        {project.role}
                      </span>
                      <h3 className="text-xl font-bold text-[#1a1a1a]">
                        {project.name}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm text-[#4a4a4a]">
                        {project.description}
                      </p>
                    </div>
                    <div
                      className="rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor:
                          project.liveStatus === 'Live' ? '#FA7921' : '#FDE74C',
                        color:
                          project.liveStatus === 'Live' ? '#FBFBFB' : '#1a1a1a',
                      }}
                    >
                      {project.liveStatus}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t bg-[#fafafa] px-6 py-5" style={{ borderColor: '#FA7921' }}>
                    <div className="mb-5">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white border border-black/10 px-2.5 py-1 text-xs font-medium text-[#1a1a1a]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                          style={{ backgroundColor: '#FA7921', color: '#FBFBFB' }}
                        >
                          Visit Live Product
                        </Link>
                      )}
                      <Link
                        href={`https://github.com/Jonadabuncommon1/${project.repository}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-black/20 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
                        style={{ color: '#1a1a1a' }}
                      >
                        Source Code
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div
          className="rounded-2xl px-8 py-12 text-center shadow-lg"
          style={{ backgroundColor: '#FA7921' }}
        >
          <h2 className="mb-3 text-3xl font-extrabold text-[#FBFBFB]">
            Have a project in mind? Let us build it.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-[#FBFBFB]/90">
            I am currently open to freelance opportunities, frontend contracts, and full-time engineering roles.
          </p>
          <a
            href="mailto:christopherjonadab24@gmail.com"
            className="inline-block rounded-lg px-8 py-3.5 font-bold transition hover:opacity-95"
            style={{ backgroundColor: '#FDE74C', color: '#1a1a1a' }}
          >
            Email christopherjonadab24@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-[#8a8a8a] md:px-10">
          <p>© 2026 Jonadab. Built with Next.js, React and TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}