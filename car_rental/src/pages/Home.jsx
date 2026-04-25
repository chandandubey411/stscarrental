import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CarCard from "../components/CarCard";
import Stats from "../components/Stats";
import { FaCar } from "react-icons/fa";
import cars from "../data/cars";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Steps */}
            <div>
              {[
                {
                  step: 1,
                  title: "Erat at semper",
                  desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...",
                },
                {
                  step: 2,
                  title: "Urna nec vivamus risus duis arcu",
                  desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
                },
                {
                  step: 3,
                  title: "Lobortis euismod imperdiet tempus",
                  desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent risit cras nunc luctus viverra nisi",
                },
                {
                  step: 4,
                  title: "Cras nulla aliquet nam eleifend amet et",
                  desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt volutpate libero.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 mb-8 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Image placeholder with car illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <FaCar className="text-white text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    How it works
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Simple 4-step process to rent your dream car
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Car Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                Choose the car that
                <br />
                suits you
              </h2>
            </div>
            <Link
              to="/vehicles"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {cars.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Mobile View All */}
          <div className="sm:hidden text-center mt-8">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-green-600" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            <ellipse
              cx="600"
              cy="200"
              rx="500"
              ry="180"
              stroke="white"
              strokeWidth="1"
            />
            <ellipse
              cx="600"
              cy="200"
              rx="350"
              ry="130"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <FaCar className="text-white text-4xl" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Enjoy every mile with
            <br />
            adorable companionship.
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8">
            Amet cras hac orci lacus. Faucibus ipsum arcu lactus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-xl overflow-hidden max-w-md mx-auto shadow-xl">
            <input
              type="text"
              placeholder="City"
              className="flex-1 px-5 py-3.5 text-sm text-gray-600 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3.5 font-semibold text-sm transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
