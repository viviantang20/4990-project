"use client";
// components/Quiz.js
import { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);

  const incrementCorrect = () => {
    setNumCorrect((prev) => prev + 1);
  };

  const handleOptionSelect = (option) => {
    if (!showFeedback) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="container mx-auto rounded-md ">
      {currentQuestion < questions.length ? (
        <div className="">
          <h2 className="text-md font-bold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 mb-2 text-white rounded-md text-sm ${
                  selectedOption === option
                    ? showFeedback
                      ? questions[currentQuestion].correctAnswer === option
                        ? "bg-green-700" // Highlight selected correct answer in green after submission
                        : "bg-red-500" // Highlight selected incorrect answer in red after submission
                      : "bg-emerald-600" // Highlight selected answer without submission
                    : showFeedback &&
                      questions[currentQuestion].correctAnswer === option
                    ? "bg-green-700" // Highlight correct answer after submission
                    : "bg-emerald-900"
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>

          {currentQuestion !== questions.length && (
            <button
              className={`mt-4 p-2 rounded-md ${
                showFeedback
                  ? "bg-green-500 text-white"
                  : "bg-green-500 text-white"
              }`}
              onClick={showFeedback ? handleNextQuestion : handleSubmit}
            >
              {showFeedback ? "Next" : "Submit"}
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
