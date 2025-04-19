'use client';

export default function Hero() {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599423300746-b62533397364')" }}>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
          Find Your Dream Home to Rent or Buy
        </h2>
      </div>
    </div>
  );
}
