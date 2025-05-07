import Layout from '@/components/Layout';
import styles from '@/styles/ForSchools.module.css';
import Link from 'next/link';
import React from 'react';

const features = [
  {
    title: 'Aligned to Standards',
    desc: 'SEL, critical thinking, history, and civics',
  },
  {
    title: 'Plug-and-Play',
    desc: 'Films, discussion guides, AI mentors',
  },
  {
    title: 'Engaging & Inclusive',
    desc: 'Real founders from overlooked communities',
  },
  {
    title: 'Affordable & Scalable',
    desc: 'Free tier + district licensing',
  },
];

const timeline = [
  {
    step: '1',
    title: 'Choose a Founder Story',
  },
  {
    step: '2',
    title: 'Watch & Reflect',
  },
  {
    step: '3',
    title: 'Ask AI Mentor',
  },
  {
    step: '4',
    title: 'Build Skills',
  },
];

const testimonials = [
  {
    quote: 'An essential new way to teach history and innovation.',
    author: 'Educator, Phoenix Union',
  },
  {
    quote: 'AI + Cinema = the future of learning.',
    author: 'Early Investor & School Board Member',
  },
];

const pricing = [
  {
    title: 'Free Starter Access',
    price: 'Free',
    desc: 'Try Founnder.ai with limited films and AI mentor access.',
    ctas: [
      { label: 'Request Demo', href: '/get-early-access' },
      { label: 'Download Pricing Sheet', href: '/pricing.pdf' },
    ],
  },
  {
    title: 'School License',
    price: 'Contact Us',
    desc: 'Unlock all films, curriculum, and AI mentors for your school.',
    ctas: [
      { label: 'Request Demo', href: '/get-early-access' },
      { label: 'Download Pricing Sheet', href: '/pricing.pdf' },
    ],
  },
  {
    title: 'District License',
    price: 'Contact Us',
    desc: 'District-wide access, integrations, and onboarding.',
    ctas: [
      { label: 'Request Demo', href: '/get-early-access' },
      { label: 'Download Pricing Sheet', href: '/pricing.pdf' },
    ],
  },
];

export default function ForSchools() {
  return (
    <Layout title="For Schools | Founnder.ai" navHighlight="schools">
      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Give Every Student a Window Into What's Possible</h1>
          <p className={styles.heroSubtitle}>
            Turn overlooked history into future builders with cinematic storytelling, AI mentorship, and plug-and-play curriculum.
          </p>
          <a
            href="https://tally.so/r/npMV7q"
            className={styles.heroCTA}
            target="_blank"
            rel="noopener noreferrer"
          >Get Early Access for Your School</a>
        </section>

        {/* Why Schools Love Founnder.ai */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.timelineFlow}>
            {timeline.map((t, idx) => (
              <React.Fragment key={t.step}>
                <div className={styles.timelineStep}>
                  <div className={styles.timelineIcon}>{t.step}</div>
                  <div className={styles.timelineTitle}>{t.title}</div>
                </div>
                {idx < timeline.length - 1 && (
                  <div className={styles.timelineArrow}>&rarr;</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.author} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <p className={styles.testimonialAuthor}>— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        {/* Removed pricing section as requested */}

        {/* Closing CTA */}
        <section className={styles.closingSection}>
          <div className={styles.closingText}>Join Our Mission to Inspire 1M Young Entrepreneurs</div>
          <div className={styles.closingButtons}>
            <a
              href="https://tally.so/r/npMV7q"
              className={styles.closingButton}
              target="_blank"
              rel="noopener noreferrer"
            >Partner With Us</a>
            <a
              href="https://tally.so/r/npMV7q"
              className={styles.closingButtonAlt}
              target="_blank"
              rel="noopener noreferrer"
            >Get Early Access</a>
          </div>
        </section>
      </div>
    </Layout>
  );
} 