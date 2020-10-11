import { useRouter } from "next/router";
import { ThemeProvider } from "theme-ui";
import theme from "../theme.js";
import Layout from "../src/components/Layout";
import ChapitreLayout from "../src/components/ChapitreLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      {pathname.includes("lire/") ? (
        <Layout>
          <ChapitreLayout>
            <Component {...pageProps} />
          </ChapitreLayout>
        </Layout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
