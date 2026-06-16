import './AllProducts.css';
import productData from '../data/productData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HashLink } from 'react-router-hash-link';
import WhatsApp from '../components/WhatsApp';
import { useEffect } from 'react';

function AllProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    "E-Commerce",
    "Food & Beverage",
    "Electronics",
    "Pharmaceuticals",
    "Retail Packaging",
    "Logistics & Shipping",
    "FMCG Products",
    "Textile & Garments",
    "Automotive Industry",
  ];

  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);

  return (
    <>
      <Navbar />

      <section className='all-products'>

        <div className='container'>
          <h2 className='all-products-heading'>
            Exclusive Products Collection
          </h2>

          <div className='all-products-grid'>
            {productData.map((item) => (
              <div className='all-product-card' key={item.id}>
                <img src={item.image} alt={item.title} loading='lazy' />

                <div className='all-product-content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <HashLink smooth to={`/product/${item.slug}`}>
                    <button className="product-btn">Explore</button>
                  </HashLink>
                </div>
              </div>
            ))}
          </div>
        </div>

     {/* INDUSTRIES SECTION */}
<div className='industries-section'>
  <h2>Industries We Serve</h2>

  {/* ROW 1 → first 5 items (RIGHT) */}
  <div className='industries-slider-container'>
    <div className='industries-slider row-right'>

      {row1.map((item, i) => (
        <span key={`r1-${i}`}>{item}</span>
      ))}

      {row1.map((item, i) => (
        <span key={`r1-copy-${i}`}>{item}</span>
      ))}

    </div>
  </div>

  {/* ROW 2 → next 4 items (LEFT) */}
  <div className='industries-slider-container'>
    <div className='industries-slider row-left'>

      {row2.map((item, i) => (
        <span key={`r2-${i}`}>{item}</span>
      ))}

      {row2.map((item, i) => (
        <span key={`r2-copy-${i}`}>{item}</span>
      ))}

    </div>
  </div>
</div>

        <div className='quote-cta'>
          <h2>Need Custom Packaging Solutions?</h2>

          <p>
            Get high-quality corrugated boxes manufactured according to
            your exact business requirements.
          </p>

          <a
            href='https://wa.me/916381506536'
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='cta-btn'>Request a Quote</button>
          </a>
        </div>

      </section>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default AllProducts;