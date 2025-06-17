// src/components/PlayerDetails.js
import React from "react";

const PlayerDetails = ({ player }) => {
  if (!player) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{player.name}</h2>
      <div className="flex justify-center mb-4">
        {player.photoUrl && (
          <img src={player.photoUrl} alt={player.name} className="w-40 h-40 object-cover rounded-full border" />
        )}
      </div>
      <p><strong>Date of Birth:</strong> {player.dob}</p>
      <p><strong>Birthplace:</strong> {player.birthplace}</p>
      <p><strong>Career:</strong> {player.career}</p>
      <h3 className="text-xl font-semibold mt-4 text-blue-600">Statistics:</h3>
      <p><strong>Matches:</strong> {player.matches}</p>
      <p><strong>Score:</strong> {player.score}</p>
      <p><strong>Fifties:</strong> {player.fifties}</p>
      <p><strong>Centuries:</strong> {player.centuries}</p>
      <p><strong>Wickets:</strong> {player.wickets}</p>
      <p><strong>Average:</strong> {player.average}</p>
    </div>
  );
};

export default PlayerDetails;
