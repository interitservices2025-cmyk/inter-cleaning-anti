import React from "react";

interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Illustrations = {
  // 1. Hero Illustration - Clean House & Soap Bubbles
  Hero: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="500" height="400" rx="32" fill="#F8F8F8" />
      {/* Abstract background shapes */}
      <circle cx="420" cy="100" r="120" fill="#FDAE00" fillOpacity="0.1" />
      <circle cx="80" cy="320" r="100" fill="#DC0D73" fillOpacity="0.05" />

      {/* House outline */}
      <path
        d="M 170,280 L 170,180 L 250,110 L 330,180 L 330,280 Z"
        stroke="#1F2937"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />
      {/* Door */}
      <path
        d="M 230,280 L 230,220 L 270,220 L 270,280 Z"
        stroke="#DC0D73"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#DC0D73"
        fillOpacity="0.1"
      />
      {/* Window */}
      <rect
        x="200"
        y="160"
        width="30"
        height="30"
        rx="6"
        stroke="#1F2937"
        strokeWidth="3"
        fill="#F8F8F8"
      />
      <rect
        x="270"
        y="160"
        width="30"
        height="30"
        rx="6"
        stroke="#1F2937"
        strokeWidth="3"
        fill="#F8F8F8"
      />

      {/* Bubbles & sparkles */}
      <circle cx="130" cy="140" r="16" fill="#FDAE00" fillOpacity="0.2" stroke="#FDAE00" strokeWidth="2" />
      <circle cx="110" cy="180" r="8" fill="#DC0D73" fillOpacity="0.2" stroke="#DC0D73" strokeWidth="2" />
      <circle cx="370" cy="190" r="20" fill="#DC0D73" fillOpacity="0.1" stroke="#DC0D73" strokeWidth="2" />
      <circle cx="350" cy="240" r="10" fill="#FDAE00" fillOpacity="0.2" stroke="#FDAE00" strokeWidth="2" />

      {/* Sparkles */}
      <g transform="translate(100, 90) scale(0.8)" stroke="#FDAE00" strokeWidth="2.5" fill="none">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="#FDAE00" />
      </g>
      <g transform="translate(380, 100) scale(0.6)" stroke="#DC0D73" strokeWidth="2" fill="none">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </g>
      <g transform="translate(250, 70) scale(1.2)" stroke="#FDAE00" strokeWidth="3" fill="none">
        <path d="M12 6 L12 18 M6 12 L18 12" strokeLinecap="round" />
        <path d="M8 8 L16 16 M8 16 L16 8" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 2. Residential Illustration
  Residential: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="60" fill="#DC0D73" fillOpacity="0.05" />
      <path
        d="M 110,140 L 110,95 L 150,60 L 190,95 L 190,140 Z"
        stroke="#1F2937"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />
      <rect x="135" y="85" width="30" height="25" rx="4" stroke="#DC0D73" strokeWidth="2.5" />
      <path d="M 135,140 L 135,110 L 165,110 L 165,140" stroke="#1F2937" strokeWidth="2.5" />

      {/* Sparkles */}
      <g transform="translate(70, 70) scale(0.6)" stroke="#FDAE00" strokeWidth="2">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </g>
      <g transform="translate(220, 80) scale(0.8)" stroke="#DC0D73" strokeWidth="2">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 3. Office Illustration
  Office: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="65" fill="#FDAE00" fillOpacity="0.05" />
      {/* Office building blocks */}
      <rect x="110" y="50" width="80" height="100" rx="8" stroke="#1F2937" strokeWidth="3.5" fill="#FFFFFF" />
      <line x1="130" y1="75" x2="145" y2="75" stroke="#FDAE00" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="100" x2="145" y2="100" stroke="#FDAE00" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="125" x2="145" y2="125" stroke="#FDAE00" strokeWidth="3" strokeLinecap="round" />
      <line x1="165" y1="75" x2="180" y2="75" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" />
      <line x1="165" y1="100" x2="180" y2="100" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" />
      <line x1="165" y1="125" x2="180" y2="125" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // 4. Deep Cleaning Illustration
  Deep: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="60" fill="#DC0D73" fillOpacity="0.05" />

      {/* Spray bottle & bucket */}
      <rect x="95" y="80" width="55" height="60" rx="8" stroke="#1F2937" strokeWidth="3" fill="#FFFFFF" />
      <path d="M 105,80 L 105,60 C 105,55 110,50 115,50 L 125,50" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
      <path d="M 120,45 L 140,55" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" />

      <circle cx="170" cy="115" r="25" stroke="#1F2937" strokeWidth="3" fill="#FFFFFF" />
      <circle cx="165" cy="110" r="8" fill="#FDAE00" fillOpacity="0.3" stroke="#FDAE00" strokeWidth="1.5" />

      {/* Bubbles */}
      <circle cx="215" cy="75" r="10" fill="#DC0D73" fillOpacity="0.2" stroke="#DC0D73" strokeWidth="1.5" />
      <circle cx="230" cy="100" r="6" fill="#FDAE00" fillOpacity="0.2" stroke="#FDAE00" strokeWidth="1.5" />
    </svg>
  ),

  // 5. Move-In Move-Out Illustration
  Move: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="60" fill="#FDAE00" fillOpacity="0.05" />

      {/* Moving boxes */}
      <rect x="85" y="85" width="60" height="55" rx="6" stroke="#1F2937" strokeWidth="3" fill="#FFFFFF" />
      <path d="M 85,100 L 145,100" stroke="#1F2937" strokeWidth="2.5" />
      <path d="M 115,85 L 115,100" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" />

      <rect x="145" y="95" width="50" height="45" rx="4" stroke="#1F2937" strokeWidth="3" fill="#FFFFFF" />
      <path d="M 145,108 L 195,108" stroke="#1F2937" strokeWidth="2" />

      {/* Sparkle */}
      <g transform="translate(210, 60) scale(0.7)" stroke="#DC0D73" strokeWidth="2">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 6. Carpet Cleaning Illustration
  Carpet: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="60" fill="#DC0D73" fillOpacity="0.05" />

      {/* Vacuum / Carpet extraction */}
      <path d="M 80,140 L 220,140" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />
      <path d="M 90,140 C 90,120 120,110 140,110 L 160,110 C 180,110 210,120 210,140" stroke="#1F2937" strokeWidth="3" fill="#FFFFFF" />

      {/* Machine handle */}
      <path d="M 150,110 L 150,50 L 125,50" stroke="#DC0D73" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="150" cy="50" r="4" fill="#1F2937" />

      {/* Sparkles */}
      <g transform="translate(230, 80) scale(0.6)" stroke="#FDAE00" strokeWidth="2">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // 7. Window Cleaning Illustration
  Window: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="300" height="200" rx="20" fill="#F8F8F8" />
      <circle cx="150" cy="100" r="60" fill="#FDAE00" fillOpacity="0.05" />

      {/* Window pane & squeegee */}
      <rect x="90" y="50" width="120" height="100" rx="8" stroke="#1F2937" strokeWidth="3.5" fill="#FFFFFF" />
      <line x1="150" y1="50" x2="150" y2="150" stroke="#1F2937" strokeWidth="2.5" />
      <line x1="90" y1="100" x2="210" y2="100" stroke="#1F2937" strokeWidth="2.5" />

      {/* Squeegee */}
      <path d="M 125,85 L 175,70" stroke="#DC0D73" strokeWidth="4" strokeLinecap="round" />
      <path d="M 150,78 L 150,110" stroke="#1F2937" strokeWidth="3.5" strokeLinecap="round" />

      {/* Water drops */}
      <circle cx="115" cy="115" r="3" fill="#3b82f6" />
      <circle cx="180" cy="125" r="3.5" fill="#3b82f6" />
    </svg>
  ),

  // 8. About Section Illustration (Trust Shield & Stars)
  About: ({ className = "", ...props }: IllustrationProps) => (
    <svg
      viewBox="0 0 500 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <rect width="500" height="450" rx="32" fill="#F8F8F8" />
      <circle cx="250" cy="225" r="140" fill="#DC0D73" fillOpacity="0.03" />

      {/* Shield outline */}
      <path
        d="M 250,90 C 290,90 340,75 340,75 C 340,75 350,210 250,320 C 150,210 160,75 160,75 C 160,75 210,90 250,90 Z"
        stroke="#1F2937"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />
      {/* Secondary colored inner shield */}
      <path
        d="M 250,110 C 280,110 320,98 320,98 C 320,98 328,200 250,295 C 172,200 180,98 180,98 C 180,98 220,110 250,110 Z"
        fill="#FDAE00"
        fillOpacity="0.1"
      />

      {/* Big spark / star inside shield */}
      <g transform="translate(225, 160) scale(2.0)" stroke="#DC0D73" strokeWidth="2" fill="none">
        <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="#DC0D73" />
      </g>

      {/* Star ratings */}
      <g transform="translate(180, 360) scale(1.4)" fill="#FEB400">
        <g transform="translate(0, 0)">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8" />
        </g>
        <g transform="translate(24, 0)">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8" />
        </g>
        <g transform="translate(48, 0)">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8" />
        </g>
        <g transform="translate(72, 0)">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8" />
        </g>
        <g transform="translate(96, 0)">
          <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8" />
        </g>
      </g>
    </svg>
  ),
};
