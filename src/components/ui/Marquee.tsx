import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  speed?: number
  className?: string
}

export default function Marquee({ children, speed = 30, className }: Props) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}