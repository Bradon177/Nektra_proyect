// components/ServiceCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../ui/Button";

export default function ServiceCard({ icon: Icon, title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-500 hover:shadow-xl transition-all group">
      
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all">
        <Icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-2xl mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button variant="outline" className="w-full border-cyan-500 text-cyan-600 hover:bg-cyan-50">
        Más Detalles
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}
