import { useState } from "react";
import CarCard from "../components/CarCard";
import cars from "../data/cars";

const types = ["All", "SUV", "Sedan", "Hatchback", "MUV", "Luxury"];

export default function Vehicles() {
  const [activeType, setActiveType] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(12);

  let filteredCars =
    activeType === "All"
      ? [...cars]
      : cars.filter((car) => car.type === activeType);

  if (sortBy === "low") filteredCars.sort((a, b) => a.price - b.price);
  if (sortBy === "high") filteredCars.sort((a, b) => b.price - a.price);
  if (sortBy === "name") filteredCars.sort((a, b) => a.name.localeCompare(b.name));

  const displayedCars = filteredCars.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCars.length;

  const toggleShowMore = () => {
    if (hasMore) {
      setVisibleCount(filteredCars.length);
    } else {
      setVisibleCount(12);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Reset visible count when category changes
  const handleCategoryChange = (type) => {
    setActiveType(type);
    setVisibleCount(12);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Vehicles
          </h1>
          <p className="text-blue-200 text-base max-w-lg mx-auto">
            Browse our premium selection of {cars.length}+ vehicles and find the
            perfect ride for your journey.
          </p>
        </div>
      </section>

      {/* Filter & Cars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            {/* Type Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => handleCategoryChange(type)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeType === type
                      ? "bg-gradient-to-r from-blue-800 to-green-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 hover:text-blue-700 shadow-sm hover:shadow-md border border-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="default">Sort by</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl px-5 py-4 mb-6">
            <span className="text-amber-500 text-xl mt-0.5">⚠️</span>
            <p className="text-amber-800 text-sm leading-relaxed">
              <span className="font-bold">Note:</span> All vehicles available for rental are approximately{" "}
              <span className="font-semibold">2 years old</span>. They are well-maintained and in excellent condition.
              For any specific queries regarding vehicle age or condition, please contact us before booking.
            </p>
          </div>

          {/* Count */}
          <p className="text-sm text-gray-400 mb-6">
            Showing {displayedCars.length} of {filteredCars.length} vehicles
          </p>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
            {displayedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {filteredCars.length > 12 && (
            <div className="text-center">
              <button
                onClick={toggleShowMore}
                className="px-8 py-3 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-xl font-bold transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {hasMore ? "Show More" : "Show Less"}
              </button>
            </div>
          )}

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No vehicles found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
