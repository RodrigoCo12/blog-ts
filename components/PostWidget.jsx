import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPost(result))
    } else {
      getRecentPosts().then((result) => setRelatedPost(result))
    }
  }, [slug])

  // console.log(relatedPost);
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 text-gray-700  shadow-lg lg:p-8">
      <h3 className=" border-b pb-1 text-center text-xl font-semibold lg:pb-4 lg:text-left ">
        {slug ? 'Releated Post' : 'Recent Post'}
      </h3>
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
            <p className="font-xs text-gray-500">
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
  )
}

export default PostWidget
