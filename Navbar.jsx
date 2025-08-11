import React from 'react'

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">MyStore</div>
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path>
            </svg>
            Cart
            <span className="ml-1 inline-block bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
