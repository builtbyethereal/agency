import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import SelectedWorks from '../components/sections/SelectedWorks'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import Journal from '../components/sections/Journal'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <PageTransition>
      <Seo title="Creative Direction, Branding & Editorial" />
      <Hero />
      <SelectedWorks />
      <Services />
      <Testimonials />
      <Journal />
      <CTA />
    </PageTransition>
  )
}