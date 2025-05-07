import Layout from '@/components/Layout';
import styles from '@/styles/FAQ.module.css';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Founnder.ai?',
    answer:
      'Founnder.ai is a cinematic learning platform that uses short films, real entrepreneur stories, and AI-powered tools to teach critical thinking, creativity, and leadership.',
  },
  {
    question: 'How do I sign up for Founnder.ai?',
    answer:
      "You can sign up directly on our website or through your school's learning platform if integrated. Teachers and admins can request full access for classrooms.",
  },
  {
    question: 'What types of content does Founnder.ai offer?',
    answer:
      'We offer short narrative films, historical documentaries, interactive discussion prompts, and AI-led learning pathways — ideal for social studies, ELA, business, and more.',
  },
  {
    question: 'Is Founnder.ai available for free?',
    answer:
      'Yes! We offer a free starter version for teachers and students. Schools and districts can unlock premium content and features.',
  },
  {
    question: 'How is the content developed?',
    answer:
      'All stories are crafted by filmmakers, educators, and historians — grounded in real stories of overlooked founders and aligned to curriculum standards.',
  },
  {
    question: 'Can I use Founnder.ai offline?',
    answer:
      'Some lessons can be downloaded for offline access by teachers. Interactive features require an internet connection.',
  },
  {
    question: 'How does Founnder.ai protect student data?',
    answer:
      "We're fully FERPA and COPPA compliant. Student data is never sold and privacy is protected through secure cloud-based encryption.",
  },
  {
    question: 'What devices is Founnder.ai compatible with?',
    answer:
      'Founnder.ai works on Chromebooks, tablets, laptops, and mobile phones — across all modern browsers. LMS integrations are also supported.',
  },
  {
    question: 'How do I access the premium version?',
    answer:
      'Premium access is available through school licenses or educator subscriptions. Request a demo or quote from our team.',
  },
  {
    question: 'Who can I contact for support?',
    answer:
      'Email us at support@founnder.ai or use the live chat on our homepage. Educators can also book an onboarding call.',
  },
];

export default function FAQ() {
  // For prototype, all expanded
  const [open, setOpen] = useState(faqs.map(() => true));

  return (
    <Layout title="FAQ | Founnder.ai" navHighlight="faq">
      <div className={styles.faqPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Quick Answers To Common Queries</h1>
          <p className={styles.heroSubtitle}>
            Dive into the details with our FAQ section, where you'll find everything you need to get started with Founnder.ai — whether you're a teacher, student, or school leader.
          </p>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div key={faq.question} className={styles.faqCard}>
                <button
                  className={styles.faqQuestion}
                  aria-expanded={open[idx]}
                  onClick={() => {
                    // For prototype, keep all open
                  }}
                >
                  {faq.question}
                </button>
                <div
                  className={styles.faqAnswer}
                  style={{ display: open[idx] ? 'block' : 'none' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaPrompt}>Still have questions?</h2>
          <a href="mailto:support@founnder.ai" className={styles.ctaButton}>
            Contact Us
          </a>
        </section>
      </div>
    </Layout>
  );
} 