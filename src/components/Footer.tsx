import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg mb-4">{t('ctaText')}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          onClick={() => (window.location.href = 'mailto:support@example.com')}
        >
          {t('contactUs')}
        </button>
        <p className="mt-8 text-gray-400">{t('copyright')}</p>
      </div>
    </footer>
  );
}
