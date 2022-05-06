module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['Vazir', 'sans-serif'],
      display: ['Vazir', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'samad': {
          'primary': '#ffc107',
          'primary-focus': '#ffc107',
          'primary-content': '#ffffff',

          'secondary': '#5513AD',
          'secondary-focus': '#410B88',
          'secondary-content': '#ffffff',

          'accent': '#0F63A4',
          'accent-focus': '#084C81',
          'accent-content': '#ffffff',

          'neutral': '#888888',
          'neutral-focus': '#0A0A1A',
          'neutral-content': '#ffffff',

          'base-100': '#0A0A1A',
          'base-300': '#191923',
          'base-200': '#111120',
          'base-content': '#ffffff',

          'info': '#66c7ff',
          'success': '#87cf3a',
          'warning': '#e1d460',
          'error': '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px',
        },
      }
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    darkTheme: "dark",
  },
}
