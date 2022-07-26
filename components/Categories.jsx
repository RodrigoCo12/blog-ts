
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getCategories } from '../services'
import Svgs from './Svgs'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <>
      <div className="top-24 hidden h-8 w-full grid-cols-2 px-4 lg:grid">
        <Svgs
          name="chain"
          className=" h-8 justify-self-start"
          onClick={undefined}
          filter={undefined}
        />
        <Svgs
          name="chain"
          className=" h-8 justify-self-end"
          onClick={undefined}
          filter={undefined}
        />
      </div>
      <div className="hidden w-full shadow-lg shadow-light-shadow_color dark:shadow-dark-shadow_color lg:block">
        <div className="   bg-light-primary p-4 text-white dark:bg-dark-primary lg:px-8">
          <h3 className=" text-center text-xl font-semibold lg:text-left ">
            Categories
          </h3>
        </div>
        <div className="mb-8 w-full  bg-light-light_color p-4 py-2 text-light-text_2 shadow-lg dark:bg-dark-light_color dark:text-dark-text_2 lg:px-8">
          {categories.map((category) =>
            router.asPath === `/categories/${category.slug}` ? (
              <span
                key={category.slug}
                className="mb-3 mt-5 block font-semibold text-light-primary dark:text-dark-primary"
              >
                {category.name}
              </span>
            ) : (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <span className="mb-3 mt-5 block cursor-pointer  transition duration-200 hover:-translate-y-1">
                  {category.name}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Categories

