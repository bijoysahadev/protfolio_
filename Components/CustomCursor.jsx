import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Track positions using refs for high performance
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Instantly position the inner dot with zero lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Detect when hovering over interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.group') ||
        e.target.closest('label')
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.group') ||
        e.target.closest('label')
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // Smooth Animation Loop for the Outer Ring
    let animationFrameId;
    const render = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      
      // Smooth interpolation factor
      ringPos.current.x += dx * 0.25;
      ringPos.current.y += dy * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Inner Solid Dot (No conflicting CSS transitions) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full z-[9999] hidden md:block ${
          isHovered ? 'w-2 h-2 bg-amber-400' : 'w-2.5 h-2.5 bg-white shadow-md'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* 2. Outer Smooth Ring (No conflicting CSS transitions) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full z-[9999] hidden md:block ${
          isHovered
            ? 'w-12 h-12 bg-amber-300/20 border-2 border-amber-400'
            : 'w-8 h-8 border border-white/80 shadow-sm'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;