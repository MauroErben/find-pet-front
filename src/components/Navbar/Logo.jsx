import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
      <Link to="#">
        <span className="text-md text-white font-medium md:text-xl">
          FIND PET MDZ
        </span>
      </Link>
    </div>
  )
}
