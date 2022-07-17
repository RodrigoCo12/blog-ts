import React from 'react'
import { Header } from './'

import Svgs from './Svgs'
const Footer = () => {
  return (
    <div className=" h-30  w-full bg-primary lg:h-16">
      <div className="mx-auto grid max-w-7xl grid-cols-5 items-center px-2 pt-10 lg:grid-cols-12 lg:pt-0 ">
        <div className="absolute col-span-5 mx-auto -mt-32 justify-self-center lg:hidden">
          <Svgs name="logo_shadow" />
        </div>
        <div className=" col-span-3 text-sm font-light text-white lg:col-span-10 lg:text-base ">
          <p>Mimir Vant. Creator</p>
          <p>Rodrigo Corrales Medrano</p>
        </div>
        <div className="center center center  center col-span-2 grid  h-16 grid-cols-3 items-center lg:col-span-2 ">
          <Svgs
            name="twitter"
            className=" col-span-1 justify-self-center fill-white"
          />
          <Svgs
            name="gmail"
            className=" col-span-1 justify-self-center fill-white"
          />
          <Svgs
            name="github"
            className=" col-span-1 justify-self-center fill-white"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
