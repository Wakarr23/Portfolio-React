import { useEffect, useState } from "react";


export default function Aboutme() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="aboutme"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Mouse background effect */}
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



      

      {/* About Me Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-red-400 text-sm sm:text-base mb-2">
            Get to know me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Content */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
<img
                src={`${import.meta.env.BASE_URL}me.png`}
                alt="Deewakar Paudel"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-white/10"
              />
          {/* Left side */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Hi, I’m Deewakar Paudel, a Front-End Developer based in Japan.
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Front-End Developer passionate about building modern, responsive, and interactive web experiences, with experience creating restaurant menus, flyers, and promotional posters.

            </p>

            {/* Button */}
            <a
              href="#contact"
              className="inline-block mt-7 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
            >
              Let's Work Together
            </a>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}