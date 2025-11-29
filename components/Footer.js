function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Methmi Jayawardhana</h3>
            <p className="text-gray-400 mb-6">Web Developer & Creative Designer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/methmi-jayawardhana-4947352b9" target="_blank" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-linkedin text-2xl"></div>
              </a>
              <a href="https://github.com/MethmiJayawardhana" target="_blank" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-github text-2xl"></div>
              </a>
              <a href="https://www.instagram.com/mxthmx_dhxnxngx" target="_blank" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-instagram text-2xl"></div>
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 Methmi Jayawardhana. All rights reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}