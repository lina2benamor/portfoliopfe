import { Users } from 'lucide-react';

const Activities = () => {
  const activities = [
    { name: 'Active member', org: 'Club IGC-ISITCOM', period: '2023-Present' },
    { name: 'Active member', org: 'IEEE - ESSTHS', period: '2025' },
    { name: 'Organization member', org: "Integration Day at L'ISITCOM", period: '2025' },
    { name: 'Participant', org: 'Unmasking Cyber Threats (IEEE & Eagle Defenders)', period: '2025' },
    { name: 'Participant', org: 'TWISE NIGHT Competition (ARSII)', period: '2025' },
    { name: 'Participant', org: "GHC'25 - Green Health Challenge (ISITCOM)", period: '2025' },
  ];

  return (
    <section id="activities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Activities & Involvement</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-600 mb-1">{activity.name}</p>
                    <p className="text-gray-900 font-medium text-sm">{activity.org}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{activity.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
