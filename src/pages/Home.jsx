import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const About = lazy(() => import('../components/About'));
const MissionVision = lazy(() => import('../components/MissionVision'));
const Products = lazy(() => import('../components/Products'));
const Process = lazy(() => import('../components/Process'));
const Gallery = lazy(() => import('../components/Gallery'));
const WhyChoose = lazy(() => import('../components/WhyChooseUs'));
const Contact = lazy(() => import('../components/Contact'));
const Faq = lazy(() => import('../components/Faq'));
const WhatsApp = lazy(() => import('../components/WhatsApp'));
const Footer = lazy(() => import('../components/Footer'));

function Home() {
  return (
    <>
      <div id="top">
       <Helmet>
        <title> VR Package | Corrugated Box Manufacturers </title>
        <meta name='description' content='VR Package is a premium corrugated box manufacturing company providing carton boxes, printed packaging and industrial packaging solutions.' />
        <meta name='keywords' content='corrugated boxes, carton boxes, packaging company, corrugated box manufacturers, Industrial Packaging,Carton Box Suppliers,packaging solutions'/>
        <meta property='og:title' content='VR Package' />
        <meta property='og:description' content='Premium Corrugated Packaging Solutions' />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Products />
      <Process />
      {/* <Gallery /> */}
      <WhyChoose />
      <Contact />
      <Faq />
      <WhatsApp />
      <Footer />

      </div>
    </>
  )
}

export default Home;