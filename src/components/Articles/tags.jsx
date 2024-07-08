"use client";

import { articles } from '@/lib/articles'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

// remove duplicates based on tags
const uniqueArticles = Array.from(new Set(articles.map(item => item.tag)))
  .map(tag => {
    return articles.find(item => item.tag === tag);
  });

export default function Tags() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button onClick={scrollLeft} className="absolute left-0 top-0 bottom-0 z-10 bg-white">
        <FaArrowLeft />
      </button>
      <ul ref={scrollContainerRef} className='flex overflow-x-auto'>
        {uniqueArticles.map(item => (
          <li key={item.id} className='mr-2 mb-3'>
            <Link href="/" className='px-3 text-sm whitespace-nowrap'>
              {item.tag}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={scrollRight} className="absolute right-0 top-0 bottom-0 z-10 bg-white">
        <FaArrowRight />
      </button>
    </div>
  )
}
