import { useState } from "react";
import { FiChevronDown, FiCalendar } from "react-icons/fi";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    carType: "",
    pickup: "",
    returnLoc: "",
    rentalDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you shortly.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg lg:w-[480px]"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Book your car</h3>

      <div className="space-y-4">
        {/* Car Type */}
        <div className="relative">
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          >
            <option value="">Car type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="sport">Sport</option>
            <option value="pickup">Pickup</option>
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Pickup */}
        <div className="relative">
          <select
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          >
            <option value="">Place of rental</option>
            <option value="airport">Airport</option>
            <option value="downtown">Downtown</option>
            <option value="hotel">Hotel</option>
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Return */}
        <div className="relative">
          <select
            name="returnLoc"
            value={formData.returnLoc}
            onChange={handleChange}
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          >
            <option value="">Place of return</option>
            <option value="airport">Airport</option>
            <option value="downtown">Downtown</option>
            <option value="hotel">Hotel</option>
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Rental Date */}
        <div className="relative">
          <input
            type="date"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            placeholder="Rental date"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Return Date */}
        <div className="relative">
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            placeholder="Return date"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-200"
        >
          Book now
        </button>
      </div>
    </form>
  );
}
