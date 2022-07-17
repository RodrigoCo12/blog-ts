import moment from 'moment'
import React from 'react'
import Svgs from './Svgs'
import Link from 'next/link'
const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text
    // console.log(obj)
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8 text-justify lg:text-left">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className=" mb-4 text-base font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <>
      <div className="my-8  rounded-lg bg-white pb-12 text-sm shadow-lg  shadow-teal-800 lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mr-8 flex items-center justify-center md:flex lg:mb-0 lg:w-auto">
              <img
                alt={post.author.name}
                className="h-7 w-7 rounded-full align-middle"
                src={post.author.photo.url}
              />
              <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <Svgs
                name="calendar"
                className="mr-2 inline h-7 w-7 text-primary"
              />
              <span className="align-middle">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            )

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
          <div className=" text-md flex h-6 text-gray-700">
            <Svgs name="tag" className="h-5" />

            {post.categories.map((category, index) =>
              index < 4 ? (
                <Link key={index} href={`/categories/${category.slug}`}>
                  <p className="transaition cursor-pointer duration-500 hover:text-primary">
                    {index === 0 ? '' : ', '}
                    {category.name}
                  </p>
                </Link>
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
