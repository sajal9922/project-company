import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('aboutTitle')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              {t('aboutIntro')}
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('aboutDesc1')}
            </p>
            <p className={`mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('aboutDesc2')}
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('ourApproach')}
            </h3>
            <p className={`mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('approachDesc')}
            </p>

            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('ourTech')}
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('techDesc')}
            </p>
            <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>{t('techList1')}</li>
              <li>{t('techList2')}</li>
              <li>{t('techList3')}</li>
              <li>{t('techList4')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}