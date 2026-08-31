import SplashCursor from "../components/SplashCursor";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 px-4"
    >
      <SplashCursor
  SIM_RESOLUTION={128}
  DYE_RESOLUTION={1440}
  DENSITY_DISSIPATION={5}
  VELOCITY_DISSIPATION={3}
  PRESSURE={0.1}
  CURL={2}
  SPLAT_RADIUS={0.1}
  SPLAT_FORCE={6000}
  COLOR_UPDATE_SPEED={1}
/>

      <div className="relative z-10">
        <p className="text-red-400 text-sm sm:text-base mb-2">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Deewakar Paudel
        </h1>

        <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl text-gray-300">
          Web Developer & Designer
        </h2>
      </div>
    </section>
  );
}