import Image from 'next/image';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF className="w-4 h-4" />,
      href: '#',
      label: 'Follow us on Facebook',
    },
    {
      id: 2,
      icon: <FaInstagram className="w-4 h-4" />,
      href: '#',
      label: 'Follow us on Instagram',
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-4 h-4" />,
      href: '#',
      label: 'Connect on LinkedIn',
    },
    {
      id: 4,
      icon: <FaXTwitter className="w-4 h-4" />,
      href: '#',
      label: 'Follow us on Twitter',
    },
  ];

  const quickLinks = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Apply for e-Visa', href: '/visa/step-one' },
    { text: 'Track Application', href: '#' },
    { text: 'Support Center', href: '#' },
  ];

  const visaTypes = [
    { text: 'Tourist e-Visa', href: '/visa/step-one' },
    { text: 'Business e-Visa', href: '/visa/step-one' },
    { text: 'Medical e-Visa', href: '/visa/step-one' },
    { text: 'Conference e-Visa', href: '/visa/step-one' },
  ];

  const supportLinks = [
    { text: 'Terms & Conditions', href: '/terms-and-conditions' },
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Cookie Policy', href: '/cookie-policy' },
    { text: 'Refund Policy', href: '/refund-policy' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-secondary to-dark">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tertiary/10 to-accent/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="relative">
        <div className="container px-4 pt-20 pb-12 mx-auto md:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand Section */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="block mb-8 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/assets/images/india/common/logo-white.png"
                  width={200}
                  height={60}
                  alt="Indian e-Visa Services"
                  className="w-40"
                />
              </Link>
              <p className="mb-6 text-sm text-gray-400">
                Your trusted partner for hassle-free Indian e-Visa applications.
                Fast, secure, and reliable service.
              </p>
              <Link
                href="mailto:support@indianofficialvisa.com"
                className="flex items-center group"
              >
                <span className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-300 rounded-lg bg-white/10 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-tertiary group-hover:scale-110">
                  <IoIosMail className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm text-gray-400 transition-all duration-300 group-hover:text-white">
                  support@indianofficialvisa.com
                </span>
              </Link>
              <div className="flex mt-8 space-x-4">
                {socialLinks.map(link => (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-tertiary hover:scale-110 group"
                  >
                    <span className="text-gray-400 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visa Types */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Visa Categories
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {visaTypes.map((type, index) => (
                  <li key={index}>
                    <Link
                      href={type.href}
                      className="inline-block text-sm text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {type.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="md:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Support
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-primary to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-12 mt-16 text-center border-t border-white/10">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} indianofficialvisa.com. All rights
              reserved. |{' '}
              <span className="text-gray-400">
                Official Indian Visa Application Portal
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
