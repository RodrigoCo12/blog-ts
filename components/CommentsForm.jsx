import React, { useEffect, useRef, useState } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  //useState

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccesMessage] = useState(false)

  //useRef

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  //useEffect

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  //handle

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccesMessage(true)
      setTimeout(() => {
        setShowSuccesMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="lg:text-md  rounded-lg bg-white p-4 pb-12 text-sm shadow-lg lg:p-8">
      <h3 className="mb-4 border-b pb-4 text-xl font-bold lg:mb-8">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="textr-gray-500 ml-2 cursor-pointer">
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-4 lg:mt-8">
        <button
          type="button"
          className="ease inline-block cursor-pointer rounded-full bg-primary  px-8 py-3 text-lg text-white transition duration-500 hover:-translate-y-1"
          onClick={handleCommentSubmission}
        >
          Post Comments
        </button>
        {showSuccessMessage && (
          <span className="tx-xl fount-semibold text-greem-500 float-right mt-3">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
