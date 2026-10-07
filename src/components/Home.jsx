import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaGraduationCap } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const roles = ['Mechanical Engineer', 'Renewable Energy Researcher', 'Machine Learning Practitioner'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex(index => (index + 1) % roles.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  return <main className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 py-12">
    <div className="max-w-5xl mx-auto min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center">
      <div className="mb-7 rounded-full border-4 border-blue-500 bg-white p-1 shadow-xl dark:bg-gray-800">
        <img src="/images/faisal-ali.jpg" alt="Faisal Ali" width="144" height="144" fetchPriority="high" className="h-36 w-36 rounded-full object-cover object-top" />
      </div>
      <p className="mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Mechanical Engineering · Renewable Energy · AI</p>
      <h1 className="text-4xl sm:text-6xl font-black leading-tight">{profile.name}</h1>
      <p className="mt-4 min-h-9 text-xl sm:text-2xl font-bold text-blue-500" aria-live="polite">{roles[roleIndex]}</p>
      <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">{profile.positioning}</p>
      <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-500 dark:text-gray-400">{profile.degree} · {profile.university}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/research" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold text-white shadow transition-colors">Explore Research <FaArrowRight aria-hidden="true" /></Link>
        <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"><FaDownload aria-hidden="true" /> Download CV</a>
        <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"><FaGraduationCap aria-hidden="true" /> Google Scholar</a>
      </div>
    </div>
  </main>;
}
