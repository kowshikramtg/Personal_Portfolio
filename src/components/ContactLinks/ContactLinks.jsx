import React, { useState } from 'react';
import { Mail, LinkedIn, X, GitHub, MessageCircle } from 'lucide-react';

function ContactLinks() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const contactLinks = [
    { id: 'email', icon: Mail, href: 'mailto:kowshiktg3014@gmail.com', label: 'Email' },
    { id: 'linkedin', icon: LinkedIn, href: 'https://linkedin.com/in/kowshik-t-g-036b852b4/', label: 'LinkedIn' },
    { id: 'twitter', icon: X, href: 'https://x.com/kowshikram_1405', label: 'Twitter/X' },
    { id: 'github', icon: GitHub, href: 'https://github.com/kowshikramtg', label: 'GitHub' },
    { id: 'discord', icon: MessageCircle, href: 'https://discord.com/users/', label: 'Discord' },
  ];

  // Generate random positions for background logos
  const generateBackgroundLogos = (activeIcon) => {
    const logos = [];
    const positions = [
      { top: '15%', left: '8%', rotation: 15 },
      { top: '25%', left: '85%', rotation: -20 },
      { top: '45%', left: '12%', rotation: 25 },
      { top: '60%', left: '78%', rotation: -15 },
      { top: '75%', left: '20%', rotation: 30 },
      { top: '35%', left: '75%', rotation: -25 },
      { top: '55%', left: '5%', rotation: 20 },
      { top: '85%', left: '82%', rotation: -30 },
      { top: '10%', left: '45%', rotation: 10 },
      { top: '70%', left: '50%', rotation: -10 },
    ];

    for (let i = 0; i < positions.length; i++) {
      const IconComponent = contactLinks[i % contactLinks.length].icon;
      const isActive = contactLinks[i % contactLinks.length].id === activeIcon;
      
      logos.push(
        <div
          key={i}
          className={`absolute text-gray-200 transition-all duration-500 ease-out ${
            isActive ? 'animate-pulse text-gray-400' : ''
          }`}
          style={{
            top: positions[i].top,
            left: positions[i].left,
            transform: `rotate(${positions[i].rotation}deg) ${
              isActive ? 'translateY(-20px) scale(1.2)' : 'translateY(0px) scale(1)'
            }`,
            opacity: isActive ? 0.6 : 0.1,
          }}
        >
          <IconComponent size={40} />
        </div>
      );
    }
    
    return logos;
  };

  return (
    <footer className="relative bg-white py-16 px-8 overflow-hidden">
      {/* Background Logo Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {hoveredIcon && generateBackgroundLogos(hoveredIcon)}
      </div>
      
      {/* Animated Background Overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          hoveredIcon 
            ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100' 
            : 'bg-white'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Links</h2>
        <div className="w-16 h-1 bg-gray-800 mx-auto mb-12"></div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {contactLinks.map(({ id, icon: IconComponent, href, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="relative p-4 rounded-full bg-white shadow-lg border-2 border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-300 group-hover:scale-110">
                <IconComponent 
                  size={32} 
                  className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900" 
                />
                
                {/* Floating effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Label tooltip */}
              <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Medium Icon - Separate since it's not in Lucide */}
        <div className="flex justify-center mb-8">
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            onMouseEnter={() => setHoveredIcon('medium')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className="relative p-4 rounded-full bg-white shadow-lg border-2 border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-300 group-hover:scale-110">
              {/* Medium Logo SVG */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Medium
            </span>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm">
          Let's connect and build something amazing together!
        </p>
      </div>
    </footer>
  );
};

export default ContactLinks;