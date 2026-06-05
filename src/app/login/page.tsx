"use client";

import React, { useState } from "react";
import { X, Lock } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isAgent, setIsAgent] = useState<boolean | null>(null);
  const [agree, setAgree] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden flex flex-col p-6 animate-scale-up">
        
        {/* Dismiss Button */}
        <button onClick={onClose} className="absolute right-4 top-4 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-slate-800 mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Form Group: Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Form Group: Phone context */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
              <select className="bg-transparent border-none text-sm font-medium text-gray-600 focus:outline-none pr-1">
                <option>+91</option>
                <option>+1</option>
              </select>
              <div className="h-4 w-px bg-gray-300 mx-2" />
              <input 
                type="tel" 
                placeholder="Enter Mobile Number" 
                className="w-full bg-transparent text-sm focus:outline-none text-gray-800 font-medium"
              />
              <Lock size={16} className="text-gray-400 ml-2" />
            </div>
            <button type="button" className="text-xs text-blue-600 hover:underline mt-1 font-medium block">Change Number</button>
          </div>

          {/* Toggle Choice Configuration */}
          <div className="py-2">
            <span className="block text-xs font-bold text-slate-700 mb-2">Are you a Real Estate Agent?</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsAgent(true)}
                className={`py-2 text-sm font-semibold border rounded-lg transition ${
                  isAgent === true ? "bg-blue-50 border-blue-600 text-blue-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsAgent(false)}
                className={`py-2 text-sm font-semibold border rounded-lg transition ${
                  isAgent === false ? "bg-blue-50 border-blue-600 text-blue-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Checkbox Segment */}
          <div className="space-y-2">
            <label className="flex items-start space-x-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
              />
              <span className="text-xs text-gray-500 leading-tight">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </span>
            </label>
            {!agree && (
              <p className="text-[11px] font-medium text-red-500 flex items-center space-x-1">
                <span>⚠️ This is required for creating an account</span>
              </p>
            )}
          </div>

          {/* Form Action CTA */}
          <button
            type="submit"
            disabled={!agree}
            className={`w-full py-3 rounded-lg font-semibold text-sm text-white shadow transition-all ${
              agree ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}