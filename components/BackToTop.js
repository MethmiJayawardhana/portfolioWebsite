function BackToTop() {
  try {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setVisible(window.scrollY > 300);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return visible ? (
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--primary-color)] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center z-40" data-name="back-to-top" data-file="components/BackToTop.js">
        <div className="icon-arrow-up text-xl"></div>
      </button>
    ) : null;
  } catch (error) {
    console.error('BackToTop component error:', error);
    return null;
  }
}