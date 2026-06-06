import './Products.css'
import productData from '../data/productData'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <section className='products' id='products'>

      <div className='container'>
         <h2 className='heading center' id='oph2'>Our Products</h2>

        <div className='product-grid'>

          {/* {productData.map((item) => ( */}
          {productData.slice(0,4).map((item) => (
            <Link to={`/product/${item.slug}`}   key={item.id} > 
            <div className='product-card'>

              
               <img src={item.image} alt={item.title}   loading='lazy'/>
             
              <div className='product-content'>
                 <h3>{item.title}</h3>
                 {/* <p> {item.description}</p> */}
                     
               </div>

            </div>
            </Link>
          ))}

        </div>
           <div className='gallery-btn-container'>
             <Link to='/products'><button className='more-btn'> View All Products </button></Link>
         </div>
      </div>
         
    </section>
  )
}

export default Products;