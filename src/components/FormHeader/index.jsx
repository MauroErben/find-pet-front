import React from 'react'

export default function FormHeader({ title, subtitle }) {
  return (
    <div className="mb-4 p-4 rounded-tl rounded-tr text-center text-white font-medium bg-blue-500">
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </div>
  )
}
