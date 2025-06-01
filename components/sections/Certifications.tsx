import { Certification } from '../../types/project';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section id="certifications" title="Certifications & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <Card key={cert.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {cert.issuer}
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
                {new Date(cert.date).toLocaleDateString()}
              </span>
            </div>

            {cert.credentialId && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Credential ID: {cert.credentialId}
              </p>
            )}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                View Certificate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
