import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from '../ui/CustomCursor'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}