/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'b7-', //aqui crio um prefixo para eu saber que e do tailwind, porem tera que usar esse profixo sempre q for usar as propriedades do tailwind, nao e tao util.
  content: [
    './p2/**/*.html',//busca por classes tds arquivos html dentro de P2
    './P2/src/**/*.{js,ts,jsx,tsc}'// Busca por classes em arquivos JS/TS na pasta src
  ],
  theme: {
    //container: {
      //center: true,
    //},
    extend: { 
      color: {
        'vermelho': '#ff0000',
        'vermelhoescuro': '#990000'
      },
      Animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)'},
        },
      },
     },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

