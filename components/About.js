function About() {
  try {
    return (
      <section id="about" className="py-20 bg-white" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src= "/trickle/assets/image.png" alt="Profile" className="rounded-2xl shadow-2xl w-80 h-80 object-cover" />
            </div>
            <div>

              <h3 className="text-2xl font-bold mb-4">Hi, I'm Methmi Jayawardhana</h3>
              <p className="text-[var(--text-light)] mb-6 leading-relaxed">
                A passionate web developer and designer of experience creating beautiful, functional websites and applications. I love turning ideas into reality through clean code and intuitive design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="icon-graduation-cap text-xl text-[var(--primary-color)] mr-3 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-[var(--text-light)]">Bachelor's in Software Engineering, Lancashire University</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-heart text-xl text-[var(--primary-color)] mr-3 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Interests</h4>
                    <p className="text-[var(--text-light)]">UI/UX Design, Open Source, Travel, Reading </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-map-pin text-xl text-[var(--primary-color)] mr-3 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-[var(--text-light)]">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}