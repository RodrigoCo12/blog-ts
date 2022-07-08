import Link from 'next/link'
// import type { useEffect, useState } from 'next'
import { useEffect, useState } from 'react'

import { Categories, Category, PostCard, PostWidget } from '../components/index'
import { getCategories } from '../services'

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  // console.log(categories)

  return (
    <div className="container mx-auto mb-4 ">
      <div className="mx-3 grid grid-cols-1 gap-1   lg:grid-cols-12 lg:gap-12 ">
        <h3 className=" mb-6 rounded-lg bg-white pb-2 pt-2 text-center text-lg font-semibold shadow-lg  ">
          Categories
        </h3>
        {categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </div>
    </div>
  )
}
//
export default CategoriesPage
