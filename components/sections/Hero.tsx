import { AboutInfo } from '../../types/project';

interface HeroProps {
  aboutInfo: AboutInfo;
}

export default function Hero({ aboutInfo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {aboutInfo.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {aboutInfo.title}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {aboutInfo.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {aboutInfo.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            {aboutInfo.github && (
              <a
                href={aboutInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                GitHub
              </a>
            )}
            {aboutInfo.linkedin && (
              <a
                href={aboutInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${aboutInfo.email}`}
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}