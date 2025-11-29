function Navbar() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`} data-name="navbar" data-file="components/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[var(--primary-color)]">MJ</div>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 hover:text-[var(--primary-color)] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
              <div className={`icon-${isOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}