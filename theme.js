import { system } from '@theme-ui/presets'

const theme = {
  ...system,
  fonts: {
    body: 'DM Serif',
    heading: 'DM Serif Display',
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '80%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...system.styles,
    p: {
      fontSize: 20,
      color: '#1f3551'
    },
    h1: {
      color: '#477fc6',
      fontSize: 64
    }

  }
}


export default theme