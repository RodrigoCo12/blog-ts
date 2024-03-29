import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { getCategories } from '../services'
import LogoButton from './LogoButton'
import Svgs from './Svgs'
import { TCategoriesPage } from '../types'

const Header = () => {
  const [categories, setCategories] = useState<TCategoriesPage[]>([])
  const [title, setTitle] = useState('')

  const router = useRouter()
  let back = true

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
      setTitle('Mim Blue')
    }
  })

  const handleBack = () => {
    if (back) {
      back = false
      return router.back()
    }
  }
  return (
    <div className="conteiner relative z-20 h-16 w-full bg-light-primary shadow-lg shadow-light-shadow_color dark:bg-dark-primary dark:shadow-dark-shadow_color lg:h-20  ">
      <div className=" j m-auto grid h-full max-w-7xl grid-cols-5 items-center lg:grid-cols-3">
        <div className=" col-span-1 hidden text-left md:float-left lg:order-none lg:block">
          <Link href="/">
            <span className=" cursor-pointer text-2xl font-semibold text-white lg:text-4xl">
              Mim Blue
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
          <span className=" text-xl font-semibold text-white lg:text-4xl">
            {title}
          </span>
        </div>
        {title === 'Mim Blue' ? (
          <div className="hidden lg:block"></div>
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
