import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiSearch,
  FiClock,
  FiCalendar,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";

import { FiArrowDownRight } from "react-icons/fi";

import { blogArticles, blogCategories } from "../../data/BlogData";
import "./Blog.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Packaging Journal | VR Package";
    return () => {
      document.title = "VR Package";
    };
  }, []);

  const featuredArticle =
    blogArticles.find((article) => article.featured) || blogArticles[0];

  const editorPicks = useMemo(
    () =>
      blogArticles
        .filter((article) => article.id !== featuredArticle?.id)
        .slice(0, 3),
    [featuredArticle]
  );

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();

    return blogArticles.filter((article) => {
      const categoryMatch =
        activeCategory === "All" ||
        article.category === activeCategory;

      const searchMatch =
        !term ||
        [
          article.title,
          article.excerpt,
          article.category,
          article.author,
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearch("");
  };

  return (
    <>
      <Navbar />

      <main className="vr-blog">

        {/* EDITORIAL HERO */}
        <section className="journal-hero">
          <div className="blog-container">

            <motion.div
              className="journal-masthead"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="journal-topline">
                <span className="journal-brand">
                  <span className="journal-brand-dot" />
                  VR PACKAGE / KNOWLEDGE HUB
                </span>
                <span className="journal-edition">
                  THE PACKAGING EDITION — 2026
                </span>
              </div>

              <h1>
                THE PACKAGING
                <span> JOURNAL<span className="journal-period"></span></span>
              </h1>

              <div className="journal-bottomline">
                <p>
                  Ideas that protect products.
                  Knowledge that moves businesses forward.
                </p>

                <a href="#latest-stories" className="journal-explore">
                  EXPLORE STORIES
                  {/* <FiArrowDownIcon /> */}
                  <FiArrowDownRight />
                </a>
              </div>
            </motion.div>

            <div className="journal-hero-decoration">
              <span>01</span>
              <span>PACKAGING / MATERIALS / INNOVATION</span>
              <span>EST. 2026</span>
            </div>

          </div>
        </section>

        {/* FEATURED STORIES */}
        <section className="journal-featured">
          <div className="blog-container">

            <div className="journal-section-top">
              <div>
                <span className="journal-eyebrow">
                  <span /> CURATED KNOWLEDGE
                </span>
                <h2>
                  Stories worth
                  <span> knowing.</span>
                </h2>
              </div>

              <span className="journal-section-index">
                VOL. 01 / FEATURED
              </span>
            </div>

            <div className="journal-feature-grid">

              {featuredArticle && (
                <motion.article
                  className="journal-feature-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to={`/blog/${featuredArticle.slug}`}
                    className="journal-feature-image"
                  >
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                    />

                    <span className="journal-feature-overlay" />

                    <span className="journal-feature-label">
                      <span className="journal-live-dot" />
                      EDITOR'S FEATURE
                    </span>

                    <span className="journal-feature-number">01</span>

                    <div className="journal-feature-copy">
                      <span className="journal-category">
                        {featuredArticle.category}
                      </span>

                      <h3>{featuredArticle.title}</h3>

                      <p>{featuredArticle.excerpt}</p>

                      <span className="journal-feature-link">
                        READ FULL STORY
                        <FiArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )}

              <aside className="journal-editors">

                <div className="journal-editors-heading">
                  <div>
                    <span className="journal-eyebrow">
                      HANDPICKED FOR YOU
                    </span>
                    <h3>Editor's Picks</h3>
                  </div>
                  <FiArrowUpRight />
                </div>

                <div className="journal-editor-list">
                  {editorPicks.map((article, index) => (
                    <motion.article
                      className="journal-editor-item"
                      key={article.id}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        to={`/blog/${article.slug}`}
                        className="journal-editor-image"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                        />
                        <span>0{index + 2}</span>
                      </Link>

                      <div className="journal-editor-content">
                        <span className="journal-category">
                          {article.category}
                        </span>

                        <Link to={`/blog/${article.slug}`}>
                          <h4>{article.title}</h4>
                        </Link>

                        <div className="journal-editor-meta">
                          <span>
                            <FiClock />
                            {article.readTime}
                          </span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                <div className="journal-editor-note">
                  <FiBookOpen />
                  <p>
                    Practical knowledge for stronger, smarter packaging
                    decisions.
                  </p>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* LATEST STORIES */}
        <section className="journal-latest" id="latest-stories">
          <div className="blog-container">

            <div className="journal-section-top journal-latest-heading">
              <div>
                <span className="journal-eyebrow">
                  <span /> THE KNOWLEDGE EDITION
                </span>
                <h2>
                  Fresh from the
                  <span> floor.</span>
                </h2>
                <p>
                  Discover useful guides, manufacturing insights and
                  practical ideas from the world of corrugated packaging.
                </p>
              </div>

              <div className="journal-story-count">
                <strong>
                  {String(filteredArticles.length).padStart(2, "0")}
                </strong>
                <span>STORIES</span>
              </div>
            </div>

            {/* FILTERS */}
            <div className="journal-filter-area">

              <div className="journal-filter-top">
                <span className="journal-filter-label">
                  EXPLORE BY TOPIC
                </span>

                <label className="journal-search">
                  <FiSearch />
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <span>⌕</span>
                </label>
              </div>

              <div
                className="journal-categories"
                aria-label="Filter articles by category"
              >
                {blogCategories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory === category ? "active" : ""
                    }
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                    {activeCategory === category && (
                      <span className="category-active-dot" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ARTICLE GRID */}
            {filteredArticles.length ? (
              <div className="journal-story-grid">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    className={`journal-story-card ${
                      index === 0 ? "journal-story-first" : ""
                    }`}
                    key={article.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.07,
                    }}
                  >
                    <Link
                      to={`/blog/${article.slug}`}
                      className="journal-story-image"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />

                      <span className="journal-image-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="journal-image-arrow">
                        <FiArrowUpRight />
                      </span>
                    </Link>

                    <div className="journal-story-content">

                      <div className="journal-story-meta">
                        <span className="journal-category">
                          {article.category}
                        </span>
                        <span>
                          <FiClock />
                          {article.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${article.slug}`}
                        className="journal-story-title"
                      >
                        <h3>{article.title}</h3>
                      </Link>

                      <p>{article.excerpt}</p>

                      <div className="journal-story-footer">
                        <span>
                          <FiCalendar />
                          {article.date}
                        </span>

                        <Link
                          to={`/blog/${article.slug}`}
                          aria-label={`Read ${article.title}`}
                        >
                          READ ARTICLE
                          <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="journal-empty">
                <FiBookOpen />
                <h3>No stories found.</h3>
                <p>
                  We couldn't find anything matching your search.
                  Try another keyword or topic.
                </p>
                <button type="button" onClick={clearFilters}>
                  RESET FILTERS
                  <FiArrowRight />
                </button>
              </div>
            )}

          </div>
        </section>

        {/* TOPIC STRIP */}
        <section className="journal-topics">
          <div className="blog-container">
            <div className="journal-topics-heading">
              <span className="journal-eyebrow">
                WHAT WE WRITE ABOUT
              </span>
              <h2>
                Better packaging starts with
                <span> better questions.</span>
              </h2>
            </div>

            <div className="journal-topic-list">
              <span>BOX DESIGN</span>
              <i>✳</i>
              <span>PAPER QUALITY</span>
              <i>✳</i>
              <span>MANUFACTURING</span>
              <i>✳</i>
              <span>PRODUCT PROTECTION</span>
              <i>✳</i>
              <span>BUSINESS PACKAGING</span>
            </div>
          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="journal-cta">
          <div className="blog-container">
            <div className="journal-cta-inner">

              <div className="journal-cta-content">
                <span className="journal-eyebrow">
                  <span /> LET'S TALK PACKAGING
                </span>

                <h2>
                  Have a product?
                  <br />
                  Let's find its
                  <span> perfect box.</span>
                </h2>

                <p>
                  Tell us what you need to pack. We'll help you explore
                  corrugated packaging options that suit your product
                  and business requirements.
                </p>

                <Link to="/get-quote" className="journal-cta-button">
                  GET A CUSTOM QUOTE
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

const FiArrowDownIcon = () => (
  <span className="journal-down-arrow">↓</span>
);

export default Blog;
