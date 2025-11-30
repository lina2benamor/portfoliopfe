import { Code2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Recipia',
      subtitle: 'Recipe Generation Website',
      period: '2024-2025',
      description:
        'Interactive web application that allows users to generate recipes based on available ingredients. Uses the Gemini API to suggest recipes tailored to user-provided ingredients.',
      technologies: ['TypeScript', 'ReactJS', 'MongoDB', 'Gemini API', 'SCRUM'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Mood Recognition AI',
      subtitle: 'Emotion Detection System',
      period: '2024-2025',
      description:
        'Multi-modal system detecting emotions in real-time via video and audio using CNN and LSTM, with an interactive interface for mood tracking.',
      technologies: ['Python', 'TensorFlow/Keras', 'OpenCV', 'Librosa', 'Tkinter'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Snake Game',
      subtitle: 'Classic Snake Game',
      period: '2024',
      description:
        'Classic snake game implementation with movement management, snake growth, collision detection, and a real-time scoring system using dynamic event loops.',
      technologies: ['Python', 'Pygame'],
      gradient: 'from-slate-500 to-gray-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
