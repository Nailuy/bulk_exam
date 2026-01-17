import { useState, useEffect } from 'react';
import { questions as allQuestions } from '../data/questions';

// Shuffling utility
const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function QuizPhase({ onComplete }) {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Initialize/Shuffle questions
    useEffect(() => {
        const shuffled = shuffleArray(allQuestions);
        setRandomQuestions(shuffled.slice(0, 20));
    }, []);

    const currentQuestion = randomQuestions[currentIndex];
    const progress = ((currentIndex) / 20) * 100;

    if (!currentQuestion) return <div>Loading...</div>;

    const handleAnswer = (answerIndex) => {
        if (isAnswered) return;

        setSelectedAnswer(answerIndex);
        setIsAnswered(true);

        const isCorrect = answerIndex === currentQuestion.correct;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        // Auto-advance after feedback
        // Auto-advance after feedback
        setTimeout(() => {
            if (currentIndex < 19) { // 20 questions total (0-19)
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
                    Question {currentIndex + 1} of 20
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
