import parse from 'html-react-parser'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comment, setComment] = useState([])
  const router = useRouter()

  useEffect(() => {
    getComments(slug).then((result) => setComment(result))
  }, [router.asPath])

  return (
    <>
      {comment.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-4 pb-12 shadow-lg lg:p-8 ">
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
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
