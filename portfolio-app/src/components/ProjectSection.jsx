import React from 'react';
import HorizontalCarousel from './HorizontalCarousel';
import ParticleBackground from "./ParticleBackground";

const ProjectItems = [
    {
    title: 'Ideathon - Finalist',
    subtitle: 'Apr. 2026',
    points: [
      'Built a diabetes support system integrating a wearable and mobile app for real-time health monitoring',
      'Designed a 4-level risk classification system for early warnings and personalized alerts',
      'Prototyped a wearable system in Autodesk Fusion 360 with vibration, light alerts, and SOS emergency trigger'
    ],
  },
  {
    title: 'TURTLE: Hatchling',
    subtitle: 'Jan. 2026 – Apr. 2026',
    points: [
      'Tuned Arduino control logic through 15+ hardware/software test iterations for 2.5 minute matches',
      'Redesigned SolidWorks components to satisfy competition size constraints and improve mechanical fit',
    ],
  },
  {
    title: 'MidnightShift',
    subtitle: 'Feb. 2026',
    points: [
      'Developed a full-stack productivity application to monitor attention, screen activity, and user presence during work sessions',
      'Achieved 94% distraction-detection accuracy at 25 FPS with a real-time OpenCV/YOLO pipeline',
      'Implemented a React dashboard and Flask API for session history, distraction events, and productivity metrics',
    ],
  },
  {
    title: 'Aggies Invent: Pantex - Best Prototype',
    subtitle: 'Sep. 2025',
    points: [
      'Developed a YOLO/OpenCV hardware classification prototype processing 6+ items per minute',
      'Implemented logging and export pipeline storing 30 days of data across 10K+ records',

    ],
  },

];



export default function ProjectSection() {
  return (
    <section id="projectpage" className="min-h-screen bg-[#315347]  p-8">
      <div className="max-w-6xl mx-auto">
        <HorizontalCarousel title="Projects" items={ProjectItems} />
      </div>
    </section>
  );
}
