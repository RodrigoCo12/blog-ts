import React from 'react'

//////////////////////////////////////////////////////////
import { Categories, PostCard, PostWidget } from '../../components/index'
import { getCategories, getCategory } from '../../services'
import Svgs from '../../components/Svgs'
const PostDetails = ({ category }) => {
  // console.log(category)

  return (
    <div className="  container mx-auto mb-4 max-w-screen-xl">
      <div className=" mx-3 grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="top-24 col-span-1 -mb-8 grid h-8 w-full grid-cols-2 px-4 lg:col-span-2">
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
          <h3 className=" z-0 col-span-1 my-8 bg-primary py-4 text-center text-xl font-semibold text-white shadow-lg shadow-teal-900 lg:col-span-2 lg:my-0 ">
            {category.name}
          </h3>
          <div className="col-span-1 grid auto-rows-auto">
            {category.posts.map((post, index) =>
              index % 2 === 0 ? (
                <div className="object-cover" key={post.title}>
                  <PostCard post={post} />
                </div>
              ) : (
                ''
              )
            )}
          </div>
          <div className="col-span-1 grid auto-rows-auto">
            {category.posts.map((post, index) =>
              index % 2 !== 0 ? (
                <div className="object-cover" key={post.title}>
                  <PostCard post={post} />
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-0 hidden lg:sticky lg:block ">
            {/* in the future, I will change for typescript */}
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getCategory(params.slug)
  return {
    props: {
      category: data,
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
