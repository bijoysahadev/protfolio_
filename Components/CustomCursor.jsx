import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const followMouse = () => {
      setRingPos((prevRing) => {
        const dx = mousePos.x - prevRing.x;
        const dy = mousePos.y - prevRing.y;
        return {
          x: prevRing.x + dx * 0.15,
          y: prevRing.y + dy * 0.15,
        };
      });

      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <>
      {/* 1. Inner Solid Dot (Hidden on mobile screens, visible on desktop) */}
      <div
        className="fixed pointer-events-none w-2.5 h-2.5 bg-white rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* 2. Outer Ring (Hidden on mobile screens, visible on desktop) */}
      <div
        className="fixed pointer-events-none w-8 h-8 border border-white rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      />
    </>
  );
};

export default CustomCursor;