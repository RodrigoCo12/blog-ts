import React from 'react'

import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '../../components/index'
import { getPostDetails, getPosts } from '../../services'

const PostDetails = ({ post }) => {
  return (
    <div className=" container mx-auto mb-4 max-w-screen-xl">
      <div className="mx-3 grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          {/* <Author author={post.author} /> */}
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className=" relative  top-0 lg:sticky ">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
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

  return {
    props: {
      post: data,
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
