'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import PropertyCard from '@/components/PropertyCard';
import Footer from '@/components/Footer';

const properties = [
  {
    title: "Luxury Apartment in LA",
    price: "$2,300/month",
    location: "Los Angeles, CA",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    title: "Modern Family Home",
    price: "$420,000",
    location: "Austin, TX",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapw_XWWJYkuY2JzBMXZsmTWtaGHL3p60_kw&s",
  },
  {
    title: "Beachside Condo",
    price: "$1,850/month",
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Downtown Loft",
    price: "$3,000/month",
    location: "New York, NY",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/023/307/449/large_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
  },
  {
    title: "Suburban House",
    price: "$375,000",
    location: "Phoenix, AZ",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/031/341/533/small_2x/beautiful-modern-house-exterior-with-carport-modern-residential-district-and-minimalist-building-concept-by-ai-generated-free-photo.jpg",
  },
  {
    title: "Country Cottage",
    price: "$1,200/month",
    location: "Nashville, TN",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    title: "Modern Studio",
    price: "$2,000/month",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    title: "Luxury Villa",
    price: "$1,000,000",
    location: "Beverly Hills, CA",
    imageUrl: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    title: "Lake View Home",
    price: "$3,300/month",
    location: "Lake Tahoe, CA",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNMdSv1SKgloyVeqRrTk7ksR8hE0juNJpTg&s",
  },
  {
    title: "Penthouse Suite",
    price: "$5,500/month",
    location: "Seattle, WA",
    imageUrl: "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg",
  },
  {
    title: "Modern Duplex",
    price: "$650,000",
    location: "Dallas, TX",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsvxpyw94j_Msb8rRVzhm02Frc3MBsoiuFA&s",
  },
  {
    title: "Historic Brownstone",
    price: "$900,000",
    location: "Boston, MA",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCRTYHARfhCuFMMpvpWXmTyvkRmzzlx5V8w&s",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <Navbar />
      <Hero />
      <Search />

      {/* Property Cards */}
      <section className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
