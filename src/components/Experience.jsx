import React from 'react';

export function Experience({ experience }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Experience</h2>
      {experience.map((item, index) => (
        <div key={index} className="mb-2">
          <p><strong>Company:</strong> {item.company}</p>
          <p><strong>Job Title:</strong> {item.jobTitle}</p>
          <p><strong>Start Date:</strong> {item.startDate}</p>
          <p><strong>End Date:</strong> {item.endDate}</p>
          <p><strong>Job Description:</strong> {item.jobDescription}</p>
        </div>
      ))}
    </div>
  );
};