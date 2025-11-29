function Projects() {
  try {
    const projects = [
      { title: 'E-Commerce Platform', description: 'A full-stack e-commerce solution with React and Node.js', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop', tech: 'React, Node.js, MongoDB' },
      { title: 'Task Management App', description: 'Collaborative task management tool with real-time updates', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop', tech: 'React, Firebase' },
      { title: 'Weather Dashboard', description: 'Real-time weather data visualization with interactive maps', image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop', tech: 'JavaScript, API Integration' },
      { title: 'Portfolio Website', description: 'Modern portfolio template with animations and transitions', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop', tech: 'HTML, CSS, JavaScript' }
    ];

    return (
      <section id="projects" className="py-20 bg-white" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[var(--text-light)] mb-4">{project.description}</p>
                  <p className="text-sm text-[var(--primary-color)] mb-4">{project.tech}</p>
                  <button className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center">
                    View Project
                    <div className="icon-arrow-right text-lg ml-2"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}