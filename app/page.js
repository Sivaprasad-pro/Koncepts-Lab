import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import Klass from './components/Klass'
import JoinUs from './components/JoinUs'
import Internship from './components/Internship'
import Register from './components/Register'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    {/* <Navbar/> */}
    <div className="container ml-0 mt-24 mx-auto  px-12 py-4 ">
        <HeroSection />
        <JoinUs/>
        <Internship/>
        <AboutSection/>
        <Register/>
        <Klass />
   
        
       
    </div>
   
    </main>
    
     );
}
