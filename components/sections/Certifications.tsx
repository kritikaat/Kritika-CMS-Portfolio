import { Certification } from '../../types/project';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Certifications & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {new Date(cert.date).toLocaleDateString()}
                </span>
              </div>
              
              {cert.credentialId && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm"
              >
                View Certificate
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}