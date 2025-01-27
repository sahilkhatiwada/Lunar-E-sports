const CTASection = () => {
    return (
      <section className="cta-section py-12 sm:py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
  <div className="container mx-auto px-4 sm:px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
      {/* Left Content */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-audio text-cyan-400 mb-4">
          Ready to Join the <span className="text-blue-400 font-mono">Action?</span>
        </h2>
        <p className="text-base sm:text-lg font-mono text-gray-300 mb-6">
          Sign up now to secure your spot in the ultimate e-sports showdown. Don&apos;t miss out on the chance to compete, win, and make your mark.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex flex-col items-center md:items-end flex-1">
        <button className="px-6 sm:px-8 py-3 font-audio sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-lg font-bold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-cyan-500/50">
          Register Now
        </button>
        <p className="text-xs sm:text-sm font-mono  text-gray-400 mt-3">
          Limited slots available. Don’t wait!
        </p>
      </div>
    </div>
  </div>
</section>

      
    );
  };
  
  export default CTASection;