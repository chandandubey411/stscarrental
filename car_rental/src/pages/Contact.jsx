import { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: FiMapPin, title: "Address", info: "New Delhi, India", color: "bg-blue-50 text-blue-700" },
    { icon: FiMail, title: "Email", info: "contact@stscars.in", color: "bg-green-50 text-green-600" },
    { icon: FiPhone, title: "Phone", info: "+91 87969 34001", color: "bg-green-50 text-green-500" },
    { icon: FiClock, title: "Working Hours", info: "Mon - Sun: 24/7", color: "bg-blue-50 text-blue-500" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-blue-200 text-base max-w-lg mx-auto">Have a question or need assistance? Reach out to us and we'll get back to you as soon as possible.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.title}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Send us a message</h2>
                <p className="text-sm text-gray-400 mb-8">Fill out the form below and we'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us more about your inquiry..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none" required />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-green-600 hover:from-blue-900 hover:to-green-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-200">
                    <FiSend />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
