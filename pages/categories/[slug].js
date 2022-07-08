import React from 'react'

//////////////////////////////////////////////////////////
import { Categories, PostCard, PostWidget } from '../../components/index'
import { getCategories, getCategory } from '../../services'

const PostDetails = ({ category }) => {
  // console.log(category)

  return (
    <div className=" container mx-auto mb-4">
      <div className="mx-3 grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          <h3 className=" mb-6 rounded-lg bg-white pb-2 pt-2 text-center text-lg font-semibold shadow-lg  ">
            {category.name}
          </h3>
          <div>
            {category.posts.map((e) => (
              <PostCard post={e} key={e.title} />
            ))}
          </div>
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

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getCategory(params.slug)
  // console.log(data)
  return {
    props: {
      category: data,
    },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  // console.log(categories)
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
