import React from 'react'

export default function FlotingCarg() {
  return (
    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-2xl">Clientes Satisfechos</p>
        </div>
      </div>
    </div>
  )
}
