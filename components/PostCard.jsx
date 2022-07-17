import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import Svgs from './Svgs'
import { useRouter } from 'next/router'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-4 pt-3 shadow-lg shadow-teal-900 lg:p-8 lg:pt-4">
      <div className="mx-2 mb-2 flex h-6 text-sm text-gray-700 lg:mx-0  lg:-ml-4 lg:p-0">
        <Svgs name="tag" className="h-5" />
        {post.categories.map((category, index) =>
          index < 2 ? (
            useRouter().asPath === `/categories/${category.slug}` ? (
              <p className="transaition text-primary ">
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
      <div className="relative mb-4 overflow-hidden pb-48 shadow-md  ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-48 w-full object-cover object-center shadow-lg  lg:rounded-lg"
        />
      </div>
      <h2 className="text-3x1 transaition mb-2 cursor-pointer text-center text-xl font-semibold text-black duration-700 hover:text-primary ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className=" block w-full items-center justify-center text-center lg:flex ">
        <div className=" mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className="h-8 w-8 rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <Svgs
            name="calendar"
            className='className="mr-1 inline h-7 w-7 text-primary'
          />
          <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
        </div>
      </div>
      <p className=" my-4 px-3 text-center text-sm font-normal text-gray-700 lg:px-0   ">
        {post.excerpt}
      </p>
      <div className=" text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" inline-block transform cursor-pointer rounded-full bg-primary px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
