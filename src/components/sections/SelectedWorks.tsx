import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import RevealText from '../ui/RevealText'
import ProjectCard from '../ui/ProjectCard'

export default function SelectedWorks() {
  const featured = projects.slice(0, 8)

  return (
    <section className="container-x py-24 md:py-40">
      <div className="mb-12 md:mb-20">
        <p className="label mb-4">selected works</p>
        <RevealText
          as="h2"
          className="text-display font-display text-paper"
        >
          {'Recent\nProjects'}
        </RevealText>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-20"
      >
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} tall={i % 3 === 0} index={i} />
        ))}
      </motion.div>

      <div className="mt-20 flex justify-center">
        <Link to="/projects" className="pill">
          view all projects →
        </Link>
      </div>
    </section>
  )
}