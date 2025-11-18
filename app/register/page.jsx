"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const [show, setShow] = useState(false)

  const [form, setForm] = useState({
    email: "",
    cedula: "",
    fecha: "",
    telefono: "",
    genero: "",
    password: "",
    repetir: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.repetir) {
      setMsg("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMsg(data.message);

      if (data.status === "ok") {
        // Redirigir al login si el registro es exitoso
        setTimeout(() => {
          router.push("/dashboard/login");
        }, 1500);
      }

    } catch (error) {
      setMsg("Error enviando datos al servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        <div className="text-center space-y-2">


          <h2 className="text-2xl font-semibold text-gray-900">Crear cuenta</h2>
          <p className="text-gray-600">Regístrate para continuar</p>
        </div>


        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="correo@ejemplo.com"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Cédula</label>
          <input
            name="cedula"
            type="text"
            placeholder="Tu número de cédula"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Fecha de nacimiento</label>
          <input
            name="fecha"
            type="date"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Teléfono</label>
          <input
            name="telefono"
            type="text"
            placeholder="Tu número de teléfono"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Género</label>
          <select
            name="genero"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          >
            <option value="">Seleccione una opción</option>
            <option value="m">Masculino</option>
            <option value="f">Femenino</option>
            <option value="o">Otro</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Contraseña</label>

          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Mínimo 6 caracteres"
              onChange={handleChange}
              className="w-full h-11 px-3 rounded-lg border border-gray-300 
      focus:ring-2 focus:ring-blue-600 focus:outline-none 
      placeholder-gray-400 text-black"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-5.52 0-10-4-10-8 0-1.61.53-3.11 1.44-4.34M6.06 6.06A10.07 10.07 0 0112 4c5.52 0 10 4 10 8 0 1.61-.53 3.11-1.44 4.34M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>


        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Repetir contraseña</label>

          <div className="relative">
            <input
            name="repetir"
            type={show ? "text" : "password"}
            placeholder="Repite tu contraseña"
            onChange={handleChange}
            className="w-full h-11 px-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-600 focus:outline-none 
            placeholder-gray-400 text-black"
          />

          <button type="button"
          onClick={()=>setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-5.52 0-10-4-10-8 0-1.61.53-3.11 1.44-4.34M6.06 6.06A10.07 10.07 0 0112 4c5.52 0 10 4 10 8 0 1.61-.53 3.11-1.44 4.34M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
          </button>




          </div>
          
        </div>

        <button
        type="submit"
         className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition">
          Registrarse
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/login")}
          className="w-full h-11 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
        >
          Volver al login
        </button>

        {msg && <p className="text-center text-red-600">{msg}</p>}
      </form>
    </div>
  );
}
