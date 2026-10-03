import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description?: string
  image?: string
}

export default function Seo({ title, description, image }: Props) {
  const fullTitle = `${title} — Studio Null`
  const desc =
    description ??
    'Studio Null is an independent creative practice working in branding, visual identity and editorial direction.'
  const img = image ?? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}