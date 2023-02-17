import { getAllPostIds, getPostData } from "@/utils/posts"

export default function Post({ postData }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <div dangerouslySetInnerHTML={{__html: postData.htmlContent}} />
    </>
  )
}

export function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}