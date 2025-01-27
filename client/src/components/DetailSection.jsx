

const DetailSection = () => {
  const details = [
    {
      title: "PUBG Tournament",
      description:
        "Join the battle for supremacy! Compete in high-intensity matches with squads from around the globe. Huge prizes await the winners!",
      icon: "🎮",
    },
    {
      title: "E-Football Championship",
      description:
        "Showcase your football skills on the virtual pitch! Compete with the best and prove you're the ultimate digital champion.",
      icon: "⚽",
    },
    {
      title: "Chess Masters",
      description:
        "Think fast, plan ahead, and outwit your opponents in this ultimate test of strategy and precision. Who will claim the crown?",
      icon: "♟️",
    },
  ];

  return (
    <section
      id="details"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative text-indigo-500 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-600 mt-8 font-audio">
          Level Up with Our Tournaments
        </h2>
        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-cyan-500 to-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-transform transform hover:scale-105"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-300/20 rounded-lg blur-xl" aria-hidden="true"></div>
              <div className="relative z-20">
                <div className="icon text-6xl mb-6 text-white" aria-hidden="true">
                  {detail.icon}
                </div>
                <h3 className="text-2xl font-bold font-audio text-white mb-4 group-hover:text-gray-900 transition-colors">
                  {detail.title}
                </h3>
                <p className="text-gray-200 font-mono group-hover:text-gray-900 transition-colors text-sm">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-600 mb-8 font-audio">About Us</h2>
        <p className="text-base sm:text-lg text-gray-700 font-mono leading-relaxed">
          Lunar E-sports is a platform that brings together gamers from around the world. Our mission is to provide a space for gamers to connect, compete, and showcase their skills. We host a variety of tournaments and events, ranging from casual matches to professional competitions. Join us and be a part of the ultimate e-sports experience!
        </p>
      </div>
    </section>
  );
};

export default DetailSection;
