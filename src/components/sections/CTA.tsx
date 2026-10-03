import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Magnetic from '../ui/Magnetic'
import RevealText from '../ui/RevealText'

export default function CTA() {
  return (
    <section className="container-x py-24 md:py-40">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div className="relative h-[70svh] max-h-[720px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-0 top-0 h-[70%] w-[60%] overflow-hidden bg-neutral-900"
          >
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1000&q=80"
              alt="Founder portrait, black and white"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-0 right-0 h-[70%] w-[60%] overflow-hidden bg-neutral-900"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&q=80"
              alt="Creative director portrait, black and white"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-4 left-0 md:bottom-8">
            <p className="label">Iris Vandel & Marcus Yeung</p>
            <p className="label text-mute">Founders, Studio Null</p>
          </div>
        </div>

        <div>
          <p className="label mb-4">collaborate</p>
          <RevealText
            as="h2"
            className="font-display text-display text-paper"
          >
            {'Let’s make\nsomething\nquietly\npowerful.'}
          </RevealText>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
            We take on a small number of projects each year. If your work
            benefits from restraint, clarity and a long view, we would like to
            hear from you.
          </p>
          <div className="mt-10">
            <Magnetic>
              <Link to="/contact" className="pill">
                start a project →
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}