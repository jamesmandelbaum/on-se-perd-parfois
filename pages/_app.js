import { ThemeProvider } from 'theme-ui'
import theme from '../theme.js'
import Layout from '../src/components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
  </ThemeProvider>
  )
}

export default MyApp
