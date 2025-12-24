import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';                    // ← Correct import
import Link from '@docusaurus/Link';                    // ← Correct import
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // ← Correct
import styles from './index.module.css';                // ← Will work once file exists
import HomepageFeatures from '@site/src/components/HomepageFeatures'; // ← Correct alias

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroQuote}>
            "The future belongs to those who build intelligent machines that walk among us."
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--lg button--primary"
              to="/docs/intro"
            >
              Explore the Book
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Comprehensive guide to Physical AI and Humanoid Robotics"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container text-center flex m-auto">
            <h2>Key Modules</h2>
            <p>Dive deep into the core pillars of Physical AI and Humanoid Robotics</p>
            <HomepageFeatures />
          </div>
        </section>
      </main>
    </Layout>
  );
}