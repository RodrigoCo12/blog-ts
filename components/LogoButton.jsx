import React from 'react'
import Logo from './Animated/Logo'
import Svgs from './Svgs'
import { useTheme } from 'next-themes'
const LogoButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="hidden h-20 justify-self-center lg:block">
      <div className=" z-40 -mb-14 ml-9 ">
        <Logo />
      </div>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Svgs name="logo" className=" h-20 w-auto" />
      </button>
    </div>
  )
}

export default LogoButton
