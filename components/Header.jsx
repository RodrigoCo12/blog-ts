import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import { getCategories } from '../services'
import Svgs from './Svgs'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState()
  const router = useRouter()
  const back = true

  // const titulo = useRef()

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  useEffect(() => {
    if (router.asPath === '/categories_page') {
      return setTitle('Categories')
    }
    categories.map((category) => {
      if (router.asPath === '/categories/' + category.slug) {
        return setTitle(category.name)
      }
    })
    if (router.asPath === '/' || router.asPath.includes('/post/')) {
      setTitle('Mimir Vatn')
    }
  })

  const handleBack = () => {
    if (back) {
      back = false
      return router.back()
    }
  }
  return (
    <div className="conteiner relative z-20 h-20 w-full  bg-light-primary shadow-lg shadow-light-shadow_color dark:bg-dark-primary dark:shadow-dark-shadow_color  ">
      <div className=" j m-auto grid h-full max-w-7xl grid-cols-5 items-center lg:grid-cols-3">
        <div className=" col-span-1 hidden text-left md:float-left lg:order-none lg:block">
          <Link href="/">
            <span className=" cursor-pointer text-2xl font-semibold text-white lg:text-4xl">
              Mimir Vatn
            </span>
          </Link>
        </div>
        <div className=" h-10 justify-self-center lg:hidden lg:justify-self-end">
          {router.asPath !== '/' ? (
            <button onClick={handleBack}>
              <Svgs
                name="back"
                className="h-10 w-10 cursor-pointer fill-white  duration-300 hover:-mt-1 "
              />
            </button>
          ) : (
            ''
          )}
        </div>
        <div className=" col-span-3 text-center md:float-left  lg:order-none lg:col-span-1 lg:hidden lg:pl-8">
          <span className=" text-2xl font-semibold text-white lg:text-4xl">
            {title}
          </span>
        </div>
        {title === 'Mimir Vatn' ? (
          <div className="hidden h-16 justify-self-center lg:block">
            <Link href="/">
              <div>
                <Svgs name="logo_shadow" className="h-16 cursor-pointer " />
              </div>
            </Link>
          </div>
        ) : (
          <div className=" col-span-3 hidden  text-center md:float-left lg:order-none lg:col-span-1 lg:block ">
            <span className=" text-2xl font-semibold text-white">{title}</span>
          </div>
        )}
        <div className=" h-9 justify-self-center lg:justify-self-end">
          {router.asPath === '/categories_page' ? (
            <button onClick={handleBack}>
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
