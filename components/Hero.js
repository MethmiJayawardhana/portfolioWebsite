function Hero() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--primary-color)] to-purple-500 flex items-center justify-center text-white text-5xl font-bold">MJ</div>
          </div>
          <h1 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"16px","marginLeft":"0px","fontSize":"56px","color":"rgb(17, 24, 39)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"700","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Methmi Jayawarrdhana</h1>
          <p className="text-xl md:text-2xl text-[var(--text-light)] mb-8">
            Web Developer & Creative Designer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Crafting beautiful digital experiences with code and creativity
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-8 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg hover:bg-[var(--secondary-color)] transition-colors duration-300">
              Contact Me
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/methmi-jayawardhana-4947352b9" target="_blank" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">
              <div className="icon-linkedin text-2xl"></div>
            </a>
            <a href="https://github.com/MethmiJayawardhana" target="_blank" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">
              <div className="icon-github text-2xl"></div>
            </a>
            <a href="https://www.instagram.com/mxthmx_dhxnxngx" target="_blank" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">
              <div className="icon-instagram text-2xl"></div>
            </a>

          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}