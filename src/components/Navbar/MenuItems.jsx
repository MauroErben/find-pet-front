import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItems({ isOpen }) {
  return (
    <div
      className={`absolute ${
        isOpen ? 'flex' : 'hidden'
      } flex-col gap-4 top-full left-full -translate-x-full w-1/2 bg-white border-2 shadow-lg md:static md:flex md:flex-row md:-translate-x-0 md:w-auto md:bg-transparent md:border-0 md:shadow-none md:text-white`}
    >
      <Link
        className="p-4 hover:text-blue-400 border-b-2 font-medium md:border-b-0"
        to="#"
      >
        Inicio
      </Link>
      <Link
        className="p-4 hover:text-blue-400 border-b-2 font-medium md:border-b-0"
        to="#"
      >
        Publicaciones
      </Link>
      <Link
        className="p-4 hover:text-blue-400 border-b-2 font-medium md:border-b-0"
        to="#"
      >
        Acerca de
      </Link>
    </div>
  )
}
