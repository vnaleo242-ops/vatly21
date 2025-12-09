tailwind.config = {
    darkMode: 'class', // BẬT DARK MODE BẰNG CLASS
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                tech: ['Rajdhani', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                lab: {
                    // Light Mode (Updated with Purple Theme)
                    bg: '#f5e1fd',      // Main Background (Updated)
                    panel: '#ffffff',   // White panels
                    surface: '#fae8ff', // Lighter purple for surface areas
                    cyan: '#b298d3',    // Primary Brand Color (Updated - Purple)
                    accent: '#ce9cd9',  // Secondary Accent (Updated - Light Purple)

                    success: '#059669', // Emerald 600
                    warning: '#d97706', // Amber 600
                    danger: '#dc2626',  // Red 600
                    text: '#0f172a',    // Slate 900 - Dark text
                    muted: '#64748b',   // Slate 500

                    // Dark Mode specific colors (Kept Original)
                    dark_bg: '#0f172a',    // Slate 900
                    dark_panel: '#1e293b',  // Slate 800
                    dark_surface: '#334155',// Slate 700
                    dark_text: '#f1f5f9',  // Slate 100
                    dark_muted: '#94a3b8'   // Slate 400
                }
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 4s linear infinite',
            },
            keyframes: {
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            }
        }
    }
}
