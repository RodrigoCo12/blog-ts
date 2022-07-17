import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components/index'
import { getPosts } from '../services'

import { title } from 'process'
const Home: NextPage = ({ posts }: any) => {
  // console.log(posts)
  return (
    <div className="container mx-auto mb-4 max-w-screen-xl text-white">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" mx-3 grid grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-10 ">
        <div className="order-2 col-span-1 grid grid-cols-1 lg:order-none lg:col-span-8 lg:grid-cols-2 lg:gap-8">
          <div className="col-span-1  mt-6  grid auto-rows-auto lg:mt-8">
            {posts.map((post: any, index: number) =>
              index % 2 === 0 ? (
                <div key={post.node.title} className=" object-cover">
                  <PostCard post={post.node} key={post.node.title} />
                </div>
              ) : (
                ''
              )
            )}
          </div>
          <div className="col-span-1  grid  auto-rows-auto lg:mt-8 ">
            {posts.map((post: any, index: number) =>
              index % 2 !== 0 ? (
                <div key={post.node.title} className=" object-cover">
                  <PostCard post={post.node} key={post.node.title} />
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
        <div className="order-1 col-span-1 lg:order-none lg:col-span-4 lg:ml-4 ">
          <div className="relative top-0 lg:sticky ">
            {/* in the future, I will change for typescript */}
            <PostWidget categories={undefined} slug={undefined} />
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
  return {
    props: { posts },
  }
}
