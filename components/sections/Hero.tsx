// components/sections/Hero.tsx
import { AboutInfo } from '../../types/project';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  aboutInfo: AboutInfo;
}

export default function Hero({ aboutInfo }: HeroProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {aboutInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
            {aboutInfo.title}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {aboutInfo.bio}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {aboutInfo.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={aboutInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href={aboutInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href={`mailto:${aboutInfo.email}`}
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-colors font-medium"
            >
              <Mail size={20} className="mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}