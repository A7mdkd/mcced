'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, Phone, Mail, ChevronDown, UserCircle, Boxes, Briefcase, FileText, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

const navigation = [
  { name: 'About', href: '/about', icon: UserCircle },
  { 
    name: 'Cargo Services', 
    href: '/services', 
    icon: Boxes,
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
    icon: Briefcase,
    dropdown: [
      { name: 'Supply Chain', href: '/consultation/supply-chain' },
      { name: 'Logistics', href: '/consultation/logistics' },
      { name: 'Business Development', href: '/consultation/business-development' },
    ]
  },
  { name: 'Get a Quote', href: '/get-a-quote', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Send },
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
      <div className="bg-primary text-white py-2 px-4 text-sm lg:sticky lg:top-0 lg:z-[60]">
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
        className={`w-full z-50 transition-all duration-300
          lg:sticky lg:top-0
          ${scrolled ? 'lg:bg-white/95 lg:dark:bg-gray-900/95 lg:backdrop-blur-md lg:shadow-lg' : 'lg:bg-transparent'}
        `}
        style={{ position: 'static' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 justify-between lg:justify-between">
            {/* Logo */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-start items-center space-x-2"
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
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="relative group">
                    {item.dropdown ? (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 font-medium ${
                          isActive(item.href) ? 'text-primary' : ''
                        }`}
                      >
                        <motion.span whileHover={{ y: -2 }} className="flex items-center gap-1">
                          {Icon && <Icon className="w-5 h-5 mr-1" />}
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
                        className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 font-medium relative` +
                          (isActive(item.href) ? ' text-primary' : '')}
                      >
                        <motion.span whileHover={{ y: -2 }} className="flex items-center gap-1">
                          {Icon && <Icon className="w-5 h-5 mr-1" />}
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
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4 lg:ml-4">
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
              {/* تم إزالة زر الهامبرجر منيو نهائيًا */}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg flex justify-around items-center py-2 lg:hidden">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-2 text-xs font-medium transition-colors duration-200 rounded-md
                  ${isActive(item.href) ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}
                  hover:bg-primary/10 focus:bg-primary/20 active:bg-primary/20`
                }
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {Icon && <Icon className="w-7 h-7 mb-1 transition-colors duration-200" />}
                <span className="mt-0.5" style={{fontSize:'13px'}}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </motion.header>
    </>
  );
}