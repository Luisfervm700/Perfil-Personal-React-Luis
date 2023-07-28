import React from 'react';

export function Interests({ interests }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-5 mb-4">
      <h2 className="text-xl font-bold mb-2">Interests</h2>
      <ul className="list-disc ml-6">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};