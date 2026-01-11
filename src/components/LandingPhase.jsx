import { useState, useRef } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function LandingPhase({ onStart }) {
    const [nickname, setNickname] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileSelect = (file) => {
        setError('');

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file');
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError('File size must be less than 5MB');
            return;
        }

        setAvatar(file);
        const reader = new FileReader();
        reader.onload = (e) => setAvatarPreview(e.target.result);
        reader.readAsDataURL(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleSubmit = () => {
        if (!nickname.trim()) {
            setError('Please enter your nickname');
            return;
        }
        onStart({ nickname: nickname.trim(), avatar: avatarPreview });
    };

    const isValid = nickname.trim().length > 0;

    const floatingMascots = [
        { src: "/img/1-lfg.png", style: { top: '10%', left: '5%', animationDelay: '0s' } },
        { src: "/img/2-downbad.png", style: { top: '30%', right: '5%', animationDelay: '1s' } },
        { src: "/img/3-salute.png", style: { bottom: '20%', left: '8%', animationDelay: '2s' } },
        { src: "/img/4-uwu.png", style: { top: '15%', right: '15%', animationDelay: '0.5s' } },
        { src: "/img/7-pray.png", style: { bottom: '10%', right: '25%', animationDelay: '1.5s' } },
        { src: "/img/8-fighter.png", style: { top: '50%', left: '-2%', animationDelay: '2.5s' } },
        { src: "/img/9-heart.png", style: { top: '5%', left: '50%', transform: 'translateX(-50%)', animationDelay: '3s' } }
    ];

    return (
        <div className="phase landing-phase">
            {/* Decor Mascots */}
            <div className="mascot-decor-layer">
                {floatingMascots.map((m, i) => (
                    <img key={i} src={m.src} className="floating-mascot" style={m.style} alt="" />
                ))}
            </div>

            <div className="card">
                <img
                    src="/img/BULK-Logomark-Dark.svg"
                    alt="Bulktrade"
                    className="landing-logo"
                    style={{ filter: 'invert(1)' }}
                />

                <h1 className="landing-title">Proficiency Exam</h1>
                <p className="landing-subtitle">// Prove your Bulktrade knowledge</p>

                <div className="input-group">
                    <label className="input-label">Nickname (Discord/X)</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="@yourusername"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        maxLength={32}
                    />
                </div>

                <div className="input-group">
                    <label className="input-label">Avatar (Optional, max 5MB)</label>
                    <div
                        className={`avatar-upload ${avatarPreview ? 'has-image' : ''} ${isDragging ? 'dragging' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        style={isDragging ? { borderColor: 'var(--agave-green)' } : {}}
                    >
                        {avatarPreview ? (
                            <>
                                <img src={avatarPreview} alt="Avatar" className="avatar-preview" />
                                <div className="avatar-upload-overlay">
                                    <span>Click to change</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="avatar-upload-icon">📷</div>
                                <div className="avatar-upload-text">
                                    Drag & drop or click to upload
                                </div>
                                <div className="avatar-upload-hint">PNG, JPG, GIF up to 5MB</div>
                            </>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(e) => handleFileSelect(e.target.files[0])}
                        style={{ display: 'none' }}
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button
                    className="btn btn-primary btn-full"
                    onClick={handleSubmit}
                    disabled={!isValid}
                >
                    Start Exam →
                </button>
            </div>

            {/* Hero mascot placeholder */}
            <img
                src="/img/10-gBULK.png"
                alt=""
                className="hero-mascot"
            />
        </div>
    );
}
