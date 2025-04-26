"use client";

import React, { useEffect, useRef, useState } from "react";
import TypewriterText from '@/components/TypeWriter';

// Planet data with facts
const planets = [
  {
    name: "Mercury",
    fact: "Closest to the Sun, with temperatures swinging from 427°C to -173°C.",
  },
  {
    name: "Venus",
    fact: "Earth’s twin, with a crushing atmosphere 90 times denser than ours.",
  },
  {
    name: "Earth",
    fact: "Our home, with liquid water sustaining diverse life.",
  },
  {
    name: "Mars",
    fact: "The Red Planet, home to Olympus Mons, the solar system’s largest volcano.",
  },
  {
    name: "Jupiter",
    fact: "Gas giant with a storm, the Great Red Spot, twice Earth’s size.",
  },
  {
    name: "Saturn",
    fact: "Famous for rings spanning 240,000 km, made of ice and rock.",
  },
  {
    name: "Uranus",
    fact: "Ice giant tilted 98°, spinning like a rolling ball.",
  },
  {
    name: "Neptune",
    fact: "Deep blue, with winds reaching 2,400 km/h, the fastest in the solar system.",
  },
];

const SolarSystemJourney = () => {
  const videoRef = useRef(null);
  const ambientAudioRef = useRef(null);
  const clickSoundRef = useRef(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  useEffect(() => {
    // Audio setup
    ambientAudioRef.current = new Audio("/sounds/ambient-space.mp3");
    ambientAudioRef.current.loop = true;
    ambientAudioRef.current.volume = 0.3;
    ambientAudioRef.current.play().catch((err) => console.error("Ambient audio failed:", err));

    clickSoundRef.current = new Audio("/sounds/whoosh.wav");
    clickSoundRef.current.volume = 0.5;

    // Cleanup
    return () => {
      ambientAudioRef.current.pause();
    };
  }, []);

  // Handle planet card click
  const handlePlanetClick = (planetName) => {
    clickSoundRef.current.play().catch((err) => console.error("Click sound failed:", err));
    console.log(`Exploring ${planetName}`);
    // Optional: Add interaction with video (e.g., highlight planet in UI)
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .min-h-screen { min-height: 100vh; }
            .bg-black { background: #000; }
            .bg-opacity-90 { opacity: 0.9; }
            .text-white { color: #fff; }
            .relative { position: relative; }
            .overflow-hidden { overflow: hidden; }
            .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .sm\\:text-5xl { @media (min-width: 640px) { font-size: 3rem; line-height: 1; } }
            .font-extrabold { font-weight: 800; }
            .text-center { text-align: center; }
            .mb-12 { margin-bottom: 3rem; }
            .grid { display: grid; }
            .gap-8 { gap: 2rem; }
            .sm\\:grid-cols-2 { @media (min-width: 640px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
            .md\\:grid-cols-3 { @media (min-width: 768px) { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
            .max-w-6xl { max-width: 72rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .planet-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 2rem;
              text-align: center;
              transition: all 0.3s;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              cursor: pointer;
            }
            .planet-card:hover {
              transform: translateY(-5px) scale(1.05);
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.7);
              background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
            }
            .planet-title {
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              background: linear-gradient(to right, #3b82f6, #9333ea);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .planet-fact {
              font-size: 0.875rem;
              color: #d1d5db;
              margin-bottom: 1rem;
            }
            .animate-slide-up {
              animation: slideUp 0.5s ease-out;
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .pointer-events-none { pointer-events: none; }
            .opacity-50 { opacity: 0.5; }
            .opacity-70 { opacity: 0.7; }
            .animate-twinkle { animation: twinkle 2s infinite; }
            @keyframes twinkle {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            .top-10\\% { top: 10%; }
            .left-20\\% { left: 20%; }
            .top-30\\% { top: 30%; }
            .left-70\\% { left: 70%; }
            .top-60\\% { top: 60%; }
            .left-40\\% { left: 40%; }
            .top-15\\% { top: 15%; }
            .right-30\\% { right: 30%; }
            .top-50\\% { top: 50%; }
            .left-50\\% { left: 50%; }
            .delay-500 { animation-delay: 0.5s; }
            .delay-1000 { animation-delay: 1s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-700 { animation-delay: 0.7s; }
            .video-container {
              width: 100%;
              max-width: 1200px;
              height: 70vh;
              margin: 0 auto 2rem;
              border-radius: 1rem;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
              position: relative;
              animation: slideUp 0.5s ease-out;
            }
            .video-container iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
            @media (max-width: 640px) {
              .video-container {
                height: 50vh;
              }
            }
          `,
        }}
      />
      <div className="min-h-screen bg-black bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-opacity-90 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-10% left-20%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-30% left-70%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-50 animate-twinkle delay-1000 top-60% left-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-300 top-15% right-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-50% left-50%" />
        </div>
        <div className="py-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
            <TypewriterText text="Journey Through the Solar System" />
          </h1>
          <div className="video-container">
            <iframe
              ref={videoRef}
              src="https://www.youtube.com/embed/lcZTcfdZ3Ow?si=CRtM3R5GhusD5SW5&autoplay=1&mute=1&loop=1&playlist=lcZTcfdZ3Ow"
              title="A Journey to the Edge of the Solar System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {planets.map((planet, index) => (
              <div
                key={planet.name}
                className={`planet-card animate-slide-up ${hoveredPlanet === planet.name ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredPlanet(planet.name)}
                onMouseLeave={() => setHoveredPlanet(null)}
                onClick={() => handlePlanetClick(planet.name)}
              >
                <h2 className="planet-title">{planet.name}</h2>
                <p className="planet-fact">{planet.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarSystemJourney;