"use client"
import React, { useState } from 'react'
import Titulo from '../componentes_test/Titulo'
import UseState from '../componentes_test/UseState'
import Props from '../componentes_test/Props'
import Listas from '../componentes_test/Listas'

export default function page() {

  const [valor, setValor]= useState(0)

  return (
    <div>
      {/* Componente basico */}
      <Titulo/>

      {/* prueba de useState */}
      <UseState/>

      {/* Props de un componente */}
      <Props valor={valor} setValor={setValor} />

      {/* Manejo de listas */}

      <Listas/>



    </div>
  )
}
