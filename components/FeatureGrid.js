import React from "react";

const features = [
    {
        title: "Predictive Insights",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.",
        icon: "📊",
        highlight: false,
    },
    {
        title: "Fastest Speed",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.",
        icon: "⚙️",
        highlight: true,
    },
    {
        title: "Filtered Data",
        description:
            "Elifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis. Norem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "🧊",
        highlight: false,
    },
    {
        title: "Everything in Cloud",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elifend nullam consectetur placerat pellentesque ut massa volutpat bonur los.",
        icon: "☁️",
        highlight: false,
    },
];

const FeatureGrid = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Take the next step without <br /> any hassle & get results fast
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${feature.highlight
                            ? "relative"
                            : "bg-white rounded-xl p-6 shadow-md text-left h-80 hover:scale-105 cursor-pointer"
                            }`}
                    >
                        {feature.highlight ? (
                            <>
                                {/* Glowing gradient border */}
                                <div className="hover:scale-3d absolute -inset-0.5 rounded-xl bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-500 blur-lg opacity-50 z-0"></div>

                                {/* Card content */}
                                <div className="h-80 hover:scale-3d relative rounded-xl bg-white p-6 shadow-md text-left z-10">
                                    <div className="text-2xl mb-3">{feature.icon}</div>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </>
                        ) : (
                            // <div className="bg-white rounded-xl p-6 shadow-md text-left">
                            <>
                                <div className=" text-2xl mb-3">{feature.icon}</div>
                                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </>
                            // </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureGrid;
