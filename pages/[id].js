import { getAllPostIds, getPostData } from "@/utils/posts"
import Date from "@/components/date"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from "@/components/layout";

export default function PostPage({ postData }) {
  return (
    <Layout>
      <main className="mt-12">
        <section>
          <article className="mx-auto w-full flex flex-col">
            <header className="container flex-col flex w-full mb-4 text-center justify-center items-center">
              <div className="flex justify-center items-center">
                <span className="text-8 text-gray-600 flex justify-center items-center">
                  <span className="h-3 w-3 flex justify-center items-center">
                    <span style={{backgroundColor: postData.categoryColor}} className="w-2 h-2 rounded-sm"></span>
                  </span>
                  <span className="ml-2">{postData.categoryName}</span>
                </span>
                <span className="mx-2">&#8211;</span>
                <span className="text-8 text-gray-600 flex justify-center items-center">
                  <Date dateString={postData.date} />
                </span>
              </div>
              <h1 className="title text-2 touch:text-3 my-1 w-full break-word">{postData.title}</h1>
              <p className="text-7 text-gray-600">{postData.description}</p>
            </header>
            <ReactMarkdown 
              className="mx-auto w-full desktop:w-180 py-2 desktop:p-4 touch:px-4 content"
              components={{code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={nightOwl}
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }}}
            >
              {postData.content}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </Layout>
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