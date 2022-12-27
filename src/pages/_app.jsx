import "../styles/globals.css";
import Head from "next/head";

import { RootLayout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Ersan Karimi Portfolio&apos;s</title>
        <link rel="shortcut icon" href="/avatar.svg" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}
