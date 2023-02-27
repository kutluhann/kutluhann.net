import Head from 'next/head'
import Layout from '@/components/layout'
import { getSortedPostData, getActiveCategories } from '@/utils/posts'
import { useState } from 'react'
import PostList from '@/components/post-list'

export default function Home({ allPostsData, activeCategories }) {
  const [searchString, setSearchString] = useState('')

  return (
    <Layout 
      activeCategories={activeCategories}
      searchString={searchString}
      setSearchString={setSearchString}
      home
    >
      <PostList 
        posts={allPostsData} 
        searchString={searchString} 
      />
    </Layout>
  )
}

export function getStaticProps() {
  const allPostsData = getSortedPostData()
  const activeCategories = getActiveCategories()
  
  return {
    props: {
      allPostsData,
      activeCategories
    }
  }
}