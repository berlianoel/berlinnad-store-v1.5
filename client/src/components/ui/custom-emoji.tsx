import React from 'react';

export interface EmojiProps {
  emoji: string;
  size?: number;
  className?: string;
  style?: 'twemoji' | 'anime' | 'noto';
}

// Professional anime-style SVG emoji components
const AnimeEmojis: Record<string, React.ReactNode> = {
  '⚡': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" fill="url(#lightning)" stroke="#4F46E5" strokeWidth="0.5"/>
      <defs>
        <linearGradient id="lightning" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '💻': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="12" rx="2" fill="url(#laptop)" stroke="#64748B" strokeWidth="0.5"/>
      <rect x="3" y="5" width="18" height="10" rx="1" fill="#1E293B"/>
      <rect x="9" y="17" width="6" height="2" rx="1" fill="#64748B"/>
      <rect x="6" y="19" width="12" height="1" rx="0.5" fill="#475569"/>
      <defs>
        <linearGradient id="laptop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9"/>
          <stop offset="100%" stopColor="#CBD5E1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🎨': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#palette)" stroke="#6366F1" strokeWidth="0.5"/>
      <circle cx="8" cy="8" r="1.2" fill="#3B82F6"/>
      <circle cx="16" cy="8" r="1.2" fill="#10B981"/>
      <circle cx="8" cy="16" r="1.2" fill="#8B5CF6"/>
      <circle cx="16" cy="16" r="1.2" fill="#F59E0B"/>
      <circle cx="12" cy="6" r="1.2" fill="#EF4444"/>
      <path d="M12 10a2 2 0 100 4 2 2 0 000-4z" fill="#F8FAFC"/>
      <defs>
        <linearGradient id="palette" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="100%" stopColor="#E2E8F0"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🚀': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" fill="#64748B"/>
      <path d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" fill="url(#rocket)" stroke="#475569" strokeWidth="0.5"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#94A3B8"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#94A3B8"/>
      <defs>
        <linearGradient id="rocket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9"/>
          <stop offset="100%" stopColor="#CBD5E1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🎯': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#F8FAFC" stroke="#6366F1" strokeWidth="1"/>
      <circle cx="12" cy="12" r="7" fill="#6366F1"/>
      <circle cx="12" cy="12" r="4" fill="#F8FAFC"/>
      <circle cx="12" cy="12" r="1.5" fill="#6366F1"/>
    </svg>
  ),
  '📱': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="12" height="20" rx="3" fill="url(#phone)" stroke="#475569" strokeWidth="0.5"/>
      <rect x="7" y="4" width="10" height="14" rx="1" fill="#1E293B"/>
      <circle cx="12" cy="20" r="0.8" fill="#64748B"/>
      <defs>
        <linearGradient id="phone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="100%" stopColor="#E2E8F0"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '📦': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="url(#box)" stroke="#92400E"/>
      <path d="M2 7l10 5 10-5M12 12v10" stroke="#78350F" strokeWidth="1"/>
      <defs>
        <linearGradient id="box" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA"/>
          <stop offset="100%" stopColor="#FDBA74"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '⭐': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
            fill="url(#star)" stroke="#F59E0B" strokeWidth="1"/>
      <defs>
        <linearGradient id="star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7"/>
          <stop offset="50%" stopColor="#FCD34D"/>
          <stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🕐': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#clock)" stroke="#374151" strokeWidth="1"/>
      <circle cx="12" cy="12" r="1" fill="#374151"/>
      <path d="M12 6v6l4 2" stroke="#374151" strokeWidth="2" fill="none"/>
      <defs>
        <linearGradient id="clock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB"/>
          <stop offset="100%" stopColor="#E5E7EB"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🎬': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" fill="url(#video)" stroke="#1F2937"/>
      <rect x="4" y="6" width="16" height="12" rx="1" fill="#111827"/>
      <polygon points="10,9 10,15 16,12" fill="#EF4444"/>
      <defs>
        <linearGradient id="video" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B5563"/>
          <stop offset="100%" stopColor="#374151"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🌐': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#globe)" stroke="#059669"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" 
            stroke="#047857" strokeWidth="1" fill="none"/>
      <defs>
        <linearGradient id="globe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399"/>
          <stop offset="100%" stopColor="#10B981"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🤖': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="12" height="20" rx="3" fill="url(#androidPhone)" stroke="#475569" strokeWidth="0.5"/>
      <rect x="7" y="4" width="10" height="14" rx="1" fill="#1E293B"/>
      <circle cx="12" cy="20" r="0.8" fill="#64748B"/>
      <rect x="9" y="2.5" width="6" height="0.5" rx="0.25" fill="#64748B"/>
      <defs>
        <linearGradient id="androidPhone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="100%" stopColor="#E2E8F0"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '✍️': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="url(#pen)" stroke="#7C2D12"/>
      <path d="M20.71 5.63l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a1 1 0 000-1.41z" 
            fill="#92400E"/>
      <defs>
        <linearGradient id="pen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7"/>
          <stop offset="100%" stopColor="#FCD34D"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🎓': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="url(#graduation)" stroke="#7C2D12"/>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#92400E"/>
      <defs>
        <linearGradient id="graduation" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1F2937"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '⚙️': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#6B7280"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" 
            fill="url(#gear)" stroke="#374151"/>
      <defs>
        <linearGradient id="gear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D1D5DB"/>
          <stop offset="100%" stopColor="#9CA3AF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🖥️': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="12" rx="2" fill="url(#monitor)" stroke="#374151"/>
      <rect x="3" y="4" width="18" height="10" rx="1" fill="#1E293B"/>
      <rect x="8" y="17" width="8" height="2" rx="1" fill="#6B7280"/>
      <rect x="4" y="19" width="16" height="2" rx="1" fill="#9CA3AF"/>
      <defs>
        <linearGradient id="monitor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6"/>
          <stop offset="100%" stopColor="#D1D5DB"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '💿': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#disc)" stroke="#6366F1"/>
      <circle cx="12" cy="12" r="3" fill="#1E293B"/>
      <circle cx="12" cy="12" r="1" fill="#F3F4F6"/>
      <defs>
        <radialGradient id="disc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0E7FF"/>
          <stop offset="70%" stopColor="#C7D2FE"/>
          <stop offset="100%" stopColor="#A5B4FC"/>
        </radialGradient>
      </defs>
    </svg>
  ),
  '🎮': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10a6 6 0 1012 0H6z" fill="url(#controller)" stroke="#7C3AED"/>
      <rect x="8" y="12" width="8" height="6" rx="3" fill="#8B5CF6"/>
      <circle cx="10" cy="8" r="1" fill="#A855F7"/>
      <circle cx="14" cy="8" r="1" fill="#A855F7"/>
      <rect x="16" y="7" width="1" height="3" rx="0.5" fill="#F3F4F6"/>
      <rect x="17.5" y="8.5" width="3" height="1" rx="0.5" fill="#F3F4F6"/>
      <defs>
        <linearGradient id="controller" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DDD6FE"/>
          <stop offset="100%" stopColor="#C4B5FD"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '📄': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="url(#document)" stroke="#374151"/>
      <path d="M14 2v6h6" fill="none" stroke="#6B7280" strokeWidth="1"/>
      <path d="M8 12h8M8 16h8M8 8h2" stroke="#9CA3AF" strokeWidth="1"/>
      <defs>
        <linearGradient id="document" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9FAFB"/>
          <stop offset="100%" stopColor="#F3F4F6"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '📚': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3z" fill="url(#book1)" stroke="#7C2D12"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" fill="url(#book2)" stroke="#92400E"/>
      <defs>
        <linearGradient id="book1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7"/>
          <stop offset="100%" stopColor="#FCD34D"/>
        </linearGradient>
        <linearGradient id="book2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBEAFE"/>
          <stop offset="100%" stopColor="#93C5FD"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  '🛒': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4V2a1 1 0 00-1-1H4a1 1 0 000 2h1v1.586l.293.293A.997.997 0 006 5h11.382a1 1 0 00.894-1.447L17 1H9a1 1 0 100 2h6.382l.724 1.447A1 1 0 0117 6H6.414l-.707-.707A.997.997 0 005 5H4a1 1 0 00-1 1v2h2.586L7 4z" fill="url(#cart)" stroke="#475569"/>
      <circle cx="9" cy="20" r="1" fill="#64748B"/>
      <circle cx="20" cy="20" r="1" fill="#64748B"/>
      <path d="M7 8h13l-1 8H8l-1-8z" fill="#6366F1"/>
      <defs>
        <linearGradient id="cart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9"/>
          <stop offset="100%" stopColor="#CBD5E1"/>
        </linearGradient>
      </defs>
    </svg>
  )
};

// Twemoji URL generator for fallback
const getTwemojiUrl = (emoji: string): string => {
  const codePoint = emoji.codePointAt(0)?.toString(16);
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg`;
};

export const CustomEmoji: React.FC<EmojiProps> = ({ 
  emoji, 
  size = 24, 
  className = "", 
  style = 'anime' 
}) => {
  const baseClasses = "inline-block select-none";
  const combinedClasses = `${baseClasses} ${className}`;

  // Use anime-style SVG if available
  if (style === 'anime' && AnimeEmojis[emoji]) {
    return (
      <span 
        className={combinedClasses}
        style={{ width: size, height: size }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          {AnimeEmojis[emoji]}
        </div>
      </span>
    );
  }

  // Fallback to Twemoji
  if (style === 'twemoji') {
    return (
      <img
        src={getTwemojiUrl(emoji)}
        alt={emoji}
        className={combinedClasses}
        style={{ width: size, height: size }}
        draggable={false}
      />
    );
  }

  // Ultimate fallback to Unicode emoji
  return (
    <span 
      className={combinedClasses}
      style={{ fontSize: size }}
    >
      {emoji}
    </span>
  );
};

// Helper function to convert emoji strings to CustomEmoji components
export const parseEmojis = (text: string, style: 'anime' | 'twemoji' = 'anime', size = 24): React.ReactNode => {
  const emojiRegex = /(⚡|💻|🎨|🚀|🎯|📱|📦|⭐|🕐|🎬|🌐|🤖|✍️|🎓|⚙️|🖥️|💿|🎮|📄|📚|🛒)/g;
  
  const parts = text.split(emojiRegex);
  
  return parts.map((part, index) => {
    if (emojiRegex.test(part)) {
      return <CustomEmoji key={index} emoji={part} style={style} size={size} />;
    }
    return part;
  });
};

export default CustomEmoji;