module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        Magenta:'hsl(300, 43%, 22%)',
        pink:'hsl(333, 80%, 67%)',
        greyishMagenta:'hsl(303, 10%, 53%)',
        lgreyishMagenta:'hsl(300, 24%, 96%)',
        white:'hsl(0, 0%, 100%)' 
      },
      backgroundImage:{
        'bgImageTop':"url('/images/bg-pattern-top-desktop.svg ')",
        'bgImageBottom':"url('/images/bg-pattern-bottom-desktop.svg')"
      }
    },
  },
  plugins: [],
}
