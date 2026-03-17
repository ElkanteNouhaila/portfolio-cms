const skillsData = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-500/20 to-blue-600/5",
      border: "border-blue-500/20 hover:border-blue-400/40",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "from-emerald-500/20 to-emerald-600/5",
      border: "border-emerald-500/20 hover:border-emerald-400/40",
      skills: [
        { name: "Flask", level: 80 },
        { name: "SQL Server", level: 75 },
      ],
    },
    {
      category: "AI & NLP",
      icon: "🤖",
      color: "from-[#b58742]/20 to-[#b58742]/5",
      border: "border-[#b58742]/20 hover:border-[#b58742]/40",
      skills: [
        { name: "NLP", level: 85 },
        { name: "Intent Classification", level: 80 },
        { name: "TensorFlow", level: 70 },
      ],
    },
  ];
  
  const Skills = () => {
    return (
      <section className="py-24 bg-[#0f0f0f] text-white px-6" id="skills">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#b58742] text-xs font-semibold tracking-widest text-center uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-[#b58742]">Skills</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-md mx-auto">
            Technologies and tools I've mastered to build intelligent, modern applications.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((cat, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-b ${cat.color} border ${cat.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                </div>
  
                {/* Skills with progress bars */}
                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#b58742] to-[#e2b96f] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  