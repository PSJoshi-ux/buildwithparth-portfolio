
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    intro: "Aspiring engineer with passion for robotics, AI, and automotive innovation.",
    projects: "Projects",
    resume: "Resume",
    bts: "Behind the Scenes",
    ai: "AI Models"
  },
  de: {
    intro: "Angehender Ingenieur mit Leidenschaft für Robotik, KI und Automobilinnovation.",
    projects: "Projekte",
    resume: "Lebenslauf",
    bts: "Hinter den Kulissen",
    ai: "KI-Modelle"
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans transition-all duration-300">
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Parth Joshi</h1>
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className="px-4 py-1 bg-white text-black rounded"
          >
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
        </div>

        <motion.div
          className="flex items-center gap-4 mb-10 bg-gray-900 p-4 rounded-xl shadow border border-gray-700"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
          />
          <p className="text-lg">
            I'm Parth — a passionate builder, future engineer, and creative mind. I love working on robotics, AI, and smart vehicle tech. This portfolio is a window into how I build things and why I love it.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: t.projects },
            { title: t.bts },
            { title: t.ai },
            { title: t.resume }
          ].map((section, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-4 rounded-xl shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
