import { Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'ReactJS'],
      color: 'emerald',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'cyan',
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'Visual Studio', 'Eclipse'],
      color: 'slate',
    },
  ];

  const colorMap: { [key: string]: string } = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Wrench className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${
                        colorMap[category.color]
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
