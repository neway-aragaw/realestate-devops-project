'use client';

import { useEffect, useState } from 'react';
import { getAllProperties } from '@/services/propertyService';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (err: unknown) {
        if (typeof err === 'object' && err !== null && 'response' in err) {
          const error = err as { response?: { data?: { message?: string } } };
          setError(error.response?.data?.message || 'Failed to fetch properties');
        } else {
          setError('Failed to fetch properties');
        }
      }
    };
    fetchProps();
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
      {error && <p className="text-red-600 col-span-full">{error}</p>}

      {properties.map((p) => (
        <div key={p.id} className="bg-white shadow p-4 rounded">
          <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-bold">{p.title}</h3>
          <p>{p.location}</p>
          <p className="text-blue-600 font-bold">{p.price}</p>
        </div>
      ))}
    </div>
  );
}
