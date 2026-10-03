import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import RevealText from '../ui/RevealText'
import Marquee from '../ui/Marquee'

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="container-x py-24 md:py-40">
      <div className="mb-12 md:mb-20">
        <p className="label mb-4">services</p>
        <RevealText as="h2" className="text-display font-display text-paper">
          {'What\nWe Do'}
        </RevealText>
      </div>

      <div className="border-t border-line">
        {services.map((s) => {
          const isHover = hovered === s.number
          return (
            <div
              key={s.number}
              onMouseEnter={() => setHovered(s.number)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-b border-line"
            >
              <motion.div
                className="absolute inset-0 bg-paper"
                initial={false}
                animate={{ scaleY: isHover ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                style={{ originY: 1 }}
              />
              <div className="relative grid grid-cols-12 items-center gap-4 py-8 md:py-12">
                <span
                  className={`col-span-2 text-label md:col-span-1 ${
                    isHover ? 'text-ink' : 'text-mute'
                  }`}
                >
                  {s.number}
                </span>
                <h3
                  className={`col-span-10 font-display text-3xl uppercase leading-[0.9] tracking-tight transition-colors duration-300 md:col-span-5 md:text-6xl ${
                    isHover ? 'text-ink' : 'text-paper'
                  }`}
                >
                  {s.title}
                </h3>
                <span
                  className={`col-span-12 text-label transition-colors duration-300 md:col-span-2 ${
                    isHover ? 'text-ink/70' : 'text-mute'
                  }`}
                >
                  {s.category}
                </span>
                <div className="col-span-12 md:col-span-4">
                  {isHover ? (
                    <Marquee speed={12} className="text-ink">
                      <span className="whitespace-nowrap pr-8 text-sm">
                        {s.description}
                      </span>
                    </Marquee>
                  ) : (
                    <p className="text-sm text-paper/60">{s.description}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}