import React from 'react';

export function Languages({ languages }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-3">Languages</h2>
      {languages.map((language, index) => (
        <div key={index} className="mb-3">
          <p><strong>Name:</strong> {language.name}</p>
          <p><strong>Percentage:</strong> {language.percentage}</p>
        </div>
      ))}
    </div>
  );
};