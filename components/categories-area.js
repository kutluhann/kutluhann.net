import Link from "next/link"
import { useRouter } from 'next/router'

export default function CategoriesAres({ categories }) {
  const { pathname, query } = useRouter()

  const isRoot = pathname == '/'

  function getTotalPostCount() {
    return categories.reduce((sum, category) => {
      return sum + category.postCount
    }, 0)
  }

  return (
    <div className="rounded-10 shadow flex justify-center p-5 flex-col w-full">
      <h3 className="title mb-4 flex items-center">
        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        <span className="ml-2">Kategoriler</span>
      </h3>
      <ul className="flex flex-col items-start justify-center touch:flex-row touch:flex-wrap touch:justify-start">
        <li>
          <Link 
            href="/"
            className="group h-8 cursor-pointer py-2 mx-2 text-8 flex justify-center items-center"
           >  
            <span 
              className="h-3 w-3 flex justify-center items-center"
            >
              <span
                className={'bg-secondary rounded-sm group-hover:h-3 group-hover:w-3 transition-size' 
                  + (isRoot ? ' w-3 h-3 ' : ' w-2 h-2 ')}
              ></span>
              </span>
            <span className="ml-2 text-gray-600">Tüm yazılar / {getTotalPostCount()}</span>
          </Link>
        </li>
        {categories.length && categories.map(category => (
          <li key={category.id}>
            <Link
              href={`/category/${category.id}`}
              className="group h-8 cursor-pointer py-2 mx-2 text-8 flex justify-center items-center"
            >
              <span className="h-3 w-3 flex justify-center items-center">
                <span 
                  style={{backgroundColor: category.color}}
                  className={'rounded-sm group-hover:h-3 group-hover:w-3 transition-size' 
                    + (query.id == category.id ? ' w-3 h-3 ' : ' w-2 h-2 ')}
                ></span>
              </span>
              <span className="ml-2 text-gray-600">{category.name} / {category.postCount}</span>
            </Link>
          </li>
        ))}
      </ul >
    </div >
  )
}