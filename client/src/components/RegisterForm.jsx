import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    teamName: "",
    address: "",
    game: "",
    email: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example form submission logic (replace with API call)
    console.log("Form submitted:", formData);
    setNotification("Registration successful!");
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 px-4">
      <form
        className="rounded-lg p-6 w-full max-w-xl sm:max-w-2xl animate-fadeIn"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Register
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Player Full Name */}
          <div>
            <label
              className="block text-gray-600 mb-2"
              htmlFor="name"
            >
              Player Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Team Name */}
          <div>
            <label
              className="block text-gray-600 mb-2"
              htmlFor="teamName"
            >
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your team name"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label
              className="block text-gray-600 mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Games */}
          <div>
            <label
              className="block text-gray-600 mb-2"
              htmlFor="game"
            >
              Games
            </label>
            <select
              id="game"
              name="game"
              value={formData.game}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a Game</option>
              <option value="Pubg Mobile">Pubg Mobile</option>
              <option value="E-football">E-football</option>
              <option value="Chess">Chess</option>
            </select>
          </div>

          {/* Email */}
          <div className="col-span-1 sm:col-span-2">
            <label
              className="block text-gray-600 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          Submit
        </button>

        {/* Notification */}
        {notification && (
          <div className="mt-4 p-3 text-center text-white bg-green-500 rounded-lg animate-fadeIn">
            {notification}
          </div>
        )}
      </form>
    </div>
  );
}
