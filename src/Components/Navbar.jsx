import { Menu, X} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    return  <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                           {/* Logo Here
                            <div>
                        <img src={`${import.meta.env.BASE_URL}me.png`}
  alt="me"
  className="w-6 h-6 sm:w-8 sm:h-8"
    </div>
/>*/}
                  
                         <span className="text-lg sm:text-xl md:text-2xl font-medium ">
                            <span className="text-white">Waka</span>
                            <span className="text-red-400">rr</span>
                         </span>
                </div>

                {/*Nav Links*/}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
               
                            <a href="#home" className="text-gray-300 hover:text-red-400 text-sm lg:text-base">Home</a>
                    
                            <a href="#aboutme" className="text-gray-300 hover:text-red-400 text-sm lg:text-base">About me</a>
                        
                            <a href="#skills" className="text-gray-300 hover:text-red-400 text-sm lg:text-base">Skills</a>

                            <a href="#projects" className="text-gray-300 hover:text-red-400 text-sm lg:text-base">Projects</a>
                    
                            <a href="#contact" className="text-gray-300 hover:text-red-00 text-sm lg:text-base">Contact</a>
                    </div>


                     <button className="md:hidden p-2 text-gray-300 hover:text-white" 
                     onClick={() =>setMobileMenuIsOpen((prev) => !prev)}
                      >
                        {mobileMenuIsOpen ? (<X />
                        ) : (
                     <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                     </button>
            </div>
        </div>

        {mobileMenuIsOpen && <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">

                            <a href="#home"
                            onClick={() =>setMobileMenuIsOpen(false)}
                            className="block text-gray-300 hover:text-white text-sm lg:text-base">Home</a>
                    
                            <a href="#aboutme"
                            onClick={() =>setMobileMenuIsOpen(false)}
                            className="block text-gray-300 hover:text-white text-sm lg:text-base">About me</a>
                        
                            <a href="#skills"
                            onClick={() =>setMobileMenuIsOpen(false)}
                             className="block text-gray-300 hover:text-white text-sm lg:text-base">Skills</a>

                            <a href="#projects"
                            onClick={() =>setMobileMenuIsOpen(false)}
                             className="block text-gray-300 hover:text-white text-sm lg:text-base">Projects</a>
                    
                            <a href="#contact"
                            onClick={() =>setMobileMenuIsOpen(false)}
                             className="block text-gray-300 hover:text-white text-sm lg:text-base">Contact</a>
                                    </div>
                             </div>
                             }
    
    </nav>
}