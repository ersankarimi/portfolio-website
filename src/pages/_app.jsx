import "../styles/globals.css";
import Head from "next/head";

import { RootLayout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Home | Ersan Karimi Portfolio&apos;s</title>
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}
