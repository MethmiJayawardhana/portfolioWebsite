function Contact() {
  try {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <section id="contact" className="py-20 bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-[var(--text-light)]">methmisdj@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-[var(--text-light)]">+94702531911</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-[var(--text-light)]">Sri Lanka</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]" required />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]" required></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}