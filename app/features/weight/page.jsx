'use client';

import React, { useState } from 'react';

const gravityFactors = {
  Mercury: 0.38,
  Venus: 0.90,
  Earth: 1.00,
  Moon: 0.165,
  Mars: 0.38,
  Jupiter: 2.53,
  Saturn: 1.06,
  Uranus: 0.89,
  Neptune: 1.14,
  Pluto: 0.06,
};

const PlanetWeightCalculator = () => {
  const [earthWeight, setEarthWeight] = useState('');
  const [planet, setPlanet] = useState('Mars');
  const [planetWeight, setPlanetWeight] = useState(null);

  const calculateWeight = () => {
    if (earthWeight === '' || isNaN(earthWeight)) return;
    const factor = gravityFactors[planet];
    const result = (parseFloat(earthWeight) * factor).toFixed(2);
    setPlanetWeight(result);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .calculator-wrapper {
              position: relative;
              width: 100%;
              height: 100vh;
              background: url('https://www.transparenttextures.com/patterns/stardust.png');
              z-index: 1;
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 1rem;
            }
            @media (max-width: 640px) {
              .calculator-wrapper {
                flex-direction: column;
                height: auto;
                min-height: 100vh;
              }
            }
            .background-layer {
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 5;
            }
            .calculator-container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 1.5rem;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              max-width: 20rem;
              flex: 0 0 40%;
              margin: 1rem;
              text-align: center;
              transition: all 0.3s;
              position: relative;
              z-index: 10;
            }
            @media (max-width: 640px) {
              .calculator-container {
                max-width: 90%;
                flex: none;
              }
            }
            .calculator-container:hover {
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
            }
            .calculator-title {
              font-size: 1.25rem;
              font-weight: 600;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              margin-bottom: 1rem;
            }
            .calculator-input {
              width: 100%;
              padding: 0.5rem;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(59, 130, 246, 0.3);
              border-radius: 0.5rem;
              color: #d1d5db;
              font-size: 0.9rem;
              transition: all 0.3s;
              margin-bottom: 0.75rem;
            }
            .calculator-input:focus {
              outline: none;
              border-color: #3b82f6;
              box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
            }
            .calculator-select {
              width: 100%;
              padding: 0.5rem;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(59, 130, 246, 0.3);
              border-radius: 0.5rem;
              color: #d1d5db;
              font-size: 0.9rem;
              transition: all 0.3s;
              margin-bottom: 0.75rem;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="%23d1d5db" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z"/></svg>');
              background-repeat: no-repeat;
              background-position: right 0.5rem center;
              background-size: 10px;
              cursor: pointer;
            }
            .calculator-select:focus {
              outline: none;
              border-color: #3b82f6;
              box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
            }
            .calculator-select option {
              background: rgba(0, 0, 0, 0.9);
              color: #fff;
              font-size: 0.9rem;
              text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
              padding: 0.5rem;
            }
            .calculator-select:hover {
              border-color: #3b82f6;
            }
            .calculator-button {
              background: linear-gradient(to right, #3b82f6, #9333ea);
              color: #fff;
              padding: 0.5rem 1rem;
              border-radius: 0.5rem;
              border: none;
              font-weight: 500;
              font-size: 0.9rem;
              cursor: pointer;
              transition: all 0.3s;
            }
            .calculator-button:hover {
              transform: scale(1.05);
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
            }
            .calculator-result {
              font-size: 1rem;
              font-weight: 500;
              color: #d1d5db;
              margin-top: 1rem;
            }
            .calculator-result .planet-name {
              color: #3b82f6;
              text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
            }
            .calculator-result .weight-value {
              color: #10b981;
              text-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
            }
            .explanation-container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 1.5rem;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              max-width: 36rem;
              flex: 0 0 60%;
              margin: 1rem;
              text-align: left;
              color: #d1d5db;
              font-size: 0.9rem;
              line-height: 1.6;
              position: relative;
              z-index: 10;
            }
            @media (max-width: 640px) {
              .explanation-container {
                max-width: 90%;
                flex: none;
              }
            }
            .explanation-container:hover {
              box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
            }
            .explanation-title {
              font-size: 1.1rem;
              font-weight: 600;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              margin-bottom: 0.75rem;
            }
            .explanation-formula {
              font-style: italic;
              color: #3b82f6;
              margin: 0.5rem 0;
            }
            .explanation-list {
              list-style: none;
              padding: 0;
              margin: 0.75rem 0;
            }
            .explanation-list li {
              display: flex;
              justify-content: space-between;
              padding: 0.2rem 0;
              border-bottom: 1px solid rgba(59, 130, 246, 0.2);
            }
            .explanation-list li:last-child {
              border-bottom: none;
            }
            .explanation-example {
              margin-top: 0.75rem;
              color: #10b981;
              font-weight: 500;
            }
            .star {
              position: absolute;
              background: #fff;
              border-radius: 50%;
              opacity: 0.7;
              pointer-events: none;
            }
            .star--small { width: 1px; height: 1px; }
            .star--medium { width: 2px; height: 2px; }
            .star--large { width: 3px; height: 3px; }
            .star--white { background: #fff; }
            .star--blue { background: #3b82f6; }
            .star--yellow { background: #facc15; }
            .animate-twinkle { animation: twinkle 2s infinite; }
            .animate-pulse { animation: pulse 3s infinite; }
            @keyframes twinkle {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.9; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.5; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.2); }
            }
            .comet {
              position: absolute;
              width: 3px;
              height: 3px;
              background: #fff;
              border-radius: 50%;
              box-shadow: 0 0 8px #fff, 0 0 15px #3b82f6;
              pointer-events: none;
            }
            .comet::after {
              content: '';
              position: absolute;
              width: 30px;
              height: 1px;
              background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
              left: -30px;
              top: 1px;
            }
            .comet--1 { animation: comet1 6s linear infinite; top: 10%; left: 5%; }
            .comet--2 { animation: comet2 8s linear infinite; top: 60%; right: 5%; }
            @keyframes comet1 {
              0% { transform: translate(0, 0); opacity: 0.8; }
              100% { transform: translate(100%, 50%); opacity: 0; }
            }
            @keyframes comet2 {
              0% { transform: translate(0, 0); opacity: 0.8; }
              100% { transform: translate(-100%, 30%); opacity: 0; }
            }
            .animate-slide-up {
              animation: slideUp 0.5s ease-out;
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `,
        }}
      />
      <div className="calculator-wrapper">
        <div className="background-layer">
          <div className="star star--small star--white animate-twinkle" style={{ top: '10%', left: '5%' }} />
          <div className="star star--medium star--blue animate-pulse" style={{ top: '30%', left: '80%' }} />
          <div className="star star--large star--yellow animate-twinkle" style={{ top: '50%', left: '20%' }} />
          <div className="star star--small star--white animate-pulse" style={{ top: '70%', left: '60%' }} />
          <div className="star star--medium star--blue animate-twinkle" style={{ top: '90%', left: '95%' }} />
          <div className="comet comet--1" />
          <div className="comet comet--2" />
        </div>
        <div className="calculator-container animate-slide-up">
          <h2 className="calculator-title">🌌 Planet Weight Calculator</h2>
          <input
            type="number"
            placeholder="Enter weight on Earth (kg)"
            className="calculator-input"
            value={earthWeight}
            onChange={(e) => setEarthWeight(e.target.value)}
          />
          <select
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
            className="calculator-select"
          >
            {Object.keys(gravityFactors).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <button onClick={calculateWeight} className="calculator-button">
            Calculate
          </button>
          {planetWeight && (
            <div className="calculator-result">
              🌍 Weight on <span className="planet-name">{planet}</span> is{' '}
              <span className="weight-value">{planetWeight} kg</span>
            </div>
          )}
        </div>
        <div className="explanation-container animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="explanation-title">How Weight is Calculated</h3>
          <p>
            Your weight on a planet depends on its surface gravity relative to Earth. The formula used is:
          </p>
          <p className="explanation-formula">
            Weight on Planet = Weight on Earth × Gravity Factor
          </p>
          <p>Gravity factors for each celestial body (relative to Earth’s gravity, 1.00) are:</p>
          <ul className="explanation-list">
            {Object.entries(gravityFactors).map(([planet, factor]) => (
              <li key={planet}>
                <span>{planet}</span>
                <span>{factor.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="explanation-example">
            Example: If you weigh 70 kg on Earth, on Mars (gravity factor 0.38), your weight is 70 × 0.38 = 26.60 kg.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlanetWeightCalculator;