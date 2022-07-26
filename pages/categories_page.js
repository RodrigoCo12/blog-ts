import Link from 'next/link'
// import type { useEffect, useState } from 'next'
import { useEffect, useState } from 'react'

import { Categories, Category, PostCard, PostWidget } from '../components/index'
import Svgs from '../components/Svgs'
import { getCategories } from '../services'

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  // console.log(categories)

  return (
    <div className="container  mx-auto mb-4 max-w-screen-xl ">
      <div className=" mt-8 grid grid-cols-1 gap-1 lg:grid-cols-12 lg:gap-8 ">
        {categories.map((category) => (
          <div className="col-span-1  lg:col-span-4" key={category.name}>
            <Category key={category.name} category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
//
export default CategoriesPage
