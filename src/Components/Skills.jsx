import { useEffect, useState } from "react";
import BorderGlow from "./BorderGlow";

import {
  Code2,
  Palette,
  Database,
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
      icon: Smartphone,
      title: "Responsive Development",
      skills: ["Mobile Design", "Tablet Design", "Desktop Design"],
    },
    {
      icon: Database,
      title: "Other Skills",
      skills: ["Data Entry", "Translation"],
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
              <BorderGlow
                key={index}
                edgeSensitivity={30}
                glowColor="255 80 80"
                backgroundColor="#0f172a"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={["#ef4444", "#f87171", "#fb7185"]}
              >
                <div className="group p-5 sm:p-7">

                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 mb-5 group-hover:bg-red-500/20 transition">
                    <Icon className="w-5 h-5" />
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
                        className="px-3 py-1.5 text-xs sm:text-sm text-gray-300 bg-slate-800/70 rounded-lg border border-slate-700 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </BorderGlow>
            );
          })}

        </div>
      </div>
    </section>
  );
}