import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')

  // fetch products once
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err))
  }, [])

  // try to add a product to cart
  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      setAlertMsg('Item already added to the cart') // exact message shown to user
      setTimeout(() => setAlertMsg(''), 2500)
      return
    }
    setCart(prev => [...prev, product])
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(p => p.id !== productId))
  }

  // optional: persist cart in localStorage (nice to have)
  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      {/* alert */}
      {alertMsg && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded shadow z-40">
          {alertMsg}
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>

      <CartModal
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
      />
    </div>
  )
}
