import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Svgs from './Svgs'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <>
      <div className=" top-24 grid h-8 w-full grid-cols-2 px-4">
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
      <div className="  w-full shadow-lg  shadow-teal-800">
        <div className=" rounded-b-lg  bg-primary p-4 text-white  shadow-lg lg:p-5 lg:px-8">
          <h3 className=" text-center text-xl font-semibold lg:text-left ">
            Categories
          </h3>
        </div>
        <div className="mb-8 hidden w-full rounded-b-lg bg-white p-4 py-2 text-gray-700 shadow-lg lg:block lg:px-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              {router.asPath === `/categories/${category.slug}` ? (
                <span className="mb-3 mt-5 block font-semibold text-pink-500">
                  {category.name}
                </span>
              ) : (
                <span className="mb-3 mt-5 block cursor-pointer">
                  {category.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories
