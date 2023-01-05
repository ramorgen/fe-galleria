module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // important: true,
  theme: {
    screens:{
      'md':'768px',
      'lg':'1132px',
      'xl':'1440px'
    },
    fontSize: {
      base: '.75rem',
      f13: '.812rem',
      f14: '.875rem',
      f15: '.937rem',
      f16: '1.0rem',
      f17: '1.062rem',
      f18: '1.125rem',
      f19: '1.187rem',
      f20: '1.25rem',
      f21: '1.312rem',
      f22: '1.375rem',
      f23: '1.437rem',
      f24: '1.50rem',
      f26: '1.625rem',
      f28: '1.750rem',
      f30: '1.875rem',
    },
    extend: {
      fontFamily: {
         'baskerville':'Libre Baskerville'
      },
      colors:{
        gray: '#7d7d7d',
        light_gray: '#f3f3f3'
      }
    },
  },
  plugins: [
    //  require('@tailwindcss/forms')({
    //    strategy: 'base', // only generate global styles
    //  }),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ]
}
