"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .navbar {
              position: sticky;
              top: 0;
              z-index: 50;
              background: rgba(0, 0, 0, 0.8);
              backdrop-filter: blur(10px);
              padding: 1rem 2rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            .navbar-logo {
              font-size: 1.5rem;
              font-weight: 800;
              color: #fff;
              text-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            }
            .nav-links {
              display: flex;
              gap: 2rem;
            }
            .nav-link {
              color: #d1d5db;
              font-size: 1.1rem;
              font-weight: 500;
              padding: 0.5rem 1rem;
              border-radius: 8px;
              transition: all 0.3s;
              position: relative;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(5px);
            }
            .nav-link:hover {
              color: #fff;
              background: rgba(255, 255, 255, 0.2);
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
            }
            .nav-link.active {
              color: #3b82f6;
              font-weight: 600;
            }
            .nav-link.active::after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 50%;
              transform: translateX(-50%);
              width: 50%;
              height: 2px;
              background: linear-gradient(to right, #3b82f6, #9333ea);
            }
            .hamburger {
              display: none;
              flex-direction: column;
              gap: 5px;
              cursor: pointer;
            }
            .hamburger div {
              width: 25px;
              height: 3px;
              background: #fff;
              border-radius: 2px;
              transition: all 0.3s;
            }
            .mobile-menu {
              display: none;
            }
            @media (max-width: 768px) {
              .nav-links {
                display: none;
              }
              .hamburger {
                display: flex;
              }
              .mobile-menu {
                display: ${isMenuOpen ? 'flex' : 'none'};
                flex-direction: column;
                position: absolute;
                top: 60px;
                right: 0;
                width: 100%;
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(10px);
                padding: 1rem;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease-in-out;
              }
              .mobile-menu .nav-link {
                margin: 0.5rem 0;
                text-align: center;
              }
            }
            @keyframes slideIn {
              from { transform: translateY(-10px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `,
        }}
      />
      <nav className="navbar">
        <Link href="/">
          <div className="navbar-logo">THE UNIVERSE</div>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;