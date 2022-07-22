import React, { useState } from 'react'

import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '../../components/index'
import {
  getPostDetails,
  getSimilarPosts,
  getRecentPosts,
  getPosts,
} from '../../services'

const PostDetails = ({ post, relatedPost }) => {
  // console.log(relatedPost)
  return (
    <div className=" container mx-auto mb-4 max-w-screen-xl">
      <div className=" grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 mt-8 lg:col-span-8">
          <PostDetail post={post} />
          {/* <Author author={post.author} /> */}
          {/* <CommentsForm slug={post.slug} /> */}
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className=" relative  top-0 lg:sticky ">
            <PostWidget post={relatedPost} slug={post.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  const categories = data.categories.map((category) => category.slug)
  let relatedPost = []
  if (data.slug) {
    relatedPost = await getSimilarPosts(categories, data.slug)
  } else {
    relatedPost = await getSimilarPosts()
  }

  return {
    props: {
      post: data,
      relatedPost: relatedPost,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}
