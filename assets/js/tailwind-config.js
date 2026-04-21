tailwind.config = {
    theme: {
        extend: {
            colors: {
                darkBg: '#070B14',
                cardBg: 'rgba(255,255,255,0.06)',
                cardBorder: 'rgba(255,255,255,0.12)',
                primary: '#4F8CFF',
                secondary: '#8B5CF6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}
