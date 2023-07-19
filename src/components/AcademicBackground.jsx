import React from 'react';

export function AcademicBackground({ academic }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-1">Academic Background</h2>
      {academic.map((item, index) => (
        <div key={index} className="mb-2">
          <p><strong>Degree:</strong> {item.degree}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Start Date:</strong> {item.startDate}</p>
          <p><strong>End Date:</strong> {item.endDate}</p>
          <p><strong>Institution:</strong> {item.institution}</p>
        </div>
      ))}
    </div>
  );
};