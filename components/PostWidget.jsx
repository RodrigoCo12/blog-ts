import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Svgs from './Svgs'
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
      <div className="  w-full shadow-lg  shadow-teal-800">
        <div className=" rounded-b-lg  bg-primary p-4 text-white  shadow-lg lg:p-5 lg:px-8">
          <h3 className=" text-center text-xl font-semibold lg:text-left ">
            {slug ? 'Releated Post' : 'Recent Post'}
          </h3>
        </div>
        <div className=" rounded-b-lg bg-white p-4 py-2  text-gray-700 shadow-lg lg:px-8">
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
      </div>
    </>
  )
}

export default PostWidget
