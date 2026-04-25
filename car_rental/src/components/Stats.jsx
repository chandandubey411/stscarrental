import { FaCar, FaUsers, FaCalendarAlt, FaRoad } from "react-icons/fa";

const stats = [
  {
    icon: FaCar,
    value: "540+",
    label: "Cars",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FaUsers,
    value: "20k+",
    label: "Customers",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FaCalendarAlt,
    value: "25+",
    label: "Years",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaRoad,
    value: "20m+",
    label: "Miles",
    color: "bg-green-100 text-green-500",
  },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Facts In Numbers
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            Amet cras hac orci lacus. Faucibus ipsum arcu lactus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="text-xl" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-blue-200 text-sm font-medium mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
