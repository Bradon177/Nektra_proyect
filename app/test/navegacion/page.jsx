"use client"
import { useState } from 'react'

import React from 'react'

export default function page() {
    const [valor, setValor] = useState(0)
    const [visible, setVisible] = useState(true)
    const [fondo, setFondo] = useState(true)  
    

    const cambiarFondo= ()=>{
        setFondo(!fondo)
    }

    const incrementar = () =>{
        setValor(valor+1);
    }

    const descrementar = ( )=>{
        setValor(valor-1)
    }

    const multiplicar = ()=>{
        setValor((valor+1)*2)
    }

    const reset = () =>{
        setValor(0)
    }
    
    return (
        <div className={`text-3xl font-bold text-center text-gray-800 justify-center items-center ${fondo ? 'bg-gray-100' : 'bg-gray-900 text-white'} `}>
            <h1>
                contador {valor}
            </h1>
            <div className='flex justify-center items-center gap-4'>
                <button  className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={incrementar}>incrementar</button>
                <button  className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={descrementar}>decrementar</button>
                <button  className='bg-green-500 text-white px-4 py-2 rounded-md' onClick={multiplicar}>multiplicar</button>
                <button  className='bg-yellow-500 text-white px-4 py-2 rounded-md' onClick={reset}>reset</button>

            </div>

            <div className='flex justify-center items-center gap-4 mt-4'>
                <button
                    className='bg-purple-500 text-white px-4 py-2 rounded-md'
                    onClick={()=>setVisible(!visible)}
                >
                    {visible ? 'ocultar' : 'mostrar'}
                </button>

                <p className='text-2xl font-bold text-gray-800'>
                    {visible ? 'visible' : ''}
                </p>
            </div>


            <div className='flex justify-center items-center gap-4 mt-4'>
                <button
                    className='bg-purple-500 text-white px-4 py-2 rounded-md'
                    onClick={cambiarFondo}
                >
                    cambiar fondo
                </button>
            </div>
        </div>
    )
}
