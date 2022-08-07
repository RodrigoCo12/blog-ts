import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Svgs from './Svgs'
import { TIndexPagePosts } from '../types'
const PostCard = ({ post }: { post: TIndexPagePosts['node']['post'] }) => {
  return (
    <div className="flex h-full flex-col gap-2 bg-light-light_color pb-3 shadow-lg shadow-light-shadow_color dark:bg-dark-light_color dark:shadow-dark-shadow_color ">
      <div className="relative  overflow-hidden pb-48 shadow-md  ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-48 w-full rounded-b-xl object-cover object-center shadow-lg "
        />
      </div>
      <h2 className="text-3x1 transaition  cursor-pointer text-center text-xl font-semibold text-light-text_1 duration-200 hover:text-light-primary dark:text-dark-text_1 dark:hover:text-dark-primary">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className=" block w-full items-center justify-center text-center lg:flex ">
        <div className=" lg: mr-8 mb-2 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className="h-7 w-7 rounded-full align-middle lg:h-8 lg:w-8"
          />
          <p className="ml-2 inline align-middle text-lg text-light-text_2 dark:text-dark-text_2">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-light-text_3 dark:text-dark-text_3">
          <Svgs
            name="calendar"
            className="mr-1 inline h-7 w-7 text-light-primary dark:text-dark-primary"
          />
          <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
        </div>
      </div>
      <p className=" mx-6 text-center text-sm  font-normal leading-5 text-light-text_2 dark:text-dark-text_2  lg:px-0 ">
        {post.excerpt}
      </p>
      <div className=" mt-auto p-4  text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" inline-block transform cursor-pointer bg-light-primary px-8 py-3 text-lg font-semibold text-white transition duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-dark-primary">
            Read More
          </span>
        </Link>
      </div>
      <div className=" ml-3 flex h-6 text-sm text-light-text_2 dark:text-dark-text_2 ">
        <Svgs
          name="tag"
          className="h-5 fill-light-text_1 dark:fill-dark-text_1"
        />
        {post.categories.map((category, index) =>
          index < 2 ? (
            useRouter().asPath === `/categories/${category.slug}` ? (
              <p
                key={index}
                className="transaition text-light-primary dark:text-dark-primary "
              >
                {index === 0 ? '' : ', '}
                {category.name}
              </p>
            ) : (
              <Link key={index} href={`/categories/${category.slug}`}>
                <p className="transaition cursor-pointer duration-200 hover:text-light-primary dark:hover:text-dark-primary">
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
