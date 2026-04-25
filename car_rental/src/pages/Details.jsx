import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsGearWideConnected, BsFuelPump } from "react-icons/bs";
import { MdAirlineSeatReclineNormal, MdOutlineDoorFront } from "react-icons/md";
import { TbSnowflake, TbRoad } from "react-icons/tb";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function Details() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Car Not Found</h2>
          <Link to="/vehicles" className="text-blue-700 hover:text-blue-800 font-semibold">← Back to Vehicles</Link>
        </div>
      </div>
    );
  }

  // Get 3 other cars for the "Other cars" section
  const otherCars = cars.filter(c => c.id !== car.id).slice(0, 3);

  const handleBook = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter both Name and Phone Number.");
      return;
    }
    
    // WhatsApp message format
    const ownerNumber = "918796934001"; // Actual owner number
    const message = `Hello, I want to rent a car.
*Car details:* ${car.name} (${car.type})
*Price:* ₹${car.price}/day
*My Name:* ${formData.name}
*My Contact:* ${formData.phone}
Please confirm availability.`;

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link to="/vehicles" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 transition-colors mb-8 text-sm font-medium">
          <FiArrowLeft /> Back to Vehicles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Side - Images & Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{car.name}</h1>
            <div className="flex items-end gap-2 mb-10">
              <span className="text-3xl font-bold text-blue-700">₹{car.price.toLocaleString("en-IN")}</span>
              <span className="text-gray-400 text-sm mb-1">/ day</span>
            </div>

            {/* Main Image */}
            <div className="bg-white rounded-3xl p-8 mb-6 shadow-sm border border-gray-100 flex items-center justify-center">
              <img src={car.image} alt={car.name} className="w-full h-auto max-h-[300px] object-contain drop-shadow-xl" />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors">
                  <img src={car.image} alt={`Thumbnail ${num}`} className="w-full h-20 object-contain opacity-80 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Specs & Form */}
          <div className="pt-2 lg:pt-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specification</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <BsGearWideConnected className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Gear Box</p>
                <p className="text-xs text-gray-500">{car.transmission}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <BsFuelPump className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Fuel</p>
                <p className="text-xs text-gray-500">{car.fuel}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <MdOutlineDoorFront className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Doors</p>
                <p className="text-xs text-gray-500">4</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <TbSnowflake className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Air Conditioner</p>
                <p className="text-xs text-gray-500">{car.ac ? 'Yes' : 'No'}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <MdAirlineSeatReclineNormal className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Seats</p>
                <p className="text-xs text-gray-500">{car.seats}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <TbRoad className="text-gray-400 text-xl mb-3" />
                <p className="text-sm font-bold text-gray-900 mb-1">Distance</p>
                <p className="text-xs text-gray-500">Unlimited</p>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto px-12 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-200 mb-10"
            >
              Rent a car
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Car Equipment</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">ABS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">Air Bags</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">Cruise Control</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">Air Conditioner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">Power Steering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCheck className="text-blue-800 text-xs" />
                </div>
                <span className="text-sm text-gray-600">Power Windows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cars Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Other cars</h2>
            <Link to="/vehicles" className="text-sm font-semibold text-gray-900 hover:text-blue-700 flex items-center gap-2">
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCars.map(c => (
              <CarCard key={c.id} car={c} />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">Complete Your Booking</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 text-2xl font-light"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleBook} className="p-6">
              {/* Pre-filled Car Details */}
              <div className="bg-blue-50 p-4 rounded-xl mb-6 flex items-center gap-4">
                <img src={car.image} alt={car.name} className="w-20 h-auto object-contain drop-shadow" />
                <div>
                  <p className="font-bold text-gray-900">{car.name}</p>
                  <p className="text-sm text-blue-700 font-semibold">₹{car.price} / day</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-800 to-green-600 hover:from-blue-900 hover:to-green-700 text-white rounded-xl font-bold text-lg shadow-md transition-all"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
