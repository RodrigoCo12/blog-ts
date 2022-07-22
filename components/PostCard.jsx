import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Svgs from './Svgs'

const PostCard = ({ post }) => {
  return (
    <div className="flex h-full flex-col gap-2 bg-light_color pb-3 shadow-lg shadow-shadow_color ">
      <div className="relative  overflow-hidden pb-48 shadow-md  ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-48 w-full rounded-b-xl object-cover object-center shadow-lg "
        />
      </div>
      <h2 className="text-3x1 transaition  cursor-pointer text-center text-xl font-semibold text-black duration-700 hover:text-primary ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className=" block w-full items-center justify-center text-center lg:flex ">
        <div className=" lg: mr-8 mb-2 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className="h-7 w-7 rounded-full align-middle lg:h-8 lg:w-8"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <Svgs name="calendar" className="mr-1 inline h-7 w-7 text-primary" />
          <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
        </div>
      </div>
      <p className=" mx-6 text-center text-sm  font-normal leading-5 text-gray-700 lg:px-0 ">
        {post.excerpt}
      </p>
      <div className=" mt-auto p-4  text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" inline-block transform cursor-pointer bg-primary px-8 py-3 text-lg font-semibold text-white transition duration-500 hover:-translate-y-1 hover:shadow-md">
            Read More
          </span>
        </Link>
      </div>
      <div className=" ml-3 flex h-6 text-sm text-gray-700 ">
        <Svgs name="tag" className="h-5" />
        {post.categories.map((category, index) =>
          index < 2 ? (
            useRouter().asPath === `/categories/${category.slug}` ? (
              <p key={index} className="transaition text-primary ">
                {index === 0 ? '' : ', '}
                {category.name}
              </p>
            ) : (
              <Link key={index} href={`/categories/${category.slug}`}>
                <p className="transaition cursor-pointer duration-500 hover:text-primary">
                  {index === 0 ? '' : ', '}
                  {category.name}
                </p>
              </Link>
            )
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default PostCard
