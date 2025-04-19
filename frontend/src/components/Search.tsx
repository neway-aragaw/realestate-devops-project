'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  "Los Angeles, CA",
  "Austin, TX",
  "Miami, FL",
  "New York, NY",
  "Phoenix, AZ",
  "Nashville, TN",
  "Chicago, IL",
  "Beverly Hills, CA",
  "Lake Tahoe, CA",
  "Seattle, WA",
  "Dallas, TX",
  "Boston, MA",
];

export default function Search() {
  const [destination, setDestination] = useState('');
  const [option, setOption] = useState('Rent'); // Rent or Buy

  return (
    <section className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Search Listings</h2>

      {/* Rent or Buy Option */}
      <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
        <label className="text-gray-700 font-medium">Option:</label>
        <select
          className="w-full outline-none text-gray-700 bg-transparent"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="Rent">Rent</option>
          <option value="Buy">Buy</option>
        </select>
      </div>

      {/* Destination */}
      <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
        <MapPin className="text-gray-500" />
        <select
          className="w-full outline-none text-gray-700 bg-transparent"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={() => console.log({ option, destination })}
        className="w-full bg-[#0c2a4d] text-white py-2 rounded-lg font-medium hover:bg-[#0a2340]"
      >
        Search
      </button>
    </section>
  );
}