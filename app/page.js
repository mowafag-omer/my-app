'user client'
import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Image from 'next/image'

export default function Home() {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    fetch('https://freefakeapi.io/api/posts?limit=5')
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      setArticles(data)
    })
  }, [])

  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        {articles.map(article => 
          <Card key={article.id} article={article} />
        )}  
      </div>
      </main>
    </>
     
  )
}
