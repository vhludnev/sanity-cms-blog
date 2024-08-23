import Link from 'next/link'
import React from 'react'
import { Post } from '../utils/interface'
import { dateFont, lilitaOne } from '../utils/fonts'

interface Props {
  post: Post
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${lilitaOne.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p
          className={`${dateFont.className} my-2 text-purple-800 dark:text-purple-500 group-hover:text-white group-hover:dark:text-purple-500`}
        >
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
      </Link>

      {/* TAGS */}

      <div>
        {post?.tags?.map(tag => (
          <span
            key={tag?._id}
            className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'
          >
            #{tag?.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PostComponent

const cardStyle = `
  group
  mb-8
  p-4
  border
  border-gray-900
  rounded-md
  shadow-sm
  shadow-purple-950
  hover:shadow-md
  hover:bg-purple-500
  hover:text-white
  hover:dark:bg-gray-800
`
