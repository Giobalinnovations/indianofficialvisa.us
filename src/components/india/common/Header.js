'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-md'
          : 'bg-gradient-to-b from-secondary/90 to-transparent'
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tertiary/10 to-accent/10"></div>

      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-24 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute inset-0 transition-transform duration-300 scale-110 opacity-0 blur-lg bg-gradient-to-r from-primary via-tertiary to-accent group-hover:opacity-30"></div>
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={180}
              height={50}
              alt="Official Indian Visa Application Services"
              className="relative transition-all duration-500 w-44 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link href="/" aria-label="Navigate to Home page">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative
                before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-full before:h-0.5
                before:bg-gradient-to-r before:from-accent before:to-tertiary before:transition-all before:duration-300
                ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                Home
              </span>
            </Link>
            <Link href="#" aria-label="Contact our support team">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative
                before:absolute before:-bottom-1 before:left-0 before:w-0 hover:before:w-full before:h-0.5
                before:bg-gradient-to-r before:from-accent before:to-tertiary before:transition-all before:duration-300
                ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                Contact Support
              </span>
            </Link>
            <Link
              href="/visa/step-one"
              aria-label="Start your visa application"
            >
              <span className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-primary hover:bg-accent group">
                <span className="relative z-10 inline-flex items-center">
                  Apply for e-Visa
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              <div className="absolute inset-0 transition-transform duration-300 rotate-45 opacity-0 blur-lg bg-gradient-to-r from-primary to-accent group-hover:opacity-50"></div>
              {isOpen ? (
                <FaTimes
                  className={`w-6 h-6 transition-colors duration-300 relative ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                />
              ) : (
                <FaBars
                  className={`w-6 h-6 transition-colors duration-300 relative ${
                    scrolled ? 'text-dark' : 'text-white'
                  }`}
                />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-soft transition-all duration-500 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="divide-y divide-gray-100/20">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                <span className="text-dark">Home</span>
              </div>
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                <span className="text-dark">Contact Support</span>
              </div>
            </Link>
            <Link href="/visa/step-one" onClick={() => setIsOpen(false)}>
              <div className="px-8 py-4 transition-all duration-300 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Apply for e-Visa
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-primary/20 via-tertiary/20 to-accent/20" />
      )}
    </header>
  );
};

export default Header;
