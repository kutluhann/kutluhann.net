import SearchArea from '@/components/search-area'
import CategoriesArea from '@/components/categories-area'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Layout({ children, activeCategories, searchString, setSearchString, home }) {
    return (
      <>  
        <Header />
        <div className="flex-grow">
          {home ? (
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
        </div>
        <Footer />
      </>
    )
}