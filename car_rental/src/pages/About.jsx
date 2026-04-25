import { FaCar, FaUsers, FaAward, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-blue-200 text-base max-w-lg mx-auto">Learn more about our company and our commitment to providing the best car rental experience.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3 mb-6">
                We've been making customers happy since <span className="text-blue-700">1999</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Car Rental is a premier car rental service dedicated to providing our customers with the highest quality vehicles and exceptional service. With over 25 years of experience in the industry, we have built a reputation for reliability, convenience, and customer satisfaction.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our fleet of over 540 vehicles ranges from economical sedans to luxury SUVs, ensuring that we have the perfect car for every occasion. Whether you need a vehicle for business travel, family vacations, or special events, we have you covered.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <FaCar className="text-white text-5xl" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-800">25+</h3>
                  <p className="text-gray-500">Years of Excellence</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3">What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaCar, title: "Quality Fleet", desc: "Premium vehicles maintained to the highest standards for your safety and comfort." },
              { icon: FaUsers, title: "Customer First", desc: "Your satisfaction is our top priority. We go above and beyond to exceed expectations." },
              { icon: FaAward, title: "Excellence", desc: "Award-winning service recognized by industry leaders and valued by our customers." },
              { icon: FaHandshake, title: "Trust", desc: "Transparent pricing with no hidden fees. What you see is what you get." },
            ].map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
                  <val.icon className="text-2xl text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-800 to-green-600 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To provide accessible, reliable, and premium car rental services that make every journey memorable. We strive to offer competitive prices without compromising on quality, ensuring every customer experiences the joy of driving.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed">
                To become the world's most trusted car rental brand, known for innovation, sustainability, and customer-centric solutions. We envision a future where renting a car is as easy and enjoyable as the drive itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
