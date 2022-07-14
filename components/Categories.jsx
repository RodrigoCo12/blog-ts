import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-8 hidden w-full rounded-lg bg-white p-8 text-gray-700 shadow-lg lg:block">
      <h3 className=" border-b pb-4 text-xl font-semibold ">Categories</h3>
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
  )
}

export default Categories
