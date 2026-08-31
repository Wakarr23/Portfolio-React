import SplashCursor from "./SplashCursor";
import TextType from "./TextType";
import ProfileCard from './ProfileCard'


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

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

        {/* Side Ko Image */}
        <div className="flex justify-center">


        </div>


<ProfileCard
  name="Wakarr Paudel"
  title="Front End Developer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl={`${import.meta.env.BASE_URL}wow.png`}
  showUserInfo={false}
  enableTilt={false}
  enableMobileTilt={false}
  behindGlowEnabled={false}
  innerGradient="none"
/>








        {/* TEXT - RIGHT */}
        <div className="text-center md:text-left">

          <p className="text-red-400 text-sm sm:text-base mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Deewakar Paudel
          </h1>

          <div className="mt-4 text-xl sm:text-2xl md:text-3xl text-red-400">
            <TextType
              text={[
                "Web Developer",
                "Designer",
                "React Developer",
              ]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              cursorCharacter="_"
            />
          </div>
<a
  href={`${import.meta.env.BASE_URL}Rirekuso.pdf`}
  download
  className="inline-block mt-7 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
>
  Download CV
</a>

        </div>

      </div>
    </section>
  );
}