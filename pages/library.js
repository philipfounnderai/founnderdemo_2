import Layout from '@/components/Layout';
import { useState } from "react";
import styles from "@/styles/Library.module.css";

const categories = [
  "All",
  "Technology",
  "Business & Finance",
  "Media",
  "Education & Social Justice"
];

const films = {
  "Technology": [
    {
      name: "Garrett Morgan",
      title: "Standing in Fire",
      status: "Complete",
      description: "The story of the inventor who saved countless lives with his safety hood and traffic signal.",
      category: "Technology"
    },
    {
      name: "Lewis Latimer",
      title: "Lighting the Way",
      status: "Early Development",
      description: "The electrical pioneer who helped illuminate the modern world.",
      category: "Technology"
    },
    {
      name: "Chien-Shiung Wu",
      title: "The First Lady of Physics",
      status: "Early Development",
      description: "The groundbreaking physicist who changed our understanding of the universe.",
      category: "Technology"
    },
    {
      name: "Granville T. Woods",
      title: "The Black Edison",
      status: "Early Development",
      description: "The prolific inventor who revolutionized railway communications.",
      category: "Technology"
    },
    {
      name: "Norbert Rillieux",
      title: "Sweet Revolution",
      status: "Early Development",
      description: "The engineer who transformed the sugar industry.",
      category: "Technology"
    }
  ],
  "Business & Finance": [
    {
      name: "Reginald F. Lewis",
      title: "The Billion Dollar Man",
      status: "Early Development",
      description: "The first African American to build a billion-dollar company.",
      category: "Business & Finance"
    },
    {
      name: "Maggie L. Walker",
      title: "Banking on Change",
      status: "Early Development",
      description: "The first African American woman to charter a bank.",
      category: "Business & Finance"
    },
    {
      name: "Lillian Vernon",
      title: "The Catalog Queen",
      status: "Early Development",
      description: "The entrepreneur who built a mail-order empire.",
      category: "Business & Finance"
    },
    {
      name: "Ah Toy",
      title: "The Gold Rush Entrepreneur",
      status: "Early Development",
      description: "The pioneering businesswoman of the California Gold Rush.",
      category: "Business & Finance"
    },
    {
      name: "Biddy Mason",
      title: "From Slavery to Success",
      status: "Early Development",
      description: "The nurse and real estate entrepreneur who built wealth from nothing.",
      category: "Business & Finance"
    }
  ],
  "Media": [
    {
      name: "Dorothy Arzner",
      title: "The First Lady of Film",
      status: "Early Development",
      description: "The pioneering female director who broke barriers in Hollywood.",
      category: "Media"
    },
    {
      name: "Tichi Wilkerson Kassel",
      title: "The Hollywood Reporter",
      status: "Early Development",
      description: "The woman who transformed entertainment journalism.",
      category: "Media"
    },
    {
      name: "Sessue Hayakawa",
      title: "The Silent Star",
      status: "Early Development",
      description: "The first Asian American movie star.",
      category: "Media"
    },
    {
      name: "Oscar Micheaux",
      title: "The Race Film Pioneer",
      status: "Early Development",
      description: "The first major African American filmmaker.",
      category: "Media"
    },
    {
      name: "Ramón Peón",
      title: "The Cuban Cinema Master",
      status: "Early Development",
      description: "The director who shaped Latin American cinema.",
      category: "Media"
    }
  ],
  "Education & Social Justice": [
    {
      name: "Myles Horton",
      title: "The Highlander",
      status: "Early Development",
      description: "The educator who trained civil rights leaders.",
      category: "Education & Social Justice"
    },
    {
      name: "William Trotter",
      title: "The Guardian",
      status: "Early Development",
      description: "The journalist and civil rights activist who fought for equality.",
      category: "Education & Social Justice"
    },
    {
      name: "Jane Elliott",
      title: "The Blue Eyes Experiment",
      status: "Early Development",
      description: "The educator who changed how we understand racism.",
      category: "Education & Social Justice"
    },
    {
      name: "Diane Nash",
      title: "The Freedom Fighter",
      status: "Early Development",
      description: "The civil rights leader who organized student movements.",
      category: "Education & Social Justice"
    },
    {
      name: "Maria Montessori",
      title: "The Child's Guide",
      status: "Early Development",
      description: "The revolutionary educator who changed how we teach children.",
      category: "Education & Social Justice"
    }
  ]
};

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allFilms = Object.values(films).flat();
  const displayedFilms = selectedCategory === "All" 
    ? allFilms 
    : films[selectedCategory] || [];

  return (
    <Layout title="Founders Library | Founnder.ai">
      <main className={styles.main}>
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.filmGrid}>
          {displayedFilms.map((film, index) => (
            <div key={index} className={styles.filmCard}>
              <div className={styles.filmContent}>
                <h3 className={styles.filmName}>{film.name}</h3>
                <h4 className={styles.filmTitle}>{film.title}</h4>
                <span className={`${styles.status} ${styles[film.status.toLowerCase().replace(" ", "")]}`}>
                  {film.status}
                </span>
                <p className={styles.description}>{film.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Help bring these untold stories to life. Join our mission.
          </h2>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>Get Early Access</button>
            <button className={`${styles.ctaButton} ${styles.partnerButton}`}>
              Partner with us
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
} 