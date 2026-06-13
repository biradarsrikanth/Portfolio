export default function HeroFallback() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Network nodes */}
        <circle cx="200" cy="280" r="6" fill="#06b6d4" opacity="0.8" />
        <circle cx="400" cy="320" r="8" fill="#06b6d4" opacity="0.9" />
        <circle cx="600" cy="280" r="6" fill="#06b6d4" opacity="0.8" />

        {/* Node labels */}
        <text x="200" y="310" textAnchor="middle" fill="#06b6d4" fontSize="12" fontFamily="monospace" opacity="0.6">
          Data
        </text>
        <text x="400" y="355" textAnchor="middle" fill="#06b6d4" fontSize="12" fontFamily="monospace" opacity="0.6">
          Backend
        </text>
        <text x="600" y="310" textAnchor="middle" fill="#06b6d4" fontSize="12" fontFamily="monospace" opacity="0.6">
          Cloud
        </text>

        {/* Flow edges */}
        <line x1="210" y1="280" x2="390" y2="320" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
        <line x1="410" y1="320" x2="590" y2="280" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

        {/* Decorative particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + Math.random() * 600}
            cy={100 + Math.random() * 400}
            r={1 + Math.random() * 2}
            fill="#06b6d4"
            opacity={0.1 + Math.random() * 0.2}
          />
        ))}

        {/* Decorative connection lines */}
        {Array.from({ length: 15 }).map((_, i) => {
          const x1 = 100 + Math.random() * 600;
          const y1 = 100 + Math.random() * 400;
          const x2 = x1 + (Math.random() - 0.5) * 200;
          const y2 = y1 + (Math.random() - 0.5) * 150;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#06b6d4"
              strokeWidth="0.5"
              opacity="0.08"
            />
          );
        })}
      </svg>
    </div>
  );
}
