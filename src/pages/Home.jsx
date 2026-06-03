import React from 'react';
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Process from '../components/Process'
import Gallery from '../components/Gallery'
import WhyChoose from '../components/WhyChooseUs'
import WhatsApp from '../components/WhatsApp'
import Contact from '../components/Contact'
import Faq from '../components/Faq';
import Footer from '../components/Footer'

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
      <Products />
      <Process />
      <Gallery />
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