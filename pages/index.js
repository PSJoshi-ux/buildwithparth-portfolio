
import React from "react";
import { useState } from "react";

const translations = {
  en: {
    intro: "Aspiring engineer with passion for robotics, AI, and automotive innovation. Welcome to my portfolio!",
    projects: "Projects",
    projectsText: "Explore all the projects I've worked on, including RC cars, AI models, and design builds.",
    bts: "Behind the Scenes",
    btsText: "Photo logs, sketches, progress shots, and detailed build processes of my work.",
    aiModels: "AI Models",
    aiModelsText: "Experiments with neural networks, visualizations, and AI toolkits.",
    resume: "Resume",
    resumeText: "Download my CV and get in touch via email or LinkedIn."
  },
  de: {
    intro: "Angehender Ingenieur mit Leidenschaft für Robotik, KI und Automobilinnovation. Willkommen in meinem Portfolio!",
    projects: "Projekte",
    projectsText: "Erkunde alle Projekte, an denen ich gearbeitet habe, einschließlich RC-Autos, KI-Modelle und Design-Arbeiten.",
    bts: "Hinter den Kulissen",
    btsText: "Fotoprotokolle, Skizzen, Fortschrittsaufnahmen und detaillierte Bauprozesse meiner Arbeiten.",
    aiModels: "KI-Modelle",
    aiModelsText: "Experimente mit neuronalen Netzwerken, Visualisierungen und KI-Tools.",
    resume: "Lebenslauf",
    resumeText: "Lade meinen Lebenslauf herunter und kontaktiere mich per E-Mail oder LinkedIn."
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans transition-all duration-300">
      <section className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Parth Joshi</h1>
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-gray-200 transition"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>
        </div>

        <p className="text-lg mb-6">{t.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-700 rounded-2xl shadow bg-gray-900">
            <h2 className="text-2xl font-semibold mb-2">{t.projects}</h2>
            <p>{t.projectsText}</p>
          </div>

          <div className="p-6 border border-gray-700 rounded-2xl shadow bg-gray-900">
            <h2 className="text-2xl font-semibold mb-2">{t.bts}</h2>
            <p>{t.btsText}</p>
          </div>

          <div className="p-6 border border-gray-700 rounded-2xl shadow bg-gray-900">
            <h2 className="text-2xl font-semibold mb-2">{t.aiModels}</h2>
            <p>{t.aiModelsText}</p>
          </div>

          <div className="p-6 border border-gray-700 rounded-2xl shadow bg-gray-900">
            <h2 className="text-2xl font-semibold mb-2">{t.resume}</h2>
            <p>{t.resumeText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
