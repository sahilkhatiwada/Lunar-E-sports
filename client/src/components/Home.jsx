/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const HeroSection = () => {
  const registrationDeadline = new Date("2025-01-31T23:59:59"); // Set your deadline here
  const [timeLeft, setTimeLeft] = useState({});
  

  // Calculate remaining time
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = registrationDeadline - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Registration expired
    }
  };

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);



  return (
    <section id="home" className="hero-section relative h-screen bg-gradient-to-br from-[#141C30] via-[#052659] to-black text-[#AEB0B5] flex flex-col justify-center items-center overflow-hidden">
     
      

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-animation w-full h-full"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 animate-fade-in text-cyan-400 uppercase">
          Welcome to <span className="text-cyan-500">Lunar E-sport</span>
        </h1>
        <p className="text-lg md:text-2xl mb-10 animate-slide-up">
          Unleash your skills, conquer the arena, and connect with champions —
          your ultimate e-sports journey starts here.
        </p>
        <div className="mb-8">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold rounded-full shadow-xl transform transition-transform hover:scale-110 hover:shadow-cyan-500/50">
            Explore Tournaments
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="text-lg md:text-2xl font-mono bg-black/30 backdrop-blur-xl p-6 rounded-lg inline-block shadow-2xl border border-cyan-500 relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-lg animate-pulse"></div>
          <div className="relative z-10">
            {timeLeft ? (
              <>
                <span className="text-cyan-400 font-extrabold">
                  {timeLeft.days}d{" "}
                </span>
                <span className="text-cyan-400 font-extrabold">
                  {timeLeft.hours}h{" "}
                </span>
                <span className="text-cyan-400 font-extrabold">
                  {timeLeft.minutes}m{" "}
                </span>
                <span className="text-cyan-400 font-extrabold">
                  {timeLeft.seconds}s
                </span>
              </>
            ) : (
              <span className="text-red-500 font-bold text-xl">
                Registration Closed
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
