import { Link } from "react-router-dom";
import { BsGearWideConnected, BsFuelPump } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbSnowflake } from "react-icons/tb";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 p-4">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-44 object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase">
          {car.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name & Price */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
          <div className="text-right">
            <span className="text-xl font-bold text-blue-700">
              ₹{car.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-400">{car.fuel}</p>
          <div className="flex items-center gap-2">
            {car.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{car.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            <p className="text-xs text-gray-400">per day</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <BsGearWideConnected className="text-blue-600" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MdAirlineSeatReclineNormal className="text-blue-600" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TbSnowflake className="text-blue-600" />
              <span>AC</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/details/${car.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-800 to-green-600 hover:from-blue-900 hover:to-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
