import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Stage } from '@react-three/drei';
import CADModel from './CADModel';

export default function AboutSection({ backHome }){
  return (
    <section id="aboutpage" className="min-h-fit md:min-h-screen bg-[#366e5c] p-10">
    
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1
            className="md:m-10 md:mt-15 font-bold text-[#D8B25C]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 8rem)",
            }}
          >
            Hello! 
          </h1>
            <div className="w-fit md:max-w-full overflow-hidden">
            <h1 className="text-[#F5F0E6] text-[clamp(20px,6vw,60px)] animate-typing animate-blink animate-infinite overflow-hidden whitespace-nowrap border-r-3 pr-1 font-['Playfair_Display'] font-bold border-[#D8B25C]">
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
            Base Prototype of a robotic car
            
        </div>

      </div>
    </section>
  );
}
