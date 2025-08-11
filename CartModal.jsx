import React from 'react'

export default function CartModal({ open, onClose, cart, onRemove }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white w-full max-w-2xl rounded shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Cart ({cart.length})</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-auto">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-2 border rounded">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                <div className="flex-1">
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-gray-600">${Number(item.price).toFixed(2)}</div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
