"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SearchResultsPage({
  params,
}: {
  params: { tab: string; location: string };
}) {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const locality = searchParams.get("locality");
  const preference = searchParams.get("preference");
  const res_com = searchParams.get("res_com");

  // Decode the location parameter (replace hyphens with spaces)
  const decodedLocation = params.location.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0057bb] text-white px-6 py-3 sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <ArrowLeft size={20} />
            <span className="text-2xl font-black">Brand Name</span>
          </Link>
          <div className="text-sm">Search Results</div>
        </div>
      </header>

      {/* Search Details */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Properties to {params.tab} in {decodedLocation}
          </h1>
          <p className="text-sm text-gray-600">
            Showing results for: <strong>{decodedLocation}</strong>
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Tab: {params.tab}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              City ID: {city}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Locality ID: {locality}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Type: {res_com === "R" ? "Residential" : "Commercial"}
            </span>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for property listings */}
          <div className="md:col-span-3 bg-white rounded-lg p-8 text-center border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Property Listings
            </h2>
            <p className="text-gray-600">
              No properties found. This is a placeholder for search results.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Query Parameters: city={city}, locality={locality}, preference={preference}, res_com={res_com}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
