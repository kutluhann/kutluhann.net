import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'
import Post from '@/components/post'
import { getSortedPostData, getActiveCategories } from '@/utils/posts'

export default function Home({ allPostsData, activeCategories }) {
  return (
    <Layout activeCategories={activeCategories}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {allPostsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
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