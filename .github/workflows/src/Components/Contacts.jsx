import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contacts() {
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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Mouse background */}
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
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-red-400 text-sm sm:text-base mb-2">
            Get in touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to work together?
            Feel free to send me a message.
          </p>
        </div>

        {/* Contact Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side */}
          <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 sm:p-8">

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              Let's work together
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>
                  <p className="text-white text-sm sm:text-base">
                    wakarpaudel25@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <Phone className="w-5 h-5 text-red-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>
                  <p className="text-white text-sm sm:text-base">
                    +81 80-5552-2440
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>
                  <p className="text-white text-sm sm:text-base">
                    Tokyo, Japan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 sm:p-8">

            <form className="space-y-5">

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-red-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-red-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-slate-950/70 border border-slate-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-red-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-300"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}