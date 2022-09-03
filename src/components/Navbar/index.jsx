import { useState } from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import MenuItems from './MenuItems'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <div className="relative p-4 flex items-center justify-between gap-8 bg-blue-500 shadow-lg md:px-4 md:justify-start">
      <Logo />
      <MenuItems isOpen={isOpen} />
      <MenuButton onToggle={handleToggle} isOpen={isOpen} />
    </div>
  )
}
