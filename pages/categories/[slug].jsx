import React, { useState } from 'react'
import { useEffect } from 'react'

//////////////////////////////////////////////////////////
import { Categories, PostCard, PostWidget } from '../../components/index'
import LogoButton from '../../components/LogoButton'
import { getCategories, getCategory, getRecentPosts } from '../../services'

const PostDetails = ({ category, recentPosts }) => {
  const [logo, setLogo] = useState(0)

  useEffect(() => {
    setLogo(1)
  }, [])

  return (
    <div className="  container mx-auto max-w-screen-xl">
      <div className=" grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 col-span-1 grid grid-cols-1 lg:order-none lg:col-span-8 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          {category.posts?.map((post, index) =>
            category.posts.length > 1 ? (
              category.posts.length === 2 && index === 1 ? (
                <>
                  <div key={post.title} className=" mt-5 h-auto lg:mt-0 ">
                    <PostCard post={post} />
                  </div>
                  <div key={'re'} className=" h-40 "></div>
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
                <div key={'v1'} className=" mt-5 h-auto lg:mt-0 "></div>
                <div key={'v2'} className=" h-40"></div>
              </>
            )
          )}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-0 hidden lg:sticky lg:block ">
            {/* in the future, I will change for typescript */}
            <PostWidget post={recentPosts} slug={false} />
            <Categories />

            {logo === 1 ? (
              <div className="hidden h-20 justify-center lg:flex">
                <LogoButton />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getCategory(params.slug)
  const recentPosts = await getRecentPosts()
  return {
    props: {
      category: data,
      recentPosts: recentPosts,
    },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
