import React, { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background gradients and layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black bg-opacity-60">
          {/* ... additional gradients if needed ... */}
        </div>
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {/* Layers with animations */}
          <div className="layer w-200vw h-200px bg-repeat-x-50 bg-no-repeat bg-center" style={{ backgroundImage: `url('http://imgur.com/9beLKl9.png')` }}>
            <div className="absolute inset-0 animate-twinkle animate-layer-1"></div>
          </div>
          {/* ... Add other layers similarly ... */}
        </div>
      </div>
      {/* Shooting star */}
      <div className="absolute top-0 left-80% z-10 w-72 h-50 bg-center" style={{ backgroundImage: `url('http://imgur.com/ilhrli3.png')` }}>
        <div className="absolute inset-0 animate-shooting-star"></div>
      </div>
      {/* Content container */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Background;
