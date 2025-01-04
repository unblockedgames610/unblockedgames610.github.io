import React from 'react';
import { useRef, useState } from 'react';

interface GameFrameProps {
  url: string;
  title: string;
}

export function GameFrame({ url, title }: GameFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'aspect-video w-full'}`}
    >
      <iframe
        src={url}
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}