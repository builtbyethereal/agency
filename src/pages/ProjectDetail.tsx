import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import RevealText from '../components/ui/RevealText'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/404" replace />

  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
    { label: 'Services', value: project.services.join(' · ') },
  ]

  return (
    <PageTransition>
      <Seo
        title={project.title}
        description={project.summary}
        image={project.cover}
      />
      <section className="pt-32 md:pt-40">
        <div className="container-x mb-10">
          <p className="label mb-4">{project.category}</p>
          <RevealText as="h1" className="font-display text-display text-paper">
            {project.title}
          </RevealText>
        </div>

        <div className="relative h-[70svh] w-full overflow-hidden bg-neutral-900">
          <img
            src={project.cover}
            alt={`${project.title} — cover image`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="container-x py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="label mb-4">overview</p>
              <p className="text-sm leading-relaxed text-paper/80">
                {project.summary}
              </p>
            </div>
            <div className="md:col-span-8">
              <dl className="grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="label mb-2">{m.label}</dt>
                    <dd className="text-sm text-paper">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="container-x">
          <div className="columns-1 gap-6 md:columns-2 [&>*]:mb-6">
            {project.gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — gallery image ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              />
            ))}
          </div>
        </div>

        <div className="container-x mt-24 border-t border-line pt-12 md:mt-40">
          <p className="label mb-6">next project</p>
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <h2 className="font-display text-4xl uppercase tracking-tight text-paper transition-colors group-hover:text-paper/70 md:text-8xl">
              {next.title}
            </h2>
            <span className="font-display text-4xl md:text-8xl">→</span>
          </Link>
        </div>
        <div className="h-24 md:h-40" />
      </section>
    </PageTransition>
  )
}