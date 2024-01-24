import { useState } from 'react'

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
