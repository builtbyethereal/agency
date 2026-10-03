import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import RevealText from '../components/ui/RevealText'

const team = [
  {
    name: 'Iris Vandel',
    role: 'Founder, Editorial Direction',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
  },
  {
    name: 'Marcus Yeung',
    role: 'Partner, Identity Systems',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
  },
  {
    name: 'Sofia Aran',
    role: 'Director, Art Direction',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
  },
  {
    name: 'Theo Marsh',
    role: 'Designer, Type & Motion',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
  },
]

const principles = [
  {
    title: 'Restraint',
    body: 'We remove before we add. The work should feel inevitable, not decorated.',
  },
  {
    title: 'Systems, not posters',
    body: 'We design frameworks that hold up across years, channels and teams.',
  },
  {
    title: 'Editorial thinking',
    body: 'Every project is a story. We sequence it like a publication, not a pitch.',
  },
]

const awards = [
  { year: '2024', name: 'D&AD Wood Pencil — Brand Identity' },
  { year: '2023', name: 'Type Directors Club — Certificate of Excellence' },
  { year: '2023', name: 'AIGA 50 Books | 50 Covers' },
  { year: '2022', name: 'Print Regional Design Award' },
  { year: '2021', name: 'ADC Bronze Cube — Editorial Design' },
]

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Studio Null is an independent creative practice working in branding, visual identity and editorial direction."
      />
      <section className="container-x pt-32 md:pt-48">
        <p className="label mb-4">about</p>
        <RevealText as="h1" className="font-display text-display text-paper">
          {'Studio\nNull'}
        </RevealText>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">manifesto</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl leading-relaxed text-paper md:text-3xl md:leading-[1.3]">
              We are an independent creative practice working in branding,
              visual identity and editorial direction. We believe the strongest
              design is quiet — it does not shout, it holds. Our work is made
              for clients who want a voice that lasts longer than a campaign.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-paper/70 md:text-base">
              Founded in 2014 in Brooklyn, Studio Null works with publishers,
              studios and institutions across North America and Europe. We take
              on a small number of engagements each year to remain close to the
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-40">
        <p className="label mb-10">team</p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {team.map((m) => (
            <div key={m.name}>
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-xl uppercase tracking-tight text-paper">
                {m.name}
              </h3>
              <p className="label mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-40">
        <p className="label mb-10">principles</p>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl uppercase tracking-tight text-paper md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-40">
        <p className="label mb-10">awards</p>
        <ul className="border-t border-line">
          {awards.map((a) => (
            <li
              key={a.name}
              className="flex items-baseline justify-between gap-6 border-b border-line py-6"
            >
              <span className="font-display text-xl uppercase tracking-tight text-paper md:text-3xl">
                {a.name}
              </span>
              <span className="label shrink-0">{a.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  )
}