import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { getRoleByScore } from '../data/questions';

export default function ResultPhase({ nickname, avatar, score }) {
    const cardRef = useRef(null);
    const role = getRoleByScore(score);

    const handleDownload = async () => {
        if (!cardRef.current) return;

        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false
            });

            const link = document.createElement('a');
            link.download = `bulktrade-${nickname.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Failed to generate image:', err);
        }
    };

    const defaultAvatar = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(nickname)}`;
    const avatarSrc = avatar || defaultAvatar;

    return (
        <div className="phase result-phase">
            <h2 className="result-title">Your Bulktrade Identity</h2>

            <div className="identity-card-wrapper">
                <div className="identity-card" ref={cardRef}>
                    {/* Background Image */}
                    <img
                        src="/img/Card_Viking Era.png"
                        alt=""
                        className="card-bg"
                    />

                    {/* Content Overlay */}
                    <div className="card-content">
                        {/* Top Section - Avatar & User Info */}
                        <div className="card-top">
                            <div className="card-user-section">
                                <div className="card-avatar-wrapper">
                                    <div
                                        className="card-avatar-glow"
                                        style={{ borderColor: role.color }}
                                    />
                                    <img
                                        src={avatarSrc}
                                        alt={nickname}
                                        className="card-avatar"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                                <div className="card-user-info">
                                    <div className="card-nickname">{nickname}</div>
                                    <div
                                        className={`card-role ${role.glitch ? 'glitch' : ''}`}
                                        style={{ color: role.color }}
                                    >
                                        {role.name}
                                    </div>
                                </div>
                            </div>
                            <div className="card-score-badge" style={{ borderColor: role.color }}>
                                <span className="score-number">{score}</span>
                                <span className="score-divider">/</span>
                                <span className="score-total">20</span>
                            </div>
                        </div>

                        {/* Bottom Section - Mascot */}
                        <div className="card-bottom">
                            <img
                                src={`/img/${role.mascot}`}
                                alt=""
                                className="card-mascot"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="download-actions">
                <button className="btn btn-primary" onClick={handleDownload}>
                    Download Card
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => window.location.reload()}
                >
                    ↻ Try Again
                </button>
            </div>
        </div>
    );
}
