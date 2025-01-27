const organizers = [
  { name: "Binayak Dhungana", role: "Tournament Director", icon: "🎮" },
  { name: "Manish Basnet", role: "Event Coordinator", icon: "🏆" },
  { name: "Aashish Pokhrel", role: "Technical Lead", icon: "💻" },
];

const sponsors = [
  { name: "Sponsor 1", logo: "/logos/sponsor1.png" },
  { name: "Sponsor 2", logo: "/logos/sponsor2.png" },
  { name: "Sponsor 3", logo: "/logos/sponsor3.png" },
];

const OrganizerSection = () => {
  return (
    <section
      id="organizer"
      className="h-screen bg-gray-100 relative flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50"></div>

      {/* Organizer Section */}
      <div className="relative z-10 text-center container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-extrabold text-cyan-600 mb-12 font-audio animate-fade-in">
          Meet the Organizers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform transform hover:scale-105"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-300/20 rounded-lg blur-lg"></div>
              <div className="relative z-20 text-center">
                <div className="icon text-6xl mb-6 text-white animate-pulse">
                  {organizer.icon}
                </div>
                <h3 className="text-2xl font-bold font-audio text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {organizer.name}
                </h3>
                <p className="text-gray-200 font-mono group-hover:text-gray-50 transition-colors text-sm">
                  {organizer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

<br />

      {/* Sponsor Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center mt-20">
        <h2 className="text-4xl font-extrabold text-cyan-600 font-audio mb-10 animate-fade-in">
          Our Sponsors
        </h2>
        <div
          className="overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-transparent before:via-cyan-100/50 before:to-transparent"
        >
          <div className="flex animate-marquee gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-28 h-28 flex items-center justify-center bg-gradient-to-r 
                     from-cyan-500 to-blue-500 p-4 rounded-full shadow-lg 
                     transition-all transform hover:scale-110 hover:shadow-cyan-500/50"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
