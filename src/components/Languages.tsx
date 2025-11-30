import { Globe } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: 'Arabic', level: 'Native', proficiency: 'Read, Spoken, Written', width: '100%' },
    { name: 'French', level: 'Fluent', proficiency: 'Read, Spoken, Written', width: '90%' },
    { name: 'English', level: 'Fluent', proficiency: 'Read, Spoken, Written', width: '90%' },
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Globe className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Languages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{language.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{language.level}</p>
                <p className="text-sm text-gray-600 mb-4">{language.proficiency}</p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: language.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
