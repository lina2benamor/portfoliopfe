import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Web Development Intern
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  GCS Holding
                </p>
              </div>
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold whitespace-nowrap">
                June - July 2025
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Management and customization of WordPress sites including themes, content, and user experience design.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Development of new features and technical maintenance while adhering to best practices.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  WordPress
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  ReactJS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
