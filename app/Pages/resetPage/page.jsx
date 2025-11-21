"use client"
import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [show, setShow] = useState(false)

    const handleClick =(e)=>{
        e.preventDefault();
        router.push("Pages/login")
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-900">Restablecer contraseña</h2>
                    <p className="text-gray-600">Ingresa tu nueva contraseña</p>
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Nueva contraseña</label>
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-11 px-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-400 text-black"
                        />

                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                        >
                            {show ? <Eye size={22} /> : <EyeOff size={22} />}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Confirmar contraseña</label>
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="••••••••"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="w-full h-11 px-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-400 text-black"
                        />

                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                        >
                            {show ? <Eye size={22} /> : <EyeOff size={22} />}
                        </button>
                    </div>
                </div>

                <button type="submit"
                
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition">
                    Guardar contraseña
                </button>

                <div className="text-center text-gray-600 text-sm pt-4 border-t">
                    <button type="button"
                    onClick={()=>router.replace("/Pages/login")}
                    className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                        Volver al inicio de sesión
                    </button>
                </div>
            </form>
        </div>
    )
}
