import { useState } from 'react';
import LandingPhase from './components/LandingPhase';
import QuizPhase from './components/QuizPhase';
import ResultPhase from './components/ResultPhase';

const PHASES = {
    LANDING: 'landing',
    QUIZ: 'quiz',
    RESULT: 'result'
};

export default function App() {
    const [phase, setPhase] = useState(PHASES.LANDING);
    const [userData, setUserData] = useState({
        nickname: '',
        avatar: null
    });
    const [score, setScore] = useState(0);

    const handleStart = (data) => {
        setUserData(data);
        setPhase(PHASES.QUIZ);
    };

    const handleQuizComplete = (finalScore) => {
        setScore(finalScore);
        setPhase(PHASES.RESULT);
    };

    return (
        <div className="app">
            {phase === PHASES.LANDING && (
                <LandingPhase onStart={handleStart} />
            )}

            {phase === PHASES.QUIZ && (
                <QuizPhase onComplete={handleQuizComplete} />
            )}

            {phase === PHASES.RESULT && (
                <ResultPhase
                    nickname={userData.nickname}
                    avatar={userData.avatar}
                    score={score}
                />
            )}
        </div>
    );
}
