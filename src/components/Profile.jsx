import React from 'react';

export function Profile({ profile }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Profile</h2>
      <p>{profile}</p>
    </div>
  );
};