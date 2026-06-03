import './Products.css'
import productData from '../data/productData'
import { HashLink } from 'react-router-hash-link'

function Products() {
  return (
    <section className='products' id='products'>

      <div className='container'>
         <h2 className='heading center' id='oph2'>Our Products</h2>

        <div className='product-grid'>

          {/* {productData.map((item) => ( */}
          {productData.slice(0,4).map((item) => (
            <div className='product-card' key={item.id}>
               <img src={item.image} alt={item.title}   loading='lazy'/>

              <div className='product-content'>
                 <h3>{item.title}</h3>
                 {/* <p> {item.description}</p> */}
                     <HashLink smooth to='/products'>

                      {/* <button className='vdbtn'>  {item.button}</button> */}
                     </HashLink>
               </div>

            </div>

          ))}

        </div>
           <div className='gallery-btn-container'>
             <HashLink smooth to='/products'><button className='more-btn'> View All Products </button></HashLink>
         </div>
      </div>
         
    </section>
  )
}

export default Products