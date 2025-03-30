
import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Progress value={scrollProgress} className="h-1 rounded-none bg-transparent" 
        indicatorClassName="bg-alto-accent transition-all duration-200 ease-out" />
    </div>
  );
};

export default ScrollProgress;
