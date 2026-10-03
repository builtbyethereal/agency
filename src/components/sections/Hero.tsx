import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden pt-24 md:pt-28"
    >
      <div className="container-x grid grid-cols-2 gap-4 pb-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label max-w-[18ch] text-left"
        >
          independent creative practice
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="label max-w-[20ch] text-right md:ml-auto"
        >
          branding · identity · editorial direction
        </motion.p>
      </div>

      <motion.div style={{ y, opacity }} className="relative">
        <div className="container-x">
          <h1 className="select-none whitespace-nowrap text-center font-display text-[23vw] font-normal lowercase leading-[0.85] tracking-[-0.04em] text-paper">
            studio null
          </h1>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-center justify-center">
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="relative -mt-10 h-[70svh] w-[70vw] max-w-[520px] md:-mt-16 md:h-[80svh] md:w-[42vw]"
        >
          <div className="group h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596725668413-d91baf68d9ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Portrait of a studio founder in black and white"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <div className="container-x absolute inset-x-0 bottom-8 flex items-end justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="label max-w-[22ch]"
        >
          est. 2014 — brooklyn, new york
        </motion.p>
        {isDesktop && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="label"
          >
            scroll ↓
          </motion.p>
        )}
      </div>
    </section>
  )
}