import React from 'react'
import Button from '../../ui/Button'
import Trust from './Trust'
import {ArrowRight} from 'lucide-react'

export default function LeftContent() {
    return (
        <div>
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                Nuevas funcionalidades disponibles
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6">
                Transforma tu negocio con{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">soluciones digitales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Potencia tu empresa con nuestra plataforma integral diseñada para
                impulsar el crecimiento, optimizar procesos y alcanzar tus objetivos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg">
                    Comenzar Gratis
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            {/* Trust Indicators */}
            <Trust />
        </div>
        )
}
