import type { Experience } from '../../types/project';
import {Calendar} from 'lucide-react';

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                index !== experience.length - 1 ? 'mb-8' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
