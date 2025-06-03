
import RecentBlog from '../components/RecentBlog'
import Hero from '../components/Hero'
import React from 'react'


const Home = () => {
  return (
    <div className='pt-20'>
      <Hero/>
      <RecentBlog/>
    </div>
  )
}

export default Home