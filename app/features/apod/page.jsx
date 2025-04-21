"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';

const ApodPage = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=MvHNFGugQIldbCnPfprQjCw2LXpcovAU6Mg8C4zR'
        );
        if (!response.ok) throw new Error('Failed to fetch APOD data');
        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApod();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-opacity-90 text-white relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-twinkle top-[10%] left-[20%]" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle delay-500 top-[30%] left-[70%]" />
          <div className="absolute w-3 h-3 bg-white rounded-full opacity-50 animate-twinkle delay-1000 top-[60%] left-[40%]" />
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle delay-300 top-[15%] right-[30%]" />
          <div className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle delay-700 top-[50%] left-[50%]" />
        </div>

        {/* Main Content */}
        <div className="py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
            Astronomy Picture of the Day
          </h1>

          {loading ? (
            <p className="text-center text-xl text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-400 text-xl">Error: {error}</p>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto animate-slide-up">
              {apodData.media_type === 'image' ? (
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="w-full md:w-1/2 rounded-xl border-2 border-blue-400 shadow-xl"
                />
              ) : (
                <p className="w-full md:w-1/2 text-center text-gray-400">
                  Today’s APOD is not an image. Visit NASA’s site for details.
                </p>
              )}

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-white text-shadow">
                  {apodData.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {apodData.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .text-shadow {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ApodPage;
