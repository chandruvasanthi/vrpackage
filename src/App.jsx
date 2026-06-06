import React, { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'))
const GetQuote = lazy(() => import('./pages/GetQuote'))
const AllProducts = lazy(() => import('./pages/AllProducts'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))


function App() {
  return (
     <>
          <ScrollToTop />
          <Suspense fallback={ <div className='loader'>   Loading... </div> } >
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/get-quote' element={<GetQuote />} />
               <Route path='/products' element={<AllProducts />} />
               <Route path="/product/:slug" element={<ProductDetails />}/>
           </Routes>
          </Suspense>
     </>
   
  )
}

export default App;