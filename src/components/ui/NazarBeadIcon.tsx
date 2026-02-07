export default function NazarBeadIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nazar boncuğu"
    >
      {/* Subtle shadow */}
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ribbon (red) */}
      <g filter="url(#s)">
        {/* left loop */}
        <path
          d="M44 35 C34 28, 22 30, 22 42 C22 52, 32 56, 40 50 C33 49, 29 45, 29 41 C29 34, 38 33, 44 39 Z"
          fill="#D62828"
        />
        {/* right loop */}
        <path
          d="M76 35 C86 28, 98 30, 98 42 C98 52, 88 56, 80 50 C87 49, 91 45, 91 41 C91 34, 82 33, 76 39 Z"
          fill="#D62828"
        />
        {/* center knot */}
        <path
          d="M52 40 C56 34, 64 34, 68 40 C64 44, 56 44, 52 40 Z"
          fill="#B91C1C"
        />
        {/* tails */}
        <path d="M46 45 L34 68 C44 66, 50 58, 55 51 Z" fill="#D62828" />
        <path d="M74 45 L86 68 C76 66, 70 58, 65 51 Z" fill="#D62828" />
      </g>

      {/* Nazar eye */}
      <g filter="url(#s)">
        {/* outer dark blue */}
        <circle cx="60" cy="70" r="28" fill="#1E3A8A" />
        {/* inner blue */}
        <circle cx="60" cy="70" r="21" fill="#2563EB" />
        {/* yellow ring */}
        <circle cx="60" cy="70" r="14" fill="#FBBF24" />
        {/* white */}
        <circle cx="60" cy="70" r="9" fill="#FFFFFF" />
        {/* pupil */}
        <circle cx="60" cy="70" r="4.5" fill="#111827" />
        {/* highlight */}
        <circle cx="57" cy="67" r="1.5" fill="#FFFFFF" opacity="0.85" />
      </g>
    </svg>
  );
}
