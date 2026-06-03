import React, { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'))
const GetQuote = lazy(() => import('./pages/GetQuote'))
const AllProducts = lazy(() => import('./pages/AllProducts'))

function App() {
  return (
     
          <Suspense fallback={ <div className='loader'>   Loading... </div> } >
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/get-quote' element={<GetQuote />} />
               <Route path='/products' element={<AllProducts />} />
           </Routes>
          </Suspense>

   
  )
}

export default App;