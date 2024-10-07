import type { AppProps } from "next/app";

import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import theme from "../theme";
import "@/styles/global.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { header } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <Layout
        headerProps={header}
      >
        <Component {...pageProps} />
      </Layout>
    </SaasProvider>
  );
}

export default MyApp;