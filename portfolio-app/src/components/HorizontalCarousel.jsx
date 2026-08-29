import React, { useRef, useCallback, useEffect, useState } from 'react';

export default function HorizontalCarousel({ title, items = [] }) {
  const ref = useRef(null);
  const clickDragRef = useRef({ isDragging: false, startX: 0, startY: 0, link: null });
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const onPointerMove = useCallback((e) => {
    const d = clickDragRef.current;
    const dx = Math.abs(e.clientX - d.startX);
    const dy = Math.abs(e.clientY - d.startY);
    if (dx > 6 || dy > 6) d.isDragging = true;
  }, []);

  const onPointerUp = useCallback((e) => {
    const d = clickDragRef.current;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    if (!d.isDragging && d.link) {
      window.open(d.link, '_blank', 'noopener,noreferrer');
    }
    d.isDragging = false;
    d.link = null;
  }, [onPointerMove]);

  const scroll = (dir = 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const scrollTimeout = useRef(null);

  const snapToNearest = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.children);
    if (children.length === 0) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = null;
    let minDist = Infinity;

    children.forEach((child) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < minDist) {
        minDist = dist;
        nearest = child;
      }
    });

    if (nearest) {
      const target = Math.max(0, nearest.offsetLeft - (el.clientWidth / 2 - nearest.offsetWidth / 2));
      el.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      snapToNearest();
    }, 120);
  }, [snapToNearest]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="w-full py-6">
      {title && <h2 className="mb-6 text-3xl font-semibold text-[#D8B25C]">{title}</h2>}

      <div className="relative overflow-hidden">
        <button
          aria-label="scroll left"
          onClick={() => scroll(-1)}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border border-[#D8B25C]/80 bg-[#f5f0e6]/90 p-3 text-xl text-[#000000] transition hover:bg-[#f5f0e6]"
        >
          ‹
        </button>

        <div
          ref={ref}
          onScroll={handleScroll}
          className="no-scrollbar overflow-x-auto scroll-smooth flex items-stretch gap-6 px-16 py-2 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, index) => {
            const wrapperClass =
              'group relative h-full w-full overflow-hidden border border-[#D8B25C]/80 bg-[#f5f0e6]/95 transition-all duration-300 hover:-translate-y-1 flex h-[22rem] w-[min(84vw,520px)] flex-col md:h-[26rem]';

            const detailsList = Array.isArray(item.points) ? item.points : [item.content];

            const cardInner = (
              <>
                <div className="p-7 flex-1">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    {item.subtitle ? (
                      <span className="rounded-full bg-[#2b4a3f] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f5f0e6]">
                        {item.subtitle}
                      </span>
                    ) : null}
                    <span className="hidden text-xs uppercase tracking-[0.24em] text-[#5f6d5e] md:inline">
                      hover for details
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#000000]">{item.title}</h3>

                  <p className="mt-4 hidden text-sm leading-6 text-[#4a5b46] min-h-[1rem] md:block md:opacity-0 md:transition-opacity md:duration-200 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
                    {Array.isArray(item.points)
                      ? item.points.slice(0, 3).join(' • ')
                      : item.content}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f220f]/85 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block" />

                <div className="hidden absolute inset-0 bg-[#1e3925]/90 transition duration-300 group-hover:opacity-100 group-hover:pointer-events-auto md:block md:opacity-0">
                  <div className="flex h-full flex-col p-6 text-[#f5f0e6]">
                    <span className="mb-4 text-xs uppercase tracking-[0.28em] text-[#a8c8a1]">
                      Quick Look
                    </span>
                    <div className="overflow-y-auto max-h-[calc(100%-3rem)] pr-2 hide-scrollbar">
                      {Array.isArray(item.points) ? (
                        <ul className="space-y-3 text-sm leading-7">
                          {item.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="rounded-2xl border border-[#447452]/40 bg-[#203d24]/80 p-3"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-6">{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>

                {isMobile && detailsList.length > 0 && (
                  <div className="border-t border-[#D8B25C]/60 bg-[#f5f0e6] px-5 pb-5 pt-4 md:hidden">
                    <ul className="space-y-2 text-sm leading-6 text-[#2a3d2d]">
                      {detailsList.map((point, pIdx) => (
                        <li key={pIdx} className="list-disc pl-5">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );

            return (
              <div key={index} className="snap-center flex-shrink-0 h-full w-[min(84vw,520px)]">
                <div
                  className={wrapperClass}
                  role={item && item.link ? 'link' : undefined}
                  tabIndex={item && item.link ? 0 : undefined}
                  onPointerDown={(e) => {
                    if (!item || !item.link) return;
                    clickDragRef.current.isDragging = false;
                    clickDragRef.current.startX = e.clientX;
                    clickDragRef.current.startY = e.clientY;
                    clickDragRef.current.link = item.link;
                    window.addEventListener('pointermove', onPointerMove);
                    window.addEventListener('pointerup', onPointerUp);
                  }}
                  onKeyDown={(e) => {
                    if (!item || !item.link) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(item.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  {cardInner}
                </div>
              </div>
            );
          })}
        </div>

        <button
          aria-label="scroll right"
          onClick={() => scroll(1)}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border border-[#D8B25C]/80 bg-[#f5f0e6]/90 p-3 text-xl text-[#D8B25C] transition hover:bg-[#f5f0e6]"
        >
          ›
        </button>
      </div>
    </div>
  );
}
