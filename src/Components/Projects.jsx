import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
  {
    number: "01",
    category: "Translation & Content Review",
    title: "Japanese–Nepali Translation",
    description:
      "Japanese-to-Nepali translation and proofreading for e-learning videos, including subtitle correction, grammar, natural expressions, and accurate terminology.",
    image: "https://crowdworks.jp/attachments/25593172.png?width=100&height=100",
    technologies: ["Translation", "Proofreading", "Time Coding"],
    link: "https://www.nk-create.co.jp/",
  },

  {
    number: "02",
    category: "Restaurant Design",
    title: "Restaurant Menu & Flyer Design",
    description:
      "Designed professional restaurant menus, menu boards, and promotional flyers with a clean and visually appealing layout.",
    image: "https://lh3.googleusercontent.com/geougc/AF1QipNJ8aqXikxUVaEJhhf8BQ4s2ym7VB7NNYpLJQ-u=h400-no",
    technologies: ["Canva", "Menu Design", "Flyer Design"],
    link: "YOUR_RESTAURANT_LINK",
  },


];
    



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

  function nextProject() {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }

  function previousProject() {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">

          <p className="text-red-400 text-sm sm:text-base mb-2">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Take a look at some of my recent projects.
          </p>

        </div>

        {/* Slider */}
        <div className="relative">

          {/* Project Card */}
          <div className="overflow-hidden rounded-2xl">

            <div
              key={currentProject}
              className="grid grid-cols-1 md:grid-cols-2 bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl overflow-hidden animate-project"
            >

              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-[420px] bg-slate-800">

                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />

              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">

                <span className="text-red-400 text-sm font-medium mb-3">
                  {projects[currentProject].number}
                </span>

                <p className="text-gray-400 text-sm mb-2">
                  {projects[currentProject].category}
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {projects[currentProject].title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-5">
                  {projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {projects[currentProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs sm:text-sm bg-red-500/10 text-red-400"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <div className="mt-7">

                  <a
                    href={projects[currentProject].link}
                    className="inline-flex items-center gap-2 text-white hover:text-red-400 transition"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previousProject}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-slate-700 text-white flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-slate-700 text-white flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-7">

          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentProject === index
                  ? "w-8 bg-red-400"
                  : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}

        </div>

        {/* Project Counter */}
        <div className="text-center text-gray-500 text-sm mt-3">
          {String(currentProject + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </div>

      </div>
    </section>
  );
}