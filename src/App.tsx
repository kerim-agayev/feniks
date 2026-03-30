import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GrainOverlay } from './components/layout/GrainOverlay'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { CustomCursor } from './components/layout/CustomCursor'
import { LoadingScreen } from './components/layout/LoadingScreen'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Lookbook = lazy(() => import('./pages/Lookbook'))
const Story = lazy(() => import('./pages/Story'))
const CapsShowcase = lazy(() => import('./pages/CapsShowcase'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
      }}
    >
      <p className="text-label" style={{ opacity: 0.4 }}>LOADING...</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <CustomCursor />
      <GrainOverlay />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/caps" element={<CapsShowcase />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
