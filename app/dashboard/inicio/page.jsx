import React from 'react'
import FlotingCarg from '../../componets/secciones/inicio/FlotingCard'
import Button from '../../componets/ui/Button'
import {ArrowRight} from 'lucide-react'
import Trust from '../../componets/secciones/inicio/Trust'
import LeftContent from '../../componets/secciones/inicio/LeftContent'

export default function page() {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <LeftContent/>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* debo agregar una imgen */}
            </div>
            
            {/* Floating Card */}
            <FlotingCarg/>
          </div>
        </div>
      </div>
    </section>
  )
}
