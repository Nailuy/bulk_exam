import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

export default function QuizPhase({ onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    const handleAnswer = (answerIndex) => {
        if (isAnswered) return;

        setSelectedAnswer(answerIndex);
        setIsAnswered(true);

        const isCorrect = answerIndex === currentQuestion.correct;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        // Auto-advance after feedback
        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentIndex(prev => prev + 1);
                    setSelectedAnswer(null);
                    setIsAnswered(false);
                    setIsTransitioning(false);
                }, 200);
            } else {
                // Quiz complete
                onComplete(isCorrect ? score + 1 : score);
            }
        }, 800);
    };

    const getAnswerClass = (index) => {
        if (!isAnswered) return '';
        if (index === currentQuestion.correct) return 'correct';
        if (index === selectedAnswer && index !== currentQuestion.correct) return 'incorrect';
        return '';
    };

    return (
        <div className="phase quiz-phase">
            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="card" style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s' }}>
                <div className="question-counter">
                    Question {currentIndex + 1} of {questions.length}
                </div>

                <h2 className="question-text">{currentQuestion.question}</h2>

                <div className="answers-grid">
                    {currentQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            className={`answer-btn ${getAnswerClass(index)}`}
                            onClick={() => handleAnswer(index)}
                            disabled={isAnswered}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
