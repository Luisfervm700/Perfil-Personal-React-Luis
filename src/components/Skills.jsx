import React from 'react';

export function Skills({ skills }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-2">
          <p><strong>Name:</strong> {skill.name}</p>
          <p><strong>Percentage:</strong> {skill.percentage}</p>
        </div>
      ))}
    </div>
  );
};