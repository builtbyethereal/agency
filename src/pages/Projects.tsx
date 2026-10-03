import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import ProjectCard from '../components/ui/ProjectCard'
import RevealText from '../components/ui/RevealText'
import { projects } from '../data/projects'
import { cn } from '../lib/cn'

const filters = ['All', 'Branding', 'Editorial', 'Direction'] as const
type Filter = (typeof filters)[number]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <PageTransition>
      <Seo
        title="Projects"
        description="Selected work in branding, editorial and direction by Studio Null."
      />
      <section className="container-x pt-32 md:pt-48">
        <p className="label mb-4">archive</p>
        <RevealText as="h1" className="font-display text-display text-paper">
          {'All\nProjects'}
        </RevealText>

        <div className="mt-12 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-5 py-2 text-label uppercase tracking-[0.2em] transition-colors duration-300',
                filter === f
                  ? 'border-paper bg-paper text-ink'
                  : 'border-line text-paper/70 hover:text-paper'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-20"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className={cn(i % 2 === 1 && 'md:mt-24')}
              >
                <ProjectCard project={p} index={i} tall={i % 3 === 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <div className="h-24 md:h-40" />
    </PageTransition>
  )
}