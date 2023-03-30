import React from 'react';

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows you to build complex UIs by breaking them down into reusable components.',
    },
    {
      id: 2,
      question: 'What are hooks in React?',
      answer:
        'Hooks are a new feature in React that allows you to use state and other React features without writing a class. They let you use React features in functional components, making it easier to write reusable code and avoid common pitfalls like "wrapper hell."',
    },
    {
      id: 3,
      question: 'What is the virtual DOM?',
      answer:
        'The virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the real DOM by a library like React. This allows React to update the UI efficiently, since it can update only the parts of the DOM that have changed.',
    },
  ];

  const handleQuestionClick = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(questionId);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-4">
        {questions.map((question) => (
          <li key={question.id}>
            <button
              className="w-full text-left font-medium"
              onClick={() => handleQuestionClick(question.id)}
            >
              {question.question}
            </button>
            {selectedQuestion === question.id && (
              <p className="mt-2">{question.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
