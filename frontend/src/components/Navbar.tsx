'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-[#0c2a4d]">HomeFinder</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 rounded-full bg-[#0c2a4d] text-white text-sm">Register</button>
        <button className="px-4 py-2 rounded-full border border-[#0c2a4d] text-[#0c2a4d] text-sm">Sign In</button>
      </div>
    </nav>
  );
}
