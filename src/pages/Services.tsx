import React from 'react';
import { Code2, Database, Search, Settings, Sparkles, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    description: 'A modern e-commerce platform with advanced features',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Healthcare Management System',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    description: 'Comprehensive healthcare management solution',
    technologies: ['Vue.js', 'Python', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Real Estate Platform',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
    description: 'Property listing and management system',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#'
  }
];

export function Services() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Services Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code2 className="w-8 h-8" />}
              title={t('webDevelopment')}
              description={t('webDevelopmentDesc')}
            />
            <ServiceCard 
              icon={<Database className="w-8 h-8" />}
              title={t('databaseManagement')}
              description={t('databaseManagementDesc')}
            />
            <ServiceCard 
              icon={<Search className="w-8 h-8" />}
              title={t('seoOptimization')}
              description={t('seoOptimizationDesc')}
            />
            <ServiceCard 
              icon={<Sparkles className="w-8 h-8" />}
              title={t('modernUiUx')}
              description={t('modernUiUxDesc')}
            />
            <ServiceCard 
              icon={<Settings className="w-8 h-8" />}
              title={t('maintenance')}
              description={t('maintenanceDesc')}
            />
            <ServiceCard 
              icon={<Users className="w-8 h-8" />}
              title={t('consultation')}
              description={t('consultationDesc')}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all`}>
      <div className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
}

function PortfolioCard({ title, image, description, technologies, link }: {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}) {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                theme === 'dark' ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          className={`inline-block px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
        >
          View Project
        </a>
      </div>
    </div>
  );
}