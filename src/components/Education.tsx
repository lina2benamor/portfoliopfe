import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor's Degree in Computer Science
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCOM)
                </p>
              </div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold whitespace-nowrap">
                2023 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
