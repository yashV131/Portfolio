import { Routes, Route } from "react-router-dom";
import Me from "./assets/Me.jpeg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Stage } from "@react-three/drei";
import React, { Suspense } from 'react';
import plant_19 from "./assets/exports/plant_19.png"
import plant_10 from "./assets/exports/plant_10.png"
function CADModel({ url }){
  const { scene } = useGLTF(url);
  return <primitive object={ scene } />;
}

useGLTF.preload('/Assembly_for_robotic_car.glb');


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
    <section id="homepage" className="min-h-fit md:min-h-screen bg-[#2B4A3F]">
    
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="hidden md:flex w-[30vw] h-[30vw] bg-[rgb(163,163,128)] border z-10 items-center justify-center">
        <img
          src={Me}
          alt="Me"
          className="w-[80%] h-[80%] object-cover opacity-70"
        />
      </div>
      <h1 className="text-8xl font-bold text-[#F5F0E6] timeline-view "
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
    <section id="aboutpage" className="min-h-fit md:min-h-screen bg-[#7a977a] p-10">
      <h1 onClick={backHome}>YASHVI</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1
            className="md:m-10 md:mt-15 font-bold text-[#F5F0E6]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 8rem)",
            }}
          >
            Hello! 
          </h1>
            <div className="w-fit md:max-w-full overflow-hidden">
            <h1 className="text-[#F5F0E6] text-[clamp(20px,6vw,60px)] animate-typing animate-blink animate-infinite overflow-hidden whitespace-nowrap border-r-3 pr-1  font-mono font-bold">
                I'm Yashvi...
              </h1>        
            </div>
       

          <h2 className="md:text-2xl mr-20 md:text-justify text-justify-inter-word leading-relaxed ">
            I’m a Computer Engineering Honors student at Texas A&M University, 
            passionate about embedded systems, programming, computer architecture, and digital design.

            <br></br>
            <br></br>
            I’m currently looking for opportunities to expand my skills, contribute to meaningful projects, and connect with others in the engineering and technology community.
            <br></br>
            <br></br>
          </h2>
          
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center relative">
            <Canvas camera={{position: [0,0,5], fov:45}} gl={{ toneMappingExposure:0.1 }}>
                <Suspense fallback={<Html>Loading model...</Html>}>
                  <Stage environment="studio" intensity={0.1}>
                    <CADModel url="/Assembly_for_robotic_car.glb" />
                  </Stage>

                </Suspense>

                <OrbitControls makeDefault enableDamping />
            </Canvas>
            Placeholder
            
        </div>

      </div>
    </section>
    <section id="experiencepage" className="min-h-screen bg-[#9ab39b] p-10">

      <div id="education-ladder" className="text-center">
        <h1 className="">
          EDUCATION:
        </h1>
     
      <br></br>
      </div>
      <div class="relative">
        <br></br> 
        <div class="absolute left-4 md:left-1/2 top-10 bottom-2 w-px bg-[#42361b] transform -translate-x-1/2"></div>
          <div class="relative mb-20">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
              <div class="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                VIBGYOR HIGH SCHOOL(2021-23)
              </div>
          </div>

          <div class="relative mb-20">
            <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
              <div class="ml-10 md:ml-[calc(50%+20px)] md:w-1/2">
                CYPRESS RANCH HIGH SCHOOL
              </div>
          </div>

          <div class="relative">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
              <div class="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                TEXAS A&M UNIVERSITY
              </div>
          </div>
        </div>
      
   
    <br></br>
    <br></br>
      <div id="experience-ladder" className="text-center">
      EXPERIENCE:
      <br></br>
      </div>
 
    <div class="relative"> 
       <br></br>
      <div class="absolute left-4 md:left-1/2 top-10 bottom-2 w-px bg-[#42361b] transform -translate-x-1/2"></div>
        <div class="relative mb-20">
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
            <div class="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              AI/ML Engineer at Sprout
            </div>
        </div>

        <div class="relative mb-20">
          <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
            <div class="ml-10 md:ml-[calc(50%+20px)] md:w-1/2">
              Hatchling Member, Events Committee Member at TURTLE Robotics
            </div>
        </div>

        <div class="relative mb-20">
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
            <div class="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              Research Intern at Aggies Lab
            </div>
        </div>

        <div class="relative mb-20">
          <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
            <div class="ml-10 md:ml-[calc(50%+20px)] md:w-1/2">
              Officer in Traning at Aggie Coding Club
            </div>
        </div>

        <div class="relative">
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-[#42361b] rounded-full transform -translate-x-1/2"></div>
            <div class="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              Intern at SW Utility Billing
            </div>
        </div>
      </div>
   
    </section>
    
    
    
  
</>
  
  )
}

export default App