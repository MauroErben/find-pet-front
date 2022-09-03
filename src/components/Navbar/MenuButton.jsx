import React from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

export default function MenuButton({ onToggle, isOpen }) {
  return (
    <div className="flex items-center md:hidden">
      <button onClick={onToggle}>
        {isOpen ? (
          <MdClose size="22" color="white" />
        ) : (
          <MdMenu size="22" color="white" />
        )}
      </button>
    </div>
  )
}
