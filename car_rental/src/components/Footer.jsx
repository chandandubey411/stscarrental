import { Link } from "react-router-dom";
import { FaCar, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="STS Self Drive Car" className="h-16 w-auto object-contain bg-white p-2 rounded-xl" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Premium self-drive cars for your journey. Wide range of vehicles available.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">
              Useful links
            </h4>
            <ul className="space-y-3">
              {["About us", "Contact us", "Gallery", "Blog", "F.A.Q"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">
              Vehicles
            </h4>
            <ul className="space-y-3">
              {["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"].map(
                (type) => (
                  <li key={type}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {type}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>


        </div>

        {/* Info Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Address</p>
                <p className="text-sm text-gray-300">
                  New Delhi, India
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FiMail className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="text-sm text-gray-300">contact@stscars.in</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Phone</p>
                <p className="text-sm text-gray-300">+91 87969 34001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © Copyright STS Self Drive Car {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
