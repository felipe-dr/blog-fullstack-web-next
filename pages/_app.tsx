import { AppProps } from "next/app";

import GlobalStyle from "@src/theme/global-style";
import ThemeProvider from "@src/theme/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
