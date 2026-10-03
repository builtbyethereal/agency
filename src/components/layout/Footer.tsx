import { Link } from 'react-router-dom'
import { Database} from 'lucide-react'
import Marquee from '../ui/Marquee'
import Magnetic from '../ui/Magnetic'

const socials = [
  { icon: Database, href: '#', label: 'Instagram' },
  { icon: Database, href: '#', label: 'Twitter' },
  { icon: Database, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-working-in-his-studio-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container-x relative py-24 md:py-40">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="label mb-6">start a project</p>
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tight text-paper md:text-6xl">
                Let’s build
                <br />
                something
                <br />
                that lasts.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <Magnetic>
                <Link to="/contact" className="pill">
                  → get in touch
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x border-t border-line py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-paper/70 transition-colors hover:text-paper"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-label text-mute">
            hello@studionull.studio · +1 212 555 0148
          </p>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <Marquee speed={60}>
          <span className="font-display text-[14vw] lowercase leading-none tracking-tighter text-paper/90">
            studio null —&nbsp;
          </span>
        </Marquee>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-label text-mute md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Studio Null. All rights reserved.</span>
        <span>Brooklyn, NY · Est. 2014</span>
      </div>
    </footer>
  )
}