import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import productData from "../data/productData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import { HashLink } from "react-router-hash-link";
import { IoHomeSharp } from "react-icons/io5";

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

      
<div className='pd-industries-section'>
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


         {/* <HashLink smooth  to="/#top" className="bthbtn"> <span> <IoHomeSharp /> </span></HashLink>  */}
      </section>

      <Footer />
      <WhatsApp />

    </>
  );
}

export default ProductDetails;