import './Products.css'
import productData from '../data/productData'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <section className="products" id="products">
      <div className="container products-container">

        <div className="products-header">
          <span className="products-eyebrow">
            <span className="products-eyebrow-line"></span>
            VR PACKAGE
            <span className="products-eyebrow-line"></span>
          </span>

          <h2 className="heading center" id="oph2">
            Our <span className="products-heading-highlight">Products</span>
          </h2>

          <p className="products-subtitle">
            Packaging solutions designed for strength, protection, and
            reliable performance.
          </p>
        </div>

        <div className="product-grid">
          {productData.slice(0, 4).map((item, index) => (
            <Link
              to={`/product/${item.slug}`}
              key={item.id}
              className="product-link"
            >
              <article className="product-card">

                <div className="product-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="product-image-overlay"></div>

                  <span className="product-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* <span className="product-view">
                    <span>View Product</span>
                    <span className="product-arrow">↗</span>
                  </span> */}
                </div>

                <div className="product-content">
                  <div className="product-title-wrap">
                    <span className="product-title-line"></span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="product-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

              </article>
            </Link>
          ))}
        </div>

        <div className="gallery-btn-container">
          <Link to="/products" className="products-more-link">
            <button className="more-btn" type="button">
              View All Products
              <span className="more-btn-arrow">→</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Products
