'use client';

interface Props {
  imageUrl: string;
  title: string;
  price: string;
  location: string;
}

export default function PropertyCard({ imageUrl, title, price, location }: Props) {
  // Fix the image URL to always end with proper query params
  const cleanUrl = imageUrl.includes('?')
    ? imageUrl + '&auto=format&fit=crop&w=800&q=80'
    : imageUrl + '?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300">
      <div className="w-full h-48 bg-gray-100">
        <img
          src={cleanUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback image if error occurs
            (e.target as HTMLImageElement).src =
              'https://via.placeholder.com/800x400?text=Image+Unavailable';
          }}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <p className="text-blue-600 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
}
