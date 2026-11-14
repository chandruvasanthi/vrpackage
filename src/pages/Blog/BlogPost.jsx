import { useEffect } from "react";
import "./BlogPost.css";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiClock,
  FiCalendar,
  FiShare2,
} from "react-icons/fi";

import { blogArticles } from "../../data/BlogData";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const BlogPost = () => {
  const { slug } = useParams();
  const article = blogArticles.find((item) => item.slug === slug);

  useEffect(() => {
    if (!article) return undefined;

    const previousTitle = document.title;
    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    const previousDescription = description.content;
    document.title = `${article.title} | VR Package`;
    description.content = article.excerpt;

    return () => {
      document.title = previousTitle || "VR Package";
      if (description) {
        if (createdDescription) description.remove();
        else description.content = previousDescription;
      }
    };
  }, [article]);

  if (!article) return <Navigate to="/blog" replace />;

  const relatedArticles = blogArticles
    .filter((item) => item.id !== article.id && item.category === article.category)
    .concat(blogArticles.filter((item) => item.id !== article.id && item.category !== article.category))
    .slice(0, 3);

  const shareArticle = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, text: article.excerpt, url });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        window.alert("Article link copied!");
      } else {
        window.prompt("Copy this article link:", url);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("Sharing failed", error);
      }
    }
  };

  return (
     <>
     <Navbar />

    <main className="vr-blog blog-post-page">
      <section className="post-hero">
        <div className="blog-container">
          <Link to="/blog" className="post-back"><FiArrowLeft /> Back to insights</Link>

          <motion.div
            className="post-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="magazine-tag">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="post-meta">
              <span>{article.author}</span>
              <span><FiCalendar /> {article.date}</span>
              <span><FiClock /> {article.readTime}</span>
            </div>
          </motion.div>

          <motion.div
            className="post-cover"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
          >
            <img src={article.image} alt={article.title} />
          </motion.div>
        </div>
      </section>

      <section className="post-body-section">
        <div className="blog-container post-layout">
          <article className="post-content">
            <div className="post-intro">
              <span>IN THIS ARTICLE</span>
              <p>{article.excerpt}</p>
            </div>

            {article.content.map((section, index) => (
              <section className="post-content-section" key={`${article.id}-${index}`}>
                <span className="post-section-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="post-share">
              <span>Found this useful?</span>
              <button type="button" onClick={shareArticle}><FiShare2 /> Share article</button>
            </div>
            <Link to="/blog" className="post-back-bottom"><FiArrowLeft /> Explore more articles</Link>
          </article>

          <aside className="post-sidebar">
            <div className="post-sidebar-card">
              <span className="magazine-overline">NEED PACKAGING?</span>
              <h3>The right box makes a difference.</h3>
              <p>Discuss custom corrugated packaging for your product, dimensions and delivery requirements.</p>
              <Link to="/get-quote">Get a quote <FiArrowUpRight /></Link>
            </div>
            <div className="post-sidebar-info">
              <span>ABOUT VR PACKAGE</span>
              <p>VR Package shares practical packaging knowledge and offers corrugated box solutions for businesses in Salem, Tamil Nadu.</p>
            </div>
          </aside>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="blog-related">
          <div className="blog-container">
            <div className="magazine-section-heading">
              <div>
                <span className="magazine-overline">KEEP EXPLORING</span>
                <h2>More to <span>discover.</span></h2>
              </div>
            </div>
            <div className="blog-grid">
              {relatedArticles.map((item) => (
                <article className="blog-card" key={item.id}>
                  <Link to={`/blog/${item.slug}`} className="blog-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </Link>
                  <div className="blog-card-content">
                    <span className="magazine-tag">{item.category}</span>
                    <Link to={`/blog/${item.slug}`}><h3>{item.title}</h3></Link>
                    <p>{item.excerpt}</p>
                    <div className="blog-card-footer">
                      <span>{item.date}</span>
                      <Link to={`/blog/${item.slug}`} aria-label={`Read ${item.title}`}><FiArrowUpRight /></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
   
    <Footer/>
    </>
  );
};

export default BlogPost;
