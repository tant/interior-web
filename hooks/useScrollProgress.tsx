'use client';
import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion((currentProgress / scrollHeight) * 100);
      }
    };

    // Add event listener
    window.addEventListener('scroll', updateScrollCompletion);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
