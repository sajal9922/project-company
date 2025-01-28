import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'home' },
    { to: '/services', label: 'services' },
    { to: '/about', label: 'about' },
    { to: '/team', label: 'team' }
  ];

  return (
    <nav className={`fixed w-full z-50 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center">
            <Code2 className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `
                  ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}
                  ${isActive ? 'font-semibold' : ''} transition-colors
                `}
              >
                {t(label as keyof typeof translations.en)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:opacity-80 transition-all`}
              aria-label={t('toggleTheme')}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'} hover:opacity-80 transition-all font-medium`}
            >
              {language === 'en' ? 'FI' : 'EN'}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {isMenuOpen ? 
                <X className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} /> : 
                <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${theme === 'dark' ? 
                    'text-gray-300 hover:bg-gray-800 hover:text-white' : 
                    'text-gray-700 hover:bg-gray-100 hover:text-black'}
                  ${isActive ? 'font-semibold' : ''}
                `}
              >
                {t(label as keyof typeof translations.en)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}