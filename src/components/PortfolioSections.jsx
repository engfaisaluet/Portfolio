import React from 'react';
import { FaAward, FaBolt, FaBrain, FaChartLine, FaFlask, FaGraduationCap, FaTools } from 'react-icons/fa';
import {
  profile, researchAreas, currentResearch, publications, projects,
  skills, experience, education, achievements,
} from '../data/portfolio';

const card = 'portfolio-card bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-100 dark:border-gray-700';
const button = 'inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2.5 font-semibold text-white shadow transition-colors';

function Section({ id, title, subtitle, children, wide = false }) {
  return <main id={id} className="portfolio-page min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 py-12">
    <div className={`${wide ? 'max-w-7xl' : 'max-w-5xl'} mx-auto pt-8`}>
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-black">{title}</h1>
        {subtitle && <p className="mt-4 mx-auto max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">{subtitle}</p>}
      </header>
      {children}
    </div>
  </main>;
}

export function AboutSection() {
  return <Section id="about" title="About Faisal Ali" subtitle="Mechanical engineering, renewable energy, and intelligent energy systems.">
    <div className={`${card} max-w-4xl mx-auto grid items-center gap-8 md:grid-cols-[220px_1fr]`}>
      <img src="/images/faisal-ali.jpg" alt="Faisal Ali" width="220" height="261" loading="lazy" className="mx-auto w-full max-w-[220px] rounded-xl object-cover object-top shadow-md" />
      <div>
        <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{profile.degree}</p>
        <p className="mt-2 text-lg">{profile.department}</p>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{profile.university}</p>
        <p className="mt-6 leading-8 text-gray-700 dark:text-gray-200">My work combines mechanical engineering with renewable-energy research, solar PV systems, energy management, machine learning, and predictive modeling. I am particularly interested in practical tools that support photovoltaic power prediction, renewable-energy planning, digital twins, hydrogen energy, net-zero emissions, and power-plant performance.</p>
      </div>
    </div>
  </Section>;
}

export function InterestsSection() {
  const icons = [FaSunIcon, FaBolt, FaChartLine, FaBrain, FaFlask, FaTools, FaSunIcon, FaBolt];
  return <Section id="interests" title="Research Areas" subtitle="Core areas connecting energy engineering, intelligent systems, and sustainability.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{researchAreas.map((area, index) => {
      const Icon = icons[index];
      return <article key={area} className={`${card} text-center`}><Icon className="mx-auto text-4xl text-blue-500" aria-hidden="true" /><h2 className="mt-4 text-lg font-bold">{area}</h2></article>;
    })}</div>
  </Section>;
}

function FaSunIcon(props) {
  return <span {...props} className={`${props.className || ''} inline-flex items-center justify-center`} aria-hidden="true">☀</span>;
}

export function ResearchSection() {
  return <Section id="research" title="Research & Publications" subtitle="Current work in solar energy, predictive modeling, energy management, and sustainable systems." wide>
    <section aria-labelledby="current-research-title">
      <h2 id="current-research-title" className="mb-6 text-2xl sm:text-3xl font-bold">Current Research</h2>
      <div className="grid md:grid-cols-2 gap-6">{currentResearch.map(item => <article key={item.title} className={card}><FaBrain className="text-3xl text-blue-500" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p></article>)}</div>
    </section>
    <section className="mt-12" aria-labelledby="publications-title">
      <h2 id="publications-title" className="mb-6 text-2xl sm:text-3xl font-bold">Publications</h2>
      <div className="space-y-5">{publications.map((publication, index) => <article key={publication.title} className={card}>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold"><span className="rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-blue-700 dark:text-blue-200">{index + 1}</span><span className="text-blue-600 dark:text-blue-300">{publication.status}</span></div>
        <h3 className="mt-4 text-xl sm:text-2xl font-bold italic leading-snug">{publication.title}</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{[publication.venue, publication.year].filter(Boolean).join(' · ')}</p>
        {publication.note && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{publication.note}</p>}
        {publication.url && <a href={publication.url} target="_blank" rel="noopener noreferrer" className={`${button} mt-5`}>View Published Paper</a>}
      </article>)}</div>
    </section>
  </Section>;
}

export function ProjectsSection() {
  return <Section id="projects" title="Relevant Projects" subtitle="Selected work in photovoltaic systems, power plants, climate-neutral energy, machine learning, and automation." wide>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{projects.map(project => <article key={project.title} className={`${card} flex flex-col`}>
      <p className="text-sm font-bold text-blue-600 dark:text-blue-300">{project.category}</p>
      <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
      <p className="mt-4 flex-1 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(technology => <span key={technology} className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs text-gray-700 dark:text-gray-200">{technology}</span>)}</div>
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${button} mt-6 gap-2`}><FaBolt aria-hidden="true" /> Open Live Platform</a>}
    </article>)}</div>
  </Section>;
}

export function SkillsSection() {
  return <Section id="skills" title="Technical Skills" subtitle="Engineering, energy, analytics, simulation, and project-delivery capabilities." wide>
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">{skills.map(group => <article key={group.title} className={card}>
      <h2 className="text-xl font-bold text-blue-600 dark:text-blue-300">{group.title}</h2>
      <ul className="mt-5 space-y-3">{group.items.map(item => <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-200"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />{item}</li>)}</ul>
    </article>)}</div>
  </Section>;
}

export function ExperienceSection() {
  return <Section id="experience" title="Research & Technical Experience" subtitle="Practical work in data science, predictive modeling, solar PV testing, and laboratory engineering.">
    <div className="space-y-7">{experience.map(item => <article key={item.role} className={card}>
      <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">{item.dates}</span>
      <h2 className="mt-4 text-2xl font-bold">{item.role}</h2>
      <p className="mt-1 font-semibold text-blue-600 dark:text-blue-300">{item.organization}</p>
      <ul className="mt-5 ml-5 list-disc space-y-2 leading-relaxed text-gray-600 dark:text-gray-300">{item.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
    </article>)}</div>
  </Section>;
}

export function EducationSection() {
  return <Section id="education" title="Education" subtitle="Academic foundation in mechanical engineering.">
    {education.map(item => <article key={item.degree} className={`${card} max-w-3xl mx-auto text-center`}><FaGraduationCap className="mx-auto text-5xl text-blue-500" aria-hidden="true" /><h2 className="mt-5 text-2xl sm:text-3xl font-bold">{item.degree}</h2><p className="mt-3 text-lg text-blue-600 dark:text-blue-300">{item.department}</p><p className="mt-2 text-gray-600 dark:text-gray-300">{item.institution}</p></article>)}
  </Section>;
}

export function AchievementsSection() {
  return <Section id="achievements" title="Achievements" subtitle="National recognition for engineering innovation, predictive modeling, and industrial automation.">
    <div className="grid md:grid-cols-2 gap-6">{achievements.map(item => <article key={item.title} className={card}><FaAward className="text-5xl text-amber-500" aria-hidden="true" /><h2 className="mt-5 text-2xl font-bold">{item.title}</h2><p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p></article>)}</div>
  </Section>;
}
