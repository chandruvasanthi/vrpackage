import "./AllProducts.css";
import productData from "../data/productData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
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

        {/* ALL PRODUCTS */}
        <section className="all-products-main">
          <div className="all-products-container">

            <div className="all-products-header">
              <span className="all-products-eyebrow">
                <span className="all-products-eyebrow-line" />
                VR PACKAGE
                <span className="all-products-eyebrow-line" />
              </span>

              <h1 className="all-products-heading">
                Exclusive Products{" "}
                <span>Collection</span>
              </h1>
            </div>

            <div className="all-products-grid">
              {productData.map((item, index) => (
                <Link
                  to={`/product/${item.slug}`}
                  key={item.id}
                  className="all-product-link"
                >
                  <article className="all-product-card">

                    <div className="all-product-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />

                      <div className="all-product-image-overlay" />

                      {/* <span className="all-product-number">
                        {String(index + 1).padStart(2, "0")}
                      </span> */}
                    </div>

                    <div className="all-product-content">

                      <div className="all-product-title-wrap">
                        <span className="all-product-title-line" />

                        <h3>{item.title}</h3>
                      </div>

                      <span
                        className="all-product-card-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>

                    </div>

                  </article>
                </Link>
              ))}
            </div>

          </div>
        </section>

       
        
{/* INDUSTRIES */}
<section className="pd-industries-section">
  <div className="pd-industries-header">
    <h2>
      Industries We <span>Serve</span>
    </h2>
  </div>

  <div className="pd-industries-slider-container">
    <div className="pd-industries-slider pd-row-right">
      {[...row1, ...row1].map((item, index) => (
        <span key={`r1-${index}`}>{item}</span>
      ))}
    </div>
  </div>

  <div className="pd-industries-slider-container">
    <div className="pd-industries-slider pd-row-left">
      {[...row2, ...row2].map((item, index) => (
        <span key={`r2-${index}`}>{item}</span>
      ))}
    </div>
  </div>
</section>


        {/* QUOTE CTA */}
        <section className="quote-cta">
          <div className="quote-cta-content">

            <span className="quote-cta-eyebrow">
              LET'S BUILD SOMETHING
            </span>

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
