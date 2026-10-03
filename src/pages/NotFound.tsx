import { Link } from 'react-router-dom'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="404 — Not Found" />
      <section className="container-x flex min-h-[80svh] flex-col items-center justify-center text-center">
        <p className="label mb-6">error 404</p>
        <h1 className="font-display text-[22vw] leading-none tracking-tighter text-paper">
          404
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
          The page you are looking for does not exist, or has been quietly
          archived.
        </p>
        <Link to="/" className="pill mt-10">
          back home →
        </Link>
      </section>
    </PageTransition>
  )
}