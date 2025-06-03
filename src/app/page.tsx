// page.tsx
import { getProjects, getExperience, getCertifications, getAboutInfo } from '../../lib/notion-queries';
import Navigation from '../../components/Layouts/Navigation';
import Footer from '../../components/sections/Footer';
import Hero from '../../components/sections/Hero';
import Experience from '../../components/sections/Experience';
import Projects from '../../components/sections/Projects';
import Certifications from '../../components/sections/Certifications';
import { ThemeProvider } from '../../context/ThemeContext';

export default async function HomePage() {
  try {
    const [aboutInfo, experience, projects, certifications] = await Promise.all([
      getAboutInfo(),
      getExperience(),
      getProjects(),
      getCertifications(),
    ]);

    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content - Centered container */}
          <main className="max-w-7xl mx-auto">
            <Hero aboutInfo={aboutInfo} />
            <Experience experience={experience} />
            <Projects projects={projects} />
            <Certifications certifications={certifications} />
          </main>
          
          {/* Footer - Full width */}
          <Footer aboutInfo={aboutInfo} />
        </div>
      </ThemeProvider>
    );
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return (
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
          <Navigation />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-6">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Error Loading Portfolio
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Please check your Notion configuration and try again.
              </p>
            </div>
          </main>
          
        </div>
      </ThemeProvider>
    );
  }
}