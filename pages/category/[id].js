import Layout from "@/components/layout"
import { getSortedPostData, getActiveCategories, getActiveCategoryIds } from "@/utils/posts"
import Head from "next/head"
import PostList from "@/components/post-list"
import { useState } from "react"

export default function CategoryPage({ activeCategories, postsFilteredByCategory, currentCategory }) {
  const [searchString, setSearchString] = useState('')

  return (
    <Layout 
      activeCategories={activeCategories}
      searchString={searchString}
      setSearchString={setSearchString}
      home
    >
      <Head>
        <title>{`${currentCategory.name} - kutluhann.net`}</title>
        <meta name="description" content={currentCategory.name} />
      </Head>
      <PostList 
        posts={postsFilteredByCategory} 
        searchString={searchString} 
      />
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getActiveCategoryIds()

  return {
    paths,
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const allPostsData = getSortedPostData()
  const activeCategories = getActiveCategories()

  const postsFilteredByCategory = allPostsData.filter(post => post.category == params.id)
  const currentCategory = activeCategories.filter(category => category.id == params.id)[0]

  return {
    props: {
      postsFilteredByCategory,
      activeCategories,
      currentCategory
    }
  }
}