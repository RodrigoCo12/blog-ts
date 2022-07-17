import Link from 'next/link'
// import type { useEffect, useState } from 'next'
import { useEffect, useState } from 'react'

import { Categories, Category, PostCard, PostWidget } from '../components/index'
import { getCategories } from '../services'
import Svgs from '../components/Svgs'
const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  // console.log(categories)

  return (
    <div className="container mx-auto mb-4 ">
      <div className="mx-3 grid grid-cols-1 gap-1 lg:grid-cols-12 lg:gap-8 ">
        <div className="top-24 col-span-1 -mb-8 grid h-8 w-full grid-cols-2 px-4 lg:col-span-12">
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
        <h3 className="col-span-1 my-7 bg-primary py-4 text-center text-xl font-semibold text-white shadow-lg shadow-teal-900 lg:col-span-12 lg:my-0 lg:text-3xl ">
          Categories
        </h3>
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
