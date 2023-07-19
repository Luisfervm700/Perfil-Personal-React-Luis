import React from 'react';

export function Certificates({ certificates }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-1">Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="mb-1">
          <p><strong>Date:</strong> {cert.date}</p>
          <p><strong>Description:</strong> {cert.description}</p>
          <p><strong>Institution:</strong> {cert.institution}</p>
          <p><strong>Name:</strong> {cert.name}</p>
        </div>
      ))}
    </div>
  );
};