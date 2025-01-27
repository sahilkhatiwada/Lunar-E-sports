

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/path-to-logo.png" alt="Lunar E-sport Logo" className="w-16 mb-4" />
          <h2 className="text-lg font-bold text-white font-audio">Lunar E-sport</h2>
          <p className="text-sm text-gray-400  justify-center font-mono mt-2">
            Bringing the ultimate e-sports experience to gamers worldwide. Join us and level up your gaming journey!
          </p>
        </div>
  
        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 font-audio">Quick Links</h3>
          <ul className="space-y-2 font-mono">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#tournaments" className="hover:text-cyan-400 transition-colors">
                Tournaments
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
  
        {/* Event Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 font-audio">Event Links</h3>
          <ul className="space-y-2 font-mono">
            <li>
              <a href="#upcoming-events" className="hover:text-cyan-400 transition-colors">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="#past-events" className="hover:text-cyan-400 transition-colors">
                Past Events
              </a>
            </li>
            <li>
              <a href="#leaderboards" className="hover:text-cyan-400 transition-colors">
                Leaderboards
              </a>
            </li>
            <li>
              <a href="#rules" className="hover:text-cyan-400 transition-colors">
                Rules
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      {/* Subscription Field */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-80 font-mono rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button className="px-6 py-2 bg-gradient-to-r font-audio from-cyan-500 to-blue-500 text-white rounded-lg font-bold hover:scale-105 transition-transform">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-audio text-gray-500 mt-4 md:mt-0">
          © 2025 Lunar E-sport. In association with Lunar IT Solutions.
        </p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer