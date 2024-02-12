import Image from 'next/image'
import React from 'react'
import logo from '../../public/ws-logo.png'

const Header = () => {
  return (
    <header className=" w-screen h-[10vh]">
      <div className=" h-full p-5 ml-5">
        {/* W&S Logo */}
        <Image 
          className="h-full w-24"
          src={logo}
          alt="logo" 
        />
        
      </div>
    </header>
  )
}

export default Header
