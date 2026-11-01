import React, { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import WhyChoose from './components/WhyChooseUs';

const Home = lazy(() => import('./pages/Home'))
const GetQuote = lazy(() => import('./pages/GetQuote'))
const AllProducts = lazy(() => import('./pages/AllProducts'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Location = lazy(()=> import('./pages/Location'))
const BoxLoader = lazy(()=> import('./components/BoxLoader'))


function App() {
  return (
     <>
          <ScrollToTop />
          {/* <Suspense fallback={ <div className='loader'>   Loading... </div> } > */}
          <Suspense fallback={<BoxLoader />}>
  
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/get-quote' element={<GetQuote />} />
               <Route path='/products' element={<AllProducts />} />
               <Route path="/product/:slug" element={<ProductDetails />}/>
               <Route path="/location" element={<Location />} />
           </Routes>
          </Suspense>
     </>
   
  )
}

export default App;