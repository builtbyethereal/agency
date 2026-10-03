import { Link } from 'react-router-dom'
import { posts } from '../../data/posts'
import RevealText from '../ui/RevealText'
import { motion } from 'framer-motion'

export default function Journal() {
  return (
    <section className="container-x py-24 md:py-40">
      <div className="mb-12 flex items-end justify-between gap-6 md:mb-20">
        <div>
          <p className="label mb-4">journal</p>
          <RevealText as="h2" className="text-display font-display text-paper">
            {'Notes &\nEssays'}
          </RevealText>
        </div>
        <Link to="/blog" className="pill hidden md:inline-flex">
          all posts →
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
          >
            <Link to={`/blog/${p.slug}`} className="group block">
              <div className="mb-4 flex items-center justify-between">
                <span className="label">{p.index}</span>
                <span className="label text-mute">{p.category}</span>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
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
              <p className="label mt-2">
                {p.author} · {p.date}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <Link to="/blog" className="pill">
          all posts →
        </Link>
      </div>
    </section>
  )
}