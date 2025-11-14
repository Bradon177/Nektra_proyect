"use client";
import React, { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        {/* Título */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Iniciar sesión</h2>
          <p className="text-gray-600">Accede a tu panel de control</p>
        </div>

        {/* Correo */}
        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Ingresa tu correo</label>
          <input
            type="text"
            placeholder="nombre@empresa.com"
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />
        </div>

        {/* Contraseña */}
        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Contraseña</label>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              className="w-full h-11 px-3 pr-12 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-600 focus:outline-none 
              placeholder-gray-400 text-black"
            />

            {/* Botón mostrar/ocultar */}
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {show ? (
                /* Icono ojo cerrado */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-5.52 0-10-4-10-8 0-1.61.53-3.11 1.44-4.34M6.06 6.06A10.07 10.07 0 0112 4c5.52 0 10 4 10 8 0 1.61-.53 3.11-1.44 4.34M3 3l18 18" />
                </svg>
              ) : (
                /* Icono ojo abierto */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Botón iniciar sesión */}
        <button
          type="submit"
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition"
        >
          Iniciar sesión
        </button>

        {/* Línea separadora */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">O continúa con</span>
          </div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full h-11 border border-gray-300 rounded-lg flex items-center justify-center font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92..." />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57..." />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s..." />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15..." />
          </svg>
          Iniciar con Google
        </button>

        {/* Registro */}
        <p className="text-center text-gray-600 text-sm pt-4 border-t">
          ¿No tienes cuenta?
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">Regístrate ahora</a>
        </p>

      </form>
    </div>
  );
}
