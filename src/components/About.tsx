import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Profile</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Third-year Computer Science student at ISITCOM Sousse, passionate about web and software development.
              I am seeking an end-of-studies internship to apply my skills in programming and project management.
              I thrive on building interactive, user-focused applications and continuously expanding my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
