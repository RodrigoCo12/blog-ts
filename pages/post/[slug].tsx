import Head from 'next/head'
import React from 'react'
import {
  TPostDetailsPage,
  TIndexPagePosts,
  TRecentOrRelatedPosts,
  TCategoriesPage,
} from '../../types'
import {
  Categories,
  Comments,
  PostDetail,
  PostWidget,
  LogoButton,
} from '../../components/index'
import {
  getCategories,
  getPostDetails,
  getPosts,
  getSimilarPosts,
} from '../../services'

const PostDetails = ({
  post,
  relatedPost,
  allCategories,
}: {
  post: TPostDetailsPage
  relatedPost: TRecentOrRelatedPosts[]
  allCategories: TCategoriesPage[]
}) => {
  return (
    <div className=" container mx-auto mb-4 max-w-screen-xl">
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <div className=" grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 mt-8 lg:col-span-8">
          <PostDetail post={post} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className=" relative  top-0 lg:sticky ">
            <PostWidget post={relatedPost} slug={post.slug} />
            <Categories categories={allCategories} />
            <div className="hidden h-20 justify-center lg:flex">
              <LogoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPostDetails(params.slug)
  const categories = data.categories.map((category: any) => category.slug)
  const allCategories = await getCategories()
  let relatedPost = []
  if (data.slug) {
    relatedPost = await getSimilarPosts(categories, data.slug)
  } else {
    relatedPost = await getSimilarPosts()
  }
  return {
    props: {
      post: data,
      relatedPost,
      allCategories,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(
      ({ node: { slug } }: { node: TIndexPagePosts['node']['post'] }) => ({
        params: { slug },
      })
    ),
    fallback: false,
  }
}
