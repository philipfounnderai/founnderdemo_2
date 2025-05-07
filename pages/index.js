import Layout from '@/components/Layout';
import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const starterQuestions = [
  "What inspired you to invent?",
  "What was your biggest challenge?",
  "Advice for young entrepreneurs?",
  "How did you handle setbacks?",
  "What drives your innovation?"
];

const upcomingFilms = [
  {
    title: "Biopic of Claudette Colvin",
    status: "Coming Fall 2025",
    description: "The untold story of the teenager who refused to give up her seat, nine months before Rosa Parks."
  },
  {
    title: "Short Film: Ida B. Wells vs. the Mob",
    status: "In Production",
    description: "A powerful tale of investigative journalism and courage in the face of danger."
  },
  {
    title: "Story of Frank Wills",
    status: "Early Development",
    description: "The Watergate whistleblower who changed American history."
  }
];

const testimonials = [
  {
    quote: "An essential new way to teach history and innovation.",
    author: "Educator, Phoenix Union"
  },
  {
    quote: "AI + Cinema = the future of learning.",
    author: "Early Investor, Angel"
  }
];

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showStarters, setShowStarters] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    
    setShowStarters(false);
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'ai', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarterQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Handle email submission
    setEmail('');
  };

  return (
    <Layout title="Founnder.ai | The Inventor">
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>Discover Your Inner Entrepreneur.</h2>
        </div>

        <div className={styles.splitLayout}>
          {/* Left Column - Video */}
          <div className={styles.videoColumn}>
            <h3 className={styles.sectionHeader}>WATCH THE GARRETT MORGAN SHORT FILM</h3>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/683068367"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Middle Column - Chat */}
          <div className={styles.chatColumn}>
            <h3 className={styles.sectionHeader}>Ask Garrett Anything</h3>
            <div className={styles.chatContainer}>
              <div className={styles.chatContent}>
                <h2 className={styles.chatTitle}>Chat with AI Mentor</h2>
                
                <div className={styles.messagesContainer}>
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`${styles.message} ${styles[msg.role]}`}
                    >
                      {msg.content}
                    </div>
                  ))}
                  {isLoading && (
                    <div className={`${styles.message} ${styles.ai} ${styles.loading}`}>
                      Thinking...
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {showStarters && (
                  <div className={styles.starterQuestions}>
                    {starterQuestions.map((question, index) => (
                      <button
                        key={index}
                        className={styles.starterQuestion}
                        onClick={() => handleStarterQuestion(question)}
                        disabled={isLoading}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                    placeholder="Type your message..."
                    className={styles.input}
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => handleSendMessage(input)}
                    disabled={isLoading || !input.trim()}
                    className={styles.sendButton}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Curriculum */}
          <div className={styles.curriculumColumn}>
            <h3 className={styles.sectionHeader}>Explore Related Learning Materials</h3>
            <div className={styles.curriculumContainer}>
              <div className={styles.curriculumContent}>
                <p className={styles.curriculumDescription}>
                  Dive deeper into Garrett Morgan's story and learn about innovation, entrepreneurship, and problem-solving through our comprehensive curriculum.
                </p>
                
                <div className={styles.masterclassSection}>
                  <h3 className={styles.masterclassTitle}>Featured Masterclass</h3>
                  <div className={styles.masterclassVideo}>
                    <iframe
                      src="https://player.vimeo.com/video/1082044418"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className={styles.lessonsList}>
                  <h3 className={styles.lessonsTitle}>Curriculum Modules</h3>
                  <a href="#" className={styles.lessonLink}>
                    Lesson 1: Identifying Everyday Problems
                  </a>
                  <a href="#" className={styles.lessonLink}>
                    Lesson 2: Turning Ideas Into Inventions
                  </a>
                  <a href="#" className={styles.lessonLink}>
                    Lesson 3: Overcoming Barriers as a Founder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.upcomingFilms}>
          <h2 className={styles.sectionTitle}>Coming Soon to Founnder.ai</h2>
          <div className={styles.filmCards}>
            {upcomingFilms.map((film, index) => (
              <div key={index} className={styles.filmCard}>
                <h3 className={styles.filmTitle}>{film.title}</h3>
                <p className={styles.filmStatus}>{film.status}</p>
                <p className={styles.filmDescription}>{film.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>Join us on our mission to inspire 1M young entrepreneurs.</p>
          <div className={styles.footerButtons}>
            <button className={styles.footerButton}>Get Early Access</button>
            <button className={`${styles.footerButton} ${styles.partnerButton}`}>Partner With Us</button>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
