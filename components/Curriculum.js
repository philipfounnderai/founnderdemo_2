import { useState } from "react";

const lessons = [
  {
    title: "Lesson 1: Identifying Everyday Problems",
    description: "Learn how to spot problems in your daily life that could be solved with innovation.",
    videoUrl: "https://player.vimeo.com/video/123456789",
    question: "What is one problem you noticed today that you wish you could solve?"
  },
  {
    title: "Lesson 2: Turning Ideas Into Inventions",
    description: "Explore how to turn your ideas into real inventions.",
    videoUrl: "https://player.vimeo.com/video/987654321",
    question: "Describe an idea you have for a new invention."
  },
  // Add more lessons as needed
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleAnswer = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  return (
    <div>
      <h2>Curriculum Modules</h2>
      {lessons.map((lesson, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem", border: "1px solid #333", borderRadius: "8px", padding: "1rem" }}>
          <button onClick={() => handleToggle(idx)} style={{ fontWeight: "bold", fontSize: "1.1rem", background: "none", border: "none", color: "#A7C7A3", cursor: "pointer" }}>
            {lesson.title}
          </button>
          {openIndex === idx && (
            <div>
              <p>{lesson.description}</p>
              <iframe
                src={lesson.videoUrl}
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ marginBottom: "1rem" }}
              ></iframe>
              <div>
                <label>
                  <strong>Reflection:</strong> {lesson.question}
                  <textarea
                    value={answers[idx] || ""}
                    onChange={e => handleAnswer(idx, e.target.value)}
                    style={{ width: "100%", minHeight: "60px", marginTop: "0.5rem" }}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 