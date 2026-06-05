"use client";

import React, { useState } from "react";
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
import Link from "next/link";
import AuthModal from "@/src/app/login/page";
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

const SERVICE_CARDS = [
  {
    title: "Buying a home",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Renting a home",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Invest in Real Estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80",
    tag: "NEW",
  },
  {
    title: "Sell/Rent your property",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Plots/Land",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Header() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

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
    <>
      <header className="bg-[#0057bb] text-white px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-40">
        <div className="flex items-center space-x-6">
          <span className="text-2xl font-black tracking-tight cursor-pointer">
            Brand Name
          </span>
          <button className="hidden md:flex items-center space-x-1 border border-blue-400 rounded px-2 py-0.5 text-sm hover:bg-blue-700 transition">
            <span>All India</span> <ChevronDown size={14} />
          </button>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <Link href="/buyers" className="hover:underline">
            For Buyers
          </Link>
          <Link href="/owners" className="hover:underline">
            For Owners
          </Link>
          <Link href="/dealers" className="hover:underline">
            For Dealers / Builders
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAuthOpen(true)}
            className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow hover:bg-gray-100 transition"
          >
            Sign In
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded font-medium text-xs flex items-center space-x-1 transition">
            <span>Post Property</span>
            <span className="bg-white text-emerald-700 px-1 rounded text-[10px] font-bold">
              FREE
            </span>
          </button>
          <Menu className="lg:hidden cursor-pointer" />
        </div>
      </header>

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
