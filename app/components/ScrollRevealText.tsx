// components/ScrollRevealText.tsx

import React, { useEffect } from 'react';

const ScrollRevealText: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      const textElement = document.getElementById('scrollRevealText');
      
      // If the user has scrolled past 50% of the page height, reveal the text
      if (scrolled > 50 && textElement) {
        textElement.classList.add('revealed');
      } else if (textElement) {
        textElement.classList.remove('revealed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scrollRevealText" className="hidden">
      <p>This text will reveal as you scroll down the page.</p>
    </div>
  );
};

export default ScrollRevealText;
