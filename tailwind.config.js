module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxl: {max: '1919px'},
      lg: {max: '1199px'},
      xl: {max: '1439px'},
      md: {max: '991px'},
      sm: {max: '768px'},
      xs: {max: '359px'}
    },
    fontFamily: {
      'primary': '\'Montserrat\', sans-serif',
      'secondary': '\'Poppins\', sans-serif',
    },
    fontSize: {
      h1: ['48px', {
        lineHeight: '56px',
        letterSpacing: '0.03em',
      }],
      h2: ['40px', {
        lineHeight: '48px',
        letterSpacing: '0.03em',
      }],
      h3: ['36px', {
        lineHeight: '44px',
        letterSpacing: '0.03em',
      }],
      h4: ['32px', {
        lineHeight: '40px',
        letterSpacing: '0.03em',
      }],
      h5: ['28px', {
        lineHeight: '36px',
        letterSpacing: '0.03em',
      }],
      h6: ['24px', {
        lineHeight: '32px',
        letterSpacing: '0.03em',
      }],
      s1: ['20px', {
        lineHeight: '28px',
        letterSpacing: '0.06em',
      }],
      s2: ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.06em',
      }],
      body1: ['20px', {
        lineHeight: '28px',
        letterSpacing: '0.03em',
      }],
      body2: ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.03em',
      }],
      body3: ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.03em',
      }],
      caption: ['12px', {
        lineHeight: '16px',
        letterSpacing: '0.03em',
      }]
    },
    extend: {
      colors: {
        'neon-blue': 'rgb(35,0,137)',
        'electric-ultramarine': 'rgb(66,0,255)',
        'very-light-azure': 'rgb(122,189,243)',
        'raisin-black': 'rgb(35,35,35)',
        'granite-gray': 'rgb(98,98,98)',
        'philippine-silver': 'rgb(177,177,177)',
        'cultured': 'rgb(248,248,248)',
        'white': 'rgb(255,255,255)',
        'inter-blue': 'rgb(57,0,219)',
        'bright-lavender': 'rgb(171,143,251)',
        'water': 'rgb(223,241,255)',
        'baker-miller-pink': 'rgb(255,143,180)',
        'waterspout': 'rgb(155,255,255)',

        'modal-overlay': 'rgba(35, 35, 35, 0.5)'
      },
      borderRadius: {
        'section': '60px'
      },
      backgroundImage: {
        'gradient-1': 'radial-gradient(127.43% 2263.05% at 0% 0%, #DFF1FF 0%, #FFFFFF 52.6%, #AB8FFB 100%)',
        'gradient-2': 'linear-gradient(90.05deg, #AB8FFB 17.02%, #230089 75.51%)',
        'gradient-3': 'radial-gradient(110.97% 359.55% at 101.01% 12.12%, #7ABDF3 0%, rgba(0, 99, 216, 0.8) 50.52%, #3900DB 100%)',

        'hero-left-shape': "url('../assets/hero/left.png')",
      },
      spacing: {
        '72': '4.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '42': '10.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'menu': 'height, background-color',
      }
    },
  },
  plugins: [],
}
