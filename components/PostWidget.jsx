
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getRecentPosts, getSimilarPosts } from '../services'
import Svgs from './Svgs'

const PostWidget = ({ post, slug }) => {
  const relatedPost = post
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
      <div className="relative mb-5 w-full shadow-lg shadow-light-shadow_color dark:shadow-dark-shadow_color   lg:mb-0">
        <div className="   bg-light-primary p-4 text-white shadow-lg  dark:bg-dark-primary lg:px-8">
          <h3 className=" text-center text-xl font-semibold lg:text-left ">
            {slug ? 'Releated Post' : 'Recent Post'}
          </h3>
        </div>
        <div className="  bg-light-light_color p-4 py-1 text-light-text_2 shadow-lg dark:bg-dark-light_color dark:text-dark-text_2 lg:px-8">
          {relatedPost.map((post) => (
            <div
              key={post.title}
              className="mb-2 mt-3 flex w-full items-center lg:mt-5 lg:mb-4"
            >
              <div className="w-12 flex-none lg:w-16">
                <img
                  alt={post.title}
                  className=" h-12 w-12 rounded-full object-cover align-middle lg:h-16 lg:w-16"
                  src={post.featuredImage.url}
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="font-xs text-light-text_3 dark:text-dark-text_3">
                  {moment(post.createdAt).format('DD MMM, YYYY')}
                </p>
                <Link
                  href={`/post/${post.slug}`}
                  className="text-md "
                  key={post.title}
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PostWidget
