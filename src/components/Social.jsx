import React from 'react';

export function Social({ social }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Social</h2>
      <div className="flex flex-row"> {/* Agregamos la clase flex y flex-row para alinear los elementos horizontalmente */}
        {social.map((item, index) => (
          <div key={index} className="mb-2 mr-20"> {/* Agregamos la clase mr-4 para agregar un pequeño margen entre los elementos */}
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>URL:</strong> <a href={item.url} className="text-blue-500">{item.url}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
