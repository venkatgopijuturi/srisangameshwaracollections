import React from 'react';
import './TraditionalBorder.css';

/**
 * Traditional Indian Ornamental Border Component
 * Elaborate gold filigree with scrollwork, mandala medallions, and ruby gem accents
 * Inspired by traditional Indian jewellery border art (Reference: Design 1)
 */

/* ═══════════════════════════════════════════════════════════════
 * SVG Motif: Elaborate Gold & Ruby Filigree Unit
 * Features: scrollwork curls, mandala center, gem stones, dot chains
 * ═══════════════════════════════════════════════════════════════ */
const FiligreeMandalaUnit = ({ gold = '#D4AF37', darkGold = '#B8941F', lightGold = '#E6BE8A', ruby = '#8B1A1A', deepRuby = '#6B0F0F', accent = '#C0392B' }) => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ── Central Mandala Medallion ── */}
        <circle cx="60" cy="20" r="16" fill="none" stroke={gold} strokeWidth="1" opacity="0.7" />
        <circle cx="60" cy="20" r="15" fill="none" stroke={darkGold} strokeWidth="0.3" opacity="0.4" />

        {/* Outer ring decorative dots */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const x = 60 + 15.5 * Math.cos(rad);
            const y = 20 + 15.5 * Math.sin(rad);
            return <circle key={angle} cx={x} cy={y} r="0.8" fill={gold} opacity="0.6" />;
        })}

        {/* Middle ornamental ring */}
        <circle cx="60" cy="20" r="12" fill="none" stroke={gold} strokeWidth="0.7" opacity="0.55" />

        {/* Scalloped inner pattern */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const cx = 60 + 10 * Math.cos(rad);
            const cy = 20 + 10 * Math.sin(rad);
            return <circle key={`scallop-${angle}`} cx={cx} cy={cy} r="3" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.3" />;
        })}

        {/* Inner decorative ring */}
        <circle cx="60" cy="20" r="8.5" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.5" />

        {/* Ruby inner fill ring */}
        <circle cx="60" cy="20" r="7" fill={deepRuby} opacity="0.18" />
        <circle cx="60" cy="20" r="7" fill="none" stroke={gold} strokeWidth="0.6" opacity="0.7" />

        {/* Main ruby gem center */}
        <circle cx="60" cy="20" r="5" fill={ruby} opacity="0.55" />
        <circle cx="60" cy="20" r="5" fill="none" stroke={gold} strokeWidth="0.7" opacity="0.85" />

        {/* Inner gold detail ring */}
        <circle cx="60" cy="20" r="3.5" fill="none" stroke={lightGold} strokeWidth="0.3" opacity="0.5" />

        {/* Center gold gem */}
        <circle cx="60" cy="20" r="2" fill={gold} opacity="0.9" />
        <circle cx="60" cy="20" r="1" fill="#FFF" opacity="0.35" />

        {/* Gem highlight */}
        <ellipse cx="58" cy="18" rx="1.5" ry="1" fill="white" opacity="0.12" transform="rotate(-25 58 18)" />

        {/* ── Cardinal Petals / Drops ── */}
        {/* Top petal + ruby */}
        <path d="M60 4 C62 6, 63 8, 60 10 C57 8, 58 6, 60 4Z" fill={gold} opacity="0.5" />
        <circle cx="60" cy="2.5" r="1.3" fill={ruby} opacity="0.5" />
        <circle cx="60" cy="2.5" r="1.3" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.7" />
        <circle cx="60" cy="2.5" r="0.5" fill={gold} opacity="0.5" />

        {/* Bottom petal + ruby */}
        <path d="M60 36 C62 34, 63 32, 60 30 C57 32, 58 34, 60 36Z" fill={gold} opacity="0.5" />
        <circle cx="60" cy="37.5" r="1.3" fill={ruby} opacity="0.5" />
        <circle cx="60" cy="37.5" r="1.3" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.7" />
        <circle cx="60" cy="37.5" r="0.5" fill={gold} opacity="0.5" />

        {/* ── LEFT SIDE SCROLLWORK ── */}
        <path
            d="M34 12 C30 7, 22 5, 16 9 C12 12, 14 18, 19 16 C23 14, 21 10, 17 11"
            fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" strokeLinecap="round"
        />
        <path d="M17 11 C19 12, 19 15, 17 14" fill="none" stroke={lightGold} strokeWidth="0.5" opacity="0.5" strokeLinecap="round" />

        <path
            d="M34 28 C30 33, 22 35, 16 31 C12 28, 14 22, 19 24 C23 26, 21 30, 17 29"
            fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" strokeLinecap="round"
        />
        <path d="M17 29 C19 28, 19 25, 17 26" fill="none" stroke={lightGold} strokeWidth="0.5" opacity="0.5" strokeLinecap="round" />

        {/* Left leaf/drop */}
        <path d="M14 20 C12 18, 8 17, 6 20 C8 23, 12 22, 14 20Z" fill={ruby} opacity="0.4" />
        <path d="M14 20 C12 18, 8 17, 6 20 C8 23, 12 22, 14 20Z" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.65" />
        <circle cx="9.5" cy="20" r="0.8" fill={gold} opacity="0.5" />

        {/* Leaf sprays */}
        <path d="M24 7 C26 4, 29 5, 27 8Z" fill={gold} opacity="0.35" />
        <path d="M24 33 C26 36, 29 35, 27 32Z" fill={gold} opacity="0.35" />
        <path d="M20 6 C21 3.5, 23 4.5, 22 7Z" fill={lightGold} opacity="0.25" />
        <path d="M20 34 C21 36.5, 23 35.5, 22 33Z" fill={lightGold} opacity="0.25" />

        {/* Far left ruby gem */}
        <circle cx="3" cy="20" r="1.8" fill={deepRuby} opacity="0.35" />
        <circle cx="3" cy="20" r="1.8" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.55" />
        <circle cx="3" cy="20" r="0.6" fill={gold} opacity="0.45" />

        {/* ── RIGHT SIDE SCROLLWORK (mirror) ── */}
        <path
            d="M86 12 C90 7, 98 5, 104 9 C108 12, 106 18, 101 16 C97 14, 99 10, 103 11"
            fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" strokeLinecap="round"
        />
        <path d="M103 11 C101 12, 101 15, 103 14" fill="none" stroke={lightGold} strokeWidth="0.5" opacity="0.5" strokeLinecap="round" />

        <path
            d="M86 28 C90 33, 98 35, 104 31 C108 28, 106 22, 101 24 C97 26, 99 30, 103 29"
            fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" strokeLinecap="round"
        />
        <path d="M103 29 C101 28, 101 25, 103 26" fill="none" stroke={lightGold} strokeWidth="0.5" opacity="0.5" strokeLinecap="round" />

        {/* Right leaf/drop */}
        <path d="M106 20 C108 18, 112 17, 114 20 C112 23, 108 22, 106 20Z" fill={ruby} opacity="0.4" />
        <path d="M106 20 C108 18, 112 17, 114 20 C112 23, 108 22, 106 20Z" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.65" />
        <circle cx="110.5" cy="20" r="0.8" fill={gold} opacity="0.5" />

        {/* Right leaf sprays */}
        <path d="M96 7 C94 4, 91 5, 93 8Z" fill={gold} opacity="0.35" />
        <path d="M96 33 C94 36, 91 35, 93 32Z" fill={gold} opacity="0.35" />
        <path d="M100 6 C99 3.5, 97 4.5, 98 7Z" fill={lightGold} opacity="0.25" />
        <path d="M100 34 C99 36.5, 97 35.5, 98 33Z" fill={lightGold} opacity="0.25" />

        {/* Far right ruby gem */}
        <circle cx="117" cy="20" r="1.8" fill={deepRuby} opacity="0.35" />
        <circle cx="117" cy="20" r="1.8" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.55" />
        <circle cx="117" cy="20" r="0.6" fill={gold} opacity="0.45" />

        {/* ── Diagonal corner filigree ── */}
        <path d="M39 5 C36 2, 32 3, 34 7" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.3" />
        <path d="M81 5 C84 2, 88 3, 86 7" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.3" />
        <path d="M39 35 C36 38, 32 37, 34 33" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.3" />
        <path d="M81 35 C84 38, 88 37, 86 33" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.3" />

        {/* Accent rubies at diagonals */}
        <circle cx="41" cy="7" r="0.6" fill={accent} opacity="0.35" />
        <circle cx="79" cy="7" r="0.6" fill={accent} opacity="0.35" />
        <circle cx="41" cy="33" r="0.6" fill={accent} opacity="0.35" />
        <circle cx="79" cy="33" r="0.6" fill={accent} opacity="0.35" />
    </svg>
);

/* ═══════════════════════════════════════════════════════════════
 * Grand Center Medallion (overlays at center of border)
 * ═══════════════════════════════════════════════════════════════ */
const GrandMedallion = ({ gold = '#D4AF37', ruby = '#8B1A1A', lightGold = '#E6BE8A' }) => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outermost ring */}
        <circle cx="28" cy="28" r="26" fill="none" stroke={gold} strokeWidth="0.7" opacity="0.4" />
        {/* Outer scallop dots */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + 25 * Math.cos(rad);
            const cy = 28 + 25 * Math.sin(rad);
            return <circle key={`outer-${angle}`} cx={cx} cy={cy} r="1" fill={gold} opacity="0.3" />;
        })}

        {/* Main ornamental ring */}
        <circle cx="28" cy="28" r="20" fill="none" stroke={gold} strokeWidth="1" opacity="0.6" />
        <circle cx="28" cy="28" r="19" fill="none" stroke={lightGold} strokeWidth="0.3" opacity="0.35" />

        {/* Ring detail dots */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + 19.5 * Math.cos(rad);
            const cy = 28 + 19.5 * Math.sin(rad);
            return <circle key={`dot-${angle}`} cx={cx} cy={cy} r="0.5" fill={gold} opacity="0.5" />;
        })}

        {/* 8-petal lotus */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const tipX = 28 + 16 * Math.cos(rad);
            const tipY = 28 + 16 * Math.sin(rad);
            const blr = ((angle - 18) * Math.PI) / 180;
            const brr = ((angle + 18) * Math.PI) / 180;
            const bl = { x: 28 + 10 * Math.cos(blr), y: 28 + 10 * Math.sin(blr) };
            const br = { x: 28 + 10 * Math.cos(brr), y: 28 + 10 * Math.sin(brr) };
            return (
                <path key={`petal-${angle}`} d={`M${bl.x} ${bl.y} Q${tipX} ${tipY} ${br.x} ${br.y}`}
                    fill="none" stroke={gold} strokeWidth="0.5" opacity="0.45" />
            );
        })}

        {/* Inner decorative ring */}
        <circle cx="28" cy="28" r="12" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.5" />

        {/* Ruby inner fill */}
        <circle cx="28" cy="28" r="9" fill={ruby} opacity="0.15" />
        <circle cx="28" cy="28" r="9" fill="none" stroke={gold} strokeWidth="0.6" opacity="0.6" />

        {/* Main ruby gem */}
        <circle cx="28" cy="28" r="6.5" fill={ruby} opacity="0.55" />
        <circle cx="28" cy="28" r="6.5" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.8" />

        {/* Gold inner detail */}
        <circle cx="28" cy="28" r="4" fill="none" stroke={lightGold} strokeWidth="0.4" opacity="0.5" />

        {/* Center gem */}
        <circle cx="28" cy="28" r="2.5" fill={gold} opacity="0.9" />
        <circle cx="28" cy="28" r="1.2" fill="#FFF" opacity="0.4" />

        {/* Cardinal ruby drops */}
        {[0, 90, 180, 270].map(angle => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + 23 * Math.cos(rad);
            const cy = 28 + 23 * Math.sin(rad);
            return (
                <g key={`cardinal-${angle}`}>
                    <circle cx={cx} cy={cy} r="2" fill={ruby} opacity="0.4" />
                    <circle cx={cx} cy={cy} r="2" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.6" />
                    <circle cx={cx} cy={cy} r="0.7" fill={gold} opacity="0.5" />
                </g>
            );
        })}
    </svg>
);

/* ═══════════════════════════════════════════════════════════════
 * Chain Dots: gold dots with periodic ruby gem accents
 * ═══════════════════════════════════════════════════════════════ */
const generateOrnamentalDots = (count = 60) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
        const isGem = i % 10 === 0;
        const isAccent = i % 3 === 0;
        dots.push(
            <span key={i} className={`border-dot${isGem ? ' gem' : isAccent ? ' accent' : ''}`} />
        );
    }
    return dots;
};

const getRepeatCount = () => {
    if (typeof window === 'undefined') return 18;
    return Math.ceil(window.innerWidth / 120) + 2;
};

const TraditionalBorder = ({
    variant = 'default',
    animate = true,
    showMedallion = false,
    showGlow = true,
    className = ''
}) => {
    const [repeatCount, setRepeatCount] = React.useState(getRepeatCount());

    React.useEffect(() => {
        const handleResize = () => setRepeatCount(getRepeatCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const wrapperClass = [
        'traditional-border-wrapper',
        variant === 'inverted' ? 'inverted' : '',
        variant === 'compact' ? 'compact' : '',
        className
    ].filter(Boolean).join(' ');

    const colors = variant === 'inverted'
        ? { gold: '#E6BE8A', darkGold: '#D4AF37', lightGold: '#F0D4A0', ruby: '#A0522D', deepRuby: '#8B4513', accent: '#CD853F' }
        : { gold: '#D4AF37', darkGold: '#B8941F', lightGold: '#E6BE8A', ruby: '#8B1A1A', deepRuby: '#6B0F0F', accent: '#C0392B' };

    return (
        <div className={wrapperClass}>
            {showGlow && <div className="border-glow" />}

            {/* Top fine line */}
            <div className="border-fine-line" />

            {/* Top chain dots */}
            <div className="border-dot-row">
                {generateOrnamentalDots(60)}
            </div>

            {/* Upper gold band */}
            <div className="border-fine-line thick" />

            {/* ── Main Pattern Strip ── */}
            <div className="border-pattern-strip">
                {Array.from({ length: repeatCount }).map((_, i) => (
                    <FiligreeMandalaUnit key={i} {...colors} />
                ))}
                {animate && <div className="border-shimmer-overlay" />}
            </div>

            {/* Lower gold band */}
            <div className="border-fine-line thick" />

            {/* Bottom chain dots */}
            <div className="border-dot-row">
                {generateOrnamentalDots(60)}
            </div>

            {/* Bottom fine line */}
            <div className="border-fine-line" />

            {/* Grand Medallion at center */}
            {showMedallion && (
                <div className="border-center-medallion">
                    <GrandMedallion gold={colors.gold} ruby={colors.ruby} lightGold={colors.lightGold} />
                </div>
            )}
        </div>
    );
};

export const OrnamentalDivider = ({ motif = '✦' }) => (
    <div className="ornamental-section-divider">
        <div className="divider-line" />
        <span className="divider-motif">{motif}</span>
        <div className="divider-line" />
    </div>
);

export default TraditionalBorder;
