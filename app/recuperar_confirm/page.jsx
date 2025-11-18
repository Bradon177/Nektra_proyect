"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'


export default function Page() {
    const [show, setShow] = useState(false);

    const [form, setForm] = useState({
        password: "",
        repetir: ""
    });
    const [msg, setMsg] = useState("");

    const router = useRouter();

    // 1. FUNCIÓN PARA ACTUALIZAR EL ESTADO 'form'
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
       
        if (msg) setMsg(""); 
    };

    const handleRouter = (e) => {
        e.preventDefault();

      
        if (form.password.trim() !== form.repetir.trim()) {
            setMsg("Las contraseñas no coinciden");
            
            return; 
        }

    
        setMsg("Contraseñas coincidentes."); 
        router.push("dashboard/login");
    };


    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4'>
           
            <form 
                className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6'
                onSubmit={handleRouter} 
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-900">Nueva contraseña</h2>
                    <p className="text-gray-600">Ingrese su nueva contraseña</p>
                </div>
              
                <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Nueva contraseña</label>
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="Ingresa tu contraseña"
                           
                            value={form.password}
                            onChange={handleChange}
                            className="w-full h-11 px-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-400 text-black"
                        />
                        {/* Botón mostrar/ocultar... (el resto del código es el mismo) */}
                        <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
                            {show ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-5.52 0-10-4-10-8 0-1.61.53-3.11 1.44-4.34M6.06 6.06A10.07 10.07 0 0112 4c5.52 0 10 4 10 8 0 1.61-.53 3.11-1.44 4.34M3 3l18 18" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                            )}
                        </button>
                    </div>
                </div>

             
                <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Confirmar contraseña</label>
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            name="repetir"
                            placeholder="Ingresa tu contraseña"
                         
                            value={form.repetir}
                            onChange={handleChange}
                            className="w-full h-11 px-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-400 text-black"
                        />
                        {/* Botón mostrar/ocultar... (el resto del código es el mismo) */}
                        <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
                            {show ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-5.52 0-10-4-10-8 0-1.61.53-3.11 1.44-4.34M6.06 6.06A10.07 10.07 0 0112 4c5.52 0 10 4 10 8 0 1.61-.53 3.11-1.44 4.34M3 3l18 18" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {msg && <p className="text-center text-red-600 font-semibold">{msg}</p>}

                <button
                    type="submit"
                    className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition"
        
                >
                    Nueva contraseña
                </button>
            </form>
        </div>
    )
}