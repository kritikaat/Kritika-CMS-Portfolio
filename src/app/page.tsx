import { getProjects, getExperience, getCertifications, getAboutInfo } from '../../lib/notion-queries';
import Navigation from '../../components/Layouts/Navigation';
import Hero from '../../components/sections/Hero';
import Experience from '../../components/sections/Experience';
import Projects from '../../components/sections/Projects';
import Certifications from '../../components/sections/Certifications';


export default async function HomePage() {
  try {
    const [aboutInfo, experience, projects, certifications] = await Promise.all([
      getAboutInfo(),
      getExperience(),
      getProjects(),
      getCertifications(),
    ]);

    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <Hero aboutInfo={aboutInfo} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
      </main>
    );
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Error Loading Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please check your Notion configuration and try again.
          </p>
        </div>
      </main>
    );
  }
}