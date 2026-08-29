import React, { useCallback, useEffect, useRef, useState } from 'react';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';

const NAV_ITEMS = [
  { id: 'homepage', label: 'Home' },
  { id: 'aboutpage', label: 'About' },
  { id: 'experiencepage', label: 'Experience' },
  { id: 'projectpage', label: 'Projects' },
  { id: 'resumepage', label: 'Resume' },
];

function App() {
  const [particlesDone, setParticlesDone] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState('homepage');
  const isHomePageRef = useRef(true);
  const mouseAtTopRef = useRef(false);
  const hideTimeoutRef = useRef(null);

  const scrollToSection = (sectionId = 'aboutpage') => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const backHome = () => {
    scrollToSection('homepage');
  };

  useEffect(() => {
    const sectionIds = ['homepage', 'aboutpage', 'experiencepage', 'projectpage', 'resumepage'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const nextId = visibleEntry.target.id;
          setActiveSection(nextId);
          isHomePageRef.current = nextId === 'homepage';
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const homeSection = document.getElementById('homepage');
      const currentScroll = window.scrollY;
      const isHome = !homeSection || currentScroll < window.innerHeight * 0.75;
      isHomePageRef.current = isHome;

      if (isHome || mouseAtTopRef.current) {
        setShowNav(true);
        return;
      }

      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setShowNav(false), 120);
    };

    const handleMouseMove = (event) => {
      const nearTop = event.clientY < 80;
      mouseAtTopRef.current = nearTop;

      if (nearTop || isHomePageRef.current) {
        setShowNav(true);
        return;
      }

      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setShowNav(false), 120);
    };

    const handleMouseLeave = () => {
      mouseAtTopRef.current = false;
      if (!isHomePageRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => setShowNav(false), 120);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      clearTimeout(hideTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const navClassName = `fixed left-0 top-0 z-50 w-full border-b border-[#e3d7b5]/40 bg-[#203724]/90 px-4 py-3 transition-all duration-300 md:px-8 ${
    showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  }`;

  return (
    <>
      <nav className={navClassName} aria-label="Main navigation">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 text-sm text-[#f5f0e6] md:text-base">
          <button
            type="button"
            onClick={backHome}
            className="border border-[#D8B25C]/70 px-3 py-2 font-medium text-[#D8B25C] transition hover:bg-[#f5f0e6]/10"
          >
            Yashvi Mehta
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 transition ${
                    isActive ? 'bg-[#D8B25C] text-[#1e2f22]' : 'text-[#D8B25C] hover:bg-[#f5f0e6]/10 hover:text-[#f5f0e6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('contactpage')}
            className={`px-4 py-2 font-medium transition ${
              activeSection === 'contactpage' ? 'bg-[#D8B25C] text-[#1e2f22]' : 'bg-[#D8B25C] text-[#1e2f22] hover:brightness-110'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      <HomeSection
        scrollToSection={() => scrollToSection('aboutpage')}
        onParticlesComplete={() => setParticlesDone(true)}
      />

      {particlesDone && (
        <>
          <AboutSection backHome={backHome} />
          <ExperienceSection />
          <ProjectSection />
          <ResumeSection />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;