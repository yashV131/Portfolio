import React from 'react';
import HorizontalCarousel from './HorizontalCarousel';
import ParticleBackground from "./ParticleBackground";

const educationItems = [
   {
    title: 'TEXAS A&M UNIVERSITY',
    subtitle: 'Honors B.Eng. Computer Engineering, Class of 2029',
    points: ['Bachelor of Engineering', 'Honors College'],
  },
];

const experienceItems = [
    {
    title: 'Software Engineer - Sprout',
    subtitle: 'Mar. 2026 – Present',
    
    points: [ 
       'Click to open website',
        'Engineered a React-based study platform for course-specific tutoring and note-taking across 10+ university courses',
        'Built a data pipeline to extract and transform 10K+ Supabase records into structured JSON for RAG indexing',
        'Processed and indexed two 500+ page calculus textbooks in ChromaDB using Python'
    ],
    link: 'https://www.sproutedu.org/landing/students'
  },
   {
    title: 'Events and Marketing Officer - Aggie Coding Club',
    subtitle: 'Mar. 2026 – Present',
    points: [
      'Click to open website',
      'Directed design and layout efforts for posters read by 1,000+ students, coordinating with a 4 person team to deliver on monthly deadlines'],
    link: 'https://www.aggiecodingclub.com/',
  },
  {
    title: 'Software Engineering Intern - SW Utility Billing',
    subtitle: 'May 2026 – Aug. 2026',
    points: [
      'Automated invoice extraction and validation in Python, cutting processing time from 4 minutes to 14 seconds per invoice',
      'Implemented configurable extraction templates using LLM prompts supporting 20+ utility vendors and billing formats',
      'Validated extracted billing fields against expected values, achieving 95.83% field-level accuracy across 50+ invoices'
    ],
  },
  {
    title: 'Undergraduate Research Assistant - Aggies Lab',
    subtitle: 'Jan. 2026 – May 2026',
    points: [
       'Click to open website',
      'Designed a personalized gesture-recognition system supporting 15 custom hand gestures',
      'Trained TensorFlow/LSTM models achieving 98% static and 95% dynamic accuracy across 20+ test sessions',
      'Presented research findings at Texas A&M Student Research Week to 100+ attendees'
    ],
    link:'https://www.aggieslab.org/index.html',
  },
 
];

export default function ExperienceSection() {
  return (
    
      <section id="experiencepage" className="min-h-screen bg-[#2e5f4f] p-8">
      <div className="max-w-6xl mx-auto">
        <HorizontalCarousel title="Education" items={educationItems} />
        <HorizontalCarousel title="Experience" items={experienceItems} />
      </div>
    </section>
  );
}
