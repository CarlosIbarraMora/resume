import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, GraduationCap, Code2, FolderGit2, Terminal } from "lucide-react";

const skills = {
  "backend.json": ["Java", "Spring Boot", "Python", "C#", "Node.js"],
  "frontend.json": ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
  "data.json": ["SQL", "PostgreSQL", "MySQL"],
};

const experience = [
  {
    hash: "a1e93f2",
    date: "2024 — presente",
    title: "Desarrollador freelance",
    org: "Estudio 301",
    diff: [
      { type: "+", text: "Desarrollo de sitios y aplicaciones web con React y JavaScript" },
      { type: "+", text: "Maquetación e interfaces con HTML, CSS y Tailwind CSS" },
      { type: "+", text: "Entrega directa a clientes, de diseño a despliegue" },
    ],
  },
];

const projects = [
  {
    name: "LeetArena",
    tag: "proyecto personal",
    desc:
      "Plataforma competitiva de programación inspirada en chess.com, pero para retos estilo LeetCode: los usuarios se enfrentan en tiempo real resolviendo problemas.",
    stack: ["Java", "Spring Boot", "IA para análisis de soluciones"],
  },
];

export default function Resume() {
  const [activeFile, setActiveFile] = useState("about.md");

  const files = ["about.md", "experience.log", "projects/", "skills.json"];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans">
      <div className="max-w-3xl mx-auto px-5 py-10 sm:py-16">
        {/* Terminal-style header */}
        <div className="bg-stone-900 text-stone-100 rounded-t-lg px-4 py-2 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-mono text-stone-400">
            carlos@cetys ~ resume
          </span>
        </div>

        <div className="bg-white border border-stone-200 rounded-b-lg shadow-sm overflow-hidden">
          {/* Prompt line / name */}
          <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-stone-200">
            <p className="font-mono text-sm text-emerald-700 mb-2">
              <span className="text-stone-400">$</span> whoami
            </p>
            <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Carlos Miguel Ibarra Mora
            </h1>
            <p className="mt-1 text-stone-600">
              Estudiante de Ingeniería de Software · Desarrollador web
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600 font-mono">
              <a href="mailto:carlosmiguelibarra01@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-700">
                <Mail className="w-3.5 h-3.5" /> carlosmiguelibarra01@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> +52 668 235 9422
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Ensenada, Baja California, México
              </span>
              <a href="https://github.com/CarlosIbarraMora" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-700">
                <Github className="w-3.5 h-3.5" /> CarlosIbarraMora
              </a>
              <a href="https://linkedin.com/in/carlos-ibarra-mora-457853229" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-700">
                <Linkedin className="w-3.5 h-3.5" /> carlos-ibarra-mora
              </a>
            </div>
          </div>

          {/* File tabs */}
          <div className="flex overflow-x-auto border-b border-stone-200 bg-stone-50 font-mono text-xs">
            {files.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFile(f)}
                className={`px-4 py-2.5 border-r border-stone-200 whitespace-nowrap transition-colors ${
                  activeFile === f
                    ? "bg-white text-stone-900 border-b-2 border-b-emerald-600 -mb-px"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="px-6 sm:px-8 py-8">
            {activeFile === "about.md" && (
              <section>
                <SectionLabel icon={GraduationCap} label="educación" />
                <div className="mt-3">
                  <p className="font-semibold text-stone-900">
                    Ingeniería de Software — CETYS Universidad
                  </p>
                  <p className="text-sm text-stone-600 mt-0.5">
                    Ensenada, Baja California · Séptimo semestre · Graduación esperada: junio 2027
                  </p>
                  <p className="text-sm text-emerald-700 font-mono mt-1">
                    promedio: 98/100
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Busco una práctica profesional en desarrollo de software (web, Java o
                    JavaScript), de preferencia remota o de medio tiempo, para complementar
                    el último tramo de la carrera.
                  </p>
                </div>
              </section>
            )}

            {activeFile === "experience.log" && (
              <section>
                <SectionLabel icon={Terminal} label="git log --experience" />
                <div className="mt-4 space-y-6">
                  {experience.map((e) => (
                    <div key={e.hash} className="font-mono text-sm">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-amber-700">commit {e.hash}</span>
                        <span className="text-stone-400 text-xs">{e.date}</span>
                      </div>
                      <p className="mt-1 text-stone-900 font-sans font-semibold">
                        {e.title} <span className="text-stone-500 font-normal">· {e.org}</span>
                      </p>
                      <div className="mt-2 space-y-1">
                        {e.diff.map((d, i) => (
                          <p key={i} className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-sans text-[13px]">
                            <span className="font-mono mr-2 text-emerald-600">{d.type}</span>
                            {d.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeFile === "projects/" && (
              <section>
                <SectionLabel icon={FolderGit2} label="proyectos" />
                <div className="mt-4 space-y-5">
                  {projects.map((p) => (
                    <div key={p.name} className="border border-stone-200 rounded-md p-4">
                      <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h3 className="font-mono font-semibold text-stone-900">{p.name}</h3>
                        <span className="text-xs font-mono text-stone-400">{p.tag}</span>
                      </div>
                      <p className="text-sm text-stone-600 mt-2 leading-relaxed">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span key={s} className="text-xs font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeFile === "skills.json" && (
              <section>
                <SectionLabel icon={Code2} label="skills.json" />
                <div className="mt-4 font-mono text-sm bg-stone-900 text-stone-100 rounded-md p-4 overflow-x-auto">
                  <p className="text-stone-500">{"{"}</p>
                  {Object.entries(skills).map(([key, values], idx, arr) => (
                    <p key={key} className="pl-4">
                      <span className="text-sky-300">"{key.replace(".json", "")}"</span>
                      <span className="text-stone-400">: [</span>
                      {values.map((v, i) => (
                        <span key={v}>
                          <span className="text-amber-300">"{v}"</span>
                          {i < values.length - 1 && <span className="text-stone-400">, </span>}
                        </span>
                      ))}
                      <span className="text-stone-400">]{idx < arr.length - 1 ? "," : ""}</span>
                    </p>
                  ))}
                  <p className="text-stone-500">{"}"}</p>
                </div>
              </section>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-stone-400 font-mono mt-6">
          // fin del archivo
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-stone-400">
      <Icon className="w-4 h-4" />
      <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}
