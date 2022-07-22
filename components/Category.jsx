// import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const Category = ({ category }) => {
  //   console.log(category)
  return (
    <Link key={category.slug} href={`/categories/${category.slug}`}>
      <div className="mb-8 cursor-pointer rounded-lg bg-light_color p-0 py-4 pt-4 text-center text-2xl font-semibold shadow-lg shadow-shadow_color  duration-300 hover:translate-y-1  ">
        <h3 className=" mb-4 ">{category.name}</h3>
        <div className="relative mb-2  overflow-hidden pb-48 shadow-md lg:mb-6 lg:pb-80">
          <img
            src={category.categoryImage.url}
            alt={category.name}
            className="absolute h-48 w-full object-cover lg:h-80 "
          />
        </div>
        <p className="my-4 ">
          Posts:
          <span className="text-primary"> {category.posts.length}</span>
        </p>
      </div>
    </Link>
  )
}

export default Category
