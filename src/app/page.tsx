"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Mic,
  ChevronDown,
  PlusCircle,
  User,
  Menu,
} from "lucide-react";

import { fetchProperties } from "../features/properties/propertySlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const TAB_OPTIONS = [
  "Buy",
  "Rent",
  "New Launch",
  "Commercial",
  "Plots/Land",
  "Projects",
];

const PROPERTY_TYPES = [
  "Flat/Apartment",
  "Builder Floor",
  "Independent House/Villa",
  "Residential Land",
  "1 RK/ Studio Apartment",
  "Farm House",
  "Serviced Apartments",
  "Other",
];

const propertiesData = [
  {
    title: "Buying a home",
    thumbnail:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Renting a home",
    thumbnail:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Invest in Real Estate",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80",
    tag: "NEW",
  },
  {
    title: "Sell/Rent your property",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Plots/Land",
    thumbnail:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&q=80",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { properties, loading } = useAppSelector((state) => state.properties);

  console.log("Properties from Redux:", properties, "Loading:", loading);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      const tabMap: Record<string, string> = {
        Buy: "buy",
        Rent: "rent",
        "New Launch": "new-launch",
        Commercial: "commercial",
        "Plots/Land": "plots-land",
        Projects: "projects",
      };
      const tabPath = tabMap[activeTab] || "buy";
      const searchTerm = searchInput.trim().toLowerCase().replace(/\s+/g, "-");
      const searchUrl = `/properties/search?tab=${tabPath}&location=${searchTerm}&city=8&locality=9694&preference=S&res_com=R`;
      console.log("Navigating to:", searchUrl);
      router.push(searchUrl);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      {/* Hero Banner Section */}
      {/* overflow-hidden */}
      <section className="relative h-[420px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 flex flex-col justify-center items-center px-4">
        {/* Dynamic decorative backdrop text simulation */}
        <div className="absolute inset-0 opacity-10 flex justify-around items-center select-none pointer-events-none">
          <div className="text-white text-9xl font-extrabold tracking-widest">
            THE SERENAS
          </div>
        </div>

        {/* Dynamic Project Details Banner */}
        <div className="z-10 text-center mb-8 max-w-4xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
            THE <span className="font-serif italic text-blue-300">Serenas</span>
          </h1>
          <p className="text-xs tracking-widest text-gray-300 mt-1 uppercase">
            Life, Designed Beautifully.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50 text-white text-xs md:text-sm">
            <span className="font-semibold text-yellow-400">
              MAGNIFICENCE Rising:
            </span>
            <span>2 Towers | 45 Stories | Sector 88A, Gurugram</span>
            <span className="border-l border-gray-500 pl-2 text-blue-300 font-medium">
              Starting ₹3.5 Cr*
            </span>
          </div>
        </div>

        {/* Global Search Container Widget */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 z-20 transition-all">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-6 border-b border-gray-100 pb-3 mb-4 overflow-x-auto scrollbar-none">
            {TAB_OPTIONS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-semibold whitespace-nowrap transition-all relative ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                {tab === "New Launch" && (
                  <span className="absolute top-1 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Interface Inputs Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-2">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full md:w-44 flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-100"
              >
                <span>All Residential</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {/* Collapsible Property Types Popover */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50 grid grid-cols-1 gap-2">
                  {PROPERTY_TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 text-xs font-medium cursor-pointer text-gray-700 hover:text-blue-600"
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Input Element mapping */}
            <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1.5">
              <Search className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                placeholder='Search "Gurgaon" or "Hyderabad"'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && searchInput.trim()) {
                    handleSearch();
                  }
                }}
                className="w-full bg-transparent text-sm focus:outline-none py-1 text-gray-800"
              />
              <div className="flex items-center space-x-2 ml-2 border-l pl-2 border-gray-200">
                <button className="text-blue-500 p-1.5 hover:bg-blue-50 rounded-full transition">
                  <MapPin size={16} />
                </button>
                <button className="text-blue-500 p-1.5 hover:bg-blue-50 rounded-full transition">
                  <Mic size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#0057bb] hover:bg-blue-800 text-white font-semibold px-8 py-2.5 rounded-lg text-sm transition shadow-md flex items-center justify-center space-x-2"
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Showcase Carousel Segment */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-xs font-bold uppercase tracking-wider text-gray-400 mb-8">
          Get Started with Exploring Real Estate Options
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {loading ? (
            <p>Loading properties...</p>
          ) : (
            propertiesData.slice(0, 8).map((card, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer flex flex-col"
              >
                <div className="h-28 overflow-hidden relative bg-gray-100">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {card.tag && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white font-bold text-[9px] px-1.5 py-0.5 rounded shadow">
                      {card.tag}
                    </span>
                  )}
                </div>
                <div className="p-3 flex-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition">
                    {card.title}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
