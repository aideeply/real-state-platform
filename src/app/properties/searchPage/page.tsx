"use client";

import React from "react";
import { ChevronDown, Layers, FileText, CheckCircle, ShieldCheck } from "lucide-react";

const FILTER_CATEGORIES = [
  { label: "Type of property", items: ["Residential Apartment", "Residential Land", "Builder Floor", "Farm House", "Independent House/Villa"] },
  { label: "No. of Bedrooms", items: ["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"] }
];

const LISTINGS_DATA = [
  {
    id: 1,
    title: "Polo Reserve",
    type: "3 BHK Builder Floor",
    location: "Sector-33 Sohna, Gurgaon",
    priceRange: "₹1.92 - 2.25 Cr",
    builder: "Breez Builders",
    completionDate: "Dec, 2030",
    tags: ["RERA", "ZERO BROKERAGE", "3D VIEW"],
    nearby: ["G D Goenka Public School", "Srishti Arogyadham"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Central Park The Orchard",
    type: "3, 4 BHK Builder Floor",
    location: "Sohna, Gurgaon",
    priceRange: "₹2.68 - 8.3 Cr",
    builder: "Central Park Group",
    completionDate: "Ready To Move",
    tags: ["RERA", "ZERO BROKERAGE"],
    nearby: ["Sohna Gurgaon Highway", "K R Mangalam Univ"],
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80"
  }
];

export default function SearchResults({ searchData }: { searchData?: any }) {
  // Use search data if provided, otherwise use defaults
  const location = searchData?.location || "Sohna, Gurgaon";
  const tab = searchData?.tab || "buy";
  const tabDisplay = tab.charAt(0).toUpperCase() + tab.slice(1).replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#0057bb] text-white px-6 py-3 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-black hover:opacity-80 transition">Brand Name</a>
          <div className="text-sm">Search Results</div>
        </div>
      </header>

      {/* Sub-Header Actions bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center space-x-3 text-xs shadow-sm">
        <span className="font-semibold text-gray-400">Applied Filters:</span>
        <span className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-medium flex items-center space-x-1">
          <span>{location}</span> <span className="cursor-pointer ml-1 text-[10px] font-bold">✕</span>
        </span>
        <span className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-medium flex items-center space-x-1">
          <span>{tabDisplay}</span>
        </span>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-6">
        
        {/* Left Interactive Search Sidebar Panel */}
        <aside className="w-full lg:w-64 bg-white border border-gray-200 rounded-xl p-4 shadow-sm self-start space-y-6">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="font-bold text-sm text-slate-800">Filters</h3>
            <button className="text-xs text-blue-600 font-semibold hover:underline">Clear All</button>
          </div>

          {/* Quick Verified Toggle Component */}
          <div className="flex items-center justify-between bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-emerald-600" size={18} />
              <span className="text-xs font-bold text-emerald-800">Verified properties</span>
            </div>
            <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4" defaultChecked />
          </div>

          {/* Budget Range Inputs */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 uppercase mb-2">Budget</h4>
            <div className="grid grid-cols-2 gap-2">
              <select className="border border-gray-300 rounded p-1.5 text-xs bg-white text-gray-600"><option>No Min</option></select>
              <select className="border border-gray-300 rounded p-1.5 text-xs bg-white text-gray-600"><option>No Max</option></select>
            </div>
          </div>

          {/* Dynamic Filter Sections mapping */}
          {FILTER_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="border-t pt-4">
              <div className="flex items-center justify-between text-gray-700 font-bold text-xs uppercase mb-2">
                <span>{cat.label}</span>
                <ChevronDown size={14} />
              </div>
              <div className="space-y-1.5">
                {cat.items.map((item, i) => (
                  <label key={i} className="flex items-center space-x-2 text-xs font-medium cursor-pointer text-gray-600 hover:text-blue-600">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Right Content Stream Grid Container */}
        <section className="flex-1 space-y-4">
          <div className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm">
            <p className="text-sm text-slate-700 font-medium">
              <span className="font-bold text-slate-900">{LISTINGS_DATA.length} results</span> | Property in {location} for {tabDisplay}
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-400 font-medium">Sort By:</span>
              <select className="border-none font-semibold bg-transparent text-gray-700 focus:outline-none cursor-pointer">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Property Cards Wrapper loop rendering */}
          {LISTINGS_DATA.map((item) => (
            <article key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row">
              {/* Product Visual Area */}
              <div className="w-full md:w-64 h-48 md:h-auto relative bg-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {item.tags.map((t, i) => (
                    <span key={i} className="bg-slate-900/80 backdrop-blur-sm text-white font-bold text-[9px] px-1.5 py-0.5 rounded tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                  Launch: {item.completionDate}
                </div>
              </div>

              {/* Product Analytics Area */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition">{item.title}</h4>
                      <p className="text-xs font-semibold text-gray-500 mt-0.5">{item.type} in {location}</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                      New Booking
                    </span>
                  </div>

                  <div className="mt-4 text-xl font-black text-slate-800">{item.priceRange}</div>

                  {/* Nearby Landmarks Chips list */}
                  <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase mr-1">Nearby:</span>
                    {item.nearby.map((place, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-[11px] px-2 py-0.5 rounded-full font-medium">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer contextual actions layout bar */}
                <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-400 font-medium block text-[10px] uppercase">Builder</span>
                    <span className="font-bold text-slate-700">{item.builder}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-lg transition shadow-sm flex items-center space-x-1">
                      <FileText size={14} /> <span>Brochure</span>
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition shadow-md">
                      View Number
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </section>

      </div>
    </div>
  );
}