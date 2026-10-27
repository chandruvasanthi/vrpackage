import "./AllProducts.css";
import productData from "../data/productData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import WhatsApp from "../components/WhatsApp";
import { useEffect } from "react";

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

      <main className="all-products">
        <section className="all-products-main">
          <div className="all-products-container">
            <div className="all-products-header">
              <span className="all-products-eyebrow">
                <span className="all-products-eyebrow-line"></span>
                OUR PRODUCTS
              </span>

              <h1 className="all-products-heading">
                Exclusive Products <span>Collection</span>
              </h1>
            </div>

            <div className="all-products-grid">
              {productData.map((item, index) => (
                <article className="all-product-card" key={item.id}>
                  {/* <div className="all-product-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="choose-card-glow"></div>
              <div className="choose-card-accent"></div>
                
                  </div> */}
                     
<div className="all-product-image">
  <img
    src={item.image}
    alt={item.title}
    loading="lazy"
  />

  <div className="choose-card-glow" aria-hidden="true" />
  <div className="choose-card-accent" aria-hidden="true" />
</div>

                  <div className="all-product-content">
                    
                    <h2 className="all-product-content-h2">{item.title}</h2>

                    <p>{item.description}</p>

                    <HashLink
                      className="product-btn"
                      smooth
                      to={`/product/${item.slug}`}
                    >
                      <span>Explore</span>
                      <span className="product-btn-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </HashLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section">
          <div className="industries-header">
            <span className="all-products-eyebrow">
              <span className="all-products-eyebrow-line"></span>
              OUR EXPERTISE
            </span>

            <h2>
              Industries We <span>Serve</span>
            </h2>
          </div>

          <div className="industries-slider-container">
            <div className="industries-slider row-right">
              {row1.map((item, index) => (
                <span key={`r1-${index}`}>{item}</span>
              ))}

              {row1.map((item, index) => (
                <span key={`r1-copy-${index}`} aria-hidden="true">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="industries-slider-container">
            <div className="industries-slider row-left">
              {row2.map((item, index) => (
                <span key={`r2-${index}`}>{item}</span>
              ))}

              {row2.map((item, index) => (
                <span key={`r2-copy-${index}`} aria-hidden="true">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-cta">
          <div className="quote-cta-content">
            <span className="quote-cta-eyebrow">LET'S BUILD SOMETHING</span>

            <h2>Need Custom Packaging Solutions?</h2>

            <p>
              Get high-quality corrugated boxes manufactured according to
              your exact business requirements.
            </p>

            <a
              className="cta-btn"
              href="https://wa.me/916381506536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Request a Quote</span>
              <span className="cta-btn-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default AllProducts;