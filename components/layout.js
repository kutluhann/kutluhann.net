import SearchArea from '@/components/search-area'
import CategoriesArea from '@/components/categories-area'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children, activeCategories, searchString, setSearchString, postPage }) {
    return (
      <>  
        <header className="wiggle bg-primary text-white">
          <div className="container py-20 px-6 text-center relative flex justify-center flex-col items-center">
            <Link href="/">
              <h1 className="title text-3">Hasan Kutluhan Şıpka</h1>
              <p className="text-6">CS Student at Bilkent University</p>
            </Link>
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
              <div className="flex justify-center items-center flex-row h-12 bg-white text-gray-500 p-2 rounded-10 shadow relative top-6">
                <a href="https://twitter.com/kutluhan22" target="_blank" aria-label="twitter" className="cursor-pointer mx-2 hover:text-twitter hover:rotate transition-rotate" rel="noreferrer">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/1dolarkactl/" target="_blank" aria-label="instagram" className="cursor-pointer mx-2 hover:text-instagram hover:rotate transition-rotate" rel="noreferrer">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://github.com/kutluhann" target="_blank" aria-label="github" className="cursor-pointer mx-2 hover:text-github hover:rotate transition-rotate" rel="noreferrer">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
        {!postPage ? (
          <main className="pt-12 px-4">
            <section>
              <div className="container">
                <h2 className="title text-2 mb-6 text-center">Blog</h2>
              </div>
            </section>
            <section className="mt-8 touch:mt-6">
              <div className="container flex">
                <div className="flex touch:flex-col-reverse w-full desktop:w-10/12 widescreen:w-9/12 mx-auto">
                  <div className="w-2/3 touch:w-full desktop:mx-3 touch:my-2 h-auto relative">
                    {children}
                  </div>
                  <aside className="w-1/3 touch:w-full desktop:mx-3 touch:mb-2 h-auto">
                    <div className="sticky top-6 w-full flex flex-col justify-satart items-center touch:flex-col-reverse">
                      <SearchArea 
                        categories={activeCategories} 
                        searchString={searchString}
                        setSearchString={setSearchString}
                      />
                      <CategoriesArea categories={activeCategories} />
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </main>
        ) : (
          <>
            {children}
          </>
        )}
      </>
    )
}