import Link from "next/link"
import Layout from "@/components/layout"

export default function Page404() {
  return (
    <Layout>
      <main className="pt-12 px-6">
        <section>
          <div className="container flex flex-col items-center">
            <h1 className="title text-1 mb-2 text-center">404</h1>
            <h2 className="title text-3 mb-4 text-center">Sayfa Bulunamadı!</h2>
            <Link 
              href="/"
              className="text-link hover:text-secondary text-8 flex justify-center items-center cursor-pointer transition-text"
            >
              <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="ml-1">Anasayfaya Dön</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}