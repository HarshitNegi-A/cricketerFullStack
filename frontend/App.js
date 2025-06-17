import React, { useState } from "react";
import PlayerDetail from "./components/PlayerDetail";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    photoUrl: "",
    birthplace: "",
    career: "",
    matches: "",
    score: "",
    fifties: "",
    centuries: "",
    wickets: "",
    average: "",
  });

  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:5000/add-player", formData);
    setPlayers([...players,formData])
    alert("Player added successfully");
    setFormData({
      name: "",
      dob: "",
      photoUrl: "",
      birthplace: "",
      career: "",
      matches: "",
      score: "",
      fifties: "",
      centuries: "",
      wickets: "",
      average: "",
    });
  } catch (error) {
    console.error("Error adding player:", error);
    alert("Error adding player");
  }
};


 const handleSearch = async () => {
  try {
    const response = await axios.get("http://localhost:5000/search-player", {
      params: { name: searchTerm }
    });
    setFilteredPlayers(response.data);
  } catch (error) {
    console.error("Error searching player:", error);
    alert("Error searching player");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Player Information
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold text-gray-700">
                Photo URL:
              </label>
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold text-gray-700">
                Birthplace:
              </label>
              <input
                type="text"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold text-gray-700">
                Career:
              </label>
              <textarea
                name="career"
                value={formData.career}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-4 text-blue-600">Player Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Matches:</label>
              <input
                type="number"
                name="matches"
                value={formData.matches}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Score:</label>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Fifties:</label>
              <input
                type="number"
                name="fifties"
                value={formData.fifties}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Centuries:</label>
              <input
                type="number"
                name="centuries"
                value={formData.centuries}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Wickets:</label>
              <input
                type="number"
                name="wickets"
                value={formData.wickets}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Average:</label>
              <input
                type="number"
                name="average"
                value={formData.average}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold mt-6"
          >
            Add Player
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Search Player</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter player name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition font-semibold"
            >
              Search
            </button>
          </div>
        </div>

        {/* <div className="mt-8">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded mb-2">
                {player.name}
              </div>
            ))
          ) : (
            <div className="text-red-500">No player found.</div>
          )}
        </div> */}
      </div>
     {filteredPlayers && <PlayerDetail player={filteredPlayers} />}
    </div>
  );
}

export default App;
