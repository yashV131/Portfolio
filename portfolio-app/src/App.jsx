import { Routes, Route } from "react-router-dom";
import Me from "./assets/Me.jpeg";

function App() {

  const scrollToSection = () =>{
    document.getElementById("aboutpage")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const backHome = () => {
    document.getElementById("homepage")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
    <section id="homepage" className="min-h-screen">
    <div className="min-h-screen flex items-center justify-center bg-[#2B4A3F]">
      <div className="hidden md:flex w-[30vw] h-[30vw] bg-[rgb(163,163,128)] border z-10 items-center justify-center">
        <img
          src={Me}
          alt="Me"
          className="w-[80%] h-[80%] object-cover opacity-70"
        />
      </div>
      <h1 className="text-8xl font-bold text-[#F5F0E6]"
          style={{ fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
           }}         
      >
        PORTFOLIO<br />
      <div className="relative">
      <div
      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-[15vw] h-[15vw] bg-[#2B4A3F] items-center p-3">
        <p className="text-xs md:text-l lg:text-xl xl:text-2xl space-y-1 leading-tight break-word">
            Linkedin: <a href="https://www.linkedin.com/in/yashvimehtaa" className="text-[#B6C598] hover:animate-pulse">YASHVI</a> <br />
            Github: <a href="https://github.com/yashV131" className="text-[#B6C598] hover:animate-pulse">yashV131</a> <br />
            Email: <a href="mailto:mehta.yashvi@gmail.com" className="text-[#B6C598] hover:animate-pulse">yashvi@tamu.edu</a>
        </p>
    </div>
      <h1 className="text-8xl md:block flex font-bold text-transparent"
        style={{
          WebkitTextStroke: "2px #D8B25C",
          fontSize: "clamp(3rem, 8vw, 8rem)",
        }} >
        PORTFOLIO<br />
      </h1>
       <h1 className="text-8xl md:block flex font-bold text-transparent"
        style={{
          WebkitTextStroke: "2px #D8B25C",
          fontSize: "clamp(3rem, 8vw, 8rem)",
        }} >
        PORTFOLIO<br />
      </h1>
      <h1 className="text-8xl  md:block flex font-bold text-transparent"
        style={{
          WebkitTextStroke: "2px #D8B25C",
          fontSize: "clamp(3rem, 8vw, 8rem)",
        }} >
        PORTFOLIO<br />
      </h1>
        </div>
      </h1>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <div 
        onClick={scrollToSection}
        className="w-24 h-24  bg-[#D8B25C] md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full flex items-center justify-center text-sm md:text-base xl:text-xl animate-pulse">     
        SCROLL
      </div>
    </div>
    <br />
    </div>
    </section>
 <section id="aboutpage" className="min-h-screen bg-[#9ab39b] p-10">
  <h1 onClick={backHome}>YASHVI</h1>
  <div className="flex flex-col md:flex-row">

    <div className="w-1/2">
      <h1
        className="m-10 md:mt-15 font-bold text-[#F5F0E6]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 8vw, 8rem)",
        }}
      >
        Hello! 
        <br></br>
         <h1 class="animate-typing animate-blink animate-infinite overflow-hidden whitespace-nowrap border-r-3 pr-1  font-mono font-bold">
            I'm Yashvi...
          </h1>        
      </h1>

      <h2 className="text-2xl mr-20 text-justify">
        I’m a Computer Engineering Honors student at Texas A&M University, 
        passionate about embedded systems, programming, computer architecture, and digital design.

        <br></br>
        <br></br>
        I’m currently looking for opportunities to expand my skills, contribute to meaningful projects, and connect with others in the engineering and technology community.
      </h2>
      
    </div>
    <div className="w-1/2 flex items-center justify-center relative">
      
    </div>

  </div>
</section>
</>
  
  )
}

export default App