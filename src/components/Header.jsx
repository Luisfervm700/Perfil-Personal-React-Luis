import React from 'react';

export function Header({ name, profession, avatar, address, email, website, phone }) {
  return (
    <div className="bg-blue-300 text-black p-4 mb-4 flex items-center">
      <img className="rounded w-32 h-31 mr-6" src={avatar} alt="Profile Avatar" />
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl">{profession}</h2>
      </div>
      <div className="ml-auto p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website:</strong> <a href={website} className="text-black-500">{website}</a></p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}
