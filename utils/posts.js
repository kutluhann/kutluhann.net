import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { categories } from './categories'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContents)

    const postCategory = categories.find(category => category.id == matterResult.data.category)

    return {
      id,
      ...matterResult.data,
      categoryName: postCategory.name,
      categoryColor: postCategory.color,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const filePath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(filePath)

  const { data, content } = matter(fileContents)

  const postCategory = categories.find(category => category.id == data.category)

  return {
    id,
    content,
    ...data,
    categoryName: postCategory.name,
    categoryColor: postCategory.color,
  }
}

export function getActiveCategories() {
  const allPostsData = getSortedPostData()

  return categories.reduce((groups, category) => {
    const relatedPosts = allPostsData.filter(post => post.category == category.id)
    const postCount = relatedPosts.length
    
    if (postCount) {
      groups.push({
        postCount,
        ...category
      })
    }

    return groups;
  }, [])
}

export function getActiveCategoryIds() {
  const activeCategories = getActiveCategories();
  
  return activeCategories.map(category => {
    return {
      params: {
        id: category.id
      }
    }
  })
}