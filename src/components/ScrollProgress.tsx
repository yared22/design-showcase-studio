'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Add subtle parallax effect to sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= window.innerHeight * 0.2);
        
        if (isVisible) {
          const scrollY = window.scrollY || window.pageYOffset;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrollPercent = (scrollY - sectionTop + window.innerHeight) / (window.innerHeight + sectionHeight);
          
          // Apply parallax effect to images
          const images = section.querySelectorAll('img');
          images.forEach(img => {
            const speed = parseFloat(img.getAttribute('data-speed') || '0.1');
            const yPos = -(scrollPercent * 100 * speed);
            img.style.transform = `translate3d(0, ${yPos}px, 0)`;
          });
          
          // Trigger fade-in animation
          section.classList.add('section-fade-in');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set up initial state
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
