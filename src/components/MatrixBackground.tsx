
import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = Math.random() > 0.5 ? '1' : '0';
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(char);

      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      }, 5000);
    };

    const interval = setInterval(createMatrixChar, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;
