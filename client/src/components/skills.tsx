// src/components/Skills.tsx
import { useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    icon: "🎨",
    description: "Building modern, responsive, and accessible user interfaces.",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Tailwind CSS", level: 92, icon: "💨" },
      { name: "HTML & CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    description: "Designing robust APIs and managing relational databases.",
    skills: [
      { name: "Flask", level: 82, icon: "🐍" },
      { name: "SQL Server", level: 75, icon: "🗄️" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "JWT Auth", level: 78, icon: "🔐" },
    ],
  },
  {
    category: "AI & NLP",
    icon: "🤖",
    description: "Training and deploying intelligent language models.",
    skills: [
      { name: "NLP", level: 88, icon: "💬" },
      { name: "TensorFlow", level: 75, icon: "🧠" },
      { name: "Intent Classification", level: 85, icon: "🎯" },
      { name: "Scikit-learn", level: 72, icon: "📊" },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎭" },
  { name: "Postman", icon: "📮" },
  { name: "Docker", icon: "🐳" },
  { name: "Jupyter", icon: "📓" },
];

const getLevelLabel = (level: number) => {
  if (level >= 90) return { label: "Expert", color: "text-emerald-400" };
  if (level >= 80) return { label: "Advanced", color: "text-blue-400" };
  if (level >= 70) return { label: "Proficient", color: "text-[#b58742]" };
  return { label: "Learning", color: "text-purple-400" };
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = skillsData[activeTab];

  return (
    <section className="py-24 bg-[#0f0f0f] text-white px-6" id="skills">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-[#b58742] text-xs font-semibold tracking-widest text-center uppercase mb-3">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-[#b58742]">Skills</span>
        </h2>
        <p className="text-gray-500 text-center max-w-md mx-auto mb-14">
          Technologies I use to turn ideas into real, working products.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {skillsData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#b58742]/10 border-[#b58742]/40 text-[#b58742]"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Main Panel */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">

          {/* Left: description + radial summary */}
          <div className="md:col-span-2 bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-4xl mb-4">{current.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{current.category}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {current.description}
              </p>
            </div>

            {/* Average proficiency */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Average Proficiency</span>
                <span className="text-[#b58742] font-semibold">
                  {Math.round(
                    current.skills.reduce((s, sk) => s + sk.level, 0) /
                      current.skills.length
                  )}
                  %
                </span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#b58742] to-[#e2b96f] rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.round(
                      current.skills.reduce((s, sk) => s + sk.level, 0) /
                        current.skills.length
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: skill bars */}
          <div className="md:col-span-3 bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
            {current.skills.map((skill, i) => {
              const { label, color } = getLevelLabel(skill.level);
              return (
                <div key={i} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-semibold ${color}`}>{label}</span>
                      <span className="text-xs text-gray-500 font-mono w-8 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background:
                          "linear-gradient(90deg, #b58742 0%, #e2b96f 100%)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Others strip */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl px-6 py-5">
          <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-4">
            Tools & Environment
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#b58742]/10 hover:border-[#b58742]/30 border border-white/5 rounded-xl text-sm text-gray-400 hover:text-[#b58742] transition-all duration-300 cursor-default"
              >
                <span>{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
