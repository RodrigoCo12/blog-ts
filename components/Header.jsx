import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCategories } from '../services'
import Svgs from './Svgs'
const Header = () => {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="conteiner relative z-20 h-20 w-full  bg-primary shadow-lg shadow-teal-800">
      <div className=" j m-auto grid h-full max-w-7xl grid-cols-3 items-center">
        <div className="order-2 col-span-2 text-left md:float-left lg:order-none lg:col-span-1 lg:pl-8">
          <Link href="/">
            <span className=" cursor-pointer text-3xl font-semibold text-white lg:text-4xl">
              Mimir Vatn
            </span>
          </Link>
        </div>
        <div className="hidden h-16 justify-self-center lg:block">
          <Link href="/">
            <div>
              <Svgs name="logo_shadow" className="h-16 cursor-pointer " />
            </div>
          </Link>
        </div>
        <div className=" h-9 justify-self-center pr-8 lg:justify-self-end">
          {router.asPath === '/categories_page' ? (
            <button onClick={router.back}>
              <Svgs
                name="fileOpen"
                className="h-9 cursor-pointer fill-white  duration-300 hover:-mt-1 "
              />
            </button>
          ) : (
            <Link href="/categories_page">
              <div>
                <Svgs
                  name="fileClose"
                  className="mr-2 h-9 cursor-pointer fill-white duration-300 hover:-mt-1"
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
