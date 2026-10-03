import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Project } from '../../lib/types'
import { cn } from '../../lib/cn'

interface Props {
  project: Project
  tall?: boolean
  index: number
}

export default function ProjectCard({ project, tall, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 30 })
  const sy = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } },
      }}
      className={cn(index % 2 === 1 && 'md:mt-24')}
    >
      <Link
        to={`/projects/${project.slug}`}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="group relative block"
      >
        <div
          className={cn(
            'relative overflow-hidden bg-neutral-900',
            tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
          )}
        >
          <motion.img
            src={project.cover}
            alt={`${project.title} — ${project.category} project cover`}
            loading="lazy"
            className="h-full w-full object-cover"
            animate={{ scale: hovering ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />

          <motion.div
            style={{ x: sx, y: sy }}
            animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper px-5 py-2 text-label uppercase tracking-[0.2em] text-ink mix-blend-difference"
          >
            view
          </motion.div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-6">
          <div className="overflow-hidden">
            <motion.h3
              className="font-display text-2xl uppercase tracking-tight text-paper md:text-3xl"
              animate={{ y: hovering ? -4 : 0 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            >
              {project.title}
            </motion.h3>
            <p className="label mt-1">{project.category}</p>
          </div>
          <span className="label shrink-0">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  )
}