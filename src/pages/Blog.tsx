import { Link } from 'react-router-dom'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import RevealText from '../components/ui/RevealText'
import { posts } from '../data/posts'
import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <PageTransition>
      <Seo title="Journal" description="Essays and notes from Studio Null." />
      <section className="container-x pt-32 md:pt-48">
        <p className="label mb-4">journal</p>
        <RevealText as="h1" className="font-display text-display text-paper">
          {'Notes &\nEssays'}
        </RevealText>

        <div className="mt-16 border-t border-line md:mt-24">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
            >
              <Link
                to={`/blog/${p.slug}`}
                className="group grid grid-cols-12 items-center gap-6 border-b border-line py-8 md:py-12"
              >
                <span className="col-span-2 label md:col-span-1">{p.index}</span>
                <div className="col-span-10 md:col-span-6">
                  <h2 className="font-display text-3xl uppercase tracking-tight text-paper transition-colors group-hover:text-paper/70 md:text-6xl">
                    {p.title}
                  </h2>
                  <p className="label mt-2">{p.category}</p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="text-sm text-paper/70">{p.excerpt}</p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <p className="label">{p.author}</p>
                  <p className="label text-mute">{p.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="h-24 md:h-40" />
    </PageTransition>
  )
}
