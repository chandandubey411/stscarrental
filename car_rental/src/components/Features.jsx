import { FiCheckCircle, FiHeart, FiDollarSign } from "react-icons/fi";

const features = [
  {
    icon: FiCheckCircle,
    title: "Availability",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultrices quis",
    color: "from-blue-600 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiHeart,
    title: "Comfort",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orclutm corvallis",
    color: "from-green-500 to-green-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: FiDollarSign,
    title: "Savings",
    description:
      "Pretium corvallis id diam sed commodo vestibulum lobortis volutpat",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-transparent"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="text-2xl text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
