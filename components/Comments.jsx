
import parse from 'html-react-parser'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getComments } from '../services'
import CommentsForm from './CommentsForm'

const Comments = ({ slug }) => {
  const [comment, setComment] = useState([])
  const router = useRouter()

  useEffect(() => {
    getComments(slug).then((result) => setComment(result))
  }, [router.asPath])

  return (
    <div className="shadow-lg shadow-light-shadow_color dark:shadow-dark-shadow_color">
      <CommentsForm slug={slug} />
      {comment.length > 0 && (
        <div className=" relative -mt-7 bg-light-light_color  p-4  pb-12 dark:bg-dark-light_color lg:p-8 ">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comment.length} Comments
          </h3>
          {comment.map((comment) => (
            <div
              key={comment.createdAt}
              className="mb-4 border-b border-gray-100 pb-4"
            >
              <p>
                <span className="font-semibold"> {comment.name}</span> on{' '}
                {moment(comment.createdAt).format('DD MMM, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-light-text_2 dark:text-dark-text_2">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments

