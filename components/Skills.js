function Skills() {
  try {
    const skills = [
      { name: 'HTML/CSS', level: 95, icon: 'code' },
      { name: 'JavaScript', level: 90, icon: 'code-2' },
      { name: 'React', level: 85, icon: 'atom' },
      { name: 'UI/UX Design', level: 88, icon: 'palette' },
      { name: 'Node.js', level: 80, icon: 'server' },
      { name: 'Git', level: 92, icon: 'git-branch' }
    ];

    return (
      <section id="skills" className="py-20 bg-[var(--secondary-color)]" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`icon-${skill.icon} text-2xl text-[var(--primary-color)] mr-3`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-[var(--primary-color)] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-purple-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}