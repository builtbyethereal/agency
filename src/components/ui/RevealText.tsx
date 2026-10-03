import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/cn'

interface Props {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
  delay?: number
}

export default function RevealText({ children, className, as = 'div', delay = 0 }: Props) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const lines = children.split('\n')

  const Tag = motion[as]

  return (
    <div ref={ref}>
      <Tag className={cn(className)}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%', opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1,
                delay: delay + i * 0.08,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  )
}