"use client";
import React from "react";

export default function Modal({ open, title, description, confirmText = "Confirmar", cancelText = "Cancelar", onConfirm, onCancel, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        {children}
        <div className="mt-5 flex justify-end gap-2">
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100" onClick={onCancel}>{cancelText}</button>
          <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
