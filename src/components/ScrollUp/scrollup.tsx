'use client'

import { useEffect, useRef, useState } from 'react';

export default function ScrollUp() {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const progressPath = progressPathRef.current;
      if (!progressPath) return;

      const scroll = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathLength]);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    setPathLength(pathLength);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScrollButton = window.scrollY > 400;
      setShowScrollButton(shouldShowScrollButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scrollup ${showScrollButton ? 'd-block' : ''}`} onClick={handleScrollUp}>
      <svg className="progress-circle" width="100%" height="100%" viewBox="-2 -2 104 104">
        <path ref={progressPathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
      </svg>
    </div>
  );
}
