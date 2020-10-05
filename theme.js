
const theme = {
  useBodyStyles: true,
  colors: {
    primary: '#ADD8EA',
    secondary: '#69876C',

  },
  fonts: {
    body: 'DM Serif',
    heading: 'DM Serif Display',
  },
  styles: {

    root: {
      paddingTop: 64,
      backgroundColor: '#F6F6F6',
      fontFamily: 'body',
      fontWeight: 'body',
    },
    p: {
      fontSize: 20,
      lineHeight: '1.5',
      color: '#1f3551'
    },
    h1: {
      color: '#ADD8EA',
      fontSize: 64,
      lineHeight: 1.2
    },
    h2: {
      color: '#69876C',
      fontSize: 32,
      lineHeight: 1.2
    },
    h3: {
      color: '#1f3551',
      fontSize: 24,
      lineHeight: 1.2
    },


  }
}

console.log(theme)

export default theme