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

    const floatingMascots = [
        { src: "/img/1-lfg.png", style: { top: '10%', left: '8%', animationDelay: '0s' } },
        { src: "/img/2-downbad.png", style: { top: '25%', right: '5%', animationDelay: '1s' } },
        { src: "/img/3-salute.png", style: { bottom: '5%', left: '8%', animationDelay: '2s' } },
        { src: "/img/4-uwu.png", style: { top: '15%', right: '15%', animationDelay: '0.5s' } },
        { src: "/img/7-pray.png", style: { bottom: '5%', right: '25%', animationDelay: '1.5s' } },
        { src: "/img/8-fighter.png", style: { top: '40%', left: '5%', animationDelay: '2.5s' } },
        { src: "/img/9-heart.png", style: { top: '2%', left: '50%', transform: 'translateX(-50%)', animationDelay: '3s' } }
    ];

    return (
        <div className="app">
            {/* Decor Mascots Global Layer */}
            <div className="mascot-decor-layer">
                {floatingMascots.map((m, i) => (
                    <img key={i} src={m.src} className="floating-mascot" style={m.style} alt="" />
                ))}
            </div>

            {/* Hero Mascot Global */}
            <img
                src="/img/10-gBULK.png"
                alt=""
                className="hero-mascot"
            />

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
