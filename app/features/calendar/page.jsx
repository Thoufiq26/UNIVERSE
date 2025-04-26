"use client";

import React, { useEffect, useRef, useState } from "react";
import TypewriterText from "@/components/TypeWriter";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Astronomy events for 2025 (UTC times)
const events = [
  {
    title: "Quadrantids Meteor Shower",
    start: new Date("2025-01-03T00:00:00Z"),
    end: new Date("2025-01-04T23:59:00Z"),
    description: "Peak ~40 meteors/hour, best after midnight, waxing crescent Moon.",
  },
  {
    title: "Venus at Greatest Eastern Elongation",
    start: new Date("2025-01-10T20:00:00Z"),
    end: new Date("2025-01-10T20:00:00Z"),
    description: "Brightest evening star, visible after sunset.",
  },
  {
    title: "Full Moon (Wolf Moon)",
    start: new Date("2025-01-13T22:27:00Z"),
    end: new Date("2025-01-13T22:27:00Z"),
    description: "Brightest full moon of January.",
  },
  {
    title: "Mars at Opposition",
    start: new Date("2025-01-16T12:00:00Z"),
    end: new Date("2025-01-16T12:00:00Z"),
    description: "Brightest and largest, best for viewing.",
  },
  {
    title: "Venus at Greatest Brightness",
    start: new Date("2025-02-16T18:00:00Z"),
    end: new Date("2025-02-16T18:00:00Z"),
    description: "Twice as bright as its dimmest, evening star.",
  },
  {
    title: "Planetary Alignment",
    start: new Date("2025-02-28T06:00:00Z"),
    end: new Date("2025-02-28T06:00:00Z"),
    description: "All 7 planets visible, Uranus/Neptune need binoculars.",
  },
  {
    title: "Total Lunar Eclipse (Worm Moon)",
    start: new Date("2025-03-14T03:58:00Z"),
    end: new Date("2025-03-14T03:58:00Z"),
    description: "Visible in Americas, Europe, Africa.",
  },
  {
    title: "March Equinox",
    start: new Date("2025-03-20T09:02:00Z"),
    end: new Date("2025-03-20T09:02:00Z"),
    description: "Spring begins in Northern Hemisphere.",
  },
  {
    title: "Partial Solar Eclipse",
    start: new Date("2025-03-29T08:50:00Z"),
    end: new Date("2025-03-29T12:43:00Z"),
    description: "Visible in northeastern US, Europe.",
  },
  {
    title: "Lyrid Meteor Shower",
    start: new Date("2025-04-22T00:00:00Z"),
    end: new Date("2025-04-22T23:59:00Z"),
    description: "Peak ~20 meteors/hour, some Moon interference.",
  },
  {
    title: "Eta Aquariid Meteor Shower",
    start: new Date("2025-05-05T00:00:00Z"),
    end: new Date("2025-05-06T23:59:00Z"),
    description: "Peak ~40 meteors/hour, Moon interference.",
  },
  {
    title: "Venus at Greatest Western Elongation",
    start: new Date("2025-05-31T04:00:00Z"),
    end: new Date("2025-05-31T04:00:00Z"),
    description: "Bright morning star, visible before sunrise.",
  },
  {
    title: "Jupiter Conjunction with Mars",
    start: new Date("2025-06-20T05:00:00Z"),
    end: new Date("2025-06-20T05:00:00Z"),
    description: "Close approach, visible in morning sky.",
  },
  {
    title: "Mercury at Greatest Eastern Elongation",
    start: new Date("2025-07-22T20:00:00Z"),
    end: new Date("2025-07-22T20:00:00Z"),
    description: "Visible as evening star after sunset.",
  },
  {
    title: "Perseid Meteor Shower",
    start: new Date("2025-08-12T00:00:00Z"),
    end: new Date("2025-08-12T23:59:00Z"),
    description: "Peak ~100 meteors/hour, Moon interference.",
  },
  {
    title: "Total Lunar Eclipse (Harvest Moon)",
    start: new Date("2025-09-07T18:12:00Z"),
    end: new Date("2025-09-07T18:12:00Z"),
    description: "Not visible in North America.",
  },
  {
    title: "Partial Solar Eclipse",
    start: new Date("2025-09-21T07:00:00Z"),
    end: new Date("2025-09-21T07:00:00Z"),
    description: "Visible in New Zealand, Antarctica, ~70% coverage.",
  },
  {
    title: "Full Moon, Supermoon (Hunter’s Moon)",
    start: new Date("2025-10-06T03:49:00Z"),
    end: new Date("2025-10-06T03:49:00Z"),
    description: "First supermoon of 2025, closest to Earth.",
  },
  {
    title: "Orionid Meteor Shower",
    start: new Date("2025-10-21T00:00:00Z"),
    end: new Date("2025-10-21T23:59:00Z"),
    description: "Peak ~20 meteors/hour, new Moon aids viewing.",
  },
  {
    title: "Full Moon, Supermoon (Beaver Moon)",
    start: new Date("2025-11-05T13:21:00Z"),
    end: new Date("2025-11-05T13:21:00Z"),
    description: "Second supermoon, bright and large.",
  },
  {
    title: "Leonids Meteor Shower",
    start: new Date("2025-11-17T00:00:00Z"),
    end: new Date("2025-11-18T23:59:00Z"),
    description: "Peak ~15 meteors/hour, some Moon interference.",
  },
  {
    title: "Full Moon, Supermoon (Cold Moon)",
    start: new Date("2025-12-04T23:14:00Z"),
    end: new Date("2025-12-04T23:14:00Z"),
    description: "Third supermoon, brightest of December.",
  },
  {
    title: "Geminid Meteor Shower",
    start: new Date("2025-12-13T00:00:00Z"),
    end: new Date("2025-12-14T23:59:00Z"),
    description: "Peak ~120 meteors/hour, moonless night for best viewing.",
  },
  {
    title: "December Solstice",
    start: new Date("2025-12-21T15:03:00Z"),
    end: new Date("2025-12-21T15:03:00Z"),
    description: "Winter begins in Northern Hemisphere.",
  },
  {
    title: "Ursid Meteor Shower",
    start: new Date("2025-12-22T00:00:00Z"),
    end: new Date("2025-12-22T23:59:00Z"),
    description: "Peak ~10 meteors/hour, Moon interference.",
  },
];

const localizer = momentLocalizer(moment);

const AstronomyEvents = () => {
  const calendarRef = useRef(null);
  const ambientAudioRef = useRef(null);
  const clickSoundRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  // Handle event click
  const handleEventClick = (event) => {
    clickSoundRef.current.play().catch((err) => console.error("Click sound failed:", err));
    setSelectedEvent(event);
  };

  // Custom event styling
  const eventStyleGetter = (event) => {
    return {
      style: {
        background: "linear-gradient(to right, #3b82f6, #9333ea)",
        border: "none",
        borderRadius: "0.5rem",
        color: "#fff",
        fontSize: "0.875rem",
        padding: "0.25rem 0.5rem",
        textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
      },
    };
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
            .max-w-7xl { max-width: 80rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .animate-slide-up { animation: slideUp 0.5s ease-out; }
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
            .calendar-container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 1rem;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
              margin-bottom: 3rem;
              height: 70vh;
              animation: slideUp 0.5s ease-out;
            }
            .rbc-calendar {
              background: transparent;
              color: #fff;
            }
            .rbc-toolbar {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 0.5rem;
              margin-bottom: 1rem;
            }
            .rbc-toolbar button {
              color: #fff;
              background: linear-gradient(to right, #3b82f6, #9333ea);
              border: none;
              border-radius: 0.5rem;
              padding: 0.5rem 1rem;
              cursor: pointer;
              transition: all 0.3s;
            }
            .rbc-toolbar button:hover {
              background: linear-gradient(to right, #2563eb, #7e22ce);
            }
            .rbc-month-view, .rbc-time-view {
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(59, 130, 246, 0.3);
              border-radius: 0.5rem;
            }
            .rbc-header {
              color: #d1d5db;
              border-bottom: 1px solid rgba(59, 130, 246, 0.3);
              padding: 0.5rem;
            }
            .rbc-day-bg {
              background: rgba(255, 255, 255, 0.05);
            }
            .rbc-today {
              background: rgba(59, 130, 246, 0.2);
            }
            .rbc-event {
              transition: all 0.3s;
            }
            .rbc-event:hover {
              transform: scale(1.05);
              box-shadow: 0 4px 15px rgba(59, 130, 246, 0.7);
            }
            .event-details {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 1rem;
              padding: 1.5rem;
              margin-top: 2rem;
              border: 1px solid rgba(59, 130, 246, 0.3);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              animation: slideUp 0.5s ease-out;
            }
            .event-title {
              font-size: 1.5rem;
              font-weight: 600;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              background: linear-gradient(to right, #3b82f6, #9333ea);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .event-description {
              font-size: 1rem;
              color: #d1d5db;
              margin-top: 0.5rem;
            }
            @media (max-width: 640px) {
              .calendar-container {
                height: 50vh;
              }
              .event-title {
                font-size: 1.25rem;
              }
              .event-description {
                font-size: 0.875rem;
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
        <div className="py-16 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
            <TypewriterText text="🌌 2025 Astronomy Events" />
          </h1>
          <div className="calendar-container">
            <Calendar
              ref={calendarRef}
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%" }}
              onSelectEvent={handleEventClick}
              eventPropGetter={eventStyleGetter}
              defaultView="month"
              defaultDate={new Date(2025, 0, 1)}
            />
          </div>
          {selectedEvent && (
            <div className="event-details">
              <h2 className="event-title">{selectedEvent.title}</h2>
              <p className="event-description">
                {moment(selectedEvent.start).format("MMMM Do YYYY, h:mm A")} -{" "}
                {moment(selectedEvent.end).format("h:mm A")}
              </p>
              <p className="event-description">{selectedEvent.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AstronomyEvents;