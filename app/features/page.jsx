"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import TypewriterText from '@/components/TypeWriter';
;

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
          `,
        }}
      />
      <div className="min-h-screen bg-black bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-opacity-90 text-white relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-10% left-20%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-30% left-70%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-50 animate-twinkle delay-1000 top-60% left-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-300 top-15% right-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-50% left-50%" />
        </div>
        <div className="py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
          <TypewriterText text="Explore the wonders of space" />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="feature-card animate-slide-up">
              <div className="feature-icon">📷</div>
              <h2 className="feature-title">Image of the Day</h2>
              <p className="feature-desc">
                Discover daily cosmic beauty through NASA’s Astronomy Picture of the Day. A new stunning space image awaits you every 24 hours.
              </p>
              <Link href="/features/apod" className="learn-more">Learn More</Link>
            </div>

            {/* Feature 2 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🪐</div>
              <h2 className="feature-title">NASA Image Library</h2>
              <p className="feature-desc">
                Explore a treasure chest of high-quality images from NASA missions, satellites, and telescopes across the galaxy.
              </p>
              <Link href="/features/nasa-library" className="learn-more">Learn More</Link>
            </div>

            {/* Feature 3 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">⚖️</div>
              <h2 className="feature-title">Calculate Your Weight</h2>
              <p className="feature-desc">
                Curious how much you'd weigh on Mars or Jupiter? Enter your weight and find out instantly!
              </p>
              <Link href="/features/weight" className="learn-more">Learn More</Link>
            </div>

            {/* Feature 4 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon">🚀</div>
              <h2 className="feature-title">Upcoming Space Launches</h2>
              <p className="feature-desc">
                Stay up-to-date with upcoming rocket launches, missions, and space exploration events around the world.
              </p>
              <Link href="/features/launches" className="learn-more">Learn More</Link>
            </div>

            {/* Feature 5 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="feature-icon">🌍</div>
              <h2 className="feature-title">Solar System Journey</h2>
              <p className="feature-desc">
                Take a virtual trip through our Solar System. Learn fun facts, view planets in 3D, and zoom across space!
              </p>
              <Link href="/features/solar-system" className="learn-more">Learn More</Link>
            </div>

            {/* Feature 6 */}
            <div className="feature-card animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="feature-icon">🌡️</div>
              <h2 className="feature-title">Mars Weather Monitor</h2>
              <p className="feature-desc">
                Check the latest temperature, wind, and pressure conditions on the Red Planet with real-time data from NASA’s rovers.
              </p>
              <Link href="/features/mars-weather" className="learn-more">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
