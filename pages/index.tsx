import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components/index'
import { getPosts } from '../services'

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto mb-4  text-white">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-3 grid grid-cols-1 gap-1 lg:grid-cols-12 lg:gap-12 ">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: any) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="mx-6 mb-8 border-t border-white lg:mb-0 lg:border-0 "></div>
          <div className="relative top-0 lg:sticky lg:top-8">
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
