import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Twitter, Github, MessageCircle } from 'lucide-react';

function ContactLinks() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [animeLoaded, setAnimeLoaded] = useState(!!window.anime);
  const backgroundRef = useRef(null);

  const contactLinks = [
    { id: 'email', icon: Mail, href: 'mailto:kowshiktg3014@gmail.com', label: 'Email', color: '#EA4335' },
    { id: 'linkedin', icon: Linkedin, href: 'https://linkedin.com/in/kowshik-t-g-036b852b4/', label: 'LinkedIn', color: '#0A66C2' },
    { id: 'twitter', icon: Twitter, href: 'https://x.com/kowshikram_1405', label: 'Twitter/X', color: '#1DA1F2' },
    { id: 'github', icon: Github, href: 'https://github.com/kowshikramtg', label: 'GitHub', color: '#333' },
    { id: 'discord', icon: MessageCircle, href: 'https://discord.com/users/', label: 'Discord', color: '#5865F2' },
    { id: 'medium', icon: null, href: 'https://medium.com/@kowshiktg3014', label: 'Medium', color: '#000' },
  ];

  const MediumIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );

  // Load anime.js dynamically
  useEffect(() => {
    if (!window.anime) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.async = true;
      script.onload =() => setAnimeLoaded(true);
      document.head.appendChild(script);
    }else{
      setAnimeLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!hoveredIcon || !animeLoaded || !window.anime || !backgroundRef.current) return;

    const iconData = contactLinks.find(icon => icon.id === hoveredIcon);
    const IconComponent = iconData.icon || MediumIcon;

    // Remove previous particles
    backgroundRef.current.querySelectorAll('.bg-particle').forEach(el => el.remove());

    // Create multiple particle instances
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'bg-particle absolute';
      particle.style.position = 'absolute';
      particle.style.top = `${Math.random() * 80 + 10}%`;
      particle.style.left = `${Math.random() * 80 + 10}%`;
      particle.style.fontSize = `${Math.random() * 60 + 40}px`;
      particle.style.opacity = 0.1;
      particle.style.color = iconData.color;
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = 0;

      // Render icon inside particle
      if (iconData.id === 'medium') {
        particle.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="${MediumIcon().props.children[0].props.d}"/></svg>`;
      } else {
        particle.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">${IconComponent().props.children ? IconComponent().props.children[0].props.d : ''}</svg>`;
      }

      backgroundRef.current.appendChild(particle);
      particles.push(particle);

      // Animate particle
      window.anime({
        targets: particle,
        translateY: [-20, -300],
        translateX: [0, Math.random() * 100 - 50],
        opacity: [0.1, 0.3],
        scale: [1, Math.random() * 1 + 1.5],
        rotate: [0, Math.random() * 360],
        duration: 2000 + Math.random() * 1000,
        delay: Math.random() * 500,
        easing: 'easeOutQuad',
        loop: true
      });
    }

    // Cleanup on hover leave
    return () => {
      particles.forEach(p => p.remove());
    };
  }, [hoveredIcon, animeLoaded]);

  return (
    <footer 
      ref={backgroundRef}
      className="relative bg-white py-16 px-8 overflow-hidden"
      style={{ minHeight: '400px' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Links</h2>
        <div className="w-16 h-1 bg-gray-800 mx-auto mb-12"></div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 relative z-10">
          {contactLinks.map(({ id, icon: IconComponent, href, label, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => animeLoaded && setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{ transition: 'all 0.3s ease', transform: hoveredIcon === id ? 'translateY(-8px) scale(1.1)' : 'translateY(0) scale(1)' }}
            >
              <div 
                className="relative p-4 rounded-full bg-white shadow-lg border-2 transition-all duration-300"
                style={{ 
                  borderColor: hoveredIcon === id ? color : '#e5e7eb',
                  boxShadow: hoveredIcon === id ? `0 10px 30px ${color}33` : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {id === 'medium' ? (
                  <div style={{ color: hoveredIcon === id ? color : '#374151' }}>
                    <MediumIcon />
                  </div>
                ) : (
                  <IconComponent 
                    size={32} 
                    style={{ color: hoveredIcon === id ? color : '#374151', transition: 'color 0.3s ease' }}
                  />
                )}
                
                <div 
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
                  style={{
                    background: hoveredIcon === id ? `radial-gradient(circle, ${color}20 0%, transparent 70%)` : 'transparent',
                    opacity: hoveredIcon === id ? 1 : 0
                  }}
                ></div>
              </div>

              <span 
                className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor: color,
                  opacity: hoveredIcon === id ? 1 : 0,
                  transform: `translateX(-50%) ${hoveredIcon === id ? 'translateY(0)' : 'translateY(-10px)'}`
                }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Let's connect and build something amazing together!
        </p>
      </div>
    </footer>
  );
};

export default ContactLinks;
