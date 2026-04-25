import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-600">
        {/* Decorative car silhouettes */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
          >
            <path
              d="M100 400 Q200 350 300 380 Q350 390 400 370 L450 350 Q500 330 550 350 L600 380 Q650 400 700 380 L750 350 Q800 320 850 340 L900 370 Q950 400 1000 380 L1100 340"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Experience the road
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">
                like never before
              </span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View all cars
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

          {/* Right Content - Booking Form */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
