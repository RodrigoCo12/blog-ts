import React from 'react'
import { Header } from './'

import Svgs from './Svgs'
const Footer = () => {
  return (
    <div className=" h-16 w-full bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center px-2 ">
        {/* <Svgs name="logo_shadow" /> */}
        <div className="col-span-10  font-light text-white ">
          <p>Mimir Vant. Creator</p>
          <p>Rodrigo Corrales Medrano</p>
        </div>
        <div className="center center center  center col-span-2  grid h-16 grid-cols-3 items-center ">
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
