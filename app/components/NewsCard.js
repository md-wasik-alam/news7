import Link from 'next/link'
import React from 'react'

const NewsCard = ({value}) => {
  return (
    <div className="flex  flex-col gap-3">
    <div className="w-full bg-slate-200 border-black rounded-xl shadow-lg p-4 ">
      <h1 className='text-3xl font-black text-blue-600 '> {value.title}</h1>
      <p className="text-lg font-semibold text-slate-900"> {value.content}</p>
      <div className="flex justify-end">
        <Link href="" className='bg-blue-500 hover:bg-blue-900 text-white px-3 py-2 rounded'> 
        Read More</Link>
      </div>

    </div>
  </div>
  )
}

export default NewsCard
