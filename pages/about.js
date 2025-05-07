import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

const founders = {
  Technology: [
    'Garrett Morgan',
    'Lewis Latimer',
    'Chien-Shiung Wu',
    'Granville T. Woods',
    'Norbert Rillieux',
  ],
  'Business & Finance': [
    'Reginald F. Lewis',
    'Maggie L. Walker',
    'Lillian Vernon',
    'Ah Toy',
    'Biddy Mason',
  ],
  Media: [
    'Dorothy Arzner',
    'Tichi Wilkerson Kassel',
    'Sessue Hayakawa',
    'Oscar Micheaux',
    'Ramón Peón',
  ],
  'Education & Social Justice': [
    'Myles Horton',
    'William Trotter',
    'Jane Elliott',
    'Diane Nash',
    'Maria Montessori',
  ],
};

export default function About() {
  return (
    <Layout title="About Founnder.ai">
      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Entrepreneurship Is No Longer Optional.</h1>
          <p className={styles.heroSubtitle}>
            Students need to think like builders — solving problems, taking initiative, and shaping the future. Founnder.ai makes entrepreneurial thinking accessible, inspiring, and actionable through cinematic stories of real-world entrepreneurs and AI-powered mentorship.
          </p>
        </section>

        {/* Why This Matters */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why This Matters</h2>
          <h3 className={styles.sectionSubheading}>AI is rewriting the rules of work.</h3>
          <ul className={styles.bulletList}>
            <li>Students need pathways to create, not just pathways to jobs.</li>
            <li>Entrepreneurship education isn't optional anymore. It's essential.</li>
            <li>Most schools lack turnkey resources to bring entrepreneurship into the classroom.</li>
          </ul>
        </section>

        {/* How Founnder.ai Works */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Founnder.ai Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Create Your Account</h3>
              <p className={styles.stepDesc}>Sign up in seconds to unlock Founnder.ai. Students and teachers can explore together.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Choose Your Story</h3>
              <p className={styles.stepDesc}>Browse cinematic short films about overlooked founders designed to spark critical thinking.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Ask & Interact</h3>
              <p className={styles.stepDesc}>Dive deeper with AI-powered founder mentors that make learning stick.</p>
            </div>
          </div>
        </section>

        {/* Built For Classrooms */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Built For Classrooms. Adapted To The Future.</h2>
          <h3 className={styles.sectionSubheading}>Seamless integrations for teachers and schools.</h3>
          <ul className={styles.bulletList}>
            <li>Ready-to-use short films</li>
            <li>AI mentors for student-led exploration</li>
            <li>Aligns with curriculum goals</li>
            <li>Supports critical thinking and teacher facilitation</li>
          </ul>
        </section>

        {/* Coming Soon */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Coming Soon</h2>
          <div className={styles.comingSoonGrid}>
            <div className={styles.comingSoonCard}>
              <h3 className={styles.comingSoonTitle}>Biopic of Claudette Colvin</h3>
              <p className={styles.comingSoonStatus}>Coming Fall 2025</p>
            </div>
            <div className={styles.comingSoonCard}>
              <h3 className={styles.comingSoonTitle}>Short Film: Ida B. Wells vs. The Mob</h3>
              <p className={styles.comingSoonStatus}>In Production</p>
            </div>
            <div className={styles.comingSoonCard}>
              <h3 className={styles.comingSoonTitle}>Story of Frank Wills</h3>
              <p className={styles.comingSoonStatus}>Early Development</p>
            </div>
          </div>
        </section>

        {/* Library Preview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Growing Library</h2>
          <div className={styles.libraryPreviewGrid}>
            {Object.entries(founders).map(([category, names]) => (
              <div key={category} className={styles.libraryCategory}>
                <h4 className={styles.libraryCategoryTitle}>{category}</h4>
                <ul className={styles.libraryList}>
                  {names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className={styles.ctaSection}>
          <p className={styles.ctaText}>Join us on our mission to inspire 1M young entrepreneurs.</p>
          <button className={styles.ctaButton}>Get Early Access</button>
        </section>
      </div>
    </Layout>
  );
} 