import Post from "./post"
import { slug } from "@/utils/helper"

export default function PostList({ posts, searchString }) {
  function filterPosts() {
    return posts.filter(post => slug(post.title).includes(slug(searchString)))
  }

  return (
    <>
      {filterPosts().map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
      {!(filterPosts().length )&& (
        <p class="title">Opps.. Maalesef Arama Sonucu Bulunamadı!</p>
      )}
    </>
  )
}