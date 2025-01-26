import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RegisterForm from "./RegisterForm";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to show or hide the form

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <nav className="bg-[#141c30] shadow fixed top-0 left-0 w-full z-50 transition duration-300">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-[#fdfdfd] cursor-pointer uppercase"
          >
            Lunar E-sport
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-6 uppercase">
            <a
              href="#home"
              className="text-[#fff]  hover:text-indigo-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#details"
              className="text-[#fff]  hover:text-indigo-500 transition duration-300"
            >
              Details
            </a>

            {/* Dropdown for Events */}
            <div className="relative ">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href="#event"
                className="text-[#fff]  hover:text-indigo-500  uppercase transition duration-300 flex items-center"
              >
                Event
                <span className="ml-2">&#9662;</span>
              </button>
              {dropdownOpen && (
                <div className="absolute bg-[#141c30] w-32 shadow-lg rounded-lg mt-2 py-2 text-center">
                  <a
                    href="#pubg"
                    className="block px-4 py-2 text-[#fff]  hover:text-indigo-500 transition duration-300"
                  >
                    PUBG
                  </a>
                  <a
                    href="#efootball"
                    className="block px-4 py-2 text-[#fff]  hover:text-indigo-500 transition duration-300"
                  >
                    E-Football
                  </a>
                  <a
                    href="#chess"
                    className="block px-4 py-2 text-[#fff]  hover:text-indigo-500  transition duration-300"
                  >
                    Chess
                  </a>
                </div>
              )}
            </div>

            <a
              href="#organizer"
              className="text-[#fff]  hover:text-indigo-500 transition duration-300"
            >
              Organizer
            </a>
            <button
              onClick={handleRegisterClick}
              className="px-6 py-2 text-sm font-bold text-[#fff]  hover:text-indigo-500 rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 transform transition duration-300"
            >
              Register
            </button>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <button
            className="text-[#fff] text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#141c30] shadow-lg flex flex-col items-center space-y-4 py-4">
              <a
                href="#home"
                className="text-[#fff] hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="#details"
                className="text-[#fff] hover:text-blue-500 transition duration-300"
              >
                Details
              </a>

              {/* Dropdown in Mobile */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-[#fff] hover:text-blue-500 transition duration-300 flex items-center"
                >
                  Event
                  <span className="ml-2">&#9662;</span>
                </button>
                {dropdownOpen && (
                  <div className="bg-[#fff] shadow-lg rounded-lg mt-2 py-2 text-center">
                    <a
                      href="#pubg"
                      className="block px-4 py-2 text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] transition duration-300"
                    >
                      PUBG
                    </a>
                    <a
                      href="#efootball"
                      className="block px-4 py-2 text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] transition duration-300"
                    >
                      E-Football
                    </a>
                    <a
                      href="#chess"
                      className="block px-4 py-2 text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] transition duration-300"
                    >
                      Chess
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#organizer"
                className="text-[#fff] hover:text-blue-500 transition duration-300"
              >
                Organizer
              </a>
              <button
                onClick={handleRegisterClick}
                className="px-6 py-2 text-sm font-bold text-[#fff] hover:text-gray-500 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Register Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded shadow-lg w-96">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <RegisterForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
