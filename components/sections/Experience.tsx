import type { Experience } from '../../types/project';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <Section id="experience" title="Professional Experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <Card key={exp.id} className={`p-8 ${index !== experience.length - 1 ? 'mb-8' : ''}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company}
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}