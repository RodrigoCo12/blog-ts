import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components/index'

import { getPosts, getRecentPosts } from '../services'

const Home: NextPage = ({ posts, recentPosts }: any) => {
  // console.log(posts)
  return (
    <div className="container mx-auto mb-4 max-w-screen-xl text-white">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" grid grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-12 ">
        <div className="order-2 col-span-1 grid grid-cols-1 lg:order-none lg:col-span-8 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          {posts.map((post: any, index: number) => (
            <div key={post.node.title} className=" mt-5 lg:mt-0 ">
              <PostCard post={post.node} key={post.node.title} />
            </div>
          ))}
        </div>
        <div className="order-1 col-span-1 lg:order-none lg:col-span-4 ">
          <div className="relative top-0 lg:sticky ">
            {/* in the future, I will change for typescript */}
            <PostWidget post={recentPosts} slug={false} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
//
export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  const recentPosts = await getRecentPosts()
  return {
    props: {
      posts,
      recentPosts: recentPosts,
    },
  }
}
