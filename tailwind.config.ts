import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0rem, 15rem)',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },
  },
  plugins: [],
}
export default config
