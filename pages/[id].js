import { getAllPostIds, getPostData } from "@/utils/posts"

export default function PostPage({ postData }) {
  return (
    <main className="pt-12">
      <section>
        <article className="mx-auto w-full flex flex-col">
          <header className="flex flex-row touch:flex-col w-full mx-auto mb-4">
            <div className="w-1/2 touch:w-full mx-auto flex justify-center items-center touch:px-6">
              <div className="w-120 touch:w-full flex flex-col justify-center items-start">
                <div className="flex justify-start items-center w-full">
                  <span className="text-8 text-gray-600 flex justify-center items-center">
                    <span className="h-3 w-3 flex justify-center items-center">
                      <span style={{backgroundColor: postData.categoryColor}} className="w-2 h-2 rounded-sm"></span>
                    </span>
                    <span className="ml-2">{postData.category}</span>
                  </span>
                  <span className="mx-2">&#8211;</span>
                  <span className="text-8 text-gray-600 flex justify-center items-center">
                    <span>{postData.date}</span>
                  </span>
                </div>
                <h1 className="title text-3 my-1 w-full break-word">{postData.title}</h1>
                <p className="text-7 text-gray-600">{postData.description}</p>
              </div>
            </div>
          </header>
          <div dangerouslySetInnerHTML={{__html: postData.htmlContent}} />
        </article>
      </section>
    </main>
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