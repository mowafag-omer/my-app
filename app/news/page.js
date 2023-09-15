'use client'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'

function page() {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    fetch('https://freefakeapi.io/api/posts?limit=30')
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      setArticles(data)
    })
  }, [])
  
  console.log('hello')
  return (
    <div>
      <Nav/>
        <h2 className='text-3xl m-3 my-5'>News</h2>
      <main>
        <div className="">
          {articles.map(article => 
            <Card key={article.id} article={article} />
          )}  
        </div>
      </main>
    </div>
  )
}

export default page