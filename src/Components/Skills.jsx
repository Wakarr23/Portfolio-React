import { useEffect, useState } from "react";
import {
  Code2,
  Palette,
  Globe,
  Database,
  GitBranch,
  Smartphone,
} from "lucide-react";

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Responsive Design", "UI Design", "Canva", "Figma"],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Tailwind CSS", "Bootstrap", "Vite", "NPM"],
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Netlify"],
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      skills: ["Mobile Design", "Tablet Design", "Desktop Design"],
    },
    {
      icon: Database,
      title: "Other Skills",
      skills: ["Data Entry", "Translation", "Content Creation"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Mouse Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">

          <p className="text-red-400 text-sm sm:text-base mb-2">
            What I do
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to create modern, responsive,
            and user-friendly websites.
          </p>

        </div>

        {/* Skills Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group p-6 sm:p-7 bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl hover:border-red-400/50 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-7 h-7  flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 mb-5 group-hover:bg-red-500/20 transition">
                  <Icon className="w-2 h-2 " />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  {skill.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">

                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs sm:text-sm text-gray-300 bg-slate-800/70 rounded-lg border border-slate-700 group-hover:border-slate-600 transition"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}