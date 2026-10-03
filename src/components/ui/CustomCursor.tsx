import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function CustomCursor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 })
  const [hoveringLink, setHoveringLink] = useState(false)

  useEffect(() => {
    if (!isDesktop) return
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      setHoveringLink(!!t.closest('a, button, [data-cursor-hover]'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isDesktop, x, y])

  if (!isDesktop) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full bg-paper"
        animate={{
          width: hoveringLink ? 60 : 10,
          height: hoveringLink ? 60 : 10,
          x: hoveringLink ? -30 : -5,
          y: hoveringLink ? -30 : -5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </motion.div>
  )
}