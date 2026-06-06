import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import productData from "../data/productData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import { HashLink } from "react-router-hash-link";
import { IoHomeSharp } from "react-icons/io5";

function ProductDetails() {
    
  const { slug } = useParams();
  const product = productData.find(
    item => item.slug === slug
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <Navbar />

    <section className="product-details">
      <div className="details-container">

        <div className="details-left">
          <h1>{product.title}</h1>
          <p className="description">  {product.fullDescription} </p>
         <div className="details-image"><img  src={product.image} alt={product.title} loading="lazy" /> </div>  
       </div>

    <div className="details-right">
    <div className="feature-box">
      <h3>Key Features</h3>

      <ul>
        {product.features.map((item,index)=>(
          <li key={index}>✓ {item}</li>
        ))}
      </ul>
    </div>

    <div className="application-box">
      <h3>Applications</h3>

      <ul>
        {product.applications.map((item,index)=>(
          <li key={index}>✓ {item}</li>
        ))}
      </ul>
    </div>

      <a href='https://wa.me/916381506536'    target="_blank" rel="noopener noreferrer">
                <button className="pd-quote-btn">
        Get Quote
      </button>
       </a>

  </div>

</div>

        <div className="pd-industries-section">

          <h2>Industries We Serve</h2>
          <div className="pd-industries-grid">
            <div className="pd-industry-box">E-Commerce</div>
            <div className="pd-industry-box">Food & Beverage</div>
            <div className="pd-industry-box">Electronics</div>
            <div className="pd-industry-box">Pharmaceuticals</div>
            <div className="pd-industry-box">Retail Packaging</div>
            <div className="pd-industry-box">Logistics & Shipping</div>
          </div>

        </div>
         <HashLink smooth  to="/#top" className="bthbtn"> <span> <IoHomeSharp /> </span></HashLink> 
      </section>

      <Footer />
      <WhatsApp />

    </>
  );
}

export default ProductDetails;