import React from 'react'
import Head from 'next/head'
import { TCategoryPage, TRecentOrRelatedPosts } from '../../types'
import {
  Categories,
  PostCard,
  PostWidget,
  LogoButton,
} from '../../components/index'
import { getCategories, getCategory, getRecentPosts } from '../../services'

const PostDetails = ({
  category,
  recentPosts,
  categories,
}: {
  category: TCategoryPage
  recentPosts: TRecentOrRelatedPosts[]
  categories: TCategoryPage[]
}) => {
  return (
    <div className="  container mx-auto max-w-screen-xl">
      <Head>
        <title>{category.name}</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <div className=" grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 col-span-1 grid grid-cols-1 lg:order-none lg:col-span-8 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          {category.posts?.map(
            (post: TCategoryPage['posts'][0], index: number) =>
              category.posts.length > 1 ? (
                category.posts.length === Number('2') && index === 1 ? (
                  <>
                    <div key={post.title} className=" mt-5 h-auto lg:mt-0 ">
                      <PostCard post={post} />
                    </div>
                    <div key={'re'} className="hidden  h-40 lg:block "></div>
                  </>
                ) : (
                  <div key={post.title} className=" mt-5 h-auto lg:mt-0 ">
                    <PostCard post={post} />
                  </div>
                )
              ) : (
                <>
                  <div key={post.title} className=" mt-5 h-auto lg:mt-0 ">
                    <PostCard post={post} />
                  </div>
                  <div
                    key={'v1'}
                    className="mt-5 hidden h-auto lg:mt-0 lg:block "
                  ></div>
                  <div key={'v2'} className=" hiddenh h-40 lg:block"></div>
                </>
              )
          )}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-0 hidden lg:sticky lg:block ">
            <PostWidget post={recentPosts} slug={''} />
            <Categories categories={categories} />

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

export async function getStaticProps({ params }: { params: any }) {
  const data = await getCategory(params.slug)
  const recentPosts = await getRecentPosts()
  const categories = await getCategories()
  return {
    props: {
      category: data,
      recentPosts,
      categories,
    },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}
