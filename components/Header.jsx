import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="conteiner mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-white py-4 lg:py-8 ">
        <div className="block text-center md:float-left lg:text-left">
          <Link href="/categories_page">
            <svg
              width="40"
              height="30"
              viewBox="0 0 16 13"
              className=" absolute left-3 lg:hidden"
              stroke="currentColor"
            >
              <path d="M3 3H16V13H0V0H7L9 2H2V11H3V3Z" fill="white" />
            </svg>
          </Link>
          <Link href="/">
            <span className=" cursor-pointer text-3xl font-semibold text-white lg:text-4xl">
              Mimir Vatn
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="aling-middle mt-2 ml-4 cursor-pointer font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
