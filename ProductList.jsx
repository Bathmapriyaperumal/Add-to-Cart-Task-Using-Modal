import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={() => onAddToCart(p)} />
        ))}
      </div>
    </div>
  )
}
