// import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const Category = ({ category }) => {
  //   console.log(category)
  return (
    <Link key={category.slug} href={`/categories/${category.slug}`}>
      <div className="mb-8 rounded-lg bg-white p-0 pt-4 text-center font-semibold shadow-lg lg:p-8 lg:pb-12">
        <h3 className=" mb-4 text-lg ">{category.name}</h3>
        <div className="relative mx-auto mb-2 w-4/5 overflow-hidden pb-48 shadow-md lg:mb-6 lg:pb-80">
          <img
            src={category.categoryImage.url}
            alt={category.name}
            className="absolute h-48 w-full rounded-t-lg object-cover  shadow-lg lg:h-80 lg:rounded-lg"
          />
        </div>
        <p className="my-4 ">
          Posts:
          <span className="text-pink-600"> {category.posts.length}</span>
        </p>
      </div>
    </Link>
  )
}

export default Category
