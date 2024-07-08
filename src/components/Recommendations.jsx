import { articles } from '@/lib/articles'
import Link from 'next/link'
import React from 'react'
const uniqueArticles = Array.from(new Set(articles.map(item => item.tag)))
  .map(tag => {
    return articles.find(item => item.tag === tag);
  });
const Recommendations = () => {
  return (
    <>
      <h4 className="mb-3">Recommended topics</h4>
      <ul className='flex flex-wrap'>
        {uniqueArticles.map(item => (
          <li key={item.id} className='mr-2 mb-3'>
            <Link href="/" className='border bg-gray-200 rounded-full px-3 py-1 text-sm hover:bg-gray-400 hover:text-white transition-transform'>
              {item.tag}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Recommendations
