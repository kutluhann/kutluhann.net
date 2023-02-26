export default function Footer() {
  return (
    <footer>
      <div className="container text-8 py-8 px-12 text-center">
        &copy; {new Date().getFullYear()} &#8211; {`Made with `}
        <span className="inline-block">
          <a className="text-link underline" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>
            {` + `}
          <a className="text-link underline" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next</a>
        </span>
      </div>
    </footer>
  )
}