import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function App() {
  return (
    <>
    <Head>
        <link rel="icon" href="/the-universe/public/favicon.ico" />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .bg-black { background: #000; }
            .bg-opacity-90 { opacity: 0.9; }
            .text-white { color: #fff; }
            .overflow-hidden { overflow: hidden; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .pointer-events-none { pointer-events: none; }
            .rounded-full { border-radius: 9999px; }
            .opacity-50 { opacity: 0.5; }
            .opacity-70 { opacity: 0.7; }
            .opacity-80 { opacity: 0.8; }
            .opacity-40 { opacity: 0.4; }
            .opacity-60 { opacity: 0.6; }
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
            .top-25\\% { top: 25%; }
            .right-15\\% { right: 15%; }
            .top-65\\% { top: 65%; }
            .left-25\\% { left: 25%; }
            .top-35\\% { top: 35%; }
            .right-40\\% { right: 40%; }
            .z-0 { z-index: 0; }
            .z-10 { z-index: 10; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .sm\\:text-6xl { @media (min-width: 640px) { font-size: 3.75rem; line-height: 1; } }
            .md\\:text-7xl { @media (min-width: 768px) { font-size: 4.5rem; line-height: 1; } }
            .font-extrabold { font-weight: 800; }
            .tracking-tight { letter-spacing: -0.025em; }
            .mt-6 { margin-top: 1.5rem; }
            .text-base { font-size: 1rem; line-height: 1.5rem; }
            .sm\\:text-lg { @media (min-width: 640px) { font-size: 1.125rem; line-height: 1.75rem; } }
            .md\\:text-xl { @media (min-width: 768px) { font-size: 1.25rem; line-height: 1.75rem; } }
            .text-gray-400 { color: #9ca3af; }
            .max-w-lg { max-width: 32rem; }
            .text-center { text-align: center; }
            .mt-8 { margin-top: 2rem; }
            .mt-4 { margin-top: 1rem; }
            .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .font-semibold { font-weight: 600; }
            .transition-all { transition: all 0.3s; }
            .duration-300 { transition-duration: 300ms; }
            .hover\\:scale-110:hover { transform: scale(1.1); }
            .cosmic-button {
              width: 200px;
              height: 80px;
              background: linear-gradient(45deg, #1e3a8a, #6b21a8);
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: #fff;
              font-size: 1.25rem;
              font-weight: 700;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
              border-radius: 50px;
              border: 2px solid rgba(147, 51, 234, 0.5);
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
              overflow: hidden;
              transition: all 0.3s;
              animation: cosmic-pulse 3s ease-in-out infinite;
            }
            .cosmic-button:hover {
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 50px rgba(147, 51, 234, 0.6);
              transform: scale(1.1);
            }
            .cosmic-button::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
              opacity: 0;
              transition: opacity 0.4s;
            }
            .cosmic-button:hover::before {
              opacity: 1;
            }
            .cosmic-button::after {
              content: '';
              position: absolute;
              width: 50px;
              height: 50px;
              background: radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent);
              top: -25px;
              left: -25px;
              opacity: 0;
              transition: all 0.4s;
            }
            .cosmic-button:hover::after {
              top: 25px;
              left: 25px;
              opacity: 1;
            }
            .cosmic-text {
              position: relative;
              z-index: 1;
              transition: transform 0.3s;
            }
            .cosmic-button:hover .cosmic-text {
              transform: translateY(-2px);
            }
            .caption {
              font-family: 'Arial', sans-serif;
              text-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            }
            @keyframes twinkle {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            @keyframes comet {
              0% { transform: translate(-100vw, 100vh); opacity: 0.8; }
              100% { transform: translate(100vw, -100vh); opacity: 0; }
            }
            @keyframes glow {
              0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
              50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(59, 130, 246, 0.5); }
            }
            @keyframes sun-pulse {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.1); opacity: 1; }
              100% { transform: scale(1); opacity: 0.8; }
            }
            @keyframes ray-flicker {
              0% { opacity: 0.3; transform: rotate(0deg); }
              50% { opacity: 0.5; transform: rotate(5deg); }
              100% { opacity: 0.3; transform: rotate(0deg); }
            }
            @keyframes black-hole-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes cosmic-pulse {
              0% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
              50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
              100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
            }
            .animate-twinkle { animation: twinkle 2s infinite; }
            .animate-comet { animation: comet 5s infinite linear; }
            .animate-glow { animation: glow 2s ease-in-out infinite; }
            .animate-sun-pulse { animation: sun-pulse 4s infinite; }
            .animate-ray-flicker { animation: ray-flicker 3s infinite; }
            .animate-black-hole-spin { animation: black-hole-spin 20s linear infinite; }
            .delay-500 { animation-delay: 0.5s; }
            .delay-1000 { animation-delay: 1s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-700 { animation-delay: 0.7s; }
            .delay-1200 { animation-delay: 1.2s; }
            .delay-1500 { animation-delay: 1.5s; }
          `,
        }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-opacity-90 text-white overflow-hidden relative">
        {/* Sunlight Effect */}
        <div
          className="absolute top-0 bottom-0 left-0 w-96 h-full z-0"
          style={{
            background: 'radial-gradient(circle at 0% 50%, rgba(255, 245, 200, 0.9) 0%, rgba(255, 200, 100, 0.4) 20%, transparent 50%)',
          }}
        >
          <div
            className="absolute w-24 h-24 top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full opacity-80 animate-sun-pulse"
            style={{ filter: 'blur(10px)' }}
          />
          <div
            className="absolute w-96 h-2 top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-white/50 to-transparent opacity-50 animate-ray-flicker"
            style={{ transformOrigin: 'left' }}
          />
          <div
            className="absolute w-64 h-1 top-[48%] left-0 transform -translate-y-1/2 bg-gradient-to-r from-white/30 to-transparent opacity-40 animate-ray-flicker delay-500"
            style={{ transformOrigin: 'left' }}
          />
        </div>
        {/* Black Hole Effect */}
        <div
          className="absolute w-48 h-48 top-1/2 right-[10%] z-0"
          style={{
            background: 'radial-gradient(circle, #000 20%, rgba(100, 100, 255, 0.3) 30%, transparent 50%)',
            filter: 'blur(5px)',
          }}
        >
          <div
            className="absolute w-64 h-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-300/50 to-transparent opacity-70 animate-black-hole-spin"
            style={{ transformOrigin: 'center' }}
          />
          <div
            className="absolute w-64 h-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-300/50 to-transparent opacity-70 animate-black-hole-spin"
            style={{ transformOrigin: 'center', transform: 'rotate(90deg)' }}
          />
        </div>
        {/* Background Animated Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Stars */}
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-10% left-20%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-30% left-70%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-40 animate-twinkle delay-1000 top-60% left-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-twinkle delay-300 top-15% right-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-50% left-50%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-1200 top-25% right-15%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-twinkle delay-1500 top-65% left-25%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-60 animate-twinkle delay-200 top-35% right-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle delay-500 top-20% left-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-1000 top-40% left-60%" />
          {/* Comet */}
          <div className="absolute w-4 h-4 bg-white rounded-full opacity-80 animate-comet" />
        </div>
        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight animate-glow">
            THE UNIVERSE
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-lg text-center">
            Embark on a cosmic journey to uncover the secrets of stars, galaxies, and beyond.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <p className="text-lg font-semibold caption">Launch into the Cosmos</p>
            <Link href="/features">
              <button className="mt-4 cosmic-button transition-all duration-300 hover:scale-110">
                <span className="cosmic-text">Explore Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;