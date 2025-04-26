"use client";

import React, { useEffect, useState } from "react";
import TypewriterText from '@/components/TypeWriter';

const LaunchesPage = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=9");
        const data = await res.json();
        setLaunches(data.results);
      } catch (err) {
        console.error("Failed to fetch launches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

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
            .gap-8 { gap: 2rem; }
            .sm\\:grid-cols-2 { @media (min-width: 640px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
            .md\\:grid-cols-3 { @media (min-width: 768px) { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
            .max-w-6xl { max-width: 72rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .launch-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 2rem;
              text-align: left;
              transition: all 0.3s;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            .launch-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
            }
            .launch-title {
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            }
            .launch-desc {
              font-size: 0.875rem;
              color: #d1d5db;
              margin-bottom: 1rem;
            }
            .launch-info {
              font-size: 0.875rem;
              color: #d1d5db;
              margin-bottom: 0.5rem;
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-10% left-20%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-30% left-70%" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-50 animate-twinkle delay-1000 top-60% left-40%" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-300 top-15% right-30%" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-50% left-50%" />
        </div>
        <div className="py-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
            <TypewriterText text="Upcoming Space Launches" />
          </h1>
          {loading ? (
            <p className="text-center text-xl text-gray-300 animate-slide-up">Loading launches...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {launches.map((launch, index) => (
                <div
                  key={launch.id}
                  className="launch-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h2 className="launch-title">{launch.name}</h2>
                  <p className="launch-info">
                    <strong>Provider:</strong> {launch.launch_service_provider.name}
                  </p>
                  <p className="launch-info">
                    <strong>Rocket:</strong> {launch.rocket.configuration.name}
                  </p>
                  <p className="launch-info">
                    <strong>Launch Pad:</strong> {launch.pad.name}
                  </p>
                  <p className="launch-info">
                    <strong>Date:</strong> {new Date(launch.net).toLocaleString()}
                  </p>
                  <p className="launch-desc">
                    {launch.mission?.description || "No mission description available."}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LaunchesPage;