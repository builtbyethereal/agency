import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { clients } from '../../data/clients'
import Marquee from '../ui/Marquee'
import RevealText from '../ui/RevealText'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-40">
      <div className="container-x">
        <p className="label mb-10">voices</p>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="aspect-[3/4] overflow-hidden bg-neutral-900"
              >
                <img
                  src={t.avatar}
                  alt={`Portrait of ${t.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next()
                  if (info.offset.x > 60) prev()
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <p className="font-display text-3xl uppercase leading-[1.05] tracking-tight text-paper md:text-5xl">
                  “{t.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="label">{t.name}</span>
                  <span className="h-px w-8 bg-line" />
                  <span className="label text-mute">{t.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-paper hover:text-ink"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-paper hover:text-ink"
              >
                <ArrowRight size={16} />
              </button>
              <span className="label ml-4">
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 border-y border-line py-10">
        <Marquee speed={40}>
          {clients.map((c) => (
            <span
              key={c.name}
              className="whitespace-nowrap font-display text-3xl uppercase tracking-tight text-paper/40 transition-colors hover:text-paper md:text-5xl"
            >
              {c.logo}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x mt-16">
        <RevealText className="max-w-[20ch] font-display text-display text-paper">
          {'Trusted by\nthe studios\nwe admire.'}
        </RevealText>
      </div>
    </section>
  )
}