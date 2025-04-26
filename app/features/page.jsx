"use client";

import React from 'react';
import Link from 'next/link';
import TypewriterText from '@/components/TypeWriter';

const Features = () => {
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
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .sm\\:text-5xl { @media (min-width: 640px) { font-size: 3rem; line-height: 1; } }
            .font-extrabold { font-weight: 800; }
            .text-center { text-align: center; }
            .mb-12 { margin-bottom: 3rem; }
            .grid { display: grid; }
            .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .md\\:grid-cols-3 { @media (min-width: 768px) { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
            .gap-8 { gap: 2rem; }
            .max-w-7xl { max-width: 80rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .feature-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 2rem;
              text-align: center;
              transition: all 0.3s;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            .feature-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
            }
            .feature-icon {
              font-size: 3rem;
              margin-bottom: 1rem;
              color: #3b82f6;
            }
            .feature-title {
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            }
            .feature-desc {
              font-size: 1rem;
              color: #d1d5db;
              margin-bottom: 1.5rem;
            }
            .learn-more {
              display: inline-block;
              padding: 0.75rem 1.5rem;
              background: linear-gradient(to right, #3b82f6, #9333ea);
              color: #fff;
              font-weight: 500;
              border-radius: 0.5rem;
              transition: all 0.3s;
            }
            .learn-more:hover {
              transform: scale(1.05);
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
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
            .rocket-launch {
              position: absolute;
              bottom: -100px;
              left: -100px;
              width: 300px;
              height: 500px;
              background: url('https://www.svgrepo.com/show/426222/rocket.svg') no-repeat center;
              background-size: contain;
              animation: rocket-diagonal 15s ease-in-out infinite;
              opacity: 0.9;
              z-index: 0;
              filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
              transform: rotate(45deg);
            }
            .rocket-flame {
              position: absolute;
              bottom: -80px;
              left: 50%;
              transform: translateX(-50%) rotate(-45deg);
              width: 80px;
              height: 120px;
              background: radial-gradient(circle, #ff4500 10%, #ffa500 50%, transparent 70%);
              opacity: 0.9;
              animation: flame-flicker 0.5s ease-in-out infinite;
            }
            @keyframes rocket-diagonal {
              0% { transform: translate(0, 0) rotate(45deg); opacity: 0.9; }
              50% { transform: translate(120vw, -120vh) rotate(45deg); opacity: 0.4; }
              100% { transform: translate(0, 0) rotate(45deg); opacity: 0.9; }
            }
            @keyframes flame-flicker {
              0% { transform: translateX(-50%) rotate(-45deg) scale(1); opacity: 0.9; }
              50% { transform: translateX(-50%) rotate(-45deg) scale(1.3); opacity: 1; }
              100% { transform: translateX(-50%) rotate(-45deg) scale(1); opacity: 0.9; }
            }
            .z-10 { z-index: 10; }
          `,
        }}
      />
      <div className="min-h-screen bg-black bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-opacity-90 text-white relative overflow-hidden">
        {/* Background Rocket Launch */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="rocket-launch">
            <div className="rocket-flame"></div>
          </div>
          {/* Stars */}
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-10% left-20%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-30% left-70%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-50 animate-twinkle delay-1000 top-60% left-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-300 top-15% right-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-50% left-50%" />
        </div>
        <div className="py-16 px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
            <TypewriterText text="Unveil the Mysteries of the Cosmos" />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="feature-card animate-slide-up">
              <div className="feature-icon">📷</div>
              <h2 className="feature-title">Cosmic Snapshot of the Day</h2>
              <p className="feature-desc">
                Marvel at a breathtaking new image from NASA’s Astronomy Picture of the Day, revealing the universe’s wonders every 24 hours.
              </p>
              <Link href="/features/apod" className="learn-more">Dive In</Link>
            </div>

            {/* Feature 2 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🪐</div>
              <h2 className="feature-title">Galactic Image Vault</h2>
              <p className="feature-desc">
                Journey through NASA’s vast collection of awe-inspiring visuals, capturing the beauty of distant stars, nebulae, and beyond.
              </p>
              <Link href="/features/nasa-library" className="learn-more">Explore Now</Link>
            </div>

            {/* Feature 3 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">⚖️</div>
              <h2 className="feature-title">Weigh Your Cosmic Self</h2>
              <p className="feature-desc">
                Ever wondered what you’d weigh on Venus or Saturn? Input your Earth weight and discover your cosmic mass instantly!
              </p>
              <Link href="/features/weight" className="learn-more">Find Out</Link>
            </div>

            {/* Feature 4 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon">🚀</div>
              <h2 className="feature-title">Starbound Launches</h2>
              <p className="feature-desc">
                Track thrilling rocket launches and space missions worldwide, keeping you connected to humanity’s next steps into the stars.
              </p>
              <Link href="/features/launches" className="learn-more">Stay Updated</Link>
            </div>

            {/* Feature 5 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="feature-icon">🌍</div>
              <h2 className="feature-title">Solar System Odyssey</h2>
              <p className="feature-desc">
                Embark on a virtual voyage through our Solar System in stunning 3D, uncovering cosmic secrets and planetary wonders.
              </p>
              <Link href="/features/solar-system" className="learn-more">Start Journey</Link>
            </div>

            {/* Feature 6 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="feature-icon">🪐</div>
              <h2 className="feature-title">Astronomy Calendar</h2>
              <p className="feature-desc">
                Navigate the celestial events of the year with our Astronomy Calendar, highlighting meteor showers, eclipses, and more.
              </p>
              <Link href="/features/calendar" className="learn-more">View Calendar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;