'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, Phone, Mail, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Cargo Services', 
    href: '/services', 
    dropdown: [
      { name: 'Air Freight', href: '/services/air-freight' },
      { name: 'Sea Freight', href: '/services/sea-freight' },
      { name: 'Road Freight', href: '/services/road-freight' },
      { name: 'Rail Freight', href: '/services/rail-freight' },
      { name: 'Customs', href: '/services/customs' },
    ]
  },
  { 
    name: 'Consultation', 
    href: '/consultation', 
    dropdown: [
      { name: 'Supply Chain', href: '/consultation/supply-chain' },
      { name: 'Logistics', href: '/consultation/logistics' },
      { name: 'Business Development', href: '/consultation/business-development' },
    ]
  },
  { name: 'Get a Quote', href: '/get-a-quote' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+201234567890" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+20 123 456 789</span>
            </a>
            <a href="mailto:info@mcced.com" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@mcced.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Global Logistics Solutions Since 2020</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/">
              <Image
                src="/main logo.png"
                alt="MCCED Logo"
                width={150}
                height={50}
                className=""
              />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 font-medium ${
                        isActive(item.href) ? 'text-primary' : ''
                      }`}
                    >
                      <motion.span whileHover={{ y: -2 }}>
                        {item.name}
                        <ChevronDown className="inline ml-1 w-4 h-4" />
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeNavIndicator"
                          />
                        )}
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                  href={item.href}
                      className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 font-medium relative ${
                        isActive(item.href) ? 'text-primary' : ''
                      }`}
                >
                      <motion.span whileHover={{ y: -2 }}>
                  {item.name}
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeNavIndicator"
                          />
                        )}
                      </motion.span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="hidden md:flex space-x-2">
                <Button size="sm" href="/contact#customer-service">
                  Customer Service
                </Button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium ${
                            isActive(item.href) ? 'text-primary' : ''
                          }`}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                    href={item.href}
                        className={`block text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium ${
                          isActive(item.href) ? 'text-primary' : ''
                        }`}
                  >
                    {item.name}
                        {isActive(item.href) && (
                          <span className="ml-2 inline-block w-1 h-1 rounded-full bg-primary"></span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <Button className="w-full" href="/contact#customer-service">
                    Customer Service
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}