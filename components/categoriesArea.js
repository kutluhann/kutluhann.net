import Link from "next/link"

export default function categoriesAres({ categories }) {
  return (
    <div className="rounded-10 shadow flex justify-center p-5 flex-col w-full">
      <h3 className="title mb-4 flex items-center">
        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <span className="h-3 w-3 flex justify-center items-center">
              <span 
                className="bg-secondary w-2 h-2 rounded-sm group-hover:h-3 group-hover:w-3 transition-size"
              ></span>
              </span>
            <span className="ml-2 text-gray-600">Tüm yazılar / 2</span>
          </Link>
        </li>
        {categories.length && categories.map(category => (
          <li key={category.id}>
            <Link
              href="/"
              className="group h-8 cursor-pointer py-2 mx-2 text-8 flex justify-center items-center"
            >
              <span className="h-3 w-3 flex justify-center items-center">
                <span 
                  style={{backgroundColor: category.color}}
                  className="w-2 h-2 rounded-sm group-hover:h-3 group-hover:w-3 transition-size"
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