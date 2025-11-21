import React from 'react'
import ContactList from '../../componets/secciones/contacto/ContactList'

export default function page() {
  return (
  <div className="min-h-screen">
      <section className="bg-gradient-to-b from-cyan-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl mb-6">
              Ponte en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Contacto
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible
            </p>
          </div>

          {/* Lista dinámica */}
          <ContactList />
        </div>
      </section>
    </div>
  )
}
