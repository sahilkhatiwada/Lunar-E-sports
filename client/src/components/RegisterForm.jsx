import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    teamName: "",
    address: "",
    game: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", formDataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      setNotification(response.data.message);
      setFormData({
        name: "",
        email: "",
        teamName: "",
        address: "",
        game: "",
      });
    } catch (error) {
      setNotification(error.response.data.message || "Something went wrong!");
    }

    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col animate-fadeIn"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 font-audio text-gray-700 text-center">Register</h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-audio" htmlFor="name">Player Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-audio" htmlFor="teamName">Team Name</label>
        <input
          type="text"
          id="teamName"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-audio" htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-audio" htmlFor="game">Games</label>
        <select
          id="game"
          name="game"
          value={formData.game}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 font-audio rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
        >
          <option value="">Select a Game</option>
          <option value="Pubg Mobile">Pubg Mobile</option>
          <option value="E-football">E-football</option>
          <option value="Chess">Chess</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-audio" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 font-audio text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        onSubmit={handleSubmit}
      >
        Submit
      </button>

      {notification && (
        <div className="mt-4 p-3 text-center text-white bg-green-500 rounded-lg animate-fadeIn">
          {notification}
        </div>
      )}
    </form>
  </div>
  
  
  );
};

export default RegisterForm;
