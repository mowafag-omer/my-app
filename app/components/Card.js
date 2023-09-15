'use client'
import React from 'react'
import Image from "next/image";

const Card = ({article}) => {
  return (
    <div className='flex flex-col gap-4 m-4 p-3 border border-gray-200 rounded gap-1 shadow-md'>
      <h2 className='text-2xl'>{article.title}</h2>
      <div>
        <Image
          src={article.picture}
          alt={article.slug}
          width={400}
          height={200}
        />
      </div>
      <p>{article.content}</p>
    </div>
  )
}

export default Card