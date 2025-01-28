import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Team() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('meetOurTeam')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              name="Shamsul Alam"
              role={t('fullStackDev')}
              description={t('fullStackDevDesc1')}
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              name="Ville Sohunen"
              role={t('fullStackDev')}
              description={t('fullStackDevDesc2')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({ image, name, role, description }: { image: string; name: string; role: string; description: string }) {
  const { theme } = useTheme();
  
  return (
    <div className="text-center">
      <img 
        src={image} 
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
      <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mb-3`}>{role}</p>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
}