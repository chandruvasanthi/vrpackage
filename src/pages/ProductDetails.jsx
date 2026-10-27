import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import productData from "../data/productData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

function ProductDetails() {
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

  const { slug } = useParams();

  const product = productData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="product-not-found">
          <h1>Product Not Found</h1>
        </main>
        <Footer />
        <WhatsApp />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="product-details">
        <div className="pd-container">
          <div className="details-container">
            {/* Product information */}
            <section className="details-left">
              <span className="pd-eyebrow">
                <span className="pd-eyebrow-line"></span>
                OUR PRODUCTS
              </span>

              <h1>{product.title}</h1>

              <p className="description">
                {product.fullDescription}
              </p>

              <div className="details-image">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
                <span className="pd-image-label">
                  VR PACKAGE
                </span>
              </div>
            </section>

            {/* Features and applications */}
            <aside className="details-right">
              <div className="feature-box">
                <div className="pd-box-heading">
                  {/* <span className="pd-box-number">01</span> */}
                  <h3>Key Features</h3>
                </div>

                <ul>
                  {product.features.map((item, index) => (
                    <li key={index}>
                      <span className="pd-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="application-box">
                <div className="pd-box-heading">
                  {/* <span className="pd-box-number">02</span> */}
                  <h3>Applications</h3>
                </div>

                <ul>
                  {product.applications.map((item, index) => (
                    <li key={index}>
                      <span className="pd-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="pd-quote-btn"
                href="https://wa.me/916381506536"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get Quote</span>
                <span className="pd-quote-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </aside>
          </div>
        </div>

        {/* Industries We Serve */}
        <section className="pd-industries-section">
          <div className="pd-industries-header">
            <span className="pd-eyebrow">
              <span className="pd-eyebrow-line"></span>
              OUR EXPERTISE
            </span>

            <h2>
              Industries We <span>Serve</span>
            </h2>
          </div>

          <div className="pd-industries-slider-container">
            <div className="pd-industries-slider pd-row-right">
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

          <div className="pd-industries-slider-container">
            <div className="pd-industries-slider pd-row-left">
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
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default ProductDetails;