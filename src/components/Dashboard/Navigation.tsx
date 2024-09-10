import React from 'react'
import { LogoMark, LogoMascot } from '../Logos'
function Navigation() {
  return (
    <nav className='p-2 lg:w-[200px] bg-green-600'>
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
        <LogoMascot />
        <span className="hidden md:block">
        <LogoMark />
        </span>
      </div>
      
    </nav>
  )
}

export default Navigation