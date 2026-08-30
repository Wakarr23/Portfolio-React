import { useEffect, useState } from "react";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({x:0, y:0 })
    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", handleMouseMove)
        return() =>window.removeEventListener("mousemove", handleMouseMove)
    },[])

    return (
    <section id="home"className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}/>
        <div>
            <div>
                <div>
                    {/*ID Header */}
<div>
  <p className="text-red-400 text-sm sm:text-base mb-2">
    Hello, I'm
  </p>

  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
    Deewakar Paudel
  </h1>

  <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mt-3">
    Web Developer & Designer
  </h2>


                    </div>
                </div>
            </div>
        </div>
    </section>
    );  }