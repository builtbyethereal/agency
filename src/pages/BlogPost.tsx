import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import RevealText from '../components/ui/RevealText'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/404" replace />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <PageTransition>
      <Seo title={post.title} description={post.excerpt} image={post.cover} />
      <article className="container-x pt-32 md:pt-48">
        <p className="label mb-4">
          {post.index} · {post.category}
        </p>
        <RevealText as="h1" className="font-display text-display text-paper">
          {post.title}
        </RevealText>
        <p className="label mt-6">
          {post.author} · {post.date}
        </p>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-neutral-900 md:mt-16">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-2xl md:mt-24">
          <p className="text-xl leading-relaxed text-paper md:text-2xl ">
            {post.excerpt}
          </p>
          {post.body.map((para, i) => (
            <p key={i} className="mt-6 text-base leading-relaxed text-paper/80 font-base">
              {para}
            </p>
          ))}

          <blockquote className="my-16 border-l-2 border-paper pl-6">
            <p className="font-display text-2xl uppercase leading-[1.1] tracking-tight text-paper md:text-4xl">
              “{post.pullQuote}”
            </p>
          </blockquote>
        </div>

        <div className="mt-24 border-t border-line pt-12 md:mt-40">
          <p className="label mb-8">related posts</p>
          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-paper md:text-3xl">
                  {p.title}
                </h3>
                <p className="label mt-2 ">
                  {p.author} · {p.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-24 md:h-40" />
      </article>
    </PageTransition>
  )
}