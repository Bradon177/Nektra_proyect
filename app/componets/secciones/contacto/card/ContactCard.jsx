import React from "react";

export default function ContactCard({ icon: Icon, title, info, link, color }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] text-center">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${color}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="mb-2">{title}</h3>

      <a href={link} className="text-gray-600 hover:text-cyan-600 transition-colors">
        {info}
      </a>
    </div>
  );
}
