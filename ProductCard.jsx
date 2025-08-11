import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <div className="h-48 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-full max-w-full img-contain" />
      </div>

      <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.title}</h3>

      <div className="mt-auto flex items-center justify-between">
        <div className="text-lg font-bold">${Number(product.price).toFixed(2)}</div>
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
